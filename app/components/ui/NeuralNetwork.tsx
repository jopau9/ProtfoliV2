"use client";

import { useEffect, useRef } from "react";

/**
 * Xarxa neuronal abstracta per a la portada. Capes de nodes en forma de
 * lent; cada node es connecta només amb els més propers de la capa següent,
 * amb corbes suaus, de manera que les connexions flueixen sense creuar-se.
 * De tant en tant, un impuls ambre la travessa d'entrada a sortida i encén
 * els nodes per on passa. Els nodes propers al punter s'encenen suaument.
 *
 * Dibuixada en <canvas>: s'anima només mentre és visible, llegeix els
 * colors del tema actiu i, amb menys moviment, es queda en un fotograma fix.
 */

// Nodes per capa, d'esquerra a dreta.
const LAYERS = [3, 5, 7, 5, 3];
// Connexions de cada node cap a la capa següent (les més properes en vertical).
const NEIGHBOURS = 2;
// Separació vertical màxima entre nodes d'una capa, en píxels.
const MAX_SPACING = 72;
// Alçada del centre de la xarxa, com a fracció del llenç.
const CENTER_Y = 0.55;
const NODE_RADIUS = 3;
// Impulsos simultanis, interval entre impulsos nous i velocitat, en segons.
const MAX_PULSES = 5;
const SPAWN_EVERY = [1.1, 1.8] as const;
// Velocitat en connexions per segon; constant durant tot el recorregut.
const PULSE_SPEED = [0.55, 0.75] as const;
// Llargada de la cua, en fraccions de connexió.
const TAIL = 0.5;
const POINTER_RADIUS = 110;

type NetNode = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  phase: number;
  activation: number;
};
type Edge = { from: number; to: number };
/**
 * Impuls que travessa la xarxa sencera. `path` són les connexions d'entrada
 * a sortida; `progress` avança en unitats de connexió (1 = una connexió
 * completa), de manera que la cua continua d'una connexió a la següent.
 */
type Pulse = { path: number[]; progress: number; speed: number; lit: number };
type Palette = { accent: string; line: string; node: string; canvas: string };

/** Pseudoaleatori determinista, per a la fase de cada node. */
function seeded(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function between([min, max]: readonly [number, number]) {
  return min + Math.random() * (max - min);
}

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const read = (name: string) => style.getPropertyValue(name).trim();
  return {
    accent: read("--color-accent"),
    line: read("--color-line-strong"),
    node: read("--color-faint"),
    canvas: read("--color-canvas"),
  };
}

export default function NeuralNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let palette = readPalette();
    let width = 0;
    let height = 0;
    let nodes: NetNode[] = [];
    let edges: Edge[] = [];
    let outgoing: number[][] = [];
    const firstLayer: number[] = [];
    const pulses: Pulse[] = [];
    const pointer = { x: -1e4, y: -1e4 };

    function build() {
      nodes = [];
      edges = [];
      firstLayer.length = 0;
      const padX = width * 0.12;
      const largest = Math.max(...LAYERS);
      const spacing = Math.min(MAX_SPACING, (height * 0.7) / (largest - 1));
      const layers: number[][] = [];

      // Capes equidistants; dins de cada capa, nodes centrats amb la mateixa separació.
      LAYERS.forEach((count, layer) => {
        const x = padX + (layer / (LAYERS.length - 1)) * (width - padX * 2);
        const indices: number[] = [];
        for (let i = 0; i < count; i++) {
          const y = height * CENTER_Y + (i - (count - 1) / 2) * spacing;
          indices.push(nodes.length);
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            phase: seeded(layer * 13 + i * 3) * Math.PI * 2,
            activation: 0,
          });
        }
        layers.push(indices);
      });
      firstLayer.push(...layers[0]);

      // Connexions locals: cada node, amb els més propers de la capa següent.
      outgoing = nodes.map(() => []);
      const connect = (from: number, to: number) => {
        outgoing[from].push(edges.length);
        edges.push({ from, to });
      };
      const byDistance = (y: number) => (a: number, b: number) =>
        Math.abs(nodes[a].baseY - y) - Math.abs(nodes[b].baseY - y);

      for (let layer = 0; layer < layers.length - 1; layer++) {
        const current = layers[layer];
        const next = layers[layer + 1];
        const reached = new Set<number>();

        for (const from of current) {
          const nearest = [...next].sort(byDistance(nodes[from].baseY)).slice(0, NEIGHBOURS);
          for (const to of nearest) {
            connect(from, to);
            reached.add(to);
          }
        }
        // Cap node sense entrada: el connectem amb el més proper de la capa anterior.
        for (const to of next) {
          if (!reached.has(to)) connect([...current].sort(byDistance(nodes[to].baseY))[0], to);
        }
      }
    }

    /** Punt d'una connexió corba (Bézier cúbica horitzontal) a la fracció `t`. */
    function pointOn(edge: Edge, t: number): [number, number] {
      const a = nodes[edge.from];
      const b = nodes[edge.to];
      const bend = (b.x - a.x) * 0.5;
      const mt = 1 - t;
      const x =
        mt * mt * mt * a.x +
        3 * mt * mt * t * (a.x + bend) +
        3 * mt * t * t * (b.x - bend) +
        t * t * t * b.x;
      const y = mt * mt * mt * a.y + 3 * mt * mt * t * a.y + 3 * mt * t * t * b.y + t * t * t * b.y;
      return [x, y];
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduced) drawStill();
    }

    /** Llança un impuls des d'un node d'entrada amb un camí aleatori fins a la sortida. */
    function spawn(start: number) {
      const path: number[] = [];
      let index = start;
      while (outgoing[index].length) {
        const outs = outgoing[index];
        const edge = outs[Math.floor(Math.random() * outs.length)];
        path.push(edge);
        index = edges[edge].to;
      }
      nodes[start].activation = 1;
      pulses.push({ path, progress: 0, speed: between(PULSE_SPEED), lit: 0 });
    }

    /** Punt del camí d'un impuls a la posició `u` (en unitats de connexió). */
    function pointOnPath(path: number[], u: number): [number, number] {
      const i = Math.min(Math.floor(u), path.length - 1);
      return pointOn(edges[path[i]], u - i);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.lineCap = "round";

      // Connexions en repòs: corbes fines
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = palette.line;
      ctx!.globalAlpha = 0.7;
      ctx!.beginPath();
      for (const edge of edges) {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const bend = (b.x - a.x) * 0.5;
        ctx!.moveTo(a.x, a.y);
        ctx!.bezierCurveTo(a.x + bend, a.y, b.x - bend, b.y, b.x, b.y);
      }
      ctx!.stroke();

      // Impulsos: un estel ambre que segueix el camí. La cua s'esvaeix cap
      // enrere i, en arribar a la sortida, es recull fins a desaparèixer.
      ctx!.strokeStyle = palette.accent;
      ctx!.fillStyle = palette.accent;
      ctx!.lineWidth = 1.5;
      const steps = 18;
      for (const pulse of pulses) {
        const end = pulse.path.length;
        const head = Math.min(pulse.progress, end);
        const tail = Math.max(0, pulse.progress - TAIL);
        if (head <= tail) continue;

        let [px, py] = pointOnPath(pulse.path, tail);
        for (let s = 1; s <= steps; s++) {
          const [x, y] = pointOnPath(pulse.path, tail + ((head - tail) * s) / steps);
          ctx!.globalAlpha = 0.9 * (s / steps);
          ctx!.beginPath();
          ctx!.moveTo(px, py);
          ctx!.lineTo(x, y);
          ctx!.stroke();
          px = x;
          py = y;
        }

        // El cap s'apaga mentre la cua es recull al final del camí.
        const fade = 1 - Math.min(1, Math.max(0, pulse.progress - end) / TAIL);
        ctx!.globalAlpha = fade;
        ctx!.beginPath();
        ctx!.arc(px, py, 2, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.lineWidth = 1;

      // Nodes: anell fi en repòs; omplerts i amb halo quan s'activen
      for (const node of nodes) {
        ctx!.globalAlpha = 1;
        ctx!.fillStyle = palette.canvas;
        ctx!.strokeStyle = palette.node;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();

        if (node.activation > 0.01) {
          ctx!.fillStyle = palette.accent;
          ctx!.globalAlpha = node.activation * 0.18;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, NODE_RADIUS + node.activation * 8, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.globalAlpha = node.activation;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;
    }

    /** Fotograma fix per a menys moviment: un camí encès d'entrada a sortida. */
    function drawStill() {
      for (const node of nodes) node.activation = 0;
      let index: number | undefined = firstLayer[Math.floor(firstLayer.length / 2)];
      while (index !== undefined) {
        nodes[index].activation = 0.85;
        const outs: number[] = outgoing[index];
        index = outs.length ? edges[outs[0]].to : undefined;
      }
      draw();
    }

    // --- Bucle d'animació, només mentre la xarxa és visible ---
    let raf = 0;
    let last = 0;
    let spawnIn = 0.4;
    let visible = false;

    function frame(now: number) {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      const time = now / 1000;

      for (const node of nodes) {
        // Deriva gairebé imperceptible: la xarxa respira, no es mou.
        node.x = node.baseX + Math.sin(time * 0.35 + node.phase) * 1.2;
        node.y = node.baseY + Math.cos(time * 0.3 + node.phase) * 1.2;
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (distance < POINTER_RADIUS) {
          node.activation = Math.max(node.activation, (1 - distance / POINTER_RADIUS) * 0.5);
        }
        node.activation = Math.max(0, node.activation - dt * 0.9);
      }

      spawnIn -= dt;
      if (spawnIn <= 0 && pulses.length < MAX_PULSES) {
        spawnIn = between(SPAWN_EVERY);
        spawn(firstLayer[Math.floor(Math.random() * firstLayer.length)]);
      }

      // Avanç a velocitat constant; cada node s'encén quan el cap hi arriba.
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.progress += dt * pulse.speed;
        const reached = Math.min(Math.floor(pulse.progress), pulse.path.length);
        while (pulse.lit < reached) {
          nodes[edges[pulse.path[pulse.lit]].to].activation = 1;
          pulse.lit++;
        }
        if (pulse.progress - TAIL >= pulse.path.length) pulses.splice(k, 1);
      }

      draw();
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (reduced || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    // --- Observadors ---
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    visibility.observe(canvas);

    const onVisibilityChange = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Canvi de tema: atribut `data-theme` o preferència del sistema.
    const onTheme = () => {
      palette = readPalette();
      if (reduced) draw();
    };
    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const media = window.matchMedia("(prefers-color-scheme: light)");
    media.addEventListener("change", onTheme);

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      themeObserver.disconnect();
      media.removeEventListener("change", onTheme);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
