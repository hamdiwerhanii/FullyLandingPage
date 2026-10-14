import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
};

export default function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => undefined);
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden
      className="w-full rounded-lg border border-brand-800 shadow-lg shadow-brand-500/20"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
