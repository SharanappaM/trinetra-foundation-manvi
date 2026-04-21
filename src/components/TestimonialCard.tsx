import { Star } from "lucide-react";

interface Props { name: string; role: string; quote: string; stars?: number; initials: string; }

export default function TestimonialCard({ name, role, quote, stars = 5, initials }: Props) {
  return (
    <div className="card p-7 relative overflow-hidden flex flex-col">
      <div className="absolute top-3 right-5 font-display text-[5rem] leading-none text-saffron/6 select-none pointer-events-none">"</div>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
      </div>
      <p className="font-body text-[0.95rem] italic leading-relaxed text-ink/75 mb-6 flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
        <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center font-display font-bold text-sm text-white shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-ui font-semibold text-[0.875rem] text-deep">{name}</div>
          <div className="font-ui text-xs text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}
