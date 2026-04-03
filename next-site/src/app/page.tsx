import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerChildren, ScaleReveal, ParallaxImage } from "@/components/motion";
import { SITE } from "@/lib/constants";
import { HomeFAQ } from "@/components/sections/home-faq";

export const metadata: Metadata = {
  title: `${SITE.name} | Adult Family Home in Mount Vernon, WA`,
};

export default function HomePage() {
  return (
    <>
      <Navbar variant="light" />

      {/* ===== HERO ===== */}
      <header
        id="main"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        tabIndex={-1}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/dsc00600.webp"
            alt="Skagit River adult family home exterior in Mount Vernon, WA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-12">
          <FadeIn delay={0.1}>
            <p className="text-white text-xs uppercase tracking-[0.35em] mb-6 font-medium hero-text-sm px-5 py-2 border border-white/30 rounded-full inline-block backdrop-blur-sm bg-white/10">
              Skagit River LLC
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-sand mb-6 leading-[0.95] font-light tracking-tight font-serif hero-text">
              Comfort. Care. <br />
              <span className="italic">Family.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto mb-4 hero-text-sm">
              A warm, residential adult family home where your loved ones receive
              personalized attention, dignity, and a true sense of belonging.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-white/80 text-sm md:text-base font-normal tracking-wide mb-10 hero-text-sm">
              Serving Mount Vernon and surrounding areas in Skagit County, WA.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 bg-clay text-white px-8 py-4 rounded-full text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Schedule a Visit
              </Link>
              <Link
                href="/services"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-white hover:text-rock transition-colors"
              >
                View our care
              </Link>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ===== TRUST STRIP ===== */}
      <FadeIn>
        <section className="py-6 px-6 bg-rock">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-sand/80 font-normal">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Licensed WA State Adult Family Home
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              24/7 Awake Staff
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              DSHS #{SITE.license}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              RN Delegated Medication Management
            </span>
          </div>
        </section>
      </FadeIn>

      {/* ===== EDITORIAL INTRO — ASYMMETRIC LAYOUT (Fix #7: Break the grid) ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto relative">
          {/* Offset overlapping image composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Image cluster — asymmetric overlap */}
            <div className="lg:col-span-7 relative">
              <ScaleReveal>
                <div className="relative">
                  {/* Main image */}
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden img-hover">
                    <Image
                      src="/gallery/dsc00613.webp"
                      alt="Welcoming front porch and entryway at Skagit River"
                      fill
                      className="object-cover !relative"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  {/* Floating accent card — overlaps main image */}
                  <div className="hidden lg:flex absolute -bottom-8 -right-6 bg-sage text-white rounded-2xl px-6 py-5 shadow-xl z-10 items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-serif font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-sm font-medium">Residents max</p>
                      <p className="text-xs text-white/70">Intimate, personal care</p>
                    </div>
                  </div>
                </div>
              </ScaleReveal>
            </div>

            {/* Text — pushed down for asymmetry */}
            <div className="lg:col-span-5 lg:pt-16">
              <FadeIn direction="right">
                <span className="inline-flex items-center gap-2 text-sage text-xs font-medium uppercase tracking-[0.25em] mb-6">
                  <span className="w-8 h-px bg-sage" />
                  More than just care
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8 font-normal text-rock tracking-tight font-serif">
                  A true home for{" "}
                  <span className="italic text-clay">your family.</span>
                </h2>
                <p className="text-rock/70 text-lg font-light leading-relaxed mb-6">
                  Transitioning to care shouldn&apos;t mean losing the comfort of home.
                  We provide a safe, intimate environment where residents are treated
                  like family, supported by professional caregivers around the clock.
                </p>
                <p className="text-rock/70 font-light leading-relaxed mb-8">
                  With a small number of residents, our caregivers form meaningful
                  bonds with each person, adapting to their unique preferences,
                  routines, and needs. Home-cooked meals, gentle activities, and
                  constant companionship make every day feel natural.
                </p>
                <Link
                  href="/about"
                  className="link-animate inline-flex items-center gap-2 text-clay font-medium text-sm group"
                >
                  Learn about our story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ZIGZAG ===== */}
      <section className="py-20 px-6 md:px-12 bg-linen rounded-[3rem] mx-2 md:mx-6 relative grain">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 text-sage text-xs font-medium uppercase tracking-[0.25em] mb-4">
                <span className="w-8 h-px bg-sage" />
                What we do
                <span className="w-8 h-px bg-sage" />
              </span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-rock font-normal">
                Our Expertise
              </h2>
              <p className="text-rock/60 font-light mt-4 text-lg">
                Comprehensive care tailored to individual needs.
              </p>
            </div>
          </FadeIn>

          {/* Expertise 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
            <FadeIn direction="left" className="order-2 md:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage uppercase tracking-widest mb-4">
                Personalized Support
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight font-normal">
                Activities of Daily Living
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                We assist with all daily routines respectfully and gently. Our goal
                is to maintain dignity while providing the necessary support for
                bathing, dressing, grooming, and mobility. We adapt to the
                resident&apos;s pace, never rushing the process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Gentle bathing &amp; dressing assistance
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Safe transferring &amp; mobility support
                </li>
              </ul>
            </FadeIn>
            <ScaleReveal className="order-1 md:order-2">
              <div className="h-[400px] rounded-2xl overflow-hidden img-hover">
                <Image
                  src="https://kenwoodcare.com/wp-content/uploads/2019/01/shutterstock_367740032.jpg"
                  alt="Caregiver assisting senior resident with daily activities"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
          </div>

          {/* Expertise 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
            <ScaleReveal>
              <div className="h-[400px] rounded-2xl overflow-hidden img-hover">
                <Image
                  src="https://i.ibb.co/N6F0frqV/Medication-Management-Tips-for-Seniors.jpg"
                  alt="Medication management and care coordination"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
            <FadeIn direction="right">
              <span className="inline-flex items-center gap-2 rounded-full bg-clay/10 px-3 py-1 text-xs font-medium text-clay-dark uppercase tracking-widest mb-4">
                Medical Oversight
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight font-normal">
                Health &amp; Medication Management
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                Managing medications can be complex. Our trained staff handles
                storage, dispensing, and logging of all prescriptions. We closely
                monitor vital signs and coordinate seamlessly with primary care
                physicians and home health agencies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Accurate medication administration
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Coordination with healthcare providers
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Expertise 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <FadeIn direction="left" className="order-2 md:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage uppercase tracking-widest mb-4">
                Quality of Life
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight font-normal">
                Engagement &amp; Well-being
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                A fulfilling life goes beyond physical health. We encourage social
                interaction through group activities, gentle exercises, and hobbies.
                Our home features comfortable common areas designed for relaxation
                and family visits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Music therapy and gentle exercises
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Inviting spaces for family gatherings
                </li>
              </ul>
            </FadeIn>
            <ScaleReveal className="order-1 md:order-2">
              <div className="h-[400px] rounded-2xl overflow-hidden img-hover">
                <Image
                  src="https://i.ibb.co/4wx6m52c/mary-beth-with-residents-2-800x.webp"
                  alt="Staff engaging with residents in common area"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
          </div>
        </div>
      </section>

      {/* ===== FULL-BLEED IMAGE DIVIDER (Fix #5) ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div
          className="parallax-divider absolute inset-0"
          style={{ backgroundImage: "url('/gallery/dsc00616.webp')" }}
        />
        <div className="absolute inset-0 bg-rock/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-white/70 text-sm uppercase tracking-[0.25em] mb-4 font-medium">
              What families say
            </p>
            <p className="text-white text-3xl md:text-5xl font-serif italic leading-tight max-w-2xl">
              &ldquo;It didn&apos;t feel like a facility &mdash; it felt like a home.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          {/* Featured testimonial */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
            <ScaleReveal className="w-full md:w-5/12">
              <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-stone relative img-hover">
                <Image
                  src="https://i.ibb.co/q38P8Ykt/IMG-3019edit-2.jpg"
                  alt="Family visiting resident at Skagit River"
                  fill
                  className="object-cover mix-blend-multiply opacity-90"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </ScaleReveal>
            <FadeIn direction="right" className="w-full md:w-7/12">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage uppercase tracking-widest mb-4">
                Family Testimonial
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight leading-tight font-normal">
                &ldquo;They gave us our peace of mind back.&rdquo;
              </h2>
              <p className="text-lg text-rock/80 font-light mb-8 italic leading-relaxed">
                &ldquo;Moving our father into care was the hardest decision we&apos;ve ever
                made. From the moment we walked into Skagit River, the guilt faded.
                It didn&apos;t feel like a facility; it felt like a home. The staff knows
                exactly how he likes his coffee, they sit and listen to his stories,
                and the medical oversight is impeccable. We can finally sleep at
                night knowing he is safe, loved, and treated with absolute dignity.&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-rock/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-sm font-serif">
                  S
                </div>
                <div>
                  <p className="text-sm font-medium text-rock">S.J.</p>
                  <p className="text-xs font-light text-rock/60">
                    Daughter of Resident, Seattle, WA
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Additional quotes */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                quote:
                  "What stood out most was how personal everything feels. The caregivers noticed small details and it made our mom feel truly known.",
                name: "Michael T.",
                relation: "Son of a Resident",
                initial: "M",
                color: "bg-clay",
              },
              {
                quote:
                  "Communication has been exceptional. We get updates, answers quickly, and we always feel welcomed when we visit. It's a relief to have a team we trust.",
                name: "Amina K.",
                relation: "Daughter of a Resident",
                initial: "A",
                color: "bg-sage",
              },
              {
                quote:
                  "The home is spotless, calm, and warm. It doesn't feel clinical. Our family finally feels at peace with the decision.",
                name: "Jasmine R.",
                relation: "Niece of a Resident",
                initial: "J",
                color: "bg-clay",
              },
              {
                quote:
                  "We toured several places, but Skagit River felt different immediately. The staff was attentive, patient, and kind. It's the first place that felt right.",
                name: "David L.",
                relation: "Grandson of a Resident",
                initial: "D",
                color: "bg-sage",
              },
            ].map((t) => (
              <div key={t.name} className="border-t border-rock/10 pt-8">
                <p className="text-lg text-rock/80 font-light italic leading-relaxed mb-6 font-serif">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-serif`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-rock">{t.name}</p>
                    <p className="text-xs font-light text-rock/60">
                      {t.relation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="flex items-center justify-center gap-2 text-sage text-xs font-medium uppercase tracking-[0.25em] mb-4">
              <span className="w-8 h-px bg-sage" />
              Common questions
              <span className="w-8 h-px bg-sage" />
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center tracking-tight font-normal">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <HomeFAQ />
        </div>
      </section>

      <Footer />
    </>
  );
}
