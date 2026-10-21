
import { PageIntro, CTA, Eyebrow, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Tech Experience 2027",
  description:
    "Discover the TechMindsVerse Tech Experience, bringing together technology, artificial intelligence, digital creativity, innovation, and community.",
};

const experienceThemes = [
  {
    number: "01",
    title: "Inspiring Conversations",
    description:
      "Explore ideas, perspectives, and conversations around technology and the opportunities it creates.",
  },
  {
    number: "02",
    title: "Networking and Collaboration",
    description:
      "Connect with people who share an interest in technology, creativity, innovation, and building.",
  },
  {
    number: "03",
    title: "Ideas, Innovation and Startups",
    description:
      "Explore the mindset behind turning ideas into practical solutions and new possibilities.",
  },
  {
    number: "04",
    title: "Learning and Personal Growth",
    description:
      "Discover new perspectives on developing skills, embracing technology, and growing as a builder.",
  },
  {
    number: "05",
    title: "Community and Future Opportunities",
    description:
      "Build connections with people interested in learning, contributing, and shaping the future together.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageIntro
        label="TechMindsVerse Events"
        title="An experience for curious minds."
        description="A gathering shaped around technology, artificial intelligence, digital creativity, innovation, and the builder's mindset."
      />

      <section className="section container">
        <div className="event-detail">
          <div>
            <Eyebrow>TECHMINDSVERSE PRESENTS</Eyebrow>
            <h2>
              Tech Experience
              <br />
              2027
            </h2>

            <p>
              Tech Experience is envisioned as a space for people to explore
              technology, exchange ideas, connect with others, and discover
              new possibilities for learning, collaboration, and innovation.
            </p>

            <p>
              Built around the belief that meaningful progress happens when
              people and technology work together, the experience reflects
              the TechMindsVerse vision: Where Minds Build the Future.
            </p>

            <a className="button-link" href="/contact">
              Contact us about the event
            </a>
          </div>

          <div className="event-visual event-visual-large">
            <span>TECH</span>
            <strong>EXPERIENCE</strong>
            <b>2027</b>
            <small>TECHNOLOGY · CREATIVITY · COMMUNITY</small>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          label="THE EXPERIENCE"
          title="More than technology. A meeting of minds."
          description="The experience is being shaped around five themes that reflect the TechMindsVerse commitment to learning, innovation, collaboration, and growth."
        />

        <div className="card-grid two">
          {experienceThemes.map((theme) => (
            <article className="info-card" key={theme.number}>
              <span className="card-number">
                {theme.number} / EXPERIENCE
              </span>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Interested in Tech Experience?"
        description="Get in touch with TechMindsVerse to ask about the event and follow our work."
        href="/contact"
        label="Contact TechMindsVerse"
      />
    </>
  );
}
