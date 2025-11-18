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

const featureCards = [
  {
    title: 'Hands-on learning',
    copy: 'Gradient blues, crisp strokes, and soft shadows mirror the mini app UI while keeping things tactile.'
  },
  {
    title: 'Mentorship by our experts',
    copy: 'Reusable cards, tiles, accordions, and chips help you frame your story alongside guided feedback.'
  },
  {
    title: 'Widely applicable skills',
    copy: 'Adaptive layouts that scale from mobile onboarding to desktop preview keep your practice relevant.'
  },
  {
    title: 'Street cred studies',
    copy: 'Guided registration and safe handoffs turn into polished portfolio pieces without losing security.'
  }
]

const courseItems = [
  {
    title: 'Motion Design basics',
    meta: 'Learning component',
    description: 'Learn product animation with realistic tasks and guided practice inside a glassy shell.'
  },
  {
    title: 'Design Trends',
    meta: 'Learning component',
    description: 'Explore trend-aware layouts while keeping the structure and gradients you already love.'
  },
  {
    title: 'UI/UX',
    meta: 'User Interface & Experience',
    description: 'Interface design and ease of use working together to carry your product to the next level.'
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
  <div class="page-shell">
    <nav class="top-nav">
      <div class="brand">Profico.</div>
      <div class="nav-links">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#courses">Courses</a>
        <a class="nav-link" href="#process">Process</a>
        <a class="nav-link" href="#faq">FAQ</a>
      </div>
      <div class="nav-actions">
        <button class="btn secondary mini">Apply now</button>
        <button class="btn mini">Apply now</button>
      </div>
    </nav>

    <main class="wrap">
      <header id="home" class="hero hero-shell">
        <span class="pill">New design initiative</span>
        <h1 class="hero-title hero-title-lg">Profico Academy</h1>
        <p class="hero-muted hero-sub">
          Spin up projects, capture voice notes, and dispatch tasks directly from Telegram. Register on the web to secure your workspace, then launch the mini app with one tap.
        </p>
        <div class="hero-actions">
          <button class="btn">Apply now</button>
        </div>
      </header>

      <div class="meta-bar">
        <div class="meta-item">
          <span class="meta-label">Skill boosters</span>
          <span class="meta-value">Light / Experts</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Duration</span>
          <span class="meta-value">8 weeks</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Assignment</span>
          <span class="meta-value">8</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Total place</span>
          <span class="meta-value">13</span>
        </div>
      </div>

      <section id="courses" class="section section-centered">
        <div class="section-heading">
          <span class="pill pill-soft">Study program</span>
          <h2 class="section-title section-title-lg">What's in it for you?</h2>
          <p class="section-subtitle section-sub-center">Gain all the skills you need to kick start your professional industrial design journey without changing the look you already have.</p>
        </div>
        <div class="feature-grid">
          ${featureCards
            .map(
              (card, idx) => `
                <article class="feature-card">
                  <div class="feature-num">0${idx + 1}</div>
                  <h3>${card.title}</h3>
                  <p>${card.copy}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section id="process" class="section courses">
        <div class="section-heading align-start">
          <span class="pill pill-soft">Process</span>
          <h3 class="section-title">Courses</h3>
        </div>
        <div class="course-grid">
          <article class="course-card highlight">
            <div class="course-meta">Duration</div>
            <div class="course-value">8 weeks</div>
            <p class="course-description">Work through realistic builds, from product animation to messaging-ready visuals, with the same gradients and cards.</p>
          </article>
          ${courseItems
            .map(
              (course) => `
                <article class="course-card">
                  <div class="course-meta">${course.meta}</div>
                  <h4>${course.title}</h4>
                  <p class="course-description">${course.description}</p>
                </article>
              `
            )
            .join('')}
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
