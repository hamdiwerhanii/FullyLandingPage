import type { Testimonial } from "../types/testimonials.types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-5 font-light">
      <blockquote>
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className="h-10 w-10 rounded-full border border-neutral-300 object-cover"
        />
        <div>
          <p className="font-normal">{testimonial.name}</p>
          <p className="text-sm italic text-neutral-400">{testimonial.company}</p>
        </div>
      </figcaption>
    </figure>
  );
}
