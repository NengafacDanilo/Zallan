import { motion } from "motion/react";
import {
  Award,
  Target,
  Users,
  Heart,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety in every aspect of our training, ensuring students learn defensive driving techniques and proper vehicle handling.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description:
        "Our certified instructors maintain the highest standards of professionalism and expertise in driver education.",
    },
    {
      icon: Heart,
      title: "Student Success",
      description:
        "We're committed to each student's success, providing personalized attention and support throughout their learning journey.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "We constantly update our methods and vehicles to provide the best possible training experience.",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Founded",
      description: "Zallan Driving School was established in Buea with a vision to revolutionize driver education in Cameroon.",
    },
    {
      year: "2012",
      title: "Growth & Recognition",
      description: "Achieved recognition from the Ministry of Transport and expanded our fleet with modern training vehicles in Buea.",
    },
    {
      year: "2016",
      title: "Excellence Milestone",
      description: "Reached 2,000 successful graduates in Buea and became the most trusted driving school in the Southwest region.",
    },
    {
      year: "2020",
      title: "Fleet Modernization",
      description: "Upgraded our entire vehicle fleet with latest models and advanced safety features in our Buea facility.",
    },
    {
      year: "2023",
      title: "1000+ Graduates",
      description: "Celebrated training over 1000 successful drivers with a 95% pass rate at our Buea location.",
    },
  ];

  const certifications = [
    "Ministry of Transport Approved",
    "ISO 9001:2015 Certified",
    "National Road Safety Association Member",
    "Professional Driving Instructors Association",
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: "Successful Graduates" },
    { icon: Award, number: "20+", label: "Certified Instructors" },
    { icon: Star, number: "95%", label: "Pass Rate" },
    { icon: Target, number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
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
            About{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Zallan Driving School
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Building confident, skilled, and safety-conscious drivers since 2008
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="/src/components/asset/images/491964481_122240134874024113_2366904515285584802_n.jpg"
                alt="Zallan Driving School"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0075FF]/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Zallan Driving School was founded in 2008 with a simple yet powerful
                mission: to provide the highest quality driving education in
                Cameroon. What started as a small training center in Buea has grown
                into a trusted institution with locations across the country.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the past 15 years, we've trained more than 5,000 students,
                helping them achieve their driving goals with confidence and skill.
                Our commitment to safety, professionalism, and student success has
                made us the preferred choice for aspiring drivers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to innovate and improve, offering comprehensive
                training programs for all license categories, from motorcycles to
                heavy-duty vehicles, all while maintaining our founding principles of
                excellence and safety.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-2xl p-8 text-white"
          >
            <Target className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To produce responsible, confident, and safety-conscious drivers
              through comprehensive training programs, modern facilities, and
              expert instruction, making roads safer for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-[#FFCC00] to-yellow-500 rounded-2xl p-8 text-gray-900"
          >
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To be the leading driving education institution in Central Africa,
              recognized for excellence, innovation, and our commitment to
              developing skilled drivers who contribute to safer roads.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-xl flex items-center justify-center mb-4"
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#0075FF] to-[#FFCC00]" />
                )}
                
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-0 top-2 w-5 h-5 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-full border-4 border-white shadow-lg"
                />
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-[#0075FF]">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#0075FF] to-[#0055CC] rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Accreditations
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#0075FF]/5 to-[#FFCC00]/5 rounded-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-[#0075FF] flex-shrink-0" />
                <span className="font-medium text-gray-900">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
