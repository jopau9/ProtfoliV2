"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Locale = "ca" | "es" | "en";

/** Qualsevol contingut traduïble. `L<string>` per a text, però serveix per a arrays i objectes. */
export type L<T = string> = Record<Locale, T>;

export const LOCALES: Locale[] = ["ca", "es", "en"];

const STORAGE_KEY = "jp-locale";
const DEFAULT_LOCALE: Locale = "ca";
/** Per a navegadors en un idioma que no oferim (francès, alemany...). */
const FALLBACK_LOCALE: Locale = "en";

/* ------------------------------------------------------------------
 * Store extern mínim.
 * La preferència viu a localStorage, fora de React: el servidor sempre
 * renderitza en català i el client s'hi sincronitza en hidratar-se,
 * que és justament el cas d'ús de `useSyncExternalStore`.
 * Sense tria desada, s'agafa l'idioma del navegador.
 * ------------------------------------------------------------------ */

let cached: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

function isLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Primer idioma preferit del navegador que oferim, mirant només el codi base ("ca-ES" → "ca"). */
function detectBrowserLocale(): Locale {
  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of preferred) {
    const base = tag?.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return FALLBACK_LOCALE;
}

function readStorage(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Mode privat o storage bloquejat: es fa servir l'idioma del navegador.
  }
  return detectBrowserLocale();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Manté sincronitzades les pestanyes obertes.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cached = readStorage();
      listeners.forEach((listener) => listener());
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Ha de retornar un valor estable entre crides o React entra en bucle. */
function getSnapshot(): Locale {
  const current = readStorage();
  if (current !== cached) cached = current;
  return cached;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function writeLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Si no es pot persistir, el canvi val igualment per a aquesta sessió.
  }
  cached = next;
  listeners.forEach((listener) => listener());
}

/* ------------------------------------------------------------------ */

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Resol un valor traduïble a l'idioma actiu. */
  t: <T,>(value: L<T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Mantenir `lang` correcte importa per a lectors de pantalla i partició de mots.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => writeLocale(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: <T,>(entry: L<T>) => entry[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage s'ha d'usar dins de <LanguageProvider>");
  }
  return ctx;
}

/** Drecera per al cas més comú: només cal traduir. */
export function useT() {
  return useLanguage().t;
}
