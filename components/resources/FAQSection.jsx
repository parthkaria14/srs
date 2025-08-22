"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  // Color palette
  const sectionBg = "#497088";
  const questionBg = "#fff";
  const questionText = "#222";
  const answerBg = "#22506B";
  const answerText = "#fff";

  const faqs = [
    {
      id: 1,
      question: "What documents are required for a home loan?",
      answer:
        "You'll need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, IT returns), bank statements for 6 months, property documents, and passport-size photographs.",
    },
    {
      id: 2,
      question: "How is the EMI calculated?",
      answer:
        "EMI is calculated using the formula: [P x R x (1+R)^N] / [(1+R)^N-1], where P is principal amount, R is monthly interest rate, and N is tenure in months.",
    },
    {
      id: 3,
      question: "What is the maximum loan amount I can get?",
      answer:
        "The loan amount depends on your income, credit score, and repayment capacity. Generally, banks offer up to 80-90% of the property value or 60 times your monthly income, whichever is lower.",
    },
    {
      id: 4,
      question: "Can I prepay my home loan?",
      answer:
        "Yes, most banks allow prepayment. For floating rate loans, there's usually no penalty. For fixed rate loans, some banks may charge a penalty of 2-3% on the outstanding amount.",
    },
    {
      id: 5,
      question: "What is stamp duty and registration?",
      answer:
        "Stamp duty is a tax paid to the state government for property registration. Registration charges are fees paid for legally registering the property in your name. Rates vary by state.",
    },
    {
      id: 6,
      question: "How long does the loan approval process take?",
      answer:
        "The home loan approval process typically takes 7-15 working days, depending on the completeness of your documentation and the bank's verification process.",
    },
    {
      id: 7,
      question:
        "What is the difference between fixed and floating interest rates?",
      answer:
        "Fixed rates remain constant throughout the loan tenure, while floating rates change with market conditions. Floating rates are generally lower initially but can fluctuate.",
    },
    {
      id: 8,
      question: "Can I transfer my home loan to another bank?",
      answer:
        "Yes, you can transfer your home loan through a balance transfer. This is beneficial if you find a better interest rate or service with another lender.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section
      style={{ background: sectionBg }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4 sm:gap-5">
          {faqs.map((faq) => (
            <Collapsible
              key={faq.id}
              open={openFaq === faq.id}
              onOpenChange={() => toggleFaq(faq.id)}
            >
              <CollapsibleTrigger className="w-full">
                <div
                  className="w-full rounded-md"
                  style={{
                    background: questionBg,
                    color: questionText,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    padding: '1.1rem 1.25rem',
                    border: 'none',
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: questionText }}>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 ml-2 transition-transform duration-200 flex-shrink-0 ${openFaq === faq.id ? "rotate-180" : ""}`}
                    style={{ color: sectionBg }}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div
                  className="w-full mt-1 rounded-md"
                  style={{
                    background: answerBg,
                    color: answerText,
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '0.5rem',
                  }}
                >
                  {faq.answer}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
