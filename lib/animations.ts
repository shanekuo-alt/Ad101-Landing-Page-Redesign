import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-in + translate-up reveal for elements entering the viewport.
 */
export function createScrollReveal(
  element: HTMLElement | string,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
  }
) {
  const { y = 40, duration = 0.8, delay = 0, start = "top 85%" } =
    options || {};

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Staggered reveal for a group of child elements.
 */
export function createStaggerReveal(
  parent: HTMLElement | string,
  children: string,
  options?: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  }
) {
  const {
    y = 30,
    stagger = 0.15,
    duration = 0.7,
    start = "top 80%",
  } = options || {};

  return gsap.fromTo(
    typeof parent === "string"
      ? `${parent} ${children}`
      : parent.querySelectorAll(children),
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}
