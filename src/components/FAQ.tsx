import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How many lessons do I need to pass my driving test?",
      answer:
        "The number of lessons varies by individual, but on average, students need 20-30 hours of practical training. Our instructors will assess your progress and recommend the appropriate number of sessions based on your skill development.",
    },
    {
      question: "What documents are required for enrollment?",
      answer:
        "You'll need a valid national ID card or passport, passport-sized photos (2), proof of address, and the enrollment fee. For certain license categories, additional documentation may be required.",
    },
    {
      question: "Do you offer weekend classes?",
      answer:
        "Yes! We understand that many students and working professionals need flexible scheduling. We offer classes Monday through Sunday, including early morning, afternoon, and evening slots.",
    },
    {
      question: "What types of cars do you use for training?",
      answer:
        "We maintain a modern fleet including sedans (Toyota Corolla, Honda Civic, Nissan Sentra), SUVs, motorcycles, heavy trucks, and passenger vans. All vehicles are equipped with dual controls and safety features.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Absolutely! We offer flexible payment plans. You can split your payment into 2-3 installments depending on the package you choose. Contact our office for specific payment plan details.",
    },
    {
      question: "What happens if I fail my driving test?",
      answer:
        "Don't worry! We offer free test retry support with our Premium Package. For other packages, we provide additional coaching sessions at discounted rates to help you prepare for your next test.",
    },
    {
      question: "Can I choose my instructor?",
      answer:
        "Yes! While we'll assign you an instructor based on availability and your chosen license category, you can request a specific instructor. We'll do our best to accommodate your preference.",
    },
    {
      question: "Do you provide theory classes?",
      answer:
        "Yes, all our packages include comprehensive theory classes covering traffic rules, road signs, safety regulations, and test preparation. We provide study materials and conduct mock theory tests.",
    },
    {
      question: "How long does it take to complete a course?",
      answer:
        "Course duration varies: Basic Package (4-6 weeks), Standard Package (6-8 weeks), Premium Package (8-10 weeks). The timeline depends on your availability and learning pace.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We're open Monday to Saturday from 8:00 AM to 7:00 PM, and Sundays Closed . We offer flexible scheduling to accommodate your busy lifestyle.",
    },
    {
      question: "Do you assist with license applications?",
      answer:
        "Yes! Our Standard and Premium packages include license assistance. We'll guide you through the application process and help with all necessary paperwork.",
    },
    {
      question: "Can I practice driving my own car?",
      answer:
        "While we primarily use our training vehicles for safety and insurance reasons, we can arrange special sessions in your personal vehicle for an additional fee. This helps you get comfortable with your own car before the test.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Find answers to common questions about our driving school
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-full flex items-center justify-center">
                      <Minus className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-[#0075FF] to-[#0055CC] rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to help! Contact us for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="tel:+237681732693"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0075FF] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              📞 Call Us
            </motion.a>
            <motion.a
              href="https://wa.me/237681732693"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              💬 WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
