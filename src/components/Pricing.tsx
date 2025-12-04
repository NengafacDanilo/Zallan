import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Sparkles, Tag } from "lucide-react";
import { Button } from "./ui/button";

interface PricingProps {
  onEnroll: () => void;
}

export function Pricing({ onEnroll }: PricingProps) {
  const packages = [
    {
      name: "Basic Package",
      price: "75,000",
      duration: "4-6 weeks",
      lessons: "20 sessions",
      popular: false,
      features: [
        "20 practical driving lessons",
        "Theory classes included",
        "Category B license prep",
        "Certified instructor",
        "Modern training vehicle",
        "Flexible scheduling",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Standard Package",
      price: "120,000",
      duration: "6-8 weeks",
      lessons: "30 sessions",
      popular: true,
      features: [
        "30 practical driving lessons",
        "Complete theory course",
        "Road test preparation",
        "Mock driving tests (3)",
        "Certified instructor",
        "Modern training vehicle",
        "Flexible scheduling",
        "License assistance",
        "Study materials included",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Premium Package",
      price: "180,000",
      duration: "8-10 weeks",
      lessons: "40 sessions",
      popular: false,
      features: [
        "40 practical driving lessons",
        "Complete theory course",
        "Advanced road test prep",
        "Mock driving tests (5)",
        "Certified instructor (priority)",
        "Premium training vehicle",
        "Flexible scheduling",
        "License assistance",
        "Study materials included",
        "Defensive driving module",
        "Highway & night driving",
        "Free test retry support",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const addOns = [
    { name: "Extra Driving Lesson (1 hour)", price: "5,000 FCFA" },
    { name: "Mock Test Session", price: "8,000 FCFA" },
    { name: "Highway Driving (2 hours)", price: "12,000 FCFA" },
    { name: "Night Driving (2 hours)", price: "12,000 FCFA" },
    { name: "Defensive Driving Course", price: "35,000 FCFA" },
    { name: "Test Car Rental", price: "15,000 FCFA" },
  ];

  const paymentMethods = [
    "Mobile Money (MTN, Orange)",
    "Bank Transfer",
    "Cash Payment",
    "Installment Plans Available",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white py-20">
      <div className="container mx-auto px-4">
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
            Affordable{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the perfect package for your driving journey
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, scale: pkg.popular ? 1.05 : 1.02 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 ${
                pkg.popular ? "border-[#FFCC00]" : "border-gray-100"
              } ${pkg.popular ? "md:-mt-4 md:mb-0" : ""}`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#FFCC00] to-yellow-500 text-gray-900 text-center py-2 font-bold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  MOST POPULAR
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              )}

              <div className={`p-8 ${pkg.popular ? "pt-16" : ""}`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-center text-gray-900">
                  {pkg.name}
                </h3>

                <div className="text-center mb-6">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-[#0075FF]">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 mb-2">FCFA</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {pkg.duration} • {pkg.lessons}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0075FF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onEnroll}
                    className={`w-full py-6 rounded-lg ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#FFCC00] to-yellow-500 hover:from-yellow-500 hover:to-[#FFCC00] text-gray-900"
                        : "bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white"
                    }`}
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Additional{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-[#0075FF]" />
                  <span className="text-gray-900 font-medium">{addon.name}</span>
                </div>
                <span className="font-bold text-[#0075FF]">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] rounded-2xl p-8 md:p-12 text-white mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Payment Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur rounded-lg p-4 text-center"
              >
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                <p className="font-medium">{method}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 rounded-2xl p-8 text-center text-gray-900"
        >
          <h3 className="text-2xl font-bold mb-4">Special Discounts Available!</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">10%</p>
              <p>Student Discount</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15%</p>
              <p>Group Booking (3+)</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20%</p>
              <p>Early Bird Special</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
