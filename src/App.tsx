import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, Blocks, CalendarDays,
  Check, ChevronDown, Clock3, Compass, ExternalLink, Facebook, FlaskConical,
  Lightbulb, Mail, MapPin, Menu, MoveUpRight, Phone, Ruler, Sparkles, X,
} from 'lucide-react';
import { site } from './config/site';
import { media } from './config/media';
import { type Route } from './config/seo';
import { Photo } from './components/Photo';

const nav: { label: string; href: Route }[] = [
  { label: 'Home', href: '/' },
  { label: 'The Lab', href: '/the-lab' },
  { label: 'Age Groups', href: '/age-groups' },
  { label: 'Saturdays', href: '/saturdays' },
  { label: 'Our Story', href: '/our-story' },
];
function href(path: Route): string { return path === '/' ? '/' : `${path}/`; }

function Wordmark() {
  return <a className="wordmark" href="/" aria-label="Bridge The Gap STEM Program homepage">
    <img className="wordmark-img" src={media.logo} alt="" width="64" height="64" />
    <span className="wordmark-text"><strong>BRIDGE THE GAP<span className="wordmark-star">✳</span></strong><small>STEM PROGRAM / HUGO, OK</small></span>
  </a>;
}
function Socials({ compact = false }: { compact?: boolean }) {
  const accounts = [
    { name: 'Facebook', url: site.facebook },
    { name: 'Instagram', url: site.instagram },
    { name: 'YouTube', url: site.youtube },
    { name: 'TikTok', url: site.tiktok },
    { name: 'Pinterest', url: site.pinterest },
  ].filter(account => Boolean(account.url));
  if (accounts.length === 0) return null;
  return <div className={compact ? 'social-items social-items-compact' : 'social-items'}>
    {accounts.map(account => <a key={account.name} href={account.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${account.name} (opens in new tab)`}>
      {account.name === 'Facebook' && <Facebook size={17} aria-hidden="true" />}
      {account.name}<ArrowUpRight size={14} aria-hidden="true" />
    </a>)}
  </div>;
}
function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="announce"><div className="wide announce-inner">
      <span><span className="announce-pulse" /> SATURDAY PROGRAM · 9:00 AM–2:00 PM</span>
      <a href={`tel:${site.phoneHref}`}><Phone size={13} /> {site.phone}</a>
    </div></div>
    <header className="site-header"><div className="wide header-inner">
      <Wordmark />
      <nav className={`main-nav ${open ? 'is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {nav.map(link => <a key={link.href} href={href(link.href)} aria-current={route === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="mobile-nav-contact" href="/contact/">Get in touch <ArrowUpRight size={17}/></a>
      </nav>
      <a className="header-contact" href="/contact/"><span>LET'S TALK</span><ArrowUpRight size={18} /></a>
      <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>
    </div></header>
  </>;
}
function Footer() {
  return <footer className="site-footer">
    <div className="footer-top wide">
      <div className="footer-brandline"><span className="footer-small">LOCAL LEARNING, BIG THINKING</span><h2>THE FUTURE<br/>STARTS WITH <i>WHY.</i></h2></div>
      <div className="footer-cta"><p>Curiosity has a place on Saturdays.</p><a href="/contact/" className="round-arrow" aria-label="Contact Bridge The Gap"><ArrowUpRight size={36} /></a></div>
    </div>
    <div className="footer-line" />
    <div className="footer-columns wide">
      <div className="footer-intro"><Wordmark /><p>Bridge The Gap STEM Program<br/>623 S. Broadway St.<br/>Hugo, OK 74743</p></div>
      <div className="footer-column"><strong>FIND YOUR WAY</strong><a href="/the-lab/">The Lab</a><a href="/age-groups/">Age Groups</a><a href="/saturdays/">Saturday Guide</a><a href="/our-story/">Our Story</a><a href="/contact/">Contact</a></div>
      <div className="footer-column"><strong>GET IN TOUCH</strong><a href={`tel:${site.phoneHref}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>Saturdays · 9 AM–2 PM</p></div>
      <div className="footer-column"><strong>STAY CONNECTED</strong><Socials compact /><a className="license-link" href={site.officialLicense} target="_blank" rel="noopener noreferrer">View state childcare listing <ArrowUpRight size={14}/></a></div>
    </div>
    <div className="footer-bottom wide"><span>© {new Date().getFullYear()} Bridge The Gap STEM Program</span><span>MADE FOR THE CURIOUS IN HUGO, OKLAHOMA</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
function SmallLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`micro-label ${light ? 'micro-label-light' : ''}`}><span className="micro-icon">✳</span>{children}</span>;
}
function Action({ to, children, outline = false }: { to: string; children: React.ReactNode; outline?: boolean }) {
  return <a className={outline ? 'action action-outline' : 'action'} href={to}>{children}<ArrowUpRight size={21} aria-hidden="true" /></a>;
}
function BigCallout() {
  return <section className="callout"><div className="wide callout-grid">
    <div><SmallLabel light>THE NEXT STEP</SmallLabel><h2>GOOD QUESTIONS<br/>OPEN <em>DOORS.</em></h2></div>
    <div className="callout-side"><p>Wondering about ages, availability, or what to expect on Saturday? A quick conversation is a great place to begin.</p><Action to="/contact/">CONNECT WITH US</Action></div>
  </div></section>;
}
function Home() {
  return <>
    <section className="hero-section">
      <div className="wide hero-frame">
        <div className="hero-copy">
          <div className="hero-topline"><SmallLabel>THE SATURDAY STEM SPACE</SmallLabel><span className="hero-corner-code">HUGO / OK · 01—07</span></div>
          <h1>WHAT IF<br/><span className="headline-circle">WE</span> <span className="acid-text">TRIED</span><br/>SOMETHING<br/><span className="hero-last">NEW<span className="punctuation">?</span></span></h1>
          <div className="hero-bottomline"><p>Big questions are welcome here. Meet a Saturday program for young thinkers and growing imaginations in Hugo, Oklahoma.</p><a className="hero-link" href="/the-lab/" aria-label="Discover the STEM approach"><ArrowDownRight size={36} /></a></div>
        </div>
        <div className="hero-art"><Photo photo="hero" alt="Children exploring a science experiment together in a classroom" eager className="hero-photo"/><div className="hero-orbit"><span>CURIOUS<br/>MINDS</span><Atom size={47} strokeWidth={1.5}/></div><div className="hero-photo-caption">A LITTLE SCIENCE. A LOT OF WONDER. <span>↗</span></div><div className="hero-floating-shape">✳</div></div>
      </div>
    </section>
    <div className="ticker" aria-label="Explore, discover, build, imagine"><div className="ticker-content">{Array.from({length: 4}).map((_, i) => <span key={i}>ASK <b>✳</b> EXPLORE <b>✳</b> IMAGINE <b>✳</b> REPEAT <b>✳</b></span>)}</div></div>
    <section className="intro-block section-pad"><div className="wide intro-grid">
      <div className="section-index"><span>01 / THE IDEA</span><div className="index-line" /></div>
      <div className="intro-main"><SmallLabel>WHERE CURIOSITY TAKES THE LEAD</SmallLabel><h2>MORE THAN<br/><i>RIGHT ANSWERS.</i><br/>BETTER QUESTIONS.</h2></div>
      <div className="intro-copy"><p>STEM is a way of looking at the world: noticing patterns, exploring possibilities, and learning through curiosity. Small ideas can lead to wonderfully big discoveries.</p><Action to="/the-lab/">EXPLORE THE LAB</Action></div>
    </div></section>
    <section className="image-break wide"><div className="image-break-grid"><Photo photo="building" alt="Children exploring wooden building blocks together" className="break-photo-one"/><div className="break-center"><span className="break-asterisk">✳</span><p>GROWING MINDS<br/>ASK BIG THINGS.</p><span className="break-caption">DISCOVER · BUILD · EXPLORE</span></div><Photo photo="discovery" alt="Children exploring science activities with a teacher" className="break-photo-two"/></div></section>
    <section className="practice-section section-pad"><div className="wide">
      <div className="section-head"><div><SmallLabel>HOW CURIOSITY GROWS</SmallLabel><h2>THINK IT.<br/><i>TRY IT.</i> SEE.</h2></div><span className="section-identity">NOT A STRAIGHT LINE.<br/>THAT'S THE FUN PART.</span></div>
      <div className="practice-list">
        <a href="/the-lab/" className="practice-row"><span className="row-no">01</span><span className="practice-symbol"><Lightbulb size={34}/></span><h3>Wonder about it.</h3><span className="practice-meta">START WITH A QUESTION</span><ArrowUpRight size={29}/></a>
        <a href="/the-lab/" className="practice-row"><span className="row-no">02</span><span className="practice-symbol"><Blocks size={34}/></span><h3>Make something.</h3><span className="practice-meta">EXPLORE A POSSIBILITY</span><ArrowUpRight size={29}/></a>
        <a href="/the-lab/" className="practice-row"><span className="row-no">03</span><span className="practice-symbol"><Sparkles size={34}/></span><h3>Keep discovering.</h3><span className="practice-meta">TRY A NEW APPROACH</span><ArrowUpRight size={29}/></a>
      </div>
      <p className="practice-note">These are ideas behind STEM learning, not a fixed activity schedule. Contact the program for current projects.</p>
    </div></section>
    <section className="sat-feature"><div className="wide sat-feature-grid"><div className="sat-panel"><SmallLabel light>ON THE CALENDAR</SmallLabel><p className="sat-days">SAT<br/>UR<br/>DAY<span>!</span></p><div className="sat-foot"><span>09:00 AM — 02:00 PM</span><CalendarDays size={39}/></div></div><div className="sat-side"><SmallLabel>COME CURIOUS</SmallLabel><h2>THE WEEKEND<br/>HAS <i>NEW IDEAS.</i></h2><p>Saturday is the program's scheduled day, with hours of 9 AM to 2 PM. Before visiting, ask about openings and current activities for your child's age group.</p><Action to="/saturdays/">PLAN YOUR SATURDAY</Action><span className="sat-side-digit">06 / WEEKEND NOTES</span></div></div></section>
    <section className="stats-strip"><div className="wide stats-grid"><div><strong>STEM</strong><span> SATURDAY LEARNING</span></div><div><strong>2–4</strong><span>PRESCHOOL AGES</span></div><div><strong>5+</strong><span>SCHOOL-AGE CHILDREN</span></div><div><strong>HUGO</strong><span>OKLAHOMA / HOME BASE</span></div></div></section>
    <BigCallout />
  </>;
}
const stemConcepts = [
  { letter: 'S', title: 'SCIENCE', question: 'What do you notice?', copy: 'Looking closely, asking questions and making observations are building blocks of scientific thinking.', icon: FlaskConical, col: 'cyan' },
  { letter: 'T', title: 'TECHNOLOGY', question: 'What could help?', copy: 'Technology invites children to think about tools, creative solutions and how things work.', icon: Compass, col: 'violet' },
  { letter: 'E', title: 'ENGINEERING', question: 'What could you make?', copy: 'Design, testing and trying again are natural parts of building and problem-solving.', icon: Blocks, col: 'orange' },
  { letter: 'M', title: 'MATHEMATICS', question: 'Can you find a pattern?', copy: 'Counting, shapes and patterns help young minds make sense of their world.', icon: Ruler, col: 'yellow' },
];
function Lab() {
  return <>
    <section className="subhero subhero-lab"><div className="wide lab-hero-grid"><div><SmallLabel light>02 / THE LAB</SmallLabel><h1>MADE FOR<br/><i>THE</i> <span>WHY.</span></h1><p>Wonder is a starting point. STEM gives curiosity room to become questions, ideas, and experiments in thinking.</p></div><div className="lab-hero-graphic"><span className="graphic-a">∑</span><span className="graphic-b">+</span><Atom size={175} strokeWidth={.7}/><span className="graphic-c">01 / 04</span></div></div></section>
    <section className="lab-intro section-pad"><div className="wide lab-intro-grid"><Photo photo="discovery" alt="Children experimenting with science activities in a classroom" className="lab-intro-photo"/><div><SmallLabel>FOUR LETTERS. INFINITE QUESTIONS.</SmallLabel><h2>WHAT DOES<br/><i>STEM</i> MEAN?</h2><p>Science, Technology, Engineering, and Mathematics. Each invites a different kind of question—and opens up another way to explore the world.</p><p>Here are the ideas behind STEM. For the current Saturday activity plan, contact the team directly.</p></div></div></section>
    <section className="stem-grid-section"><div className="wide stem-concepts">{stemConcepts.map(item => <article className={`stem-concept ${item.col}`} key={item.letter}><div className="stem-top"><span>{item.letter}</span><item.icon size={42} strokeWidth={1.5}/></div><div className="stem-bottom"><span>STEM / {item.title}</span><h3>{item.question}</h3><p>{item.copy}</p></div></article>)}</div></section>
    <section className="lab-outro section-pad"><div className="wide lab-outro-grid"><div><SmallLabel>BEYOND THE TEXTBOOK</SmallLabel><h2>CREATIVITY IS<br/><i>A POWERFUL TOOL.</i></h2><Action to="/age-groups/">SEE WHO WE SERVE</Action></div><Photo photo="teamwork" alt="Educator helping a child explore a science demonstration" className="lab-outro-photo"/></div></section>
    <BigCallout />
  </>;
}
function AgeGroups() {
  return <>
    <section className="subhero subhero-ages"><div className="wide ages-hero"><div><SmallLabel>03 / AGE GROUPS</SmallLabel><h1>SMALL IN SIZE.<br/><span>HUGE IN</span> <i>POTENTIAL.</i></h1></div><div className="ages-hero-side"><span className="age-doodles">✺<small>+</small></span><p>The state childcare listing identifies preschool and school-age groups. Please check current availability directly with the program.</p></div></div></section>
    <section className="age-feature section-pad"><div className="wide"><article className="age-feature-row"><div className="age-number">A / 01</div><Photo photo="preschool" alt="Child making creative structures using colorful building blocks" className="age-feature-image"/><div className="age-feature-text"><SmallLabel>CURIOUS BEGINNINGS</SmallLabel><h2>PRESCHOOL<br/><i>EXPLORERS.</i></h2><span className="age-label">AGES 2–4 / 24–48 MONTHS</span><p>Preschoolers explore the world one question at a time. The program's state listing accepts children in this age range.</p><a href="/contact/">ASK ABOUT AVAILABILITY <ArrowUpRight size={20}/></a></div></article>
      <article className="age-feature-row age-feature-alt"><div className="age-number">B / 02</div><Photo photo="schoolAge" alt="Young student and teacher working together on a classroom science experiment" className="age-feature-image"/><div className="age-feature-text"><SmallLabel>MORE TO DISCOVER</SmallLabel><h2>SCHOOL-AGE<br/><i>THINKERS.</i></h2><span className="age-label">AGES 5 AND UP</span><p>For older children with even bigger questions. School-age care is another age category named in the current licensing record.</p><a href="/contact/">ASK ABOUT AVAILABILITY <ArrowUpRight size={20}/></a></div></article>
    </div></section>
    <section className="age-note"><div className="wide age-note-grid"><div><span className="small-arrow">↗</span><strong>GOOD TO KNOW</strong></div><p>The licensed capacity is <b>30 children</b>. Capacity is not the same as current vacancies or the size of an individual group—please call for details.</p><Action to="/saturdays/">SATURDAY DETAILS</Action></div></section>
    <BigCallout />
  </>;
}
const faq = [
  { q: 'What days is the program open?', a: 'Oklahoma Human Services currently lists Bridge The Gap STEM Program as open on Saturday, 9:00 AM–2:00 PM, and closed Sunday through Friday.' },
  { q: 'What ages are accepted?', a: 'The state listing identifies preschool (24–48 months / about 2–4 years) and school-age (5 years and older) categories. Contact the program for exact age eligibility and openings.' },
  { q: 'How do I ask about an available place?', a: 'Call (405) 283-6650 or email bbillsbtgp@yahoo.com for availability, enrollment steps, and current expectations.' },
  { q: 'What will my child work on?', a: 'STEM stands for science, technology, engineering, and mathematics. Ask the program directly about the projects and activities planned for upcoming Saturdays.' },
  { q: 'Is transportation or food included?', a: 'Those services are not confirmed by the public listing. Please ask the program directly before planning your visit.' },
  { q: 'Where can I verify the child care license?', a: 'Oklahoma Human Services lists the program under childcare license K830058355. A link to that public record appears in the footer.' },
];
function Saturdays() {
  return <>
    <section className="subhero subhero-saturday"><div className="wide saturday-hero"><SmallLabel light>04 / SATURDAY GUIDE</SmallLabel><div className="sat-hero-main"><h1>YOUR<br/><i>SATURDAY.</i><br/>OUR <span>WHY.</span></h1><div className="sat-hero-clock"><Clock3 size={43}/><span>OPEN SATURDAY</span><strong>9 AM — 2 PM</strong><small>HUGO / OKLAHOMA</small></div></div></div></section>
    <section className="saturday-details section-pad"><div className="wide schedule-layout"><div><SmallLabel>WHAT THE LISTING SAYS</SmallLabel><h2>FIVE HOURS.<br/><i>ROOM TO WONDER.</i></h2><p>Bridge The Gap STEM Program's published schedule is Saturday, 9:00 AM–2:00 PM. Contact the team about the current activity schedule, enrollment, and availability.</p><Action to="/contact/">ASK US A QUESTION</Action></div><div className="hours-table"><div className="hours-head"><span>DAY</span><span>PUBLICLY LISTED HOURS</span></div><div className="hours-highlight"><strong>Saturday</strong><b>9:00 AM – 2:00 PM</b></div><div><span>Sunday – Friday</span><span>Closed</span></div><div className="hours-source"><a href={site.officialLicense} target="_blank" rel="noopener noreferrer">Oklahoma Child Care Locator <ArrowUpRight size={14}/></a></div></div></div></section>
    <section className="faq-section section-pad"><div className="wide faq-grid"><div className="faq-aside"><SmallLabel>GOOD QUESTIONS</SmallLabel><h2>BEFORE<br/>YOU <i>GO.</i></h2><p>Here are a few essentials. For details that may change, a call is always the most reliable next step.</p></div><div className="faq-items">{faq.map((item, i) => <details key={item.q} className="faq-item"><summary><span className="faq-num">{String(i + 1).padStart(2, '0')}</span><span>{item.q}</span><ChevronDown size={22}/></summary><p>{item.a}</p></details>)}</div></div></section>
    <BigCallout />
  </>;
}
function Story() {
  return <>
    <section className="subhero subhero-story"><div className="wide story-hero-grid"><div><SmallLabel>05 / OUR STORY</SmallLabel><h1>ROOTED<br/>IN <i>HUGO.</i><br/>OPEN TO<br/><span>WONDER.</span></h1></div><Photo photo="teamwork" alt="Teacher and a child working on a hands-on science activity" className="story-hero-photo"/></div></section>
    <section className="story-body section-pad"><div className="wide story-body-grid"><div className="story-marker">THE PEOPLE<br/>& PLACE <span>↘</span></div><div><h2>A LOCAL PLACE FOR <i>BIG QUESTIONS.</i></h2><p>Bridge The Gap STEM Program is a licensed child care center in Hugo, Oklahoma, with Saturday operating hours. Its name points toward exploration, creative problem-solving, and the curiosity at the heart of STEM.</p><p>The Oklahoma Child Care Locator lists <strong>Evangela Bills</strong> as director and accepts preschool and school-age children. For firsthand details about the program's current activities and enrollment, contact the team.</p><a className="text-link" href="/contact/">SAY HELLO <ArrowUpRight size={20}/></a></div></div></section>
    <section className="record-section"><div className="wide record-grid"><div className="record-heading"><SmallLabel light>PUBLIC PROGRAM DETAILS</SmallLabel><h2>THE<br/><i>DETAILS.</i></h2></div><div className="record-list"><div><span>Oklahoma license</span><strong>{site.license}</strong></div><div><span>Director listed</span><strong>{site.director}</strong></div><div><span>Licensed capacity</span><strong>{site.capacity} children</strong></div><div><span>Current state star level</span><strong>{site.starLevel} stars</strong></div><div><span>Open hours</span><strong>Saturday, 9 AM–2 PM</strong></div><a href={site.officialLicense} target="_blank" rel="noopener noreferrer">VIEW THE STATE LISTING <ExternalLink size={18}/></a></div></div></section>
    <BigCallout />
  </>;
}
function Contact() {
  return <>
    <section className="subhero subhero-contact"><div className="wide contact-hero"><SmallLabel>06 / SAY HELLO</SmallLabel><h1>LET'S MAKE<br/><i>CONTACT.</i><span>↗</span></h1><p>Have a question about Saturdays, ages, or getting started? Get in touch with Bridge The Gap STEM Program.</p></div></section>
    <section className="contact-main section-pad"><div className="wide contact-layout"><div className="contact-ways"><SmallLabel>OPEN THE CONVERSATION</SmallLabel>
      <a href={`tel:${site.phoneHref}`} className="contact-way"><span><Phone size={32}/></span><div><small>GIVE US A CALL</small><strong>{site.phone}</strong></div><ArrowUpRight size={27}/></a>
      <a href={`mailto:${site.email}`} className="contact-way"><span><Mail size={32}/></span><div><small>DROP A LINE</small><strong>{site.email}</strong></div><ArrowUpRight size={27}/></a>
      <a href={site.maps} target="_blank" rel="noopener noreferrer" className="contact-way"><span><MapPin size={32}/></span><div><small>FIND US IN HUGO</small><strong>623 S. Broadway St.<br/>Hugo, OK 74743</strong></div><ArrowUpRight size={27}/></a>
      <div className="contact-social"><span>FOLLOW THE CONVERSATION</span><Socials/></div>
    </div><aside className="contact-stamp"><div><SmallLabel light>WEEKEND WINDOW</SmallLabel><span className="stamp-star">✳</span><h2>SEE YOU<br/>ON <i>SATURDAY.</i></h2><p>9:00 AM — 2:00 PM</p><a href={site.maps} target="_blank" rel="noopener noreferrer">GET DIRECTIONS <MoveUpRight size={20}/></a></div></aside></div></section>
    <section className="contact-bottom"><div className="wide contact-bottom-grid"><div><SmallLabel>BEFORE YOU DROP IN</SmallLabel><h2>A QUICK CALL<br/><i>GOES A LONG WAY.</i></h2></div><p>Ask about availability, enrollment, and upcoming Saturday plans. The current public listing confirms Saturday hours and accepted age groups; other arrangements should be checked directly with the program.</p></div></section>
  </>;
}
export function App({ route }: { route: Route }) {
  let page: React.ReactNode;
  switch(route) {
    case '/the-lab': page = <Lab />; break;
    case '/age-groups': page = <AgeGroups />; break;
    case '/saturdays': page = <Saturdays />; break;
    case '/our-story': page = <Story />; break;
    case '/contact': page = <Contact />; break;
    default: page = <Home />;
  }
  return <div id="top" className="site-shell"><Header route={route}/><main id="content">{page}</main><Footer/></div>;
}
