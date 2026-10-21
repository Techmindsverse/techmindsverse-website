
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, CTA, Eyebrow, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team and community contributors shaping TechMindsVerse, the Technology Mindset Universe.",
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  links: {
    linkedin?: string;
    x?: string;
    instagram?: string;
    website?: string;
  };
};

const leadership: TeamMember[] = [
  {
    name: "Shedrack Nliam",
    role: "Chief Executive Officer",
    description: "Vision, strategy, and overall direction.",
    image: "/images/team/shedrack-nliam.jpg",
    links: {
          linkedin: "https://www.linkedin.com/in/shedrack-nliam-856980309",
          x: "https://x.com/ShedrackNliam",
          instagram: "",
          website: "https://shedracknliam.com.ng",
    },
  },
  {
    name: "Kayode Oluwabunmi",
    role: "Chief Operating Officer",
    description: "Operations, coordination, and execution.",
    image: "/images/team/kayode-oluwabunmi.jpg",
    links: {},
  },
  {
    name: "Emmanuel Nathaniel",
    role: "Head of Products",
    description:
      "Creative direction, product design, UI/UX, and shaping product experiences.",
    image: "/images/team/emmanuel-nathaniel.jpg",
    links: {},
  },
  {
    name: "Ikechukwu Precious Chizaram",
    role: "Head of Growth",
    description:
      "Marketing, brand visibility, digital campaigns, and audience development.",
    image: "/images/team/ikechukwu-precious-chizaram.jpg",
    links: {},
  },
];

const communityTeam: TeamMember[] = [
  {
    name: "Uka Chibuike Richard",
    role: "Community Manager",
    description:
      "Supports community engagement, communication, and member connections.",
    image: "/images/team/uka-chibuike-richard.jpg",
    links: {},
  },
  {
    name: "John Daniel Ogechukwu",
    role: "Assistant Community Manager",
    description:
      "Supports community coordination and member engagement.",
    image: "/images/team/john-daniel-ogechukwu.jpg",
    links: {},
  },
];

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="card-grid two">
      {members.map((person) => {
        const socialLinks = [
          { label: "LinkedIn", href: person.links.linkedin },
          { label: "X", href: person.links.x },
          { label: "Instagram", href: person.links.instagram },
          { label: "Website", href: person.links.website },
        ].filter(
          (item): item is { label: string; href: string } =>
            Boolean(item.href),
        );

        return (
          <article className="team-card" key={person.name}>
            <div className="team-card-photo">
              <Image
                src={person.image}
                alt={person.name}
                width={480}
                height={480}
                className="team-headshot"
              />
            </div>

            <div className="team-card-copy">
              <h3>{person.name}</h3>
              <p className="team-role">{person.role}</p>
              <p>{person.description}</p>

              {socialLinks.length > 0 && (
                <div className="team-social-links">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on ${social.label}`}
                    >
                      {social.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageIntro
        label="Our Team"
        title="The people behind the vision."
        description="Meet the people bringing different strengths together to advance collaboration, meaningful technology, and shared growth."
      />

      <section className="section container">
        <SectionHead
          label="CORE LEADERSHIP"
          title="Different strengths. One direction."
          description="Our leadership team brings together vision, operations, product thinking, and growth to guide the TechMindsVerse ecosystem."
        />

        <TeamGrid members={leadership} />
      </section>

      <section className="section container">
        <SectionHead
          label="COMMUNITY TEAM"
          title="Building connections that matter."
          description="Our community team helps people connect, participate, and grow within the TechMindsVerse ecosystem."
        />

        <TeamGrid members={communityTeam} />
      </section>

      <section className="section container">
        <div className="split-section">
          <div>
            <Eyebrow>ONE ECOSYSTEM</Eyebrow>
            <h2>We build better when we build together.</h2>
            <p>
              TechMindsVerse brings people, skills, ideas, and technology
              together through practical learning, collaboration, and the
              development of meaningful solutions.
            </p>
          </div>

          <div className="number-stack">
            <span>01 / Learn with purpose</span>
            <span>02 / Build meaningful solutions</span>
            <span>03 / Grow through collaboration</span>
          </div>
        </div>
      </section>

      <CTA
        title="Let's build something meaningful together."
        description="Connect with TechMindsVerse to explore ideas, opportunities, and collaboration."
        href="/contact"
        label="Contact TechMindsVerse"
      />
    </>
  );
}
