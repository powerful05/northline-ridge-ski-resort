import './styles.css';
import { initAnimations } from './animations';

export function renderApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <header class="site-nav" data-animate="nav">
      <a class="brand" href="#hero" aria-label="Northline Ridge 首页">
        <span class="brand-mark"></span>
        <span>Northline Ridge</span>
      </a>
      <nav aria-label="主导航">
        <a href="#terrain">雪道</a>
        <a href="#stay">住宿</a>
        <a href="#passes">票务</a>
        <a href="#booking">预约</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero" aria-labelledby="hero-title">
        <div class="hero-media" data-animate="hero-media"></div>
        <div class="snow-field" aria-hidden="true"></div>
        <div class="hero-vignette" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="kicker" data-animate="hero-kicker">Polar season opens 12.06</p>
          <h1 id="hero-title" data-animate="hero-title">Northline Ridge</h1>
          <p class="hero-copy" data-animate="hero-copy">在接近极夜的山脊上醒来。滑过未压实粉雪、黑松林和黎明前的冷蓝色坡面。</p>
          <div class="hero-actions" data-animate="hero-actions">
            <a class="button primary" href="#booking">预订雪季</a>
            <a class="button ghost" href="#descent">观看雪道</a>
          </div>
        </div>
        <aside class="hero-stats" aria-label="雪场数据" data-animate="hero-stats">
          <span><strong>42</strong>条雪道</span>
          <span><strong>1,940m</strong>垂直落差</span>
          <span><strong>06:20</strong>第一班缆车</span>
        </aside>
        <p class="motion-note">支持减少动态效果设置</p>
      </section>

      <section class="story section-band" data-section="story" id="terrain">
        <div class="section-label" data-animate="reveal">Mountain signal</div>
        <h2 data-animate="reveal">不是普通雪场，是一段进入寒区的电影开场。</h2>
        <p data-animate="reveal">Northline Ridge 位于海拔 2,860 米的北坡山脊。清晨雾面、夜滑灯线、林间粉雪和高山缆车形成连续的滑行镜头。</p>
        <div class="terrain-grid">
          <div data-animate="reveal"><strong>58%</strong><span>高级与专家线</span></div>
          <div data-animate="reveal"><strong>17km</strong><span>最长连续下滑</span></div>
          <div data-animate="reveal"><strong>9</strong><span>高山救援与向导站</span></div>
        </div>
      </section>

      <section id="descent" class="descent" data-section="descent" aria-labelledby="descent-title">
        <div class="descent-pin">
          <div class="descent-heading">
            <p class="section-label">Scroll descent</p>
            <h2 id="descent-title">从山脊到灯线，一次滚动完成整段下滑。</h2>
          </div>
          <div class="descent-track" data-animate="descent-track">
            <article class="descent-panel summit">
              <span>01 / Summit</span>
              <h3>破晓山顶</h3>
              <p>雪面还未被切开，向导在风口确认第一条线路。</p>
            </article>
            <article class="descent-panel forest">
              <span>02 / Black pine</span>
              <h3>黑松林穿越</h3>
              <p>林线遮住横风，粉雪在转弯后扬成银色尾流。</p>
            </article>
            <article class="descent-panel night">
              <span>03 / Night line</span>
              <h3>夜滑灯带</h3>
              <p>灯光沿坡面拉成橙色信号，最后一班缆车仍在运行。</p>
            </article>
          </div>
        </div>
      </section>

      <section class="resort section-band" data-section="resort" id="stay">
        <div class="section-heading">
          <p class="section-label" data-animate="reveal">Resort system</p>
          <h2 data-animate="reveal">雪道、木屋、缆车和向导被设计成同一个体验。</h2>
        </div>
        <div class="resort-grid">
          <article class="resort-item" data-animate="reveal">
            <span>Trail</span>
            <h3>极地风口线</h3>
            <p>适合高级滑手的开放山脊，天气窗口由巡山队实时开放。</p>
          </article>
          <article class="resort-item" data-animate="reveal">
            <span>Chalet</span>
            <h3>雪线木屋</h3>
            <p>每间房面向北坡，提供烘干室、热石浴和清晨缆车接驳。</p>
          </article>
          <article class="resort-item" data-animate="reveal">
            <span>Lift</span>
            <h3>黎明缆车</h3>
            <p>首班 06:20，直达山脊观景台，避开常规游客时段。</p>
          </article>
          <article class="resort-item" data-animate="reveal">
            <span>Guide</span>
            <h3>风雪向导</h3>
            <p>小队制带滑，根据雪况选择粉雪、林间或夜滑线路。</p>
          </article>
        </div>
      </section>

      <section id="booking" class="booking" data-section="booking">
        <div>
          <p class="section-label" data-animate="reveal">Reserve the cold</p>
          <h2 data-animate="reveal">把 12 月的第一场山脊粉雪留给你。</h2>
        </div>
        <div class="booking-panel" id="passes" data-animate="reveal" aria-label="预订信息">
          <div data-booking="dates"><span>雪季窗口</span><strong>12月06日 - 04月12日</strong></div>
          <div data-booking="pass"><span>推荐票种</span><strong>全山通票 + 黎明缆车</strong></div>
          <div data-booking="lodging"><span>住宿组合</span><strong>雪线木屋 3 晚</strong></div>
          <a class="button primary" href="mailto:booking@northlineridge.example">发送预约</a>
        </div>
      </section>
    </main>
  `;

  initAnimations();
}

renderApp();
