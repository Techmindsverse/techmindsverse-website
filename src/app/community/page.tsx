
import { PageIntro, CTA, Eyebrow, ButtonLink, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Our Community",
  description:
    "Join the TechMindsVerse community of learners, builders, creatives, entrepreneurs, and technology enthusiasts exploring ideas and growing through collaboration.",
};

const communityValues = [
  {
    number: "01",
    title: "Learn and Share",
    description:
      "Exchange knowledge, explore technology, and learn from the perspectives and experiences of others.",
  },
  {
    number: "02",
    title: "Build Together",
    description:
      "Connect around ideas, skills, and opportunities to collaborate on meaningful digital solutions.",
  },
  {
    number: "03",
    title: "Grow Through Connection",
    description:
      "Meet people with shared interests, discover new perspectives, and develop through participation in a wider technology ecosystem.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        label="Our Community"
        title="Find your people. Build your future."
        description="A community for people curious about technology, creativity, collaboration, and meaningful growth."
      />

      <section className="section container">
        <div className="community-feature">
          <div>
            <Eyebrow>THE TECHMINDSVERSE COMMUNITY</Eyebrow>
            <h2>Progress is better together.</h2>
            <p>
              Connect with learners, builders, creatives, entrepreneurs, and
              technology enthusiasts who want to explore ideas, exchange
              knowledge, develop skills, and create meaningful solutions.
            </p>
            <ButtonLink href={site.community} external>
              Join our WhatsApp community
            </ButtonLink>
          </div>

          <div className="community-art" aria-hidden="true">
            <span>CONNECT</span>
            <span>CREATE</span>
            <span>GROW</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          label="WHY COMMUNITY MATTERS"
          title="Learn together. Build together. Grow together."
          description="We believe technology becomes more meaningful when people share knowledge, combine their strengths, and work toward ideas that matter."
        />

        <div className="card-grid three">
          {communityValues.map((value) => (
            <article className="info-card" key={value.number}>
              <span className="card-number">{value.number} / COMMUNITY</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Your next meaningful connection could start here."
        description="Join the TechMindsVerse community and become part of a growing conversation around people, ideas, and technology."
        href={site.community}
        label="Join the community"
      />
    </>
  );
}
