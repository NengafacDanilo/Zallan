import { useState } from "react";
import { Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "instructors", label: "Instructors" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
       <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <motion.button
          onClick={() => onNavigate("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <motion.div
           whileHover={{ rotate: 360 }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-[#0075FF] to-[#0055CC] p-2 rounded-lg"
          >
           <Car className="w-6 h-6 text-white" />
          </motion.div>
          <div className="text-left">
           <div className="text-xl font-bold bg-gradient-to-r from-[#0075FF] to-[#0055CC] bg-clip-text text-transparent">
            Zallan Driving School
           </div>
           <div className="text-xs text-gray-500">Your Road to Success</div>
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
           <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
            className={`relative py-2 transition-colors ${
              currentPage === item.id ? "text-[#0075FF]" : "text-gray-700 hover:text-[#0075FF]"
            }`}
           >
            {item.label}
            {currentPage === item.id && (
              <motion.div
               layoutId="activeTab"
               className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0075FF]"
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
           </motion.button>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
           <Button
            onClick={() => onNavigate("enrollment")}
            className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white rounded-full px-6"
           >
            Enroll Now
           </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
          <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
           {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </motion.div>
        </motion.button>
       </div>

       {/* Mobile Menu */}
       <AnimatePresence>
        {isMenuOpen && (
          <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.3 }}
           className="lg:hidden overflow-hidden"
          >
           <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
               key={item.id}
               onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
               }}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.3, delay: index * 0.05 }}
               whileTap={{ scale: 0.95 }}
               className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id ? "bg-[#0075FF] text-white" : "text-gray-700 hover:bg-gray-100"
               }`}
              >
               {item.label}
              </motion.button>
            ))}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: navItems.length * 0.05 }}>
              <Button
               onClick={() => {
                onNavigate("enrollment");
                setIsMenuOpen(false);
               }}
               className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] text-white rounded-lg"
              >
               Enroll Now
              </Button>
            </motion.div>
           </div>
          </motion.div>
        )}
       </AnimatePresence>
      </div>
    </motion.nav>
  );
}
