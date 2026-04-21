interface Props { icon: string; title: string; description: string; }

export default function BenefitCard({ icon, title, description }: Props) {
  return (
    <div className="card p-7 flex flex-col group">
      <div className="w-14 h-14 rounded-2xl bg-saffron/10 flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-saffron/20">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-[1.05rem] text-deep mb-2">{title}</h3>
      <p className="font-body text-[0.95rem] leading-relaxed text-muted">{description}</p>
    </div>
  );
}
