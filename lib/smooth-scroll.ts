/* rAF smooth scroll; cancels on user input */

let frame = 0;
let cleanup: (() => void) | null = null;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function cancelScroll() {
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
  if (cleanup) {
    cleanup();
    cleanup = null;
  }
  document
    .querySelectorAll("style[data-smooth-scroll-lock]")
    .forEach((n) => n.remove());
}

function startScroll(el: HTMLElement, offset: number, duration: number) {
  cancelScroll();

  const startY = window.scrollY;
  const targetY = Math.min(
    Math.max(el.getBoundingClientRect().top + startY - offset, 0),
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return;

  const lock = document.createElement("style");
  lock.setAttribute("data-smooth-scroll-lock", "true");
  lock.textContent = "html{scroll-behavior:auto !important}";
  document.head.appendChild(lock);

  let cancelled = false;
  const onInterrupt = () => {
    cancelled = true;
    cancelScroll();
  };
  const events: [string, EventListener][] = [
    ["wheel", onInterrupt],
    ["touchstart", onInterrupt],
  ];
  events.forEach(([e, fn]) => window.addEventListener(e, fn, { passive: true }));
  cleanup = () =>
    events.forEach(([e, fn]) => window.removeEventListener(e, fn));

  const t0 = performance.now();
  const step = (now: number) => {
    if (cancelled) return;
    const t = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, startY + delta * easeInOutCubic(t));
    if (t < 1) {
      frame = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      cancelScroll();
    }
  };
  frame = requestAnimationFrame(step);
}

export function scrollToElement(
  target: string | HTMLElement,
  opts: { offset?: number; duration?: number } = {},
) {
  const el =
    typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;

  const { offset = 72, duration } = opts;
  const ms = duration ?? (prefersReducedMotion() ? 260 : 860);
  startScroll(el, offset, ms);
}

/** hook wrapper */
export function useScrollTo() {
  return scrollToElement;
}
