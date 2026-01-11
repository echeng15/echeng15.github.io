import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Gender/Racial Bias in Facial Classification',
    description: 'Research project analyzing bias in ML models. Created facial datasets with gender and race features, trained multiple CNN architectures with PyTorch, and implemented Mixture of Experts and ensemble methods to reduce classification bias across racial groups.',
    tags: ['Python', 'PyTorch', 'NumPy', 'Pandas'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Network Security Lab',
    description: 'Conducted network reconnaissance and penetration testing using Nmap. Developed packet-filtering rules for screened subnet routers, analyzing traffic in Wireshark to prevent data leakage and restrict access to sensitive files.',
    tags: ['Nmap', 'Wireshark', 'Network Security'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Distributed Key-Value Store',
    description: 'Multi-node RESTful distributed key-value store with Docker and Python Flask. Implemented strong, eventual, and causal consistency models with sharding, testing reliability under simulated network and node failures.',
    tags: ['Python', 'Flask', 'Docker', 'Distributed Systems'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Event Suggestion App',
    description: 'React Native app integrating Ticketmaster and Duke Event APIs for personalized event recommendations. Features interactive maps, calendar synchronization, and location-based suggestions built with TypeScript and Node.js.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Expo'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'Machine learning project predicting diabetic status from clinical data. Performed feature selection and normalization, comparing linear regression and decision tree classifiers with scikit-learn, evaluated using confusion matrices and F1 scores.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
    github: null,
    demo: null,
    featured: false,
  },
]

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
            >
              <div className="project-header">
                <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-tags">
                {project.tags.map((tag, i) => (
                  <li key={i} className="project-tag">{tag}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
