import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = ['about', 'projects']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Ethan Cheng
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className={`navbar-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/Ethan Cheng Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navbar-resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
