import './style.css'

const faqItems = [
  {
    question: 'What is the mini app?',
    answer:
      'A Telegram-native assistant that organizes voice notes, summaries, and follow-up actions so you can move faster without leaving chat.'
  },
  {
    question: 'Why register on the web?',
    answer:
      'Create your workspace, verify your email, and connect your Telegram account for a smoother onboarding and better security controls.'
  },
  {
    question: 'How do I connect to Telegram?',
    answer:
      'After you submit the form, we send a secure deep link to start the bot. Log in and the mini app will sync automatically.'
  }
]

const renderFAQ = () =>
  faqItems
    .map(
      (item, idx) => `
        <div class="acc-item${idx === 0 ? ' open' : ''}">
          <button class="acc-head" type="button" data-idx="${idx}">
            <h4>${item.question}</h4>
            <span>${idx === 0 ? '−' : '+'}</span>
          </button>
          <div class="acc-body">${item.answer}</div>
        </div>
      `
    )
    .join('')

document.querySelector('#app').innerHTML = `
  <main class="wrap">
    <header class="hero">
      <span class="pill">Telegram Mini App</span>
      <h1 class="hero-title">
        The fastest way to ship ideas in chat
        <span class="gradient-text">— now with a landing page</span>
      </h1>
      <p class="hero-muted">
        Spin up projects, capture voice notes, and dispatch tasks directly from Telegram. Register on the web to secure your workspace, then launch the mini app with one tap.
      </p>
      <div class="hero-actions">
        <button class="btn">Register for early access</button>
        <button class="btn secondary">View product overview</button>
      </div>
    </header>

    <section class="section">
      <div class="three-grid">
        <div class="tile">
          <div>
            <h2>Glassmorphism shell</h2>
            <p>Gradient blues, crisp strokes, and soft shadows mirror the mini app UI.</p>
          </div>
        </div>
        <div class="tile">
          <div>
            <h2>Actionable cards</h2>
            <p>Reusable cards, tiles, accordions, and chips to frame your story.</p>
          </div>
        </div>
        <div class="tile">
          <div>
            <h2>Responsive grid</h2>
            <p>Adaptive layout that scales from mobile onboarding to desktop preview.</p>
          </div>
        </div>
        <div class="tile">
          <div>
            <h2>Safe onboarding</h2>
            <p>Guided registration that hands off to Telegram via secure deep links.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <h3>Product overview</h3>
          <span class="hint">Built to reflect the in-app experience</span>
        </div>
        <p class="section-subtitle">Use this page as your public front door while preserving the look and feel of your Telegram mini app.</p>
        <ul class="list">
          <li><strong>AI-first intake</strong> — capture voice notes and convert them into tasks automatically.</li>
          <li><strong>Team-ready</strong> — invite teammates via Telegram and keep updates flowing inside chat.</li>
          <li><strong>Secure handoff</strong> — registration collects only what you need before redirecting to the bot.</li>
        </ul>
        <div class="stats">
          <div class="stat"><h4>Avg. response</h4><div class="value">12s</div></div>
          <div class="stat"><h4>Tasks created</h4><div class="value">+340%</div></div>
          <div class="stat"><h4>Sync uptime</h4><div class="value">99.9%</div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <h3>How it works</h3>
          <span class="hint">From web sign-up to Telegram launch</span>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <h4>Create your workspace</h4>
            <p>Share your email and the Telegram handle you want to pair.</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h4>Confirm ownership</h4>
            <p>Check your inbox for a confirmation and a secure deep link.</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h4>Launch the mini app</h4>
            <p>Tap the link to open Telegram and start working inside chat.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <h3>Register your workspace</h3>
          <span class="hint">We only collect what the mini app needs</span>
        </div>
        <form>
          <div>
            <label for="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="Olivia Carter" />
          </div>
          <div>
            <label for="email">Work email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label for="handle">Telegram handle</label>
            <input id="handle" name="handle" type="text" placeholder="@username" />
          </div>
          <div>
            <label for="team-size">Team size</label>
            <select id="team-size" name="team-size">
              <option>Just me</option>
              <option>2–10 teammates</option>
              <option>11–25 teammates</option>
              <option>25+ teammates</option>
            </select>
          </div>
          <button class="btn" type="button">Submit &amp; get link</button>
        </form>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <h3>What you get</h3>
          <span class="hint">Aligned with the mini app toolkit</span>
        </div>
        <div class="badge-list">
          <span class="chip">Glass cards</span>
          <span class="chip">Hero tiles</span>
          <span class="chip">Responsive grid</span>
          <span class="chip">CTA buttons</span>
          <span class="chip">Accordions</span>
          <span class="chip">Chips &amp; pills</span>
        </div>
        <div class="acc" id="faq">${renderFAQ()}</div>
      </div>
    </section>

    <div class="footer-cta">
      <p>Ready to see it live? Open the mini app and keep building inside Telegram.</p>
      <div class="hero-actions">
        <button class="btn">Start in Telegram</button>
        <button class="btn secondary">Download overview</button>
      </div>
    </div>
  </main>
`

const faq = document.querySelector('#faq')

faq?.addEventListener('click', (event) => {
  const head = event.target.closest('.acc-head')
  if (!head) return

  const item = head.parentElement
  const isOpen = item.classList.contains('open')

  faq.querySelectorAll('.acc-item').forEach((node) => {
    node.classList.remove('open')
    node.querySelector('.acc-head span').textContent = '+'
  })

  if (!isOpen) {
    item.classList.add('open')
    head.querySelector('span').textContent = '−'
  }
})
