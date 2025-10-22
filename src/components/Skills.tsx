import React from "react";
import { motion } from "framer-motion";
import { Code, Database, ServerCog, Terminal, Cloud } from "lucide-react";

const skills = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "React Native",
    category: "Frontend",
    icon: Code,
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: Code,
    color: "from-gray-500 to-black",
  },
  {
    name: "Redux / RTK Query",
    category: "Frontend",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: Code,
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "SCSS / CSS3 / HTML5",
    category: "Frontend",
    icon: Code,
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Responsive UI Design",
    category: "Frontend",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: ServerCog,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: ServerCog,
    color: "from-gray-500 to-black",
  },
  {
    name: "REST APIs / JWT Auth",
    category: "Backend",
    icon: ServerCog,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Firebase (Auth, Firestore, FCM)",
    category: "Backend",
    icon: ServerCog,
    color: "from-blue-400 to-cyan-500",
  },

  // Databases
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    color: "from-green-500 to-lime-500",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Prisma ORM",
    category: "ORM",
    icon: Database,
    color: "from-purple-400 to-pink-500",
  },

  // Cloud & DevOps
  {
    name: "AWS (S3, EC2, Amplify)",
    category: "Cloud",
    icon: Cloud,
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: Cloud,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Docker",
    category: "Cloud",
    icon: Cloud,
    color: "from-gray-500 to-black",
  },

  // Programming & Logic
  {
    name: "JavaScript (ES6+)",
    category: "Programming",
    icon: Terminal,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "C++ / DSA / Algorithms",
    category: "Programming",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "AI-based Integrations",
    category: "Programming",
    icon: Terminal,
    color: "from-blue-500 to-indigo-600",
  },

  // Tools & Services
  {
    name: "Git & GitHub",
    category: "Programming",
    icon: Terminal,
    color: "from-gray-500 to-gray-700",
  },
  {
    name: "VS Code",
    category: "Programming",
    icon: Terminal,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Android Studio & Xcode",
    category: "Programming",
    icon: Terminal,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "pgAdmin 4",
    category: "Programming",
    icon: Terminal,
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Postman & Thunder Client",
    category: "Programming",
    icon: Terminal,
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Razorpay Gateway",
    category: "Programming",
    icon: Terminal,
    color: "from-red-400 to-pink-500",
  },
  {
    name: "OpenAI API",
    category: "Programming",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies, tools, and platforms I have experience with for
            building modern web and mobile applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-md border border-white/20 dark:border-gray-700/30 cursor-default`}
            >
              <div
                className={`p-3 rounded-full mb-2 bg-gradient-to-br ${skill.color} text-white flex items-center justify-center`}
              >
                <skill.icon className="w-6 h-6" />
              </div>
              <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
