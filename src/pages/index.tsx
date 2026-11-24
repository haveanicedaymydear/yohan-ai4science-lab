import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const OPENREVIEW_PROFILE = 'https://openreview.net/profile?id=%7ELiuyuehan_Zhou1';

const projects = [
  {
    label: 'WORLD-MODEL MAINTENANCE',
    status: 'Sole-author manuscript · AAAI-27 NeuroAI 2.0 Workshop · Under review',
    title: 'Which Part of the World Changed?',
    subtitle: 'Typed Diagnostic Probing for Bounded World-Model Maintenance',
    description:
      'An agent uses expected information gain to probe whether a surprising observation reflects noise, a changed fact, or a changed rule. In preregistered simulations, it repaired fact and rule changes with 15–39 fewer observations than passive, repeat, and random probing. A four-hypothesis buffer limited performance in larger worlds.',
    tags: ['Active probing', 'World models', 'Belief revision'],
    links: [],
  },
  {
    label: 'MEMORY-BOUNDED AGENTS',
    status: 'Sole-author manuscript · AAAI-27 Trust4RSI-Agent Workshop · Under review',
    title: 'From Notes to Decisions',
    subtitle: 'Disentangling Memory, Inference, and Capacity in Memory-Bounded LLM Agents',
    description:
      'A preregistered note-swap study tests how a 128-token memory budget affects what an LLM agent records and how it uses those records. Across approximately 26,000 model calls, one of three confirmatory hypotheses was supported. Secondary analyses found memory and inference gaps of similar magnitude; no end-to-end gain was established.',
    tags: ['LLM agents', 'Memory', 'Inference'],
    links: [],
  },
  {
    label: 'CONTINUAL SKILL LEARNING',
    status: 'Ongoing research',
    title: 'Self–World Change Attribution',
    subtitle: 'Distinguishing skill forgetting from environmental change',
    description:
      'Through nine rounds of preregistered simulation experiments and controlled ablations, I investigate how agents distinguish recoverable skill forgetting from environmental deterioration. The work evaluates Bayesian inference, change-point detection, and model retention, with a focus on the value of additional practice.',
    tags: ['Continual learning', 'Change attribution'],
    links: [],
  },
  {
    label: 'GOVERNED AGENT MEMORY',
    status: 'Open-source research prototype',
    title: 'OpenCycle-Mem',
    subtitle: 'Evidence-weighted reopening for long-horizon agent memory',
    description:
      'A governed-memory mechanism for agents that must preserve useful conclusions without turning earlier reasoning into permanent dogma. Memories remain revisable when later evidence crosses an explicit reopening threshold. Across five simulated scenarios with 200 shared seeds each, mean state accuracy was 0.950 versus 0.800 for static governance and 0.500 for raw memory.',
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
    status: 'Independent research · empirical evaluation in progress',
    title: 'Developmental Leverage',
    subtitle: 'Sparse intervention-calibrated developmental leverage',
    description:
      'A compute-aware developmental-agency project that estimates how training one currently learnable skill may transfer to capabilities the agent still lacks. It combines a low-cost, agent-specific transfer proxy with sparse real interventions to decide what the agent should develop next under a fixed budget. Evaluation against seven curriculum baselines using PPO on Craftax-Classic-Symbolic is in progress.',
    tags: ['Developmental agency', 'Cross-skill transfer', 'Autonomous curricula'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/haveanicedaymydear/Unlock-Driven-Competence-Gap-Discovery',
      },
      {
        label: 'Proposal v0.3',
        href: 'https://github.com/haveanicedaymydear/Unlock-Driven-Competence-Gap-Discovery/blob/main/docs/proposal-v0.3.md',
      },
    ],
  },
  {
    label: 'TEXT DETECTION',
    status: 'Manuscript in preparation',
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
];

const agenda = [
  {
    title: 'World-model revision',
    text: 'How can an agent actively gather evidence to distinguish observation noise from a change in the world?',
  },
  {
    title: 'Memory and inference',
    text: 'What should an agent retain under a fixed memory budget, and how should it use that information to make decisions?',
  },
  {
    title: 'Self–world change attribution',
    text: 'When performance declines, how can an agent tell whether the environment changed or its own competence deteriorated, and decide whether more practice is worthwhile?',
  },
  {
    title: 'Developmental robotics',
    text: 'How can a robot decide what to observe or practise next as it develops skills through continuous interaction?',
  },
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
            DEVELOPMENTAL ROBOTICS · WORLD MODELS
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Yohan Zhou (Liuyuehan Zhou)
          </Heading>
          <p className={styles.heroLead}>
            My academic background is in Robotics and Intelligent Systems (MSc, Nanyang Technological University, starting January 2027) and Computing Science (BSc, First Class Honours). I investigate how autonomous agents with bounded memory learn, test, and revise their models of themselves and a changing world. My long-term goal is to understand how developmental robots acquire and adapt skills through continuous interaction.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#research">
              Selected research
            </a>
            <ExternalLink href="https://github.com/haveanicedaymydear">GitHub profile</ExternalLink>
            <ExternalLink href={OPENREVIEW_PROFILE}>OpenReview</ExternalLink>
          </div>

        </div>

        <aside className={styles.portraitPanel} aria-label="Yohan Zhou profile">
          <div className={styles.portraitFrame}>
            <img
              src="/img/yohan-zhou.jpg"
              alt="Professional portrait of Yohan Zhou"
              className={styles.portrait}
            />
          </div>
          <div className={styles.identityCard}>
            <div>
              <span className={styles.identityLabel}>CURRENT FOCUS</span>
              <strong>Developmental robotics · self–world models · bounded memory</strong>
            </div>
            <a href="mailto:ZHOU0729@e.ntu.edu.sg" aria-label="Email Yohan Zhou">
              ZHOU0729@e.ntu.edu.sg
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
          <Heading as="h2">Selected research</Heading>
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
          <Heading as="h2">Research questions</Heading>
        </div>

        <div className={styles.agendaGrid}>
          {agenda.map((item) => (
            <article key={item.title} className={styles.agendaCard}>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.text}</p>
            </article>
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
          <Heading as="h2">Education</Heading>
        </div>
        <div className={styles.aboutCopy}>
          <p><strong>Nanyang Technological University</strong><br />MSc in Robotics and Intelligent Systems, School of Mechanical and Aerospace Engineering · Jan 2027 start</p>
          <p><strong>Coventry University</strong><br />BSc (Hons) in Computing Science, First Class Honours · 2024–2026</p>
          <div className={styles.aboutLinks}>
            <ExternalLink href="https://github.com/haveanicedaymydear">GitHub</ExternalLink>
            <Link to="/docs/intro" className={styles.internalLink}>Research notes</Link>
            <a href="mailto:ZHOU0729@e.ntu.edu.sg" className={styles.externalLink}>
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
          <Heading as="h2">Contact</Heading>
        </div>
        <a href="mailto:ZHOU0729@e.ntu.edu.sg" className={styles.contactButton}>
          ZHOU0729@e.ntu.edu.sg <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Research Portfolio"
      description="Research portfolio of Yohan (Liuyuehan) Zhou: developmental robotics, self–world change attribution, world-model revision, and bounded agent memory.">
      <main className={styles.page}>
        <Hero />
        <Research />
        <ResearchAgenda />
        <Background />
        <Contact />
      </main>
    </Layout>
  );
}
