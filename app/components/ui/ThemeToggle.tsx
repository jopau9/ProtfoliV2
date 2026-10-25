"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "./themeScript";

type Theme = "light" | "dark";

/* ------------------------------------------------------------------
 * El tema efectiu surt de dues fonts: la tria explícita (atribut
 * `data-theme` a <html>, persistida a localStorage) o, si no n'hi ha,
 * la preferència del sistema. L'script inline del layout aplica la tria
 * abans del primer pintat, així no hi ha parpelleig.
 * ------------------------------------------------------------------ */

const MEDIA = "(prefers-color-scheme: light)";
const listeners = new Set<() => void>();

function systemTheme(): Theme {
  return window.matchMedia(MEDIA).matches ? "light" : "dark";
}

function getSnapshot(): Theme {
  const explicit = document.documentElement.getAttribute("data-theme");
  return explicit === "light" || explicit === "dark" ? explicit : systemTheme();
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const media = window.matchMedia(MEDIA);
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onChange);
  };
}

function setTheme(next: Theme) {
  const root = document.documentElement;
  // Si la tria coincideix amb el sistema, s'esborra: el lloc torna a seguir-lo.
  const followsSystem = next === systemTheme();
  try {
    if (followsSystem) window.localStorage.removeItem(THEME_STORAGE_KEY);
    else window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Sense storage, el canvi val igualment per a aquesta sessió.
  }
  if (followsSystem) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", next);
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={next === "light" ? "Light mode" : "Dark mode"}
      className={`h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-line-strong hover:text-ink ${className || "flex"}`}
    >
      {theme === "dark" ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
    </button>
  );
}
