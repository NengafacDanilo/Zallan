import { motion } from "motion/react";
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "instructors", label: "Instructors" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const courses = [
    "Beginner Training",
    "Road Test Prep",
    "Defensive Driving",
    "Category A License",
    "Category B License",
    "Category C License",
  ];

  const locations = [
    { city: "Buea", address: "Molyko, Check Point" },
   
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1Cy1tnVewJ/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#0075FF] to-[#0055CC] p-2 rounded-lg"
              >
                <Car className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <div className="text-xl font-bold">Zallan Driving School</div>
                <div className="text-xs text-gray-400">Your Road to Success</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Building confident, skilled, and safety-conscious drivers since 2008.
              Join over 1000 successful graduates.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#0075FF]" />
                <span>+237 6 81 73 26 93</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#0075FF]" />
                <span>info@drivepro.academy</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold mb-4 text-lg">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {course}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold mb-4 text-lg">Our Locations</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#0075FF] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-sm">{location.city}</div>
                    <div className="text-gray-400 text-xs">{location.address}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#0075FF] hover:to-[#0055CC] flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center"
            >
              <p className="flex items-center gap-2 flex-wrap justify-center">
                <span>© {currentYear} Zallan Driving School.</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 inline" /> in
                  Cameroon
                </span>
              </p>
            </motion.div>

            {/* Certification Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              <div className="bg-gray-800 px-3 py-1 rounded text-xs">
                ISO Certified
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded text-xs">
                Ministry Approved
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
