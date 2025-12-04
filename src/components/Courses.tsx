import { motion } from "motion/react";
import {
  GraduationCap,
  Trophy,
  Shield,
  MapPin,
  Truck,
  Bike,
  Car,
  Bus,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface CoursesProps {
  onEnroll: () => void;
}

export function Courses({ onEnroll }: CoursesProps) {
  const courses = [
    {
      icon: GraduationCap,
      title: "Beginner Driver Training",
      description:
        "Learn the basics of steering, braking, parking, traffic rules, and road safety",
      duration: "4-6 weeks",
      lessons: "20 sessions",
      price: "Visit for pricing",
      features: [
        "Basic vehicle controls",
        "Traffic rules & signs",
        "Parking techniques",
        "City driving practice",
      ],
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      icon: Trophy,
      title: "Road Test Preparation",
      description:
        "Simulated test lessons focusing on precision, confidence, and error correction",
      duration: "2-3 weeks",
      lessons: "10 sessions",
      price: "Visit for pricing",
      features: [
        "Mock driving tests",
        "Test route familiarization",
        "Error correction techniques",
        "Confidence building",
      ],
      color: "from-yellow-500 to-yellow-600",
      popular: true,
    },
    {
      icon: Shield,
      title: "Defensive Driving",
      description:
        "Develop awareness, hazard detection, and accident-avoidance techniques",
      duration: "3 weeks",
      lessons: "12 sessions",
       price: "Visit for pricing",
      features: [
        "Hazard perception",
        "Emergency braking",
        "Weather conditions",
        "Accident prevention",
      ],
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      icon: MapPin,
      title: "Highway & Night Driving",
      description: "Advanced skills for highway navigation and safe night driving",
      duration: "2 weeks",
      lessons: "8 sessions",
       price: "Visit for pricing",
      features: [
        "Highway merging",
        "Lane changing",
        "Night visibility",
        "Long-distance driving",
      ],
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      icon: Car,
      title: "Category B License",
      description: "Complete training for private vehicle license",
      duration: "6 weeks",
      lessons: "25 sessions",
       price: "Visit for pricing",
      features: [
        "Full theory course",
        "Practical training",
        "Test preparation",
        "License assistance",
      ],
      color: "from-indigo-500 to-indigo-600",
      popular: false,
    },
    {
      icon: Bike,
      title: "Category A License",
      description: "Motorcycle and scooter training program",
      duration: "3 weeks",
      lessons: "12 sessions",
       price: "Visit for pricing",
      features: [
        "Motorcycle basics",
        "Balance & control",
        "Road safety",
        "License preparation",
      ],
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      icon: Truck,
      title: "Category C License",
      description: "Heavy-duty vehicle and truck driving",
      duration: "8 weeks",
      lessons: "30 sessions",
       price: "Visit for pricing",
      features: [
        "Heavy vehicle handling",
        "Load management",
        "Commercial driving",
        "Safety regulations",
      ],
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      icon: Bus,
      title: "Category D License",
      description: "Bus and passenger transport training",
      duration: "10 weeks",
      lessons: "35 sessions",
       price: "Visit for pricing",
      features: [
        "Passenger safety",
        "Large vehicle control",
        "Route planning",
        "Professional conduct",
      ],
      color: "from-pink-500 to-pink-600",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="courses">
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of driving programs designed for all
            skill levels
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              {course.popular && (
                <motion.div
                  initial={{ x: -100, rotate: -45 }}
                  whileInView={{ x: 0, rotate: -45 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute -left-12 top-6 bg-gradient-to-r from-[#FFCC00] to-yellow-500 text-white px-12 py-1 text-sm font-bold transform -rotate-45 shadow-lg z-10"
                >
                  POPULAR
                </motion.div>
              )}

              <div className="p-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <course.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>⏱️ {course.duration}</span>
                  <span>📚 {course.lessons}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0075FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-2xl font-bold text-[#0075FF]">
                        {course.price}
                      </div>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={onEnroll}
                      className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white rounded-lg"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
