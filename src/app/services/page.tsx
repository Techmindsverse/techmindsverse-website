
import { PageIntro, CTA, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Our Services",
  description:
    "Explore TechMindsVerse services across website development, digital products, UI/UX design, branding, digital marketing, social media management, and startup collaboration.",
};

const services = [
  {
    number: "01",
    name: "Website Development",
    description:
      "Purposeful, responsive websites for businesses, brands, organizations, and individuals—built to communicate clearly and support real goals.",
    deliverables: [
      "Business and organizational websites",
      "Personal and portfolio websites",
      "Landing pages and web experiences",
    ],
  },
  {
    number: "02",
    name: "Product Development",
    description:
      "Digital product experiences shaped around user needs, practical problem-solving, and the goals of the people building them.",
    deliverables: [
      "Web applications and digital platforms",
      "MVPs and product prototypes",
      "Product planning and implementation",
    ],
  },
  {
    number: "03",
    name: "UI/UX Design and Branding",
    description:
      "Thoughtful user experiences and visual identities that help products and organizations communicate with clarity and consistency.",
    deliverables: [
      "User interface and experience design",
      "Brand identity and visual direction",
      "Product flows and interface prototypes",
    ],
  },
  {
    number: "04",
    name: "Digital Marketing",
    description:
      "Digital strategies and campaigns that help brands improve online visibility, reach relevant audiences, and communicate their value.",
    deliverables: [
      "Digital campaign planning",
      "Search visibility and SEO foundations",
      "Online brand visibility strategy",
    ],
  },
  {
    number: "05",
    name: "Social Media Management",
    description:
      "Structured social media support that helps brands and organizations maintain a consistent presence and communicate with their audiences.",
    deliverables: [
      "Content planning and publishing",
      "Social channel management",
      "Audience engagement and growth support",
    ],
  },
  {
    number: "06",
    name: "Startup and Product Collaboration",
    description:
      "Collaboration with founders and teams to explore ideas, shape product direction, and work toward practical digital solutions.",
    deliverables: [
      "Early-stage idea exploration",
      "Product direction and planning",
      "Collaborative solution development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Our Services"
        title="Digital solutions, thoughtfully built."
        description="We bring technology, design, and strategy together to help businesses, organizations, founders, and individuals move meaningful ideas forward."
      />

      <section className="section container">
        <SectionHead
          label="WHAT WE DO"
          title="The right thinking. The right tools. Meaningful outcomes."
          description="From establishing a strong digital presence to shaping new products, our services focus on practical needs and purposeful execution."
        />

        <div className="card-grid two">
          {services.map((service) => (
            <article className="info-card" key={service.number}>
              <span className="card-number">
                {service.number} / SERVICE
              </span>

              <h3>{service.name}</h3>
              <p>{service.description}</p>

              <ul className="service-deliverables">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="split-section">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Understand first. Build with purpose.</h2>
            <p>
              Every project starts with understanding the problem, the people
              involved, and the outcome being pursued. From there, we work
              toward a solution that fits the actual need.
            </p>
          </div>

          <div className="number-stack">
            <span>01 / Understand the need</span>
            <span>02 / Shape the solution</span>
            <span>03 / Build and improve</span>
          </div>
        </div>
      </section>

      <CTA
        title="Have a project in mind?"
        description="Tell us what you're working on, what challenge you're facing, or what you'd like to build."
        href="/contact"
        label="Discuss your project"
      />
    </>
  );
}
