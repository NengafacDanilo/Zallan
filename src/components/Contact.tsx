import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const locations = [
    {
      city: "Buea",
      address: "Molyko, Ckeck Point, Buea",
      phone: "+237 681 732 693",
      email: "buea@drivepro.academy",
      hours: "Mon-Sat: 8AM-12PM, Sun: Closed",
    },
    
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1Cy1tnVewJ/?mibextid=wwXIfr", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-500" },
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
            Get In{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We're here to help you start your driving journey
          </motion.p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Subject *
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Course Inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white py-6 rounded-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-[#0075FF] to-[#0055CC] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <motion.a
                  href="tel:+237 6 81 73 26 93"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="text-sm opacity-90">Call Us</div>
                    <div className="font-semibold">+237 681 732 693</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@drivepro.academy"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all"
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="text-sm opacity-90">Email Us</div>
                    <div className="font-semibold">info@drivepro.academy</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/237681732693"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <div className="text-sm opacity-90">WhatsApp</div>
                    <div className="font-semibold">+237 681 732 693</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-[#0075FF] hover:to-[#0055CC] hover:text-white transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#0075FF]" />
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-sm text-[#0075FF] mt-4">
                  * Training sessions available during all operating hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Locations
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {location.city}
                  </h3>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0075FF] mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0075FF] flex-shrink-0" />
                    <span>{location.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0075FF] flex-shrink-0" />
                    <span className="text-sm">{location.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0075FF] flex-shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <a
                    href="https://maps.app.goo.gl/4jsmNEKvZLCzKUYo8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] text-white rounded-lg">
                      Get Directions
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-200 rounded-2xl h-96 overflow-hidden shadow-lg"
        >
          <a
            href="https://maps.app.goo.gl/wEnV6TG7LERemPrq8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, cursor: "pointer" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.854!2d9.7339!3d4.1350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067e0f1f1f1f1f%3A0x1f1f1f1f1f1f1f!2sZallan%20Driving%20School%20Buea!5e0!3m2!1sen!2scm!4v1701500000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zallan Driving School Location - Buea"
            ></iframe>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
