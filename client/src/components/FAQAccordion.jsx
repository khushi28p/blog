import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is QuillJot?",
    answer: "QuillJot is an AI-powered blogging application designed to enhance your writing experience. It offers advanced features that streamline content creation and optimize your blog's performance. With QuillJot, you can focus on your creativity while we handle the technical details."
  },
  {
    question: "Is it user-friendly?",
    answer: "Absolutely! QuillJot is designed with user experience in mind. Its intuitive interface allows both beginners and experienced bloggers to navigate effortlessly and create stunning content."
  },
  {
    question: "How do I start?",
    answer: "Getting started with QuillJot is simple! Just sign up for an account, and you'll gain access to all our features. Start creating your first blog post in minutes and unleash your creativity."
  },
];

const FAQAccordion = () => {
  return (
    <div id='faqs' className="w-full max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-left font-semibold hover:bg-secondary transition-colors duration-200">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="bg-muted p-4 border-t border-border">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;