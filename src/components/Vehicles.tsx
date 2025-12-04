import { motion } from "motion/react";
import { Car, Shield, Gauge, Users, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Vehicles() {
  const vehicles = [
    {
      name: "Toyota Corolla 2022",
      type: "Sedan",
      transmission: "Automatic",
      category: "Category B",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format",
      features: [
        "Dual control system",
        "ABS braking",
        "Airbags (6)",
        "Rearview camera",
        "Air conditioning",
      ],
      instructors: ["Emmanuel Tabe", "Mary Asong"],
      students: "Beginner friendly",
    },
    {
      name: "Honda Civic 2023",
      type: "Sedan",
      transmission: "Manual",
      category: "Category B",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format",
      features: [
        "Dual control system",
        "Advanced safety features",
        "Stability control",
        "Parking sensors",
        "Cruise control",
      ],
      instructors: ["Jane Njume", "David Fon"],
      students: "All levels",
    },
    {
      name: "Yamaha MT-07 2023",
      type: "Motorcycle",
      transmission: "Manual",
      category: "Category A",
      image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&auto=format",
      features: [
        "Safety gear included",
        "ABS system",
        "LED lighting",
        "Digital display",
        "Easy handling",
      ],
      instructors: ["Jane Njume", "David Fon"],
      students: "Motorcycle learners",
    },
    {
      name: "Mercedes-Benz Actros",
      type: "Heavy Truck",
      transmission: "Manual",
      category: "Category C",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format",
      features: [
        "Advanced braking system",
        "Load management tools",
        "GPS navigation",
        "Comfort cabin",
        "Safety equipment",
      ],
      instructors: ["Paul Ayuk", "David Fon"],
      students: "Commercial drivers",
    },
    {
      name: "Mercedes-Benz Sprinter",
      type: "Passenger Van",
      transmission: "Automatic",
      category: "Category D",
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&auto=format",
      features: [
        "Passenger safety systems",
        "Climate control",
        "Spacious interior",
        "Backup camera",
        "Emergency exits",
      ],
      instructors: ["Paul Ayuk", "Grace Tambe"],
      students: "Bus drivers",
    },
    {
      name: "Nissan Sentra 2022",
      type: "Sedan",
      transmission: "Automatic",
      category: "Category B",
      image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format",
      features: [
        "Dual control pedals",
        "Safety rated 5-star",
        "Blind spot monitoring",
        "Lane assist",
        "Modern interior",
      ],
      instructors: ["Emmanuel Tabe", "Grace Tambe"],
      students: "Test preparation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
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
            Our Training{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Vehicles
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Modern, safe, and well-maintained vehicles for effective learning
          </motion.p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
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
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-[#0075FF] to-[#0055CC] text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg"
                >
                  {vehicle.category}
                </motion.div>

                {/* Type Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">
                    {vehicle.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {vehicle.name}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4 text-[#0075FF]" />
                    <span>{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#0075FF]" />
                    <span>{vehicle.students}</span>
                  </div>
                </div>

                {/* Safety Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#0075FF]" />
                    Safety Features:
                  </p>
                  <div className="space-y-1">
                    {vehicle.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#0075FF] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Available Instructors */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Available Instructors:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.instructors.map((instructor, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gradient-to-r from-[#0075FF]/10 to-[#FFCC00]/10 text-[#0075FF] px-2 py-1 rounded-full"
                      >
                        {instructor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Car,
              title: "Well-Maintained",
              description: "Regular servicing and safety checks on all vehicles",
            },
            {
              icon: Shield,
              title: "Safety First",
              description: "All vehicles equipped with dual controls and safety features",
            },
            {
              icon: CheckCircle2,
              title: "Modern Fleet",
              description: "Latest models with advanced technology and comfort",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
