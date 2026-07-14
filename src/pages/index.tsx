import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const OPENREVIEW_PROFILE = 'https://openreview.net/profile?id=%7ELiuyuehan_Zhou1';

const projects = [
  {
    label: 'FLAGSHIP MANUSCRIPT',
    status: 'Submitted · UncertaiNLP 2026',
    title: 'DTD-LRC',
    subtitle: 'Uncertainty-Gated Evidence Escalation for Open-World AI-Generated Text Detection',
    description:
      'A two-stage detection architecture that escalates ambiguous cases from lightweight distributional evidence to auditable cross-family comparison, rather than forcing every sample through a single opaque classifier.',
    tags: ['Responsible NLP', 'Uncertainty', 'Evidence escalation'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/haveanicedaymydear/AI-Text-Cascade-Detect',
      },
      {
        label: 'Research video',
        href: 'https://youtu.be/Z0NXF_Ghasg',
      },
    ],
  },
  {
    label: 'GOVERNED AGENT MEMORY',
    status: 'Open-source research prototype',
    title: 'OpenCycle-Mem',
    subtitle: 'Evidence-weighted reopening for long-horizon agent memory',
    description:
      'A governed-memory mechanism for agents that must preserve useful conclusions without turning earlier reasoning into permanent dogma. Memories remain revisable when later evidence crosses an explicit reopening threshold.',
    tags: ['Long-horizon agents', 'Memory governance', 'Multi-agent interface'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/haveanicedaymydear/OpenCycle-Mem',
      },
    ],
  },
  {
    label: 'DEVELOPMENTAL AGENCY',
    status: 'Research prototype',
    title: 'Unlock-Driven Competence Gap Discovery',
    subtitle: 'From missing capability to self-directed skill acquisition',
    description:
      'An automatic curriculum formulation that represents competence as an unlock graph: agents identify which missing skill would expand the set of tasks—or joint team outcomes—they can reach next.',
    tags: ['Open-ended learning', 'Skill discovery', 'Lifelong multi-agent learning'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/haveanicedaymydear/Unlock-Driven-Competence-Gap-Discovery',
      },
    ],
  },
];

const agenda = [
  {
    number: '01',
    title: 'Developmental agency',
    text: 'How can an agent decide what it should learn next, generate new goals from experience, and organise its history into a coherent trajectory of growth?',
  },
  {
    number: '02',
    title: 'Governed cognitive continuity',
    text: 'How can memory preserve identity and accumulated competence while remaining auditable, revisable, and resistant to contamination or premature lock-in?',
  },
  {
    number: '03',
    title: 'Collective intelligence',
    text: 'How should agents communicate memory, divide emerging competence gaps, and coordinate under decentralised information without collapsing into one shared prompt?',
  },
];

const evidencePrinciples = [
  'Public repositories before broad claims',
  'Controlled experiments before narrative conclusions',
  'Explicit uncertainty instead of forced certainty',
  'Reproducible artefacts that a reviewer can inspect',
];

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.externalLink}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            AI RESEARCHER · AGENTIC AI & RESPONSIBLE NLP
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Building agents that can <span>develop, remember, and revise.</span>
          </Heading>
          <p className={styles.heroLead}>
            I am Livan Zhou, a First Class Honours Computer Science graduate from Coventry University. My work focuses on developmental agency, governed memory, multi-agent coordination, and uncertainty-aware AI systems.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#research">
              View research evidence
            </a>
            <ExternalLink href="https://github.com/haveanicedaymydear">GitHub profile</ExternalLink>
            <ExternalLink href={OPENREVIEW_PROFILE}>OpenReview</ExternalLink>
          </div>
          <div className={styles.heroMetrics} aria-label="Profile highlights">
            <div>
              <strong>First Class</strong>
              <span>BSc (Hons) Computer Science</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Active research directions</span>
            </div>
            <div>
              <strong>Evidence-first</strong>
              <span>Open code and controlled results</span>
            </div>
          </div>
        </div>

        <aside className={styles.portraitPanel} aria-label="Livan Zhou profile">
          <div className={styles.portraitFrame}>
            <img
              src="/img/livan-zhou-headshot-2026.jpg"
              alt="Professional portrait of Livan Zhou"
              className={styles.portrait}
            />
          </div>
          <div className={styles.identityCard}>
            <div>
              <span className={styles.identityLabel}>CURRENT FOCUS</span>
              <strong>Open-ended autonomous agents with cognitive continuity</strong>
            </div>
            <a href="mailto:zhoulivan@gmail.com" aria-label="Email Livan Zhou">
              zhoulivan@gmail.com
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

function Research() {
  return (
    <section id="research" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionKicker}>SELECTED RESEARCH</span>
            <Heading as="h2">Inspectable work, not decorative claims.</Heading>
          </div>
          <p>
            Each project is framed as a falsifiable research object with public evidence, explicit limitations, and a concrete path toward stronger evaluation.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article className={`${styles.projectCard} ${index === 0 ? styles.flagshipCard : ''}`} key={project.title}>
              <div className={styles.projectTopline}>
                <span>{project.label}</span>
                <span>{project.status}</span>
              </div>
              <Heading as="h3">{project.title}</Heading>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.links.map((link) => (
                  <ExternalLink href={link.href} key={link.href}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchAgenda() {
  return (
    <section id="agenda" className={`${styles.section} ${styles.agendaSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionKicker}>RESEARCH AGENDA</span>
            <Heading as="h2">Toward a minimal engineering theory of developing agents.</Heading>
          </div>
          <p>
            The long-term objective is not another workflow wrapper around an LLM, but an agent architecture that persists across time and can reorganise its own capabilities from consequences.
          </p>
        </div>

        <div className={styles.agendaGrid}>
          {agenda.map((item) => (
            <article key={item.number} className={styles.agendaCard}>
              <span>{item.number}</span>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section id="evidence" className={styles.section}>
      <div className={`container ${styles.evidenceGrid}`}>
        <div className={styles.evidenceStatement}>
          <span className={styles.sectionKicker}>WORKING PRINCIPLE</span>
          <Heading as="h2">Research should leave a trail another person can inspect.</Heading>
          <p>
            I treat repositories, experiment logs, manuscripts, demonstrations, and negative results as parts of one evidence system. The aim is to make the path from claim to artefact visible.
          </p>
          <div className={styles.evidenceActions}>
            <ExternalLink href="https://github.com/haveanicedaymydear/AI-Text-Cascade-Detect">Flagship repository</ExternalLink>
            <Link to="/docs/intro" className={styles.internalLink}>
              Research notes <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.principleList}>
          {evidencePrinciples.map((principle, index) => (
            <div key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutGrid}`}>
        <div>
          <span className={styles.sectionKicker}>BACKGROUND</span>
          <Heading as="h2">Computer science foundations, directed toward autonomous intelligence.</Heading>
        </div>
        <div className={styles.aboutCopy}>
          <p>
            I graduated with First Class Honours in Computer Science from Coventry University. My recent work moves from robust AI-generated text detection toward the deeper problem of agents that maintain cognitive continuity, discover competence gaps, and coordinate as teams.
          </p>
          <p>
            I am particularly interested in research environments where conceptual ambition is matched by controlled simulation, reproducible engineering, and clear empirical baselines.
          </p>
          <div className={styles.aboutLinks}>
            <ExternalLink href="https://github.com/haveanicedaymydear">All public repositories</ExternalLink>
            <ExternalLink href={OPENREVIEW_PROFILE}>Research profile</ExternalLink>
            <a href="mailto:zhoulivan@gmail.com" className={styles.externalLink}>
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactInner}`}>
        <div>
          <span className={styles.sectionKicker}>RESEARCH CONTACT</span>
          <Heading as="h2">Interested in developmental agency, memory, or multi-agent learning?</Heading>
        </div>
        <a href="mailto:zhoulivan@gmail.com" className={styles.contactButton}>
          zhoulivan@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AI Researcher"
      description="Livan Zhou researches developmental agency, governed agent memory, multi-agent coordination, and uncertainty-aware AI systems.">
      <main className={styles.page}>
        <Hero />
        <Research />
        <ResearchAgenda />
        <Evidence />
        <Background />
        <Contact />
      </main>
    </Layout>
  );
}
