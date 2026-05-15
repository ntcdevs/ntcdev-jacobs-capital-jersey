"use client";
import { ChevronDown } from "lucide-react";
import config from "@/config.json";

function imgUrl(p: string) {
  if (!p) return "";
  if (p.startsWith("http") || p.startsWith("/")) return p;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  return base ? `${base}/${p}` : "";
}

/* ─── Fullscreen variant ─────────────────────────────────────────────────────
   Dark overlay on background image. Centered text. Works for: barbershop,
   restaurant, any dark/luxury category.
────────────────────────────────────────────────────────────────────────────── */
function FullscreenHero() {
  const { theme, hero, business } = config;
  const { accentColor, heroColor, primaryColor, textColor, mode } = theme;
  const bg = heroColor ?? primaryColor;

  return (
    <section id="hjem" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: bg }}>
      {imgUrl(config.images.hero) && (
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgUrl(config.images.hero)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      )}
      <div className="absolute inset-0" style={{ backgroundColor: bg, opacity: 0.75 }} />

      {/* Decorative lines — dark mode only */}
      {mode === "dark" && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }} />
          <div className="absolute top-0 right-1/4 w-px h-full" style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }} />
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: accentColor }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="animate-fade-in font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-8" style={{ color: accentColor }}>
          {hero.eyebrow}
        </p>
        <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tight mb-6">
          <span style={{ color: textColor }}>{hero.headline}</span>
          <span className="block" style={{ color: accentColor }}>{hero.headlineAccent}</span>
        </h1>
        <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16" style={{ backgroundColor: `${accentColor}66` }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <div className="h-px w-16" style={{ backgroundColor: `${accentColor}66` }} />
        </div>
        <p className="animate-fade-in-up animate-delay-300 font-[family-name:var(--font-inter)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12 text-white/70">
          {hero.subheadline}
        </p>
        <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt" className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase font-semibold transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: accentColor, color: bg }}>
            {hero.ctaText}
          </a>
          <a href="#tjenester" className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-all duration-300 text-white/70"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentColor; (e.currentTarget as HTMLElement).style.color = accentColor; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}>
            {hero.ctaSecondary}
          </a>
        </div>
        <p className="animate-fade-in-up animate-delay-500 font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase mt-16 text-white/20">{business.city}, Norge</p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-white/30">Scroll</span>
        <ChevronDown size={16} style={{ color: `${accentColor}80` }} />
      </div>
    </section>
  );
}

/* ─── Split variant ──────────────────────────────────────────────────────────
   Left: text on light/dark bg. Right: full-height image.
   Works for: electrician, clinic, cleaning, gym.
────────────────────────────────────────────────────────────────────────────── */
function SplitHero() {
  const { theme, hero, business } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const sectionBg = isLight ? "#ffffff" : primaryColor;
  const headingColor = isLight ? "#0f172a" : textColor;
  const bodyColor = isLight ? "#64748b" : `${textColor}80`;

  return (
    <section id="hjem" className="relative min-h-screen flex items-stretch" style={{ backgroundColor: sectionBg }}>
      {/* Left — text */}
      <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24 py-32 pt-40">
        <div className="max-w-xl animate-slide-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: accentColor }} />
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase" style={{ color: accentColor }}>
              {hero.eyebrow}
            </p>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: headingColor }}>
            {hero.headline}{" "}
            <span style={{ color: accentColor }}>{hero.headlineAccent}</span>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg leading-relaxed font-light mb-10" style={{ color: bodyColor }}>
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="px-8 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase font-semibold transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: accentColor, color: isLight ? "#ffffff" : primaryColor }}>
              {hero.ctaText}
            </a>
            <a href="#tjenester" className="px-8 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-all duration-300"
              style={{ border: `2px solid ${isLight ? "#e2e8f0" : `${textColor}22`}`, color: isLight ? "#64748b" : `${textColor}70` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentColor; (e.currentTarget as HTMLElement).style.color = accentColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = isLight ? "#e2e8f0" : `${textColor}22`; (e.currentTarget as HTMLElement).style.color = isLight ? "#64748b" : `${textColor}70`; }}>
              {hero.ctaSecondary}
            </a>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase mt-12" style={{ color: isLight ? "#cbd5e1" : `${textColor}25` }}>
            {business.city}, Norge
          </p>
        </div>
      </div>

      {/* Right — image */}
      <div className="hidden lg:block w-[45%] relative">
        <div className="absolute inset-0" style={{ backgroundColor: `${accentColor}15` }} />
        {imgUrl(config.images.hero) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgUrl(config.images.hero)} alt={business.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-[family-name:var(--font-playfair)] text-9xl font-bold opacity-10" style={{ color: accentColor }}>
              {business.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Accent corner */}
        <div className="absolute bottom-0 left-0 w-24 h-24" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor} 50%, transparent 50%)` }} />
      </div>
    </section>
  );
}

/* ─── Minimal variant ────────────────────────────────────────────────────────
   No image, pure typography + gradient bg. Works for: clinic, any clean brand.
────────────────────────────────────────────────────────────────────────────── */
function MinimalHero() {
  const { theme, hero, business } = config;
  const { accentColor, primaryColor, textColor, heroColor } = theme;
  const bg = heroColor ?? primaryColor;

  return (
    <section id="hjem" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{ background: `radial-gradient(ellipse at top right, ${accentColor}, transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5" style={{ background: `radial-gradient(ellipse at bottom left, ${accentColor}, transparent 60%)` }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full" style={{ border: `1px solid ${accentColor}33`, backgroundColor: `${accentColor}0d` }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase" style={{ color: accentColor }}>{hero.eyebrow}</p>
        </div>
        <h1 className="animate-fade-in-up font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl font-semibold leading-tight mb-8" style={{ color: textColor }}>
          {hero.headline}{" "}
          <span style={{ color: accentColor }}>{hero.headlineAccent}</span>
        </h1>
        <p className="animate-fade-in-up animate-delay-200 font-[family-name:var(--font-inter)] text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12" style={{ color: `${textColor}70` }}>
          {hero.subheadline}
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt" className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentColor, color: bg }}>
            {hero.ctaText}
          </a>
          <a href="#tjenester" className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-all duration-300"
            style={{ border: `1px solid ${textColor}22`, color: `${textColor}70` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = accentColor; (e.currentTarget as HTMLElement).style.borderColor = accentColor; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = `${textColor}70`; (e.currentTarget as HTMLElement).style.borderColor = `${textColor}22`; }}>
            {hero.ctaSecondary}
          </a>
        </div>
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase mt-16" style={{ color: `${textColor}25` }}>{business.city}, Norge</p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={16} style={{ color: `${accentColor}60` }} />
      </div>
    </section>
  );
}

export default function Hero() {
  const { variant } = config.hero;
  if (variant === "split")   return <SplitHero />;
  if (variant === "minimal") return <MinimalHero />;
  return <FullscreenHero />;
}
