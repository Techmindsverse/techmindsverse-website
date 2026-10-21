
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Users,
  Layers3,
  Lightbulb,
  Network,
} from "lucide-react";

import Link from "next/link";
import {
  ButtonLink,
  CTA,
  Eyebrow,
  SectionHead,
} from "@/components/ui";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>THE TECHNOLOGY MINDSET UNIVERSE</Eyebrow>

          <h1>
            Where Minds Build the <em>Future.</em>
          </h1>

          <p className="lead">
            We bring people, ideas, skills, and technology together
            to learn, collaborate, and build meaningful solutions
            for the real world.
          </p>

          <div className="button-row">
            <ButtonLink href="/about">
              Discover TechMindsVerse
            </ButtonLink>

            <ButtonLink href="/community" secondary>
              Join our community
            </ButtonLink>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Learn · Build · Collaborate · Innovate
          </div>
        </div>

       
<div
  className="hero-art globe-hero-art"
  aria-label="TechMindsVerse connects learning, building, and collaboration around the world"
  role="img"
>
  <div className="globe-space" aria-hidden="true">
    <div className="globe-starfield" />

    <div className="globe-orbit globe-orbit-one" />
    <div className="globe-orbit globe-orbit-two" />
    <div className="globe-orbit globe-orbit-three" />

    <div className="globe-earth">
      <div className="globe-earth-texture" />
      <div className="globe-earth-shade" />

      <div className="globe-brand">
        <strong>TMV</strong>
        <span>WHERE MINDS BUILD</span>
      </div>
    </div>

    <div className="globe-point globe-point-learn">
      <span className="globe-point-icon">✧</span>
      <strong>LEARN</strong>
    </div>

    <div className="globe-point globe-point-build">
      <span className="globe-point-icon">&lt;/&gt;</span>
      <strong>BUILD</strong>
    </div>

    <div className="globe-point globe-point-connect">
      <span className="globe-point-icon">◎</span>
      <strong>CONNECT</strong>
    </div>
  </div>
</div>

      </section>

      {/* ORGANIZATION INTRODUCTION */}
      <section className="section container">
        <SectionHead
          label="WHO WE ARE"
          title="Technology is more powerful when we build together."
          description="TechMindsVerse is a technology ecosystem bringing learners, builders, creatives, and innovators together to develop practical skills, create digital solutions, and explore new possibilities."
        />

        <div className="card-grid three">
          <Link className="feature-card" href="/academy">
            <GraduationCap size={30} aria-hidden="true" />

            <span className="card-number">01 / LEARN</span>

            <h3>Develop practical skills</h3>

            <p>
              Explore technology and creative disciplines that
              help people grow their capabilities and turn
              knowledge into practice.
            </p>

            <span className="card-link">
              Explore the Academy
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>

          <Link className="feature-card" href="/services">
            <Code2 size={30} aria-hidden="true" />

            <span className="card-number">02 / BUILD</span>

            <h3>Create meaningful solutions</h3>

            <p>
              Bring ideas to life through websites, digital
              products, user experiences, and technology-driven
              solutions for real needs.
            </p>

            <span className="card-link">
              Explore our services
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>

          <Link className="feature-card" href="/community">
            <Users size={30} aria-hidden="true" />

            <span className="card-number">03 / CONNECT</span>

            <h3>Grow through collaboration</h3>

            <p>
              Connect with people who are curious about
              technology, willing to share knowledge, and ready
              to build alongside others.
            </p>

            <span className="card-link">
              Meet the community
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* EVENT CAMPAIGN FEATURE */}
      <section className="section container">
        <div className="event-feature">
          <div>
            <Eyebrow>COMMUNITY · IDEAS · INNOVATION</Eyebrow>

            <h2>
              Tech Experience <span>2027.</span>
            </h2>

            <p>
              An event initiative by TechMindsVerse centred on
              inspiring conversations, technology, creativity,
              networking, innovation, and opportunities for
              personal and professional growth.
            </p>

            <div className="button-row">
              <ButtonLink href="/events">
                Explore Tech Experience
              </ButtonLink>
            </div>
          </div>

          <div className="event-visual">
            <span>TECH</span>
            <strong>EXPERIENCE</strong>
            <b>2027</b>
            <small>EXPLORE · CREATE · CONNECT</small>
          </div>
        </div>
      </section>

      {/* PRODUCTS AND INNOVATION */}
      <section className="section container split-section">
        <div>
          <Eyebrow>PRODUCTS & INNOVATION</Eyebrow>

          <h2>
            Turning technology into meaningful experiences.
          </h2>

          <p>
            We explore and build digital products that bring
            ideas to life, support collaboration, and create
            opportunities for people to do more with technology.
          </p>

          <ButtonLink href="/projects" secondary>
            Explore our projects
          </ButtonLink>
        </div>

        <div className="project-highlight">
          <div className="project-highlight-top">
            <Layers3 size={30} aria-hidden="true" />
            <span className="card-number">OUR ECOSYSTEM PLATFORM</span>
          </div>

          <h3>TechMindsVerse OS</h3>

          <p>
            A digital platform designed to support the
            TechMindsVerse ecosystem, bringing learning,
            collaboration, and opportunities into a connected
            experience.
          </p>

          <a
            href={site.os}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore TMV OS
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* EVENT AND PRODUCT FLYERS WILL BE INTEGRATED HERE LATER */}

      {/* HTCI / OUR APPROACH */}
      <section className="section container">
        <SectionHead
          label="OUR APPROACH"
          title="Human intelligence. Technology. Shared progress."
          description="We believe technology creates greater possibilities when it works alongside human creativity, judgment, and problem-solving."
        />

        <div className="card-grid three">
          <article className="feature-card">
            <Lightbulb size={30} aria-hidden="true" />

            <span className="card-number">01 / THINK</span>

            <h3>Start with people</h3>

            <p>
              Understand real needs, ask better questions,
              and approach problems with curiosity and purpose.
            </p>
          </article>

          <article className="feature-card">
            <Code2 size={30} aria-hidden="true" />

            <span className="card-number">02 / CREATE</span>

            <h3>Build with technology</h3>

            <p>
              Combine human insight with digital tools to
              develop useful products, skills, and solutions.
            </p>
          </article>

          <article className="feature-card">
            <Network size={30} aria-hidden="true" />

            <span className="card-number">03 / GROW</span>

            <h3>Make progress together</h3>

            <p>
              Share knowledge, collaborate across disciplines,
              and create opportunities for collective growth.
            </p>
          </article>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section container">
        <div className="community-strip">
          <div>
            <Eyebrow>GROW WITH TECHMINDSVERSE</Eyebrow>

            <h2>
              Your next opportunity could start with a
              conversation.
            </h2>

            <p>
              Connect with learners, builders, creatives,
              entrepreneurs, and technology enthusiasts who
              believe in learning, creating, and growing together.
            </p>
          </div>

          <ButtonLink href={site.community} external>
            Join the community
          </ButtonLink>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <CTA
        title="Have an idea worth building?"
        description="Let's explore your project, discuss a partnership, or find ways to create something meaningful together."
        href="/contact"
        label="Start a conversation"
      />
    </>
  );
}
