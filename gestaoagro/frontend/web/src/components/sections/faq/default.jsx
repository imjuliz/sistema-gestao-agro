import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";

export default function FAQ(props) {
  const {
    title = "Perguntas frequentes",
    items = [
      {
        question: "O que é o sistema AgroTech?",
        answer: (
          <>
            <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
              In today's AI-driven world, standing out is harder than ever. While anyone can build a product, a professional landing page makes the difference between success and failure.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
              Launch UI helps you ship faster without compromising on quality.
            </p>
          </>
        ),
      },
      {
        question: "Quem pode usar o sistema?",
        answer: (
          <>
            <p className="text-muted-foreground mb-4 max-w-[600px]">
              No-code tools lock you into their ecosystem with recurring fees and limited control. They often come with performance issues and make it difficult to integrate with your product.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[600px]">
              You can't even change your hosting provider and basic things like web analytics come as extra costs and paid add-ons.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[600px]">
              What might seem like a convenient solution today could paint you into a corner tomorrow, limiting your ability to scale and adapt. Launch UI gives you full control of your code while maintaining professional quality.
            </p>
          </>
        ),
      },
      {
        question: "O sistema atende apenas grandes empresas?",
        answer: (
          <>
            <p className="text-muted-foreground mb-4 max-w-[580px]">
              Launch UI stands out with premium design quality and delightful touches of custom animations and illustrations.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[580px]">
              All components are carefully crafted to help position your product as a professional tool, avoiding the generic template look.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
              Unlike many libraries that rely on outdated CSS practices and old dependencies, Launch UI is built with modern technologies and best practices in mind.
            </p>
          </>
        ),
      },
      {
        question: 'Como funciona a rastreabilidade?',
        answer: (
          <>
            <p className="text-muted-foreground mb-4 max-w-[580px]">
              The basic version of Launch UI is open-source and free forever, under a do-whatever-you-want license.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[580px]">
              The pro version that contains more components and options is a one-time purchase that gives you lifetime access to all current and future content. Use it for unlimited personal and commercial projects - no recurring fees or restrictions.
            </p>
            <p className="text-muted-foreground mb-4 max-w-[580px]">
              For complete details about licensing and usage rights, check out{" "}
              <Link href="/pricing" className="text-foreground underline">
                the pricing page
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        question: "O sistema se adapta a diferentes culturas agrícolas e criações?",
        answer: (
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes! The complete Launch UI template is available for free on the{" "}
            <Link
              href="https://www.figma.com/community/file/1420131743903900629/launch-ui-landing-page-components-ui-kit"
              className="text-foreground underline"
            >
              Figma community
            </Link>
            .
          </p>
        ),
      },
      {
        question: "É possível acompanhar as finanças da empresa pelo sistema?",
        answer: (
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Actually, yes! I'm always actively looking for beta testers of new features. If you are interested in exchanging feedback for a discount, please contact me via{" "}
            <a href={siteConfig.links.email} className="underline underline-offset-2">
              email
            </a>
            .
          </p>
        ),
      },
    ],
    className,
  } = props;

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">{title}</h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value || `item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
