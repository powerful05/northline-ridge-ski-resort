import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = gsap.utils.toArray<HTMLElement>('[data-animate="reveal"]');

  if (reduceMotion) {
    gsap.set('[data-animate], .descent-track', { autoAlpha: 1, clearProps: 'transform' });
    return;
  }

  gsap.defaults({ ease: 'power3.out', duration: 0.9 });

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('[data-animate="hero-media"]', { scale: 1.12, autoAlpha: 0, duration: 1.4 })
    .from('[data-animate="nav"]', { y: -24, autoAlpha: 0, duration: 0.7 }, '<0.2')
    .from('[data-animate="hero-kicker"]', { y: 24, autoAlpha: 0, duration: 0.6 }, '<0.2')
    .from('[data-animate="hero-title"]', { y: 70, autoAlpha: 0, duration: 0.9 }, '<0.1')
    .from('[data-animate="hero-copy"]', { y: 26, autoAlpha: 0, duration: 0.7 }, '<0.25')
    .from('[data-animate="hero-actions"]', { y: 20, autoAlpha: 0, duration: 0.6 }, '<0.2')
    .from('[data-animate="hero-stats"] span', { y: 18, autoAlpha: 0, stagger: 0.12, duration: 0.55 }, '<0.1');

  gsap.to('[data-animate="hero-media"]', {
    scale: 1.22,
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  revealItems.forEach((item) => {
    gsap.from(item, {
      y: 44,
      autoAlpha: 0,
      duration: 0.85,
      scrollTrigger: {
        trigger: item,
        start: 'top 84%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  const panels = gsap.utils.toArray<HTMLElement>('.descent-panel');
  gsap.to('[data-animate="descent-track"]', {
    x: () => -(Math.max(0, panels.length - 1) * window.innerWidth * 0.72),
    ease: 'none',
    scrollTrigger: {
      trigger: '.descent',
      start: 'top top',
      end: '+=1800',
      scrub: 1,
      pin: '.descent-pin',
      invalidateOnRefresh: true,
    },
  });

  ScrollTrigger.refresh();
}
