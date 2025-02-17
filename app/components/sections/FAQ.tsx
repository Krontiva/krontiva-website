"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What does Krontiva Africa do?",
    answer: "Krontiva Africa is a tech consulting firm that provides innovative solutions to transform businesses through our expertise in digital transformation and customer experience."
  },
  {
    id: 2,
    question: "Who can benefit from Krontiva's services?",
    answer: "Our services cater to businesses across various sectors including enterprises, service-based industries such as retail, finance, logistics, and technology."
  },
  {
    id: 3,
    question: "Where is Krontiva Africa located?",
    answer: "Our corporate office is located in Accra, Ghana. For partnerships or collaborations, please refer to our contact section for detailed information."
  },
  {
    id: 4,
    question: "How do I get started with Krontiva Africa?",
    answer: "To get started, fill out the inquiry form on our contact form, through which a member of our team will guide you through shared understanding and needs assessment."
  },
  {
    id: 5,
    question: "What services does Krontiva Africa offer?",
    answer: "We specialize in: Customer Transformation, Operational Transformation, Financial Transformation, and Workforce Development."
  },
  {
    id: 6,
    question: "Does Krontiva Africa provide customized solutions?",
    answer: "Yes, we tailor our solutions to meet your specific needs. Our team closely works with you to design strategies and tools that align with your goals."
  },
  {
    id: 7,
    question: "How can Krontiva Africa help my business grow?",
    answer: "EngageEase is one of our flagship products, a conversational commerce platform that helps with selling, ordering, and delivery operations. It simplifies customer engagement and boosts business efficiency."
  },
  {
    id: 8,
    question: "Can Krontiva assist with digital transformation?",
    answer: "Absolutely! We offer comprehensive digital transformation services to help modernize your business processes, optimize workflows, and stay competitive in a fast-moving market."
  },
  {
    id: 9,
    question: "How can I reach your Customer Success team?",
    answer: "You can contact our Customer Success Management directly through the service provider. They're available to assist with any concerns."
  },
  {
    id: 10,
    question: "What are your hours of operation?",
    answer: "Our standard business hours are 8:30am to 5:00pm GMT, Monday to Friday. We also work on weekends for selected client needs."
  },
  {
    id: 11,
    question: "What kind of support does your team provide?",
    answer: "Our Customer Success team provides technical support, product training, and ongoing guidance to ensure you get the most out of our solutions."
  },
  {
    id: 12,
    question: "How quickly can I expect a response?",
    answer: "We strive to respond to all inquiries within 24 hours during business days. Urgent matters may be addressed immediately."
  },
  {
    id: 13,
    question: "Does Krontiva partner with other companies?",
    answer: "Yes, we are open to partnerships and collaborations that align with our values. Please contact us for corporate affairs or partnership inquiries."
  },
  {
    id: 14,
    question: "How can I propose a collaboration?",
    answer: "Send us your proposal through our contact form and a representative from our team will get back to you."
  },
  {
    id: 15,
    question: "How much do your services cost?",
    answer: "Our pricing depends on the type of service and the scale of your project. Contact us for a customized quote based on your business needs."
  },
  {
    id: 16,
    question: "Are there free trials for your products?",
    answer: "Some of our products offer free trial periods. Contact us to learn more about trial options for your specific needs."
  },
  {
    id: 17,
    question: "How secure are your solutions?",
    answer: "We prioritize the security of your data. All our products and solutions are designed with robust security features to protect your information."
  },
  {
    id: 18,
    question: "Can you assist with reconciliation and financial tracking?",
    answer: "Yes, our financial reconciliation services include products like ManuPro and Delika, which help streamline accounting and financial management."
  },
  {
    id: 19,
    question: "How do I apply for a job or internship at Krontiva Africa?",
    answer: "Visit our jobs page to view current openings or send your application to the email listed in our Contact Us section."
  },
  {
    id: 20,
    question: "Can I request a consultation?",
    answer: "Yes! Simply reach out to us through the contact details provided, and we'll schedule a consultation to discuss your needs."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services, partnerships, and processes. If you need more information, feel free to reach out to our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-8 flex items-start gap-4 text-left"
              >
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full flex-shrink-0">
                  {String(faq.id).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-display font-bold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200
                        ${openId === faq.id ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 