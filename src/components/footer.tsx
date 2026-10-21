
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link
              href="/"
              className="brand"
              aria-label="TechMindsVerse homepage"
            >
              <Image
                src="/images/techmindsverse-logo.png"
                alt="TechMindsVerse official logo"
                width={44}
                height={44}
                className="brand-logo"
              />

              <span>
                {site.name}
                <small>{site.fullName}</small>
              </span>
            </Link>

            <p>
              {site.tagline}
              <br />
              Connecting people, ideas, skills, and opportunities
              through technology.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Explore</strong>

              {nav.slice(0, 4).map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <strong>Connect</strong>

              <Link href="/events">Events</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact</Link>

              <a
                href={site.community}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Community
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}.
            All rights reserved.
          </span>

          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
