import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

interface HeroProps {
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/src/components/asset/images/454871435_122192223284024113_7687136193848615651_n.jpg",
      alt: "Zallan Driving School",
    },
    {
      src: "/src/components/asset/images/467993614_122211501878024113_5187836329635680787_n.jpg",
      alt: "Zallan Driving School",
      // src: "https://images.unsplash.com/photo-1694344500115-d2dcbc1ea38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwc2Nob29sJTIwY2FyfGVufDF8fHx8MTc2NDc1NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // alt: "Driving School Car",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#0075FF]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFCC00]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] text-white px-4 py-2 rounded-full text-sm">
                  🚗 Welcome to Zallan Driving School
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              >
                Become a{" "}
                <motion.span
                  className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Skilled & Confident
                </motion.span>{" "}
                Driver
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Professional driving lessons, certified instructors, and flexible
                schedules designed for your success.
              </motion.p>

              {/* Feature Highlights */}
              <motion.div variants={itemVariants} className="space-y-3 pt-4">
                {[
                  "Modern dual-control training vehicles",
                  "Friendly and certified instructor",
                  "Flexible classes weekday & weekend",
                  "Affordable pricing for all learners",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0075FF]" />
                    </motion.div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://wa.me/237681732693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                   Chat with Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <ImageWithFallback
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0075FF]/20 to-transparent" />
              </motion.div>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all duration-300"
                aria-label="Previous slide"
              >
                <motion.div
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all duration-300"
                aria-label="Next slide"
              >
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </motion.div>
              </motion.button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/70 w-2"
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index === currentSlide ? 1 : 0.8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-1 text-[#FFCC00]" />
                <p className="text-xs font-semibold">95% Pass Rate</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-1 text-[#0075FF]" />
                <p className="text-xs font-semibold">1000+ Students</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-1/2 -right-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-1 text-[#0075FF]" />
                <p className="text-xs font-semibold">Flexible Hours</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
