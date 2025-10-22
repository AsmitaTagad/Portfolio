import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experience = {
    title: "Full Stack Developer",
    company: "FreedyGo-setupmy hotel pvt ltd",
    duration: "Aug 2023 - Present",
    location: "Pune, India",
    highlights: [
      "Led the development of FreedyGo's scalable web platform using React.js, Node.js, and MongoDB, handling high-volume traffic.",
      "Implemented real-time features including order tracking, push notifications, and live dashboard analytics.",
      "Built RESTful APIs and integrated third-party services like payment gateways and SMS/email notifications.",
      "Optimized database queries and application performance to reduce server response time by 40%.",
      "Collaborated with UI/UX designers to enhance user experience across web and mobile platforms.",
      "Managed deployment pipelines on AWS, including S3, Lambda, and EC2, ensuring 99.9% uptime.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS (S3, EC2, Lambda)",
      "Firebase",
      "REST APIs",
      "Tailwind CSS",
      "Framer Motion",
    ],
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800/30 dark:to-black animate-gradient-move" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and key contributions in Full Stack Development
            and scalable web applications
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10 dark:border-gray-700/40 hover:shadow-[0_30px_80px_-10px_rgba(99,102,241,0.5)] transition-all duration-500"
        >
          {/* Floating Gradient Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-blue-600/10 blur-2xl animate-pulse -z-10" />

          {/* Logo / Icon */}
          <div className="absolute -top-8 left-10">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Header Info */}
          <div className="pt-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {experience.company}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium shadow-sm"
              >
                Current Role
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                {experience.duration}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Achievements & Responsibilities
            </h4>

            <div className="space-y-4">
              {experience.highlights.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed hover:text-gray-900 dark:hover:text-white transition-all duration-300">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "rgba(59,130,246,0.15)",
                  }}
                  className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
