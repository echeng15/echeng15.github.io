import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Gender/Racial Bias in Facial Classification",
    description:
      "Research project analyzing bias in ML models. Created facial datasets with gender and race features, trained multiple CNN architectures with PyTorch, and implemented Mixture of Experts and ensemble methods to reduce classification bias across racial groups.",
    tags: ["Python", "PyTorch", "NumPy", "Pandas"],
    github: null,
    demo: null,
    paper: "/ECE_590__Bias_Project_Paper.pdf",
    featured: true,
  },
  {
    title: "Event Suggestion/Scheduling App",
    description:
      "Collaborated in a team to develop a React Native app using TypeScript, Node.js, and Expo Go, integrating Ticketmaster and Duke Event APIs for personalized recommendations based on user preferences, location, and calendar availability. Features interactive map/list views and calendar sync.",
    tags: ["React Native", "TypeScript", "Node.js", "Expo"],
    github: null,
    demo: null,
    gitlab: "https://gitlab.oit.duke.edu/ec422/makemoments",
    featured: true,
  },
  {
    title: "Network Security Lab",
    description:
      "Conducted network reconnaissance and penetration testing using Nmap. Developed packet-filtering rules for screened subnet routers, analyzing traffic in Wireshark to prevent data leakage and restrict access to sensitive files.",
    tags: ["Nmap", "Wireshark", "Network Security"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Distributed Key-Value Store",
    description:
      "Designed and deployed a multi-node, RESTful distributed key-value store using Docker and Python Flask, implementing strong, eventual, and causal consistency models with sharding for scalability. Simulated network and node failures to test system reliability.",
    tags: ["Python", "Flask", "Docker", "Distributed Systems"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Time Series Analysis of Global Temperatures",
    description:
      "Used Python statsmodels to analyze and predict temperature trends in coastal cities. Applied statistical analysis to verify hypotheses on the impact of global warming in those regions.",
    tags: ["Python", "Statsmodels", "Data Analysis"],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: "Diabetes Prediction using Clinical Data",
    description:
      "Analyzed clinical datasets to predict diabetic, prediabetic, and non-diabetic status using ML models. Performed data cleaning, normalization, and feature selection. Built and compared linear regression and decision tree classifiers, evaluated using confusion matrices and F1 scores.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: null,
    demo: null,
    featured: false,
  },
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
              variants={itemVariants}
            >
              <div className="project-header">
                <svg
                  className="project-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="20"
                        height="20"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Research Paper"
                      className="paper-link"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      <span>Paper</span>
                    </a>
                  )}
                  {project.gitlab && (
                    <a
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitLab"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-tags">
                {project.tags.map((tag, i) => (
                  <li key={i} className="project-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
