"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurredStagger } from "@/components/ui/blurred-stagger-text";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StaggeredFAQProps {
  title?: string;
  subtitle?: string;
  supportText?: string;
  supportLink?: string;
  supportLinkText?: string;
  faqItems: FAQItem[];
  className?: string;
  hideSupport?: boolean;
}

export default function StaggeredFAQSection({
  title = "StaggeredFAQ",
  subtitle = "Everything you need to know about Ruixen UI",
  supportText = "Can't find what you're looking for? Reach out to our",
  supportLink = "#",
  supportLinkText = "Ruixen UI support team",
  faqItems,
  className,
  hideSupport = false,
}: StaggeredFAQProps) {
  const showSidebar = title || subtitle;

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className={cn(
          "grid gap-8 md:gap-12",
          showSidebar ? "md:grid-cols-5" : "md:grid-cols-1"
        )}>
          {showSidebar && (
            <div className="md:col-span-2">
              {title && <h2 className="text-foreground text-4xl font-semibold">{title}</h2>}
              {subtitle && (
                <p className="text-muted-foreground mt-4 text-balance text-lg">
                  {subtitle}
                </p>
              )}
              {!hideSupport && (
                <p className="text-muted-foreground mt-6 hidden md:block">
                  {supportText}{" "}
                  <a
                    href={supportLink}
                    className="text-primary font-medium hover:underline"
                  >
                    {supportLinkText}
                  </a>{" "}
                  for assistance.
                </p>
              )}
            </div>
          )}

          <div className={cn(showSidebar ? "md:col-span-3" : "max-w-3xl mx-auto w-full")}>
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {!hideSupport && showSidebar && (
            <p className="text-muted-foreground mt-6 md:hidden">
              {supportText}{" "}
              <a
                href={supportLink}
                className="text-primary font-medium hover:underline"
              >
                {supportLinkText}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
