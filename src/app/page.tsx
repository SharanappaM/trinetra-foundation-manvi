import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import BenefitCard from "@/components/BenefitCard";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";

const stats    = [
  { value: "1,400+", label: "Children Trained"   },
  { value: "6+",    label: "Years Experience"    },
  { value: "98%",    label: "Parent Satisfaction" },
  { value: "30+",    label: "Learning Modules"    },
];

const benefits = [
  { icon: "🧠", title: "Enhanced Concentration",   description: "Laser-sharp focus through structured midbrain activation that measurably improves academic performance and daily attention." },
  { icon: "👁️", title: "Third Eye Awakening",      description: "Train the Ajna Chakra to perceive beyond ordinary senses — an ancient Vedic science now accessible to every child." },
  { icon: "📸", title: "Photographic Memory",      description: "Stimulate memory centres to help students absorb and recall information with remarkable speed and lasting accuracy." },
  { icon: "⚖️", title: "Emotional Balance",        description: "Deep meditation techniques reduce stress, ease anxiety, and build a calm, resilient, and confident mindset." },
  { icon: "🌟", title: "Heightened Intuition",     description: "Awaken your child's natural intuitive intelligence for sharper decision-making and unshakeable self-confidence." },
  { icon: "🎨", title: "Creative Spark",           description: "Unlock right-brain potential to enhance imagination, artistic expression, and innovative problem-solving skills." },
];

const steps    = [
  { n: "01", title: "Assessment",        desc: "We evaluate your child's current state and tailor the training path to their needs." },
  { n: "02", title: "Activation",        desc: "Structured exercises synchronise left and right brain hemispheres for peak potential." },
  { n: "03", title: "Sensory Training",  desc: "Guided practices develop heightened perception, inner vision, and sensory mastery." },
  { n: "04", title: "Skill Mastery",     desc: "Students demonstrate extraordinary abilities with ongoing mentorship and support." },
];

const courses  = [
  { badge: "Most Popular", title: "Offline Program — Manvi",     description: "Immersive in-person training at our Manvi centre with hands-on guidance from certified instructors.", duration: "4 Weeks", students: "Batch of 20", rating: "4.9", mode: "Offline" as const,  href: "/courses", featured: true },
  { badge: "Online Batch", title: "Gandharividye Online Classes",     description: "Live Zoom sessions delivering the full Gandharividye experience to your home, anywhere in India.", duration: "4 Weeks", students: "Limited Seats", rating: "4.8", mode: "Online" as const,  href: "/courses" },
  { badge: "1-Day Workshop", title: "Third Eye Activation Workshop",  description: "A focused 3-hour introductory workshop exploring Ajna Chakra activation — perfect as your first step.", duration: "1 Day",   students: "Max 30", rating: "4.9", mode: "Both"   as const,   href: "/courses" },
];

const testimonials = [
  { name: "Priya Sharma",  role: "Mother of 9-year-old", initials: "PS", stars: 5, quote: "My son used to struggle with focus. After 4 weeks at Trinetra Foundation, his teacher called to say he has transformed. His confidence is unbelievable!" },
  { name: "Rajesh Kumar",  role: "Father of two students", initials: "RK", stars: 5, quote: "Both my children completed the program. The blindfolded reading demonstration at the closing ceremony had us in tears of joy. Highly recommend!" },
  { name: "Anitha Menon",  role: "Parent from Mysore", initials: "AM", stars: 5, quote: "We enrolled for the online batch and the quality was exceptional. My daughter's memory and calmness have improved beyond what I imagined." },
];

const faqs = [
  { q: "What is Gandharividye?", a: "An ancient Indian practice inspired by Mahabharata's Gandhari — training children to develop inner sight, deep focus, midbrain activation, and heightened intuitive abilities through structured Vedic exercises." },
  { q: "What age group is suitable?", a: "Programs are designed for children aged 6–16 years. Special adult introductory workshops are also available upon request." },
  { q: "Are online classes as effective?", a: "Yes. Our online curriculum delivers the same outcomes via live Zoom sessions with interactive exercises and real-time guidance from certified instructors." },
  { q: "How long before results are visible?", a: "Most parents report noticeable improvements in focus and behaviour within the first week. Full program benefits are seen by the end of the 4-week course." },
  { q: "Is this scientifically validated?", a: "Our techniques align with modern neuroscience research on midbrain activation, mindfulness, and neuroplasticity, while being rooted in Vedic science." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-cream">
        {/* Ambient backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-8%] w-[560px] h-[560px] rounded-full bg-saffron/8 blur-3xl" />
          <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gold/6 blur-3xl" />
        </div>
        {/* Slow-spinning mandala ring */}
        <div className="absolute right-[4%] top-[12%] w-[420px] h-[420px] rounded-full border border-saffron/12 anim-spin hidden lg:block" />
        <div className="absolute right-[8%] top-[18%] w-[280px] h-[280px] rounded-full border border-dashed border-gold/15 anim-spin-rev hidden lg:block" />

        <div className="container-site grid lg:grid-cols-2 gap-12 items-center py-20 w-full">
          {/* Left */}
          <div className="anim-fade-up">
            <span className="tag-pill mb-6 inline-block">✦ Trinetra Foundation ✦</span>

            <h1 className="font-display font-black text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-deep mb-5">
              Awaken the{" "}
              <span className="shimmer-gold">Third Eye</span>
              <br className="hidden sm:block" /> Within Your Child
            </h1>

            <p className="font-body text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-lg">
              Ancient Gandharividye training for modern children. Unlock extraordinary focus, intuition, and inner vision — available offline in Manvi and online across India.
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {["Ages 6–16","Certified Trainers","Online & Offline","4-Week Program"].map(t => (
                <span key={t} className="flex items-center gap-1.5 font-ui text-sm text-ink/70 bg-white border border-cream-dark px-4 py-1.5 rounded-full shadow-sm">
                  <CheckCircle2 size={13} className="text-saffron shrink-0" /> {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Enroll Your Child <ArrowRight size={15} /></Link>
              <Link href="/courses" className="btn-outline">View Programs</Link>
            </div>
          </div>

          {/* Right — decorative Om emblem */}
          <div className="flex justify-center anim-float">
            <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/10 to-gold/8 border border-saffron/15" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full bg-saffron/6 border border-saffron/20" />
              {/* Core circle */}
              <div className="absolute inset-16 rounded-full bg-saffron flex flex-col items-center justify-center shadow-[0_8px_40px_rgba(212,98,42,0.4)]">
                <div className="font-display text-5xl text-white mb-0.5">ॐ</div>
                <div className="font-ui text-[0.55rem] text-white/70 tracking-[0.22em] uppercase">Trinetra</div>
              </div>
              {/* Floating tags */}
              {[
                { label: "Focus",      pos: "top-2 left-1/2 -translate-x-1/2" },
                { label: "Intuition",  pos: "top-1/2 -right-2 -translate-y-1/2" },
                { label: "Memory",     pos: "bottom-2 left-1/2 -translate-x-1/2" },
                { label: "Calm",       pos: "top-1/2 -left-2 -translate-y-1/2" },
              ].map(b => (
                <div key={b.label} className={`absolute ${b.pos} bg-white font-ui text-xs font-bold text-saffron px-3 py-1.5 rounded-full shadow-lg`}>
                  ✦ {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 rounded-full border-2 border-saffron/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-saffron/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="bg-section-saffron">
        <div className="container-site py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center py-4 ${i < stats.length - 1 ? "md:border-r border-white/20" : ""}`}>
              <div className="stat-num mb-1">{s.value}</div>
              <div className="font-ui text-[0.82rem] text-white/75 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site grid md:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="relative max-w-sm mx-auto w-full">
            <div className="aspect-square rounded-3xl bg-section-warm border border-saffron/15 flex flex-col items-center justify-center text-center p-10">
              <div className="text-7xl mb-4">👁️</div>
              <div className="font-display text-xl font-bold text-deep mb-2">Inner Vision</div>
              <p className="font-body text-[0.9rem] text-muted">
                The Ajna Chakra — seat of intuition, insight, and spiritual perception.
              </p>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-deep flex flex-col items-center justify-center text-center shadow-xl">
              <div className="font-display font-black text-2xl text-gold-light">12+</div>
              <div className="font-ui text-[0.65rem] text-cream/60 leading-tight mt-0.5">Years of<br/>Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeader tag="Who We Are" title="What Is Gandharividye?" center={false} />
            <p className="font-body text-[1.05rem] leading-relaxed text-muted mb-5">
              Inspired by the legendary Gandhari of the Mahabharata who cultivated supreme inner awareness, <strong className="text-ink">Gandharividye</strong> is an ancient Vedic practice that trains students to see with their inner eye — beyond physical sight.
            </p>
            <p className="font-body text-[1.05rem] leading-relaxed text-muted mb-8">
              At Trinetra Foundation, our certified trainers guide children aged 6–16 through structured midbrain activation, sensory enhancement, and focused meditation to unlock extraordinary cognitive potential.
            </p>
            <ul className="space-y-3 mb-8">
              {["Certified Gandharividye trainers","Scientifically structured curriculum","Safe, child-friendly environment","Ongoing parental guidance"].map(item => (
                <li key={item} className="flex items-center gap-3 font-ui text-[0.9rem] font-medium text-ink">
                  <CheckCircle2 size={17} className="text-saffron shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary bg-deep hover:bg-ink">
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="container-site">
          <SectionHeader tag="Why Gandharividye" title="Benefits That Transform Young Minds"
            subtitle="Holistic training that develops cognitive, emotional, and spiritual faculties that serve children for a lifetime." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(b => <BenefitCard key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* ── COURSES ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <SectionHeader tag="Our Programs" title="Choose Your Path to Inner Mastery"
            subtitle="Whether in Manvi or anywhere in India, we have a program for your child." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {courses.map(c => <CourseCard key={c.title} {...c} />)}
          </div>
          <div className="text-center">
            <Link href="/courses" className="btn-outline">View All Programs <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-dark relative overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10">
          <SectionHeader tag="How It Works" title="Your Child's Journey to Inner Mastery"
            subtitle="A structured, caring pathway from first session to extraordinary ability." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {steps.map((s, i) => (
              <div key={s.n} className="p-6 rounded-[1.25rem] bg-white/5 border border-saffron/20 hover:bg-white/8 transition-colors">
                <div className="w-12 h-12 rounded-full bg-saffron flex items-center justify-center font-display font-black text-lg text-white mb-5">
                  {s.n}
                </div>

                     <h3 className="font-display font-semibold text-[1rem] !text-white mb-2">
  {s.title}
</h3>
                <p className="font-body text-[0.875rem] text-cream/60 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-5 text-saffron/40 font-bold text-xl">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="container-site">
          <SectionHeader tag="Parent Stories" title="What Families Are Saying"
            subtitle="Real transformations from real families across Karnataka and beyond." />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container-site max-w-3xl">
          <SectionHeader tag="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="group card overflow-hidden border-saffron/15">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-ui font-semibold text-[0.95rem] text-deep select-none">
                  {f.q}
                  <span className="text-saffron text-xl font-display transition-transform duration-200 group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 font-body text-[0.95rem] leading-relaxed text-muted bg-saffron/3">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-section-saffron relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container-site relative z-10 text-center max-w-2xl">
          <div className="font-display text-5xl text-white/20 mb-4 select-none">ॐ</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4 leading-tight">
            Begin Your Child's Extraordinary<br />Journey Today
          </h2>
          <p className="font-body text-lg text-white/80 mb-9 max-w-xl mx-auto">
            Seats are limited per batch. Contact us now to reserve your child's place in the upcoming Gandharividye program.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-white">Register — Consultation</Link>
            <a href="tel:+919972488787" className="btn-outline !border-white !text-white hover:!bg-white/12">
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
