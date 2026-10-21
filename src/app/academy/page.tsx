
import { ArrowUpRight } from "lucide-react";
import { PageIntro, CTA, Eyebrow, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "TechMindsVerse Academy",
  description:
    "Explore TechMindsVerse Academy's focus areas across web development, design, artificial intelligence, cybersecurity, digital marketing, and product development.",
};

const learningAreas = [
  {
    number: "01",
    name: "Web Development",
    description:
      "Explore the technologies and practices used to design and build modern websites and web applications.",
  },
  {
    number: "02",
    name: "UI/UX Design",
    description:
      "Understand user needs and shape intuitive, accessible, and thoughtful digital experiences.",
  },
  {
    number: "03",
    name: "Graphic Design",
    description:
      "Develop visual communication skills for brands, digital content, and creative projects.",
  },
  {
    number: "04",
    name: "Artificial Intelligence",
    description:
      "Explore AI concepts, practical applications, and ways intelligent technologies can solve problems.",
  },
  {
    number: "05",
    name: "AI Automation",
    description:
      "Discover how AI tools and automation workflows can simplify tasks and improve how work gets done.",
  },
  {
    number: "06",
    name: "Cybersecurity",
    description:
      "Build foundational awareness of digital security, online risks, and protecting systems and information.",
  },
  {
    number: "07",
    name: "Digital Marketing",
    description:
      "Explore digital channels, audience engagement, brand visibility, and online marketing strategy.",
  },
  {
    number: "08",
    name: "Content Creation",
    description:
      "Develop skills for planning and creating useful, engaging content across digital platforms.",
  },
  {
    number: "09",
    name: "Product Design and Management",
    description:
      "Explore how to understand user problems, shape product ideas, and guide digital products toward meaningful outcomes.",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageIntro
        label="TechMindsVerse Academy"
        title="Learn skills. Create possibilities."
        description="A practical learning vision built around technology, creativity, problem-solving, and the skills people need to turn knowledge into meaningful work."
      />

      <section className="section container">
        <SectionHead
          label="LEARNING AREAS"
          title="Explore where your interests can take you."
          description="From building digital experiences to exploring AI and creative problem-solving, our learning focus spans a range of technology and digital disciplines."
        />

        <div className="card-grid three">
          {learningAreas.map((area) => (
            <article className="info-card" key={area.number}>
              <span className="card-number">
                {area.number} / LEARNING AREA
              </span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="community-feature">
          <div>
            <Eyebrow>LEARNING WITH PURPOSE</Eyebrow>
            <h2>Knowledge matters most when you can put it to work.</h2>
            <p>
              Our direction is to connect learning with practical exploration,
              collaboration, and the development of meaningful solutions.
              TechMindsVerse Academy is part of our wider technology ecosystem.
            </p>
            <a
              href={site.os}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore TechMindsVerse OS (opens in a new tab)"
            >
              Explore TechMindsVerse OS <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="community-art" aria-hidden="true">
            <span>LEARN</span>
            <span>APPLY</span>
            <span>GROW</span>
          </div>
        </div>
      </section>

      <CTA
        title="Interested in learning with us?"
        description="Contact TechMindsVerse to share your interests and ask about the Academy's direction."
        href="/contact"
        label="Contact TechMindsVerse"
      />
    </>
  );
}
