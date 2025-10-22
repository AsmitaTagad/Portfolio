import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github as LucideGithub,
  Code2,
  Users,
  ShoppingCart,
  Home,
  ServerCog,
} from "lucide-react";

const ProjectsAndBlogSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "FreedyGo",
      description:
        "A ride-sharing and logistics platform connecting users and drivers with real-time tracking and efficient routing.",
      highlights: [
        "Built full-stack application using React.js, Node.js, MongoDB, and Firebase for authentication & notifications.",
        "Implemented real-time location tracking, dynamic pricing, and secure payment integration.",
        "Optimized API performance and ensured scalable architecture for thousands of concurrent users.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Express.js",
        "AWS",
        "Stripe API",
        "Socket.IO",
      ],
      icon: Home,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      link: "#",
    },
    {
      id: 2,
      name: "MeatA2Z",
      description:
        "An end-to-end e-commerce platform for meat suppliers and retailers, including inventory management and delivery tracking.",
      highlights: [
        "Designed and implemented full-stack solution with React.js frontend and Node.js backend.",
        "Integrated payment gateways, inventory analytics, and automated order management.",
        "Ensured responsive design and high performance across web and mobile devices.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "AWS",
        "Stripe API",
        "Redux",
        "TailwindCSS",
      ],
      icon: ShoppingCart,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-500/10 to-orange-600/10",
      link: "#",
    },
    {
      id: 3,
      name: "Skilotech",
      description:
        "Platform for candidates and recruiters: Resume/CV building, JD matching, analytics dashboards, and automated progress tracking.",
      highlights: [
        "Developed full-stack application using React.js and Node.js with PostgreSQL backend.",
        "Implemented analytics dashboards and automated reporting for students and instructors.",
        "Optimized server performance and integrated secure login and role-based access controls.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "AWS",
        "REST APIs",
        "Framer Motion",
      ],
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      link: "https://skilotech.com",
    },
    {
      id: 4,
      name: "HRMS Application",
      description:
        "A comprehensive HR management system to manage employees, attendance, payroll, and HR workflows.",
      highlights: [
        "Built full-stack HRMS application using React.js, Node.js, PostgreSQL, and Prisma.",
        "Integrated dynamic dashboards, attendance tracking, and automated payroll generation.",
        "Enhanced security and user role management for employees and admin.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "AWS",
        "REST APIs",
        "React Query",
      ],
      icon: ServerCog,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-600/10",
      link: "#",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Building FreedyGo: Real-Time Ride-Sharing Platform",
      summary:
        "A detailed walkthrough of designing and implementing a scalable ride-sharing application with real-time tracking and payment integration.",
      link: "#",
    },
    {
      id: 2,
      title: "Optimizing MeatA2Z for E-Commerce Success",
      summary:
        "Explaining the backend architecture, inventory management, and performance optimizations for MeatA2Z platform.",
      link: "#",
    },
    {
      id: 3,
      title: "Skilotech: Enhancing Candidate & Recruiter Experience",
      summary:
        "Case study on building analytics dashboards, CV building, and automated progress tracking for recruitment platforms.",
      link: "#",
    },
    {
      id: 4,
      title: "Full-Stack HRMS Application: From Concept to Deployment",
      summary:
        "Sharing insights on building a scalable HRMS application with secure role management and automated payroll system.",
      link: "#",
    },
  ];

  return (
    <section id="projects-blog" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Section */}
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
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and case studies from my journey in Full Stack Developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {blog.summary}
              </p>
              {/* <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1"
              >
                Read More <ExternalLink className="w-4 h-4" />
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndBlogSection;
