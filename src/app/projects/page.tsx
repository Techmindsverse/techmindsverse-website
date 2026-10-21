
import { ArrowUpRight } from "lucide-react";
import { PageIntro, CTA, Eyebrow, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Products & Projects",
  description:
    "Explore TechMindsVerse products, platform development, and concepts exploring new possibilities in technology.",
};

const concepts = [
  {
    name: "AI Productivity Tool",
    description:
      "Exploring ways AI can support everyday productivity and help people work more effectively.",
  },
  {
    name: "Developer Marketplace",
    description:
      "A concept for connecting developers, skills, and opportunities to collaborate on meaningful work.",
  },
  {
    name: "Academy Platform",
    description:
      "A digital learning environment designed to support practical technology learning and growth.",
  },
  {
    name: "Analytics OS",
    description:
      "A concept exploring how useful data and insights can help people make better decisions.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        label="Products & Projects"
        title="Ideas in motion."
        description="We explore, design, and develop digital products that connect people, solve practical problems, and create new possibilities through technology."
      />

      <section className="section container">
        <SectionHead
          label="OUR WORK"
          title="Building toward meaningful solutions."
          description="Our product work reflects an ongoing commitment to experimentation, collaboration, and technology that serves real needs."
        />

        <div className="card-grid two">
          <article className="info-card project-card">
            <Eyebrow>ECOSYSTEM PLATFORM</Eyebrow>
            <h2>TechMindsVerse OS</h2>
            <p>
              Our ecosystem platform brings together people, learning,
              collaboration, and digital product experiences. Its capabilities
              continue to evolve as we develop the platform.
            </p>
            <a
              href={site.os}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore TechMindsVerse OS (opens in a new tab)"
            >
              Explore TechMindsVerse OS <ArrowUpRight size={16} />
            </a>
          </article>

          <article className="info-card project-card">
            <Eyebrow>PRODUCT EXPLORATION</Eyebrow>
            <h2>P2P Pay</h2>
            <p>
              A peer-to-peer payment product concept developed as part of our
              product-building work. The current experience is a prototype
              demonstration, not an operational payment service.
            </p>
          </article>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          label="EXPLORING WHAT'S NEXT"
          title="Ideas shaping our product vision."
          description="These concepts reflect areas of interest across productivity, learning, collaboration, and data-informed work."
        />

        <div className="card-grid two">
          {concepts.map((concept, index) => (
            <article className="info-card" key={concept.name}>
              <span className="card-number">
                CONCEPT / {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{concept.name}</h3>
              <p>{concept.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Have an idea worth building?"
        description="Let's explore how collaboration, thoughtful design, and technology can help turn it into something meaningful."
        href="/contact"
        label="Discuss a partnership"
      />
    </>
  );
}
