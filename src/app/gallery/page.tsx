import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Gallery", description: "See the transformations — moments from Trinetra Foundation's Gandharividye training sessions." };

const items = [
  { emoji:"🧘", label:"Group Meditation Session",     cat:"Training"  },
  { emoji:"👁️", label:"Third Eye Activation",        cat:"Workshop"  },
  { emoji:"🎓", label:"Batch Graduation Day",         cat:"Events"    },
  { emoji:"✋", label:"Blindfolded Perception",        cat:"Training"  },
  { emoji:"📚", label:"Vedic Study Module",           cat:"Academics" },
  { emoji:"🌿", label:"Pranayama Practice",           cat:"Wellness"  },
  { emoji:"🙏", label:"Online Zoom Batch",            cat:"Online"    },
  { emoji:"🎯", label:"Focus Training Activity",      cat:"Training"  },
  { emoji:"🌟", label:"Student Achievement Showcase", cat:"Events"    },
  { emoji:"💡", label:"Parent Orientation Session",   cat:"Events"    },
  { emoji:"🔮", label:"Sensory Awareness Exercise",   cat:"Training"  },
  { emoji:"🏆", label:"Annual Trinetra Celebration",  cat:"Events"    },
];

const catColors: Record<string,string> = {
  Training:  "bg-saffron/10 text-saffron border-saffron/20",
  Workshop:  "bg-gold/10 text-gold border-gold/20",
  Events:    "bg-deep/8 text-ink border-deep/15",
  Academics: "bg-teal-700/10 text-teal-700 border-teal-700/20",
  Wellness:  "bg-emerald-600/10 text-emerald-700 border-emerald-600/20",
  Online:    "bg-blue-500/10 text-blue-700 border-blue-500/20",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <section className="bg-section-dark relative overflow-hidden pt-[72px]">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10 py-20 text-center max-w-3xl">
          <span className="tag-pill tag-pill-light mb-6 inline-block">✦ Gallery ✦</span>
          <h1 className="font-display font-black text-4xl md:text-5xl !text-white leading-tight mb-5">
            Moments of Transformation
          </h1>
          <p className="font-body text-xl text-cream/65">
            A glimpse into the extraordinary journeys of our students — their focus, their breakthroughs, their joy.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="container-site">
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {items.map((item, i) => (
              <div key={i}
                className={`card aspect-square flex flex-col items-center justify-center text-center p-5 cursor-pointer group ${catColors[item.cat]?.split(" ")[0] ?? ""}`}>
                <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">{item.emoji}</div>
                <div className="font-display font-semibold text-[0.8rem] text-deep leading-tight mb-2">{item.label}</div>
                <span className={`font-ui text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full border ${catColors[item.cat] ?? "bg-cream-mid text-muted"}`}>
                  {item.cat}
                </span>
              </div>
            ))}
          </div>

          {/* Placeholder notice */}
          <div className="rounded-2xl border-2 border-dashed border-saffron/25 bg-saffron/4 p-8 text-center">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="font-display font-bold text-xl text-deep mb-2">Real Photos Coming Soon</h3>
            <p className="font-body text-[0.95rem] text-muted max-w-lg mx-auto">
              Replace these placeholder cards with actual training session photographs using Next.js{" "}
              <code className="font-ui text-xs bg-cream-dark px-1.5 py-0.5 rounded">{"<Image />"}</code> components.
            </p>
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-16 md:py-24 bg-section-warm">
        <div className="container-site max-w-5xl">
          <SectionHeader tag="Watch & Learn" title="See Gandharividye in Action"
            subtitle="Watch our students demonstrate extraordinary abilities developed through our program." />
          <div className="grid md:grid-cols-2 gap-5">
            {["Blindfolded Reading Demo","Third Eye Activation Session"].map((v,i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-deep flex items-center justify-center relative cursor-pointer group border border-saffron/20">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, rgba(212,98,42,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-[0_4px_24px_rgba(212,98,42,0.5)]">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                  <div className="font-display font-semibold text-cream text-base">{v}</div>
                  <div className="font-ui text-xs text-cream/50 mt-1">Demo video placeholder</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-saffron relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="container-site relative z-10 text-center max-w-xl">
          <div className="font-display text-5xl text-white/20 mb-4">ॐ</div>
          <h2 className="font-display font-black text-3xl text-white mb-4">Your Child's Story Starts Here</h2>
          <p className="font-body text-lg text-white/80 mb-8">Join our upcoming batch and create your own transformation story.</p>
          <Link href="/contact" className="btn-white">Enroll Now <ArrowRight size={14} /></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
