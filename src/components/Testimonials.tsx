import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Nkeng",
      role: "New Driver - Category B",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Zallan Driving School made learning to drive so easy! The instructors were patient and professional. I passed my test on the first try!",
      location: "Buea",
    },
    {
      name: "Michael Fon",
      role: "Professional Driver - Category C",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "The heavy vehicle training was excellent. They prepared me thoroughly for my commercial driving career. Highly recommended!",
      location: "Muea",
    },
    {
      name: "Grace Tambe",
      role: "Student - Road Test Prep",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "I was nervous about my driving test, but their test preparation course gave me the confidence I needed. Thank you DrivePro!",
      location: "small soppo",
    },
    {
      name: "John Ngwa",
      role: "Motorcycle License - Category A",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 4,
      text: "Great motorcycle training program. The instructors are knowledgeable and the bikes are well-maintained. Best decision I made!",
      location: "Buea",
    },
    {
      name: "Linda Ashu",
      role: "Defensive Driving Graduate",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "The defensive driving course taught me invaluable skills. I feel much safer and more confident on the road now.",
      location: "Mile 14",
    },
    {
      name: "Peter Mbah",
      role: "Beginner Training",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "As a complete beginner, I was scared to drive. The team at DrivePro made the learning process fun and stress-free!",
      location: "sampid",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Students Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from our successful graduates
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0075FF] to-[#0055CC] w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#0075FF]/20"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-[#0075FF]">📍 {testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.05,
                    }}
                  >
                    <Star className="w-5 h-5 fill-[#FFCC00] text-[#FFCC00]" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
