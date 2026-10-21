
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";

import Link from "next/link";
import {
  PageIntro,
  CTA,
  Eyebrow,
  SectionHead,
} from "@/components/ui";

export const metadata = {
  title: "About TechMindsVerse",
  description:
    "Discover TechMindsVerse, the Technology Mindset Universe: an ecosystem empowering people to develop practical skills, collaborate with technology, and build meaningful real-world solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT TECHMINDSVERSE"
        title="A universe of ideas. Built around people."
        description="We bring people, ideas, skills, and technology together to learn, collaborate, and build meaningful solutions for the real world."
      />

      {/* OUR STORY */}
      <section className="section container split-section">
        <div>
          <Eyebrow>OUR STORY</Eyebrow>

          <h2>
            Technology is more than what we build. It is what
            becomes possible when we build together.
          </h2>
        </div>

        <div>
          <p>
            TechMindsVerse stands for{" "}
            <strong>Technology Mindset Universe.</strong> It
            grew from a simple belief: people should have
            opportunities to learn, connect with others, develop
            their abilities, and turn ideas into practical
            solutions through technology.
          </p>

          <p>
            We are building an ecosystem where learners,
            developers, designers, creatives, entrepreneurs, and
            technology enthusiasts can find room to grow,
            collaborate, and contribute to meaningful work.
          </p>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section container">
        <SectionHead
          label="OUR PURPOSE"
          title="A shared direction. A meaningful future."
          description="Our mission defines what we work to do today. Our vision describes the future we want to help create."
        />

        <div className="card-grid two">
          <article className="info-card">
            <Eyebrow>OUR MISSION</Eyebrow>

            <h2>Empower people to build.</h2>

            <p>
              To empower people to collaborate with technology,
              develop practical skills, connect with like-minded
              innovators, and build meaningful real-world
              solutions.
            </p>
          </article>

          <article className="info-card">
            <Eyebrow>OUR VISION</Eyebrow>

            <h2>Build a future of shared possibilities.</h2>

            <p>
              To build a global technology ecosystem where human
              intelligence and technology work together to unlock
              opportunities, accelerate innovation, and shape a
              better future.
            </p>
          </article>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section container">
        <SectionHead
          label="WHAT DRIVES US"
          title="Learn. Build. Collaborate."
          description="We focus on practical growth, meaningful technology, and the power of people working together."
        />

        <div className="card-grid three">
          <article className="feature-card">
            <Lightbulb size={30} aria-hidden="true" />

            <span className="card-number">01 / LEARN</span>

            <h3>Make knowledge practical.</h3>

            <p>
              Encourage continuous learning and skill
              development that people can apply to real
              challenges and opportunities.
            </p>
          </article>

          <article className="feature-card">
            <Code2 size={30} aria-hidden="true" />

            <span className="card-number">02 / BUILD</span>

            <h3>Turn ideas into solutions.</h3>

            <p>
              Explore product development, digital experiences,
              and technology-driven solutions that address
              meaningful needs.
            </p>
          </article>

          <article className="feature-card">
            <Users size={30} aria-hidden="true" />

            <span className="card-number">03 / COLLABORATE</span>

            <h3>Grow through people.</h3>

            <p>
              Create opportunities for people with different
              skills, perspectives, and ambitions to learn from
              one another and build together.
            </p>
          </article>
        </div>
      </section>

      {/* HUMAN AND TECHNOLOGY COLLABORATIVE INTELLIGENCE */}
      <section className="section container">
        <div className="community-strip">
          <div>
            <Eyebrow>OUR GUIDING CONCEPT</Eyebrow>

            <h2>
              Human and Technology Collaborative Intelligence.
            </h2>

            <p>
              HTCI represents our belief that human creativity,
              judgment, and problem-solving can work alongside
              AI and other technologies to amplify human
              potential. Technology should strengthen what
              people can do, not remove people from the process.
            </p>
          </div>

          <div aria-hidden="true">
            <BrainCircuit size={52} strokeWidth={1.3} />
            <Network size={30} strokeWidth={1.3} />
          </div>
        </div>
      </section>

      {/* WHAT WE FOCUS ON */}
      <section className="section container">
        <SectionHead
          label="OUR ECOSYSTEM"
          title="Different disciplines. One shared purpose."
          description="Our work brings together complementary paths for learning, building, and creating opportunities."
        />

        <div className="number-stack">
          <span>01 / Practical technology learning</span>
          <span>02 / Websites, software, and digital products</span>
          <span>03 / Design, creativity, and digital solutions</span>
          <span>04 / Community and collaboration</span>
          <span>05 / Innovation and startup partnerships</span>
        </div>

        <div className="button-row" style={{ marginTop: "28px" }}>
          <Link className="button button-outline" href="/services">
            Explore our services
            <ArrowRight size={17} aria-hidden="true" />
          </Link>

          <Link className="button button-primary" href="/community">
            Join the community
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* NEXT STEP */}
      <CTA
        title="Be part of what we're building."
        description="Whether you want to learn, collaborate, explore a technology solution, or connect with like-minded people, there is room to start a conversation."
        href="/contact"
        label="Connect with us"
      />
    </>
  );
}
