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
});
