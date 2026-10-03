"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-up reveal animation on scroll
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, []);

  return ref;
}

/**
 * Stagger children reveal
 */
export function useStaggerReveal<T extends HTMLElement>(
  stagger = 0.1,
  selector = ":scope > *"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const children = el.querySelectorAll(selector);

    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, [stagger, selector]);

  return ref;
}

/**
 * Image reveal with clip-path
 */
export function useImageReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0 0 0)", opacity: 0 },
      {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, []);

  return ref;
}

/**
 * Counter animation for statistics
 */
export function useCounter<T extends HTMLElement>(
  endValue: number,
  suffix = ""
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.textContent = `${endValue}${suffix}`;
      return;
    }

    const counter = { value: 0 };

    gsap.to(counter, {
      value: endValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, [endValue, suffix]);

  return ref;
}

/**
 * Parallax effect (subtle)
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.to(el, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, [speed]);

  return ref;
}

/**
 * Horizontal scroll reveal
 */
export function useSlideIn<T extends HTMLElement>(
  direction: "left" | "right" = "left"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const x = direction === "left" ? -60 : 60;

    gsap.fromTo(
      el,
      { opacity: 0, x },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill();
      });
    };
  }, [direction]);

  return ref;
}

/**
 * Text split and reveal (line by line)
 */
export function useTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const setupAnimation = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lines = container.querySelectorAll(".reveal-line");
    if (lines.length === 0) return;

    gsap.fromTo(
      lines,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    setupAnimation();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) trigger.kill();
      });
    };
  }, [setupAnimation]);

  return containerRef;
}
