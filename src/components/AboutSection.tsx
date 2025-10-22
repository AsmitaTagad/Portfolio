import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  Globe,
  Sparkles,
  Rocket,
  Award,
  Database,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "FreedyGo",
      description:
        "Developed a scalable full-stack platform enabling seamless logistics and vendor integration using React.js, Node.js, and AWS. Focused on real-time data sync and user experience optimization.",
      icon: Rocket,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "MeatA2Z",
      description:
        "Built an e-commerce and automation platform with secure APIs, dynamic dashboards, and real-time inventory tracking using React Native, Node.js, and MongoDB.",
      icon: Globe,
      gradient: "from-purple-500 to-blue-500",
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "Next.js",
    "React Native",
    "MongoDB",
    "AWS",
    "Firebase",
    "Javascript",
    "Express.js",
    "Docker",
    "Express js",
    "Redux Toolkit"
  ];

  const achievements = [
    { label: "Live Projects", value: "4+", icon: Code2 },
    { label: "Experience", value: "2+ Years", icon: Briefcase },
   
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I’m a Full Stack Developer passionate about crafting scalable,
            high-performance digital products. I love designing intelligent,
            user-first solutions that combine creativity and engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column — Key Projects */}
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 3 }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-xl transform-gpu transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className={`absolute -top-3 -left-3 w-16 h-16 rounded-3xl bg-gradient-to-br ${item.gradient} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}
                />
                <div className="flex items-center mb-4 relative z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-400 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column — Stats + Skills */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-xl"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
