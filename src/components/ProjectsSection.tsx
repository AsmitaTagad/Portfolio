import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github as LucideGithub, Code2 } from "lucide-react";
import { Laptop, ShoppingCart, Server, Users } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "FreedyGo",
      description:
        "A scalable food delivery platform for B2B service provider with real-time order tracking,inventory management, analytics dashboards, and multi-role user management.",
      highlights: [
        "Developed full-stack features using React.js,Next js, Node.js, and MongoDB for high-traffic operations.",
        "Implemented real-time order tracking and notifications across web and mobile platforms.",
        "Integrated payment gateways, push notifications, and admin dashboards for operational efficiency.",
      ],
      technologies: [
        "Javascript",
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "AWS",
        "Firebase",
        "REST APIs",
        "Express Js",
      ],
      icon: ShoppingCart,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-600/10",
      link: "https://freedygo.com",
    },
    {
      id: 2,
      name: "Meata2z",
      description:
        "An online marketplace for meat and food products with automated order processing and customer tracking.",
      highlights: [
        "Built end-to-end full-stack solution using React.js, Node.js, and AWS services.",
        "Designed dynamic dashboards for vendors and customers, improving engagement and operational efficiency.",
        "Integrated secure payment and order management system for seamless transactions.",
      ],
      technologies: [
        "Javascript",
        "React.js",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Firebase",
        "REST APIs",
        "Tailwind CSS",
        "Express Js",
      ],
      icon: ShoppingCart,
      gradient: "from-red-500 to-purple-600",
      bgGradient: "from-red-500/10 to-purple-600/10",

      link: "https://meata2z.com",
    },
    {
      id: 3,
      name: "Skilotech",
      description:
        "A comprehensive platform for candidates and recruiters to manage Resume Building, CV creation, and JD matching with automated progress tracking and analytics dashboards.",
      highlights: [
        "Developed full-stack application using React.js and Node.js with Mongodb backend, supporting both candidate and recruiter workflows.",
        "Implemented analytics dashboards for recruiters to track applicant progress and for candidates to monitor their skill development.",
        "Optimized server performance and integrated secure login with role-based access controls for multiple user types.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Mongodb",
        "AWS",
        "REST APIs",
        "Framer Motion",
        "Open AI",
      ],
      icon: Laptop,
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-500/10 to-blue-600/10",
      link: "https://skilotech.com",
    },

    {
      id: 4,
      name: "Skilotech HRMS Attendance App",
      description:
        "A complete HR management system for attendance, leave, payroll, and employee management with admin panel and reports.",
      highlights: [
        "Developed end-to-end HRMS using React.js, Node.js, and MongoDB with Prisma integration.",
        "Implemented automated payroll, leave requests, and attendance tracking for multiple organizations.",
        "Designed admin dashboards with detailed reporting and analytics for organizational insights.",
      ],
      technologies: [
        "Javascript",
        "Next Js",
        "React Native",
        "React.js",
        "Node.js",
        "MongoDB",
        "AWS",
        "REST APIs",
        "Tailwind CSS",
      ],
      icon: Laptop,
      gradient: "from-indigo-300 to-blue-300",
      bgGradient: "from-indigo-300/10 to-blue-300/10",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
           My {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full-stack projects showcasing scalable web apps, real-time systems,
            and advanced features for businesses and education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-6 left-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 pt-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-200`}
                          />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.bgGradient} border border-current rounded-full text-sm font-medium cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <Code2 className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
