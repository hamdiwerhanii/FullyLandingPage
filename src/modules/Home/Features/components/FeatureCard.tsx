import type { Feature } from "../types/features.types";

type FeatureCardProps = {
  feature: Feature;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 p-2 text-brand-500">
        <Icon aria-hidden />
      </div>
      <div>
        <h3 className="mt-1 mb-4 text-xl">{feature.title}</h3>
        <p className="text-neutral-400">{feature.description}</p>
      </div>
    </article>
  );
}
