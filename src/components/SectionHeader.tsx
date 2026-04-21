interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}
export default function SectionHeader({ tag, title, subtitle, center = true, light = false }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <div className={`mb-4 ${center ? "flex justify-center" : ""}`}>
          <span className={`tag-pill ${light ? "tag-pill-light" : ""}`}>✦ {tag} ✦</span>
        </div>
      )}
      <h2 className={`title-underline ${center ? "" : "title-underline-left"} font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight ${light ? "!text-cream" : "text-deep"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg mt-6 leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-cream/65" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
