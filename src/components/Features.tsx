import { motion } from "motion/react";
import { Car, Users, Calendar, Award, Shield, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Car,
      title: "Modern Training Cars",
      description: "Well-maintained vehicles with dual controls and safety features",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Certified Instructors",
      description: "Experienced professionals dedicated to your success",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose times that work with your busy lifestyle",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "95% Pass Rate",
      description: "Our students consistently excel in their road tests",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive training focused on defensive driving",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Clock,
      title: "Quick Learning",
      description: "Efficient programs designed to get you on the road fast",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Zallan Driving School
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We provide comprehensive driving education with modern facilities and
            experienced instructors
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
