import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { SocialCard } from "@/components/SocialMediaSection";
import fb from "../../../public/fb.png"  
import insta from "../../../public/insta.png"  
import whatsapp from "../../../public/whatsapp.png"  
import youtube from "../../../public/youtube.png"  
export const metadata: Metadata = { title: "About Us", description: "Learn about Trinetra Foundation's mission." };

const team = [
  { name: "Shivanagayya Hiremath Guruji", role: "Founder & Chief Instructor", exp: "10+ years in Vedic Science", initials: "SH" },
  { name: "Sharanamma Mathaji",     role: "Senior Gandharividye Trainer", exp: "8+ years of teaching",         initials: "SH" },
  { name: "Sharan Basava",      role: "Child Psychologist & Advisor", exp: "PhD Developmental Psychology", initials: "SB" },
  { name: "Preethi Balaji",       role: "Online Programme Coordinator", exp: "8 years in e-learning",        initials: "PB" },
];
const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/shivanagayya.shivu.5",
    image: fb,
    color: "#ffffff",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/trinetra_foundatin_9972488787",
    image: insta,
    color: "#ffffff",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TrinetraFoundationIntuitioncla",
    image: youtube,
    color: "#ffffff",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919972488787",
    
    image:whatsapp,
   color: "#ffffff",
  },
];
const milestones = [
  { year: "2017", event: "Trinetra Foundation established in Manvi"  },
  { year: "2018", event: "First batch of 100+ students trained"          },
  { year: "2019", event: "Launched online Gandharividye program"         },
  { year: "2021", event: "Reached 2,000+ children across Karnataka"      },
  { year: "2023", event: "Expanded to all-India online program"          },
  { year: "2025", event: "1,400+ students empowered across India"        },
];

const values = [
  { icon: "🙏", title: "Reverence for Tradition", desc: "We honour ancient Vedic roots while making Gandharividye accessible and relevant for today's children." },
  { icon: "🔬", title: "Scientific Approach",     desc: "Our curriculum is backed by modern neuroscience on midbrain activation, mindfulness, and neuroplasticity." },
  { icon: "💚", title: "Child-Centric Safety",    desc: "Every exercise is age-appropriate, gentle, and designed with child development experts." },
  { icon: "🌱", title: "Holistic Growth",         desc: "We develop the whole child — cognitive, emotional, social, and spiritual dimensions." },
  { icon: "🤝", title: "Parent Partnership",      desc: "We work closely with families, providing ongoing guidance to reinforce learning at home." },
  { icon: "✨", title: "Inclusive Excellence",    desc: "Programs designed for children of all backgrounds, abilities, and learning styles." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-section-dark relative overflow-hidden pt-[72px]">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10 py-20 text-center max-w-3xl">
          <span className="tag-pill tag-pill-light mb-6 inline-block">✦ About Us ✦</span>
<h1 className="font-display font-black text-4xl md:text-5xl !text-white leading-tight mb-5">
            Rooted in Ancient Wisdom.<br />
            <span className="shimmer-gold">Built for Modern Children.</span>
          </h1>
          <p className="font-body text-xl text-cream/65 leading-relaxed">
            Trinetra Foundation was born from a single belief: every child carries extraordinary, untapped potential waiting to be awakened.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-sm mx-auto w-full aspect-square rounded-3xl bg-section-warm border-2 border-dashed border-saffron/25 flex flex-col items-center justify-center text-center p-10">
            <div className="text-6xl mb-4">🔱</div>
            <div className="font-display text-2xl font-bold text-deep mb-2">Our Mission</div>
            <p className="font-body text-[0.9rem] text-muted">
              To nurture confident, intuitive, and resilient individuals who carry both spiritual insight and practical life skills.
            </p>
          </div>
          <div>
            <SectionHeader tag="Our Story" title="From Ancient Wisdom to Young Minds" center={false} />
            <p className="font-body text-[1.05rem] leading-relaxed text-muted mb-5">
              Trinetra Foundation was founded in 2017 by Shivanagayya Hiremath Guruji, a dedicated practitioner of Vedic sciences who spent two decades studying ancient Indian knowledge systems, including the legendary practice of Gandharividye.
            </p>
            <p className="font-body text-[1.05rem] leading-relaxed text-muted mb-5">
              Inspired by the Mahabharata's Gandhari — who chose inner sight over external vision — he developed a structured, safe, and scientific curriculum that brings midbrain activation and third-eye awakening to children of all backgrounds.
            </p>
            <p className="font-body text-[1.05rem] leading-relaxed text-muted">
              Today, with over 1,400 students trained and a dedicated team of certified instructors, Trinetra Foundation stands as one of India's leading Gandharividye institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="container-site max-w-3xl">
          <SectionHeader tag="Our Journey" title="Milestones of Growth" />
          <div className="relative pl-0">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-saffron/20" />
            <div className="space-y-6">
              {milestones.map(m => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center font-display font-black text-sm text-white shrink-0 z-10">
                    {m.year}
                  </div>
                  <div className="flex-1 card p-5 mt-1">
                    <p className="font-ui font-medium text-[0.925rem] text-deep">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 md:py-28 bg-section-dark relative overflow-hidden">
  

  <div className="dot-grid absolute inset-0" />

  <div className="container-site relative z-10">
    
    <SectionHeader
      tag="Connect With Us"
      title="Follow Us Online"
      subtitle="Stay updated with our latest videos, tips, and community stories."
      light
    />

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      {socialLinks.map((s) => (
        <SocialCard key={s.name} {...s} />
      ))}
    </div>

  </div>
</section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <SectionHeader tag="Our Team" title="Meet Our Instructors"
            subtitle="A devoted team of certified trainers, educators, and spiritual practitioners." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(t => (
              <div key={t.name} className="card p-7 text-center">
                <div className="w-20 h-20 rounded-full bg-saffron flex items-center justify-center font-display font-black text-2xl text-white mx-auto mb-4">
                  {t.initials}
                </div>
                <h3 className="font-display font-bold text-[1rem] text-deep mb-1">{t.name}</h3>
                <div className="font-ui text-sm font-semibold text-saffron mb-1">{t.role}</div>
                <div className="font-ui text-xs text-muted">{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-section-dark relative overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10">
          <SectionHeader tag="Our Values" title="What We Stand For" light />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-[1.25rem] bg-white/5 border border-saffron/20 hover:bg-white/8 transition-colors">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display font-semibold text-[1rem] !text-white mb-2">{v.title}</h3>
                <p className="font-body text-[0.875rem] text-cream/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream text-center">
        <div className="container-site max-w-xl">
          <h2 className="font-display font-bold text-3xl text-deep mb-4">Ready to Begin?</h2>
          <p className="font-body text-lg text-muted mb-8">
            Join thousands of families who have already transformed their children's lives with Gandharividye.
          </p>
          <Link href="/contact" className="btn-primary">Book a Consultation <ArrowRight size={15} /></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
