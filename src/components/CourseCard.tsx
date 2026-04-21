import Link from "next/link";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

interface Props {
  badge: string; title: string; description: string;
  duration: string; students: string; rating: string;
  // mode: "Online" | "Offline" | "Both"; price: string;
  mode: "Online" | "Offline" | "Both"; 
  href: string; featured?: boolean;
}

// export default function CourseCard({ badge, title, description, duration, students, rating, mode, price, href, featured }: Props) {
export default function CourseCard({ badge, title, description, duration, students, rating, mode,  href, featured }: Props) {
  return (
    <div className={`card flex flex-col overflow-hidden ${featured ? "ring-2 ring-saffron shadow-[0_8px_32px_rgba(212,98,42,0.2)]" : ""}`}>
      {/* Header strip */}
      <div className={`px-6 py-3.5 flex items-center justify-between ${featured ? "bg-saffron" : "bg-saffron/8"}`}>
        <span className={`font-ui text-[0.7rem] font-bold tracking-widest uppercase ${featured ? "text-white" : "text-saffron"}`}>
          {badge}
        </span>
        <span className={`font-ui text-xs font-semibold px-3 py-1 rounded-full ${featured ? "bg-white/20 text-white" : "bg-saffron/12 text-saffron"}`}>
          {mode}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-[1.15rem] text-deep mb-2">{title}</h3>
        <p className="font-body text-[0.9rem] leading-relaxed text-muted mb-5">{description}</p>

        <div className="flex flex-wrap gap-3 text-[0.8rem] font-ui text-muted mb-5">
          <span className="flex items-center gap-1.5 bg-cream-mid px-2.5 py-1 rounded-full"><Clock size={12} />{duration}</span>
          <span className="flex items-center gap-1.5 bg-cream-mid px-2.5 py-1 rounded-full"><Users size={12} />{students}</span>
          <span className="flex items-center gap-1.5 bg-cream-mid px-2.5 py-1 rounded-full"><Star size={12} className="text-gold fill-gold" />{rating}</span>
        </div>

        <div className="mt-auto pt-5 border-t border-cream-dark flex items-center justify-between text-center">
          <div>
            {/* <div className="font-display font-bold text-2xl text-saffron">{price}</div> */}
            {/* <div className="font-ui text-xs text-muted/70">per program</div> */}
          </div>
         <Link
  href={href}
  className="btn-primary !py-2.5 !px-5 !text-sm w-full flex items-center justify-center gap-2"
>
  Enroll <ArrowRight size={13} />
</Link>
        </div>
      </div>
    </div>
  );
}
