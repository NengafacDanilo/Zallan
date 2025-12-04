import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Instructors } from "./components/Instructors";
import { Vehicles } from "./components/Vehicles";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Enrollment } from "./components/Enrollment";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <Features />
            <Courses onEnroll={() => setCurrentPage("enrollment")} />
            <Testimonials />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] py-16"
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                  {[
                    { number: "1000+", label: "Successful Graduates" },
                    { number: "5", label: "Certified Instructors" },
                    { number: "95%", label: "Pass Rate" },
                    { number: "10+", label: "Years Experience" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: index * 0.1,
                        }}
                        className="text-4xl md:text-5xl mb-2 font-bold"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="opacity-90">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        );
      case "about":
        return <About />;
      case "courses":
        return <Courses onEnroll={() => setCurrentPage("enrollment")} />;
      case "instructors":
        return <Instructors />;
      case "vehicles":
        return <Vehicles />;
      case "pricing":
        return <Pricing onEnroll={() => setCurrentPage("enrollment")} />;
      case "faq":
        return <FAQ />;
      case "contact":
        return <Contact />;
      case "enrollment":
        return <Enrollment />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}
