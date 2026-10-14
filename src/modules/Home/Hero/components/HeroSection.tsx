import Button from "@/shared/components/Button";
import Section from "@/shared/components/Section";
import { CTA_HREF } from "@/shared/constants/nav";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import HeroVideo from "./HeroVideo";
import { HERO_VIDEOS } from "../constants/hero.data";

const SECTION_ID = "home";

export default function HeroSection() {
  return (
    <Section
      id={SECTION_ID}
      className="mt-0 pt-6 lg:pt-20"
      containerClassName="flex flex-col items-center"
    >
      <h1
        id={sectionTitleId(SECTION_ID)}
        className="animate-fade-in-up text-center text-4xl tracking-wide motion-reduce:animate-none sm:text-6xl lg:text-7xl"
      >
        VirtualR build tools{" "}
        <span className="text-gradient-brand">for developers</span>
      </h1>
      <p className="animate-fade-in-up mt-10 max-w-4xl text-center text-lg text-neutral-400 [animation-delay:100ms] motion-reduce:animate-none">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your
        imagination into immersive reality!
      </p>

      <div className="animate-fade-in-up my-10 flex flex-wrap justify-center gap-4 [animation-delay:200ms] motion-reduce:animate-none">
        <Button asChild variant="primary" size="md">
          <a href={CTA_HREF}>Start for free</a>
        </Button>
        <Button asChild variant="outline" size="md">
          <a href="#features">Explore features</a>
        </Button>
      </div>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
        {HERO_VIDEOS.map((video) => (
          <HeroVideo key={video.id} src={video.src} />
        ))}
      </div>
    </Section>
  );
}
