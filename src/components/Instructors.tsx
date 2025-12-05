import { motion } from "motion/react";
import { Star, Award, Calendar, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import zallanImage from "./asset/images/zallan.jpg";

export function Instructors() {
  const instructors = [
    {
      name: "Mr Zallan",
      image: zallanImage,
      experience: "12 years",
      specialty: "Categories B, C, D",
      rating: 4.9,
      students: "1000+",
      location: "Buea",
      languages: ["English", "French"],
      certifications: ["Advanced Driving", "Defensive Driving"],
    },
    
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Expert Instructors
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Meet our team of certified instructors dedicated to helping you succeed
          </motion.p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0075FF] to-[#0055CC]">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Rating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 }}
                  className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg"
                >
                  <Star className="w-4 h-4 fill-[#FFCC00] text-[#FFCC00]" />
                  <span className="font-bold text-gray-900">{instructor.rating}</span>
                </motion.div>

                {/* Location Badge */}
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4 text-[#0075FF]" />
                  <span className="text-sm font-semibold">{instructor.location}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {instructor.name}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#0075FF]" />
                    <span>{instructor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0075FF]" />
                    <span>{instructor.students} students taught</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Specialty:
                  </p>
                  <span className="inline-block bg-gradient-to-r from-[#0075FF]/10 to-[#FFCC00]/10 text-[#0075FF] px-3 py-1 rounded-full text-sm font-medium">
                    {instructor.specialty}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Languages:
                  </p>
                  <div className="flex gap-2">
                    {instructor.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Certifications:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#0075FF]/10 text-[#0075FF] px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://wa.me/237681732693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white rounded-lg flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-[#0075FF] to-[#0055CC] rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your instructor and book your first lesson today
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-[#0075FF] px-8 py-6 text-lg rounded-full hover:bg-gray-100">
              Book a Lesson
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
