import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Play, MessageCircle } from "lucide-react";
import logogWhite from "./../../public/Foundation_white.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream">
      {/* Sanskrit banner */}
      <div className="bg-saffron py-3 text-center font-display text-[0.7rem] tracking-[0.2em] text-white/90">
        ॐ श्री गणेशाय नमः &nbsp;·&nbsp; ॐ नमः शिवाय &nbsp;·&nbsp; सर्वे भवन्तु सुखिनः
      </div>

      <div className="container-site py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image  src={logogWhite} alt="logo" />
            {/* <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center text-white font-display font-bold text-lg shrink-0">ॐ</div>
            <div>
              <div className="font-display font-bold text-[1.05rem] text-cream leading-tight">Trinetra Foundation</div>
              <div className="font-ui text-[0.6rem] tracking-[0.18em] uppercase text-saffron-light leading-none">Gandharividye Training</div>
            </div> */}
          </div>
          <p className="font-body text-[0.9rem] leading-relaxed text-cream/60 mb-5">
            Awakening inner vision through ancient Vedic wisdom. We empower children to unlock extraordinary focus and intuition.
          </p>
          <div className="flex gap-2.5">
            {[MessageCircle, Play, Share2].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-saffron/30 text-saffron-light flex items-center justify-center transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display font-semibold text-[0.95rem] text-gold-light mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {["/","About","Courses","Gallery","Contact"].map((item, i) => {
              const href = item === "/" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link href={href} className="font-ui text-[0.85rem] text-cream/55 hover:text-cream transition-colors flex items-center gap-1.5">
                    <span className="text-saffron/60 text-xs">›</span>
                    {item === "/" ? "Home" : item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-display font-semibold text-[0.95rem] text-gold-light mb-5">Programs</h4>
          <ul className="space-y-2.5">
            {["Offline Batches","Online Classes","Third Eye Workshop","Guided Meditation","Midbrain Activation","Parent Orientation"].map(p => (
              <li key={p}>
                <Link href="/courses" className="font-ui text-[0.85rem] text-cream/55 hover:text-cream transition-colors flex items-center gap-1.5">
                  <span className="text-saffron/60 text-xs">›</span>{p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-[0.95rem] text-gold-light mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-saffron-light shrink-0 mt-0.5" />
              <span className="font-ui text-[0.85rem] text-cream/60 leading-snug">Near B.V.R Kids Campus <br />Lakshmi Narayan Temple, Jayanagar <br />Manvi – 584123, Karnataka</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-saffron-light shrink-0" />
              <a href="tel:+919972488787" className="font-ui text-[0.85rem] text-cream/60 hover:text-cream transition-colors">+91 9972488787</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-saffron-light shrink-0" />
              <a href="mailto:shivu9972488787@gmail.com" className="font-ui text-[0.85rem] text-cream/60 hover:text-cream transition-colors">shivu9972488787@gmail.com</a>
            </li>
          </ul>
          <div className="mt-5 p-3.5 rounded-xl bg-white/5 font-ui text-[0.78rem] text-cream/45 leading-relaxed">
            <strong className="text-cream/65">Mon–Fri:</strong> 8:00 AM – 7:00 PM<br />
            <strong className="text-cream/65">Saturday:</strong> 8:00 AM – 1:00 PM
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-5 text-center font-ui text-[0.75rem] text-cream/35">
        © {new Date().getFullYear()} Trinetra Foundation. All rights reserved. Built with devotion 🙏
      </div>
    </footer>
  );
}
