
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="TechMindsVerse homepage"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/techmindsverse-logo.png"
            alt="TechMindsVerse official logo"
            width={44}
            height={44}
            className="brand-logo"
            priority
          />

          <span>
            {site.name}
            <small>{site.fullName}</small>
          </span>
        </Link>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              aria-current={
                pathname === item.href ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/team"
            className={pathname === "/team" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Team
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />

          <Link
            className="button button-primary nav-cta"
            href="/events"
          >
            Tech Experience 2027
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="icon-button mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
