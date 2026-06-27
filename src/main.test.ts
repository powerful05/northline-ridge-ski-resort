import { describe, expect, test, vi } from 'vitest';
import { renderApp } from './main';

vi.mock('./animations', () => ({
  initAnimations: vi.fn(),
}));

describe('ski resort homepage', () => {
  test('renders the cinematic resort sections and animation hooks', async () => {
    document.body.innerHTML = '<div id="app"></div>';
    const { initAnimations } = await import('./animations');

    renderApp();

    expect(document.querySelector('[data-animate="hero-title"]')?.textContent).toContain('Northline Ridge');
    expect(document.querySelector('[data-section="story"]')).not.toBeNull();
    expect(document.querySelector('[data-section="descent"]')).not.toBeNull();
    expect(document.querySelector('[data-section="resort"]')).not.toBeNull();
    expect(document.querySelector('[data-section="booking"]')).not.toBeNull();
    expect(document.querySelectorAll('[data-animate="reveal"]').length).toBeGreaterThanOrEqual(6);
    expect(initAnimations).toHaveBeenCalledOnce();
  });

  test('includes practical booking controls and reduced motion ready copy', () => {
    document.body.innerHTML = '<div id="app"></div>';

    renderApp();

    expect(document.querySelector('[data-booking="dates"]')?.textContent).toContain('12月');
    expect(document.querySelector('[data-booking="pass"]')?.textContent).toContain('全山通票');
    expect(document.querySelector('[data-booking="lodging"]')?.textContent).toContain('雪线木屋');
    expect(document.body.textContent).toContain('减少动态效果');
  });

  test('uses real route photography for the scroll descent panels', () => {
    document.body.innerHTML = '<div id="app"></div>';

    renderApp();

    const panels = Array.from(document.querySelectorAll<HTMLElement>('.descent-panel'));

    expect(panels).toHaveLength(3);
    const imageUrls = panels.map((panel) => panel.style.getPropertyValue('--panel-image'));

    expect(imageUrls[0]).toContain('descent-summit-dawn.png');
    expect(imageUrls[1]).toContain('descent-black-pine.png');
    expect(imageUrls[2]).toContain('descent-night-line.png');
  });

  test('uses real resort photography for the system cards', () => {
    document.body.innerHTML = '<div id="app"></div>';

    renderApp();

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.resort-item'));
    const imageUrls = cards.map((card) => card.style.getPropertyValue('--item-image'));

    expect(cards).toHaveLength(4);
    expect(imageUrls[0]).toContain('resort-trail-wind-gate.png');
    expect(imageUrls[1]).toContain('resort-snowline-chalet.png');
    expect(imageUrls[2]).toContain('resort-dawn-lift.png');
    expect(imageUrls[3]).toContain('resort-snow-guide.png');
  });
});
