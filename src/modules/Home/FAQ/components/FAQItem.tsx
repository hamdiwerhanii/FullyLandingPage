import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import type { FAQEntry } from "../types/faq.types";

type FAQItemProps = {
  entry: FAQEntry;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ entry, isOpen, onToggle }: FAQItemProps) {
  const triggerId = `faq-trigger-${entry.id}`;
  const panelId = `faq-panel-${entry.id}`;

  return (
    <div className="border-t border-neutral-800">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg sm:text-xl"
        >
          {entry.question}
          <ChevronDown
            aria-hidden
            className={cn(
              "shrink-0 text-brand-500 transition-transform duration-300 motion-reduce:transition-none",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
        className="pb-6 text-neutral-400"
      >
        {entry.answer}
      </div>
    </div>
  );
}
