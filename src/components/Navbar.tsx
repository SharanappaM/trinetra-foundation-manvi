"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../../public/Foundation (3).png"
import { usePathname } from "next/navigation";

const links = [
  { href: "/",        label: "Home"     },
  { href: "/about",   label: "About"    },
  { href: "/courses", label: "Courses"  },
  { href: "/gallery", label: "Gallery"  },
  { href: "/contact", label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // <nav
    //   className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
    //     scrolled
    //       ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(22,12,6,0.10)]"
    //       : "bg-transparent"
    //   }`}
    // >
    <nav
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
    pathname === "/" && !scrolled
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(22,12,6,0.10)]"
  }`}
>
      <div className="container-site flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <div className="logo-pulse w-10 h-10 rounded-full bg-saffron flex items-center justify-center text-white font-display font-bold text-lg select-none shrink-0">
            ॐ
          </div>
          <div>
            <div className="font-display text-[1.05rem] font-bold leading-tight text-deep tracking-wide">Trinetra</div>
            <div className="font-ui text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-saffron leading-none">Foundation</div>
          </div> */}
          <Image src={logo} alt="logo" className="w-60 h-15"/>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919972488787" className="flex items-center gap-1.5 font-ui text-[0.85rem] font-semibold text-saffron">
            <Phone size={14} /> +91 9972488787
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">Enroll Now</Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-cream-mid transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur border-t border-cream-dark px-5 pb-6 pt-3 space-y-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block font-ui font-medium text-base text-ink py-3 px-4 rounded-xl hover:bg-cream-mid transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
