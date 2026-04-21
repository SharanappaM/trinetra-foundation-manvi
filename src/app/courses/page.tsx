import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Courses & Programs", description: "Explore Gandharividye training programs — offline in Manvi and online across India." };

const programs = [
  {
    id: "offline", badge: "★ Most Popular", featured: true,
    title: "Gandharividye Offline Program",
    tagline: "Full immersive experience at our Manvi centre",
    desc: "Our flagship 4-week offline program brings children into a dedicated learning environment with certified trainers. Hands-on exercises, group meditation, and real-time feedback make this the most impactful Gandharividye experience available.",
    meta: [{ icon: Clock, label: "4 Weeks (16 sessions)" }, { icon: Users, label: "Max 20 students" }, { icon: Star, label: "4.9 Rating" }],
    // mode: "Offline – Manvi", age: "Ages 6–16", price: "₹3,999",
    mode: "Offline – Manvi", age: "Ages 6–16",
    includes: ["16 live instructor-led sessions","Midbrain activation exercises","Guided group meditation","Blindfolded perception training","Parent progress reports","Certificate of completion","Lifetime alumni community access"],
    curriculum: [
      { w: "Week 1", t: "Foundation — Understanding Gandhari, Mind-Brain Science"             },
      { w: "Week 2", t: "Activation — Ajna Chakra, Pranayama, Sensory Exercises"            },
      { w: "Week 3", t: "Development — Blindfolded Tasks, Memory Techniques"                 },
      { w: "Week 4", t: "Mastery — Advanced Perception, Demonstrations, Graduation"          },
    ],
  },
  {
    id: "online", badge: "🌐 Online Batch", featured: false,
    title: "Gandharividye Online Classes",
    tagline: "Live Zoom sessions — train from anywhere in India",
    desc: "Our online program delivers the complete Gandharividye curriculum through structured live Zoom sessions. Same quality training in the comfort of your home, designed for families outside Manvi.",
    meta: [{ icon: Clock, label: "4 Weeks (16 sessions)" }, { icon: Users, label: "Max 25 students" }, { icon: Star, label: "4.8 Rating" }],
    mode: "Online – Zoom", age: "Ages 6–16", price: "₹2,499",
    includes: ["16 live Zoom sessions","Recorded session playback","Digital course materials","One-on-one parent check-ins","Online community group","Certificate of completion","Post-program WhatsApp support"],
    curriculum: [
      { w: "Week 1", t: "Introduction — Gandhari Story, Benefits, Setting Intention"          },
      { w: "Week 2", t: "Practice — Guided Meditation, Mudra, Chakra Work"                   },
      { w: "Week 3", t: "Skills — Sensory Training, Focus Techniques"                        },
      { w: "Week 4", t: "Consolidation — Advanced Tasks, Online Demo, Certification"         },
    ],
  },
  {
    id: "workshop", badge: "⚡ 1-Day Workshop", featured: false,
    title: "Third Eye Activation Workshop",
    tagline: "Introductory workshop open to all",
    desc: "A powerful 3-hour introductory workshop exploring the science and practice of Ajna Chakra activation. Perfect as a first step into Gandharividye or as a refresher for existing students.",
    meta: [{ icon: Clock, label: "1 Day (3 hours)" }, { icon: Users, label: "Max 30 students" }, { icon: Star, label: "4.9 Rating" }],
    mode: "Online & Offline", age: "Ages 6+", price: "₹108",
    includes: ["3-hour live session","Introduction to midbrain activation","Live guided meditation","Gandharividye demonstration","Q&A with instructor","Workshop recording"],
    curriculum: [
      { w: "Part 1", t: "What is Gandhari Vidye? Myths and Facts"                             },
      { w: "Part 2", t: "Benefits of Third Eye Activation — Live demonstration"              },
      { w: "Part 3", t: "Guided Meditation & Your First Experience"                          },
      { w: "Part 4", t: "Next Steps and Program Orientation"                                  },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-section-dark relative overflow-hidden pt-[72px]">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10 py-20 text-center max-w-3xl">
          <span className="tag-pill tag-pill-light mb-6 inline-block">✦ Our Programs ✦</span>
          {/* <h1 className="font-display font-black text-4xl md:text-5xl text-cream leading-tight mb-5"> */}
          <h1 className="font-display font-black text-4xl md:text-5xl !text-white leading-tight mb-5">
            Find the Right Program<br />for Your Child
          </h1>
          <p className="font-body text-xl text-cream/65 leading-relaxed">
            From introductory workshops to comprehensive 4-week training — a pathway for every child and family.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-site max-w-5xl space-y-14">
          {programs.map(p => (
            <div key={p.id} id={p.id}
              className={`rounded-[1.5rem] overflow-hidden border bg-white shadow-card ${p.featured ? "border-saffron ring-2 ring-saffron/30 shadow-[0_8px_40px_rgba(212,98,42,0.18)]" : "border-saffron/15"}`}>

              {/* Strip */}
              <div className={`px-8 py-4 flex items-center justify-between flex-wrap gap-3 ${p.featured ? "bg-saffron" : "bg-saffron/8"}`}>
                <span className={`font-ui font-bold text-sm ${p.featured ? "text-white" : "text-saffron"}`}>{p.badge}</span>
                <div className="flex gap-2 flex-wrap">
                  {[p.mode, p.age].map(tag => (
                    <span key={tag} className={`font-ui text-xs font-semibold px-3 py-1 rounded-full ${p.featured ? "bg-white/20 text-white" : "bg-saffron/12 text-saffron"}`}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="font-display font-bold text-2xl md:text-[1.75rem] text-deep mb-1">{p.title}</h2>
                  <p className="font-ui text-sm font-semibold text-saffron mb-4">{p.tagline}</p>
                  <p className="font-body text-[1rem] leading-relaxed text-muted mb-6">{p.desc}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {p.meta.map(m => (
                      <span key={m.label} className="flex items-center gap-1.5 font-ui text-sm text-muted bg-cream-mid px-3.5 py-1.5 rounded-full">
                        <m.icon size={13} className={m.icon === Star ? "text-gold fill-gold" : ""} />{m.label}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-semibold text-[1rem] text-deep mb-3">Curriculum Overview</h3>
                  <div className="space-y-2">
                    {p.curriculum.map(c => (
                      <div key={c.w} className="flex gap-3 items-start bg-cream-mid/60 p-3.5 rounded-xl">
                        <span className="font-ui text-[0.65rem] font-bold shrink-0 mt-0.5 bg-saffron text-white px-2 py-0.5 rounded-md">{c.w}</span>
                        <span className="font-body text-[0.9rem] text-muted">{c.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="bg-cream-mid/50 rounded-2xl p-6 flex flex-col h-fit border border-saffron/12">
                  {/* <div className="font-display font-black text-4xl text-saffron mb-0.5">{p.price}</div> */}
                  {/* <div className="font-ui text-xs text-muted mb-5">per child, per program</div> */}

                  <h4 className="font-ui font-bold text-s uppercase tracking-widest text-ink/60 mb-3">What's Included</h4>
                  <ul className="space-y-2 mb-6">
                    {p.includes.map(item => (
                      <li key={item} className="flex gap-2 items-start font-body text-[0.85rem] text-muted">
                        <CheckCircle2 size={14} className="text-saffron shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-primary w-full justify-center mb-2">
                    Enroll Now <ArrowRight size={14} />
                  </Link>
                  <Link href="/contact" className="btn-outline w-full justify-center !text-sm !py-2.5">
                    Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
