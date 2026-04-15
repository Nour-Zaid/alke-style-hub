import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What payment methods do you accept?", a: "Currently, we accept Cash on Delivery (COD) only. Online payment options are coming soon." },
  { q: "How long does delivery take?", a: "Delivery within Amman takes 1-2 business days. Other cities in Jordan take 2-4 business days." },
  { q: "What is your return policy?", a: "You can return unworn items within 14 days of delivery. Items must be in original packaging with tags attached." },
  { q: "How do I track my order?", a: "Once your order is shipped, you'll receive a confirmation via WhatsApp or SMS with tracking details." },
  { q: "Do you offer international shipping?", a: "Currently, we only ship within Jordan. International shipping will be available soon." },
  { q: "How do I choose the right size?", a: "Our pieces run true to size with a relaxed fit. Check the size guide on each product page, or contact us for personalized recommendations." },
];

export default function FAQ() {
  return (
    <div className="container py-16 md:py-24 max-w-2xl mx-auto">
      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-sm text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
