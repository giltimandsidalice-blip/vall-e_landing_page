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

const keyHighlights = [
  'All chats organized instantly',
  'Instant context for decisions',
  'One screen. Total control.',
  'AI surfaces key leads.',
  'AI surfaces key leads.'
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
  <div class="page-shell">
    <nav class="top-nav">
      <div class="brand">VALL-E MiniApp</div>
      <div class="nav-links">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#features">Features</a>
        <a class="nav-link" href="#pricing">Pricing</a>
        <a class="nav-link" href="#faq">FAQs</a>
      </div>
      <div class="nav-actions">
        <button class="btn nav-apply">Apply now</button>
      </div>
    </nav>

    <main class="wrap">
      <header id="home" class="hero hero-shell">
        <h1 class="hero-title hero-title-lg">Growth-Ready Teams</h1>
        <p class="hero-muted hero-sub hero-sub-strong">
          You handle the team. AI handles the leads.
        </p>
      </header>

      <section id="features" class="section section-centered">
        <div class="highlight-grid">
          ${keyHighlights
            .map((highlight) => `
              <div class="highlight-box">${highlight}</div>
            `)
            .join('')}
        </div>
      </section>

      <section class="benefits" aria-label="Key benefits">
        <div class="benefit-grid">
          <article class="benefit-box">
            <h3>Inbox clarity</h3>
            <p>Turn messy threads into clean tracks so everyone knows the next move.</p>
          </article>
          <article class="benefit-box">
            <h3>Faster handoffs</h3>
            <p>Summaries travel with every chat, so teammates pick up without lag.</p>
          </article>
          <article class="benefit-box">
            <h3>Always-on memory</h3>
            <p>Let AI recall context, owners, and blockers while you stay in motion.</p>
          </article>
          <article class="benefit-box">
            <h3>Workflow ready</h3>
            <p>Integrate approvals, reviews, and revives without leaving Telegram.</p>
          </article>
          <article class="benefit-box">
            <h3>Signal over noise</h3>
            <p>Highlight the accounts that are heating up before the team even asks.</p>
          </article>
        </div>
      </section>

      <section id="scroll-video-section">
        <div class="video-shell">
          <h3>See the flow as you scroll</h3>
          <p class="video-subtitle">Scrub through the workspace walkthrough just by moving down the page.</p>
          <video id="scrollVideo" src="/video/no-background-open.mp4" preload="auto" playsinline muted></video>
        </div>
      </section>

      <section id="pricing" class="section registration">
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
  </div>
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

const video = document.getElementById('scrollVideo')

video?.addEventListener('loadedmetadata', () => {
  const duration = video.duration

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0
    video.currentTime = scrollFraction * duration
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
