"use client";

import { useSyncExternalStore } from "react";
import { identity } from "../../content/site";

/* Hora local de Girona, actualitzada cada mig minut. El servidor no la
   coneix: hi posa guions i el client la completa en hidratar-se. */

const format = new Intl.DateTimeFormat("ca-ES", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: identity.timeZone,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--"
  );

  return <time suppressHydrationWarning>{time}</time>;
}
