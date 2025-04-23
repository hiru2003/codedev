import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  
  // Sample project data (using your original content)
  const projectsList = [
    {
      id: 1,
      title: "Visa Agency Website",
      client: "Noble Visa Centre",
      image: "/WhatsApp Image 2025-04-19 at 23.57.43_cb66844d.jpg",
      description: "Complete redesign and development of a dynamic visa service platform featuring advanced inquiry filtering, secure online application forms, and online contacting features for hassle-free client experiences",
      category: "Services Business",
      technologies: ["Wordpress", "Custom CSS", "Elementor", "Google Maps API"],
      results: "43% increase in conversion rate",
      link: "https://noblevisacentre.org" 
    },
    {
      id: 2,
      title: "Tailoring Brand Website",
      client: "Bristol Tailors",
      image: "/WhatsApp Image 2025-04-18 at 01.51.21_b18e6a80.jpg",
      description: "Complete redesign and development of a dynamic Tailoring service platform featuring advanced inquiry filtering, secure online application forms, and online contacting features for hassle-free client experiences",
      category: "Clothing Business",
      technologies: ["WordPress", "Elementor", "Google Maps API"],
      results: "50% increase in conversion rate",
      link: "https://bristoltailors.com"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    setProjects(projectsList);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Filter projects based on selected category
  useEffect(() => {
    if (activeFilter === 'all') {
      setProjects(projectsList);
    } else {
      const filtered = projectsList.filter(project => project.category === activeFilter);
      setProjects(filtered);
    }
  }, [activeFilter]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section style={{
      padding: isMobile ? '80px 20px' : '120px 20px',
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Modern background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(67, 97, 238, 0.03) 0%, transparent 30%)',
        zIndex: 1
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Modern Section Heading */}
        <div style={{
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            color: '#4361ee',
            padding: '8px 16px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '16px',
            letterSpacing: '1px'
          }}>
            OUR WORK
          </span>
          
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            Projects That <span style={{ 
              background: 'linear-gradient(90deg, #4361ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Deliver Results</span>
          </h2>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#4b5563',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Showcasing our expertise through successful projects we've delivered for various businesses across industries.
          </p>
        </div>
        
        {/* Modern Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          {['all', 'Services Business', 'Clothing Business'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '10px 20px',
                borderRadius: '50px',
                backgroundColor: activeFilter === filter ? '#4361ee' : 'transparent',
                color: activeFilter === filter ? 'white' : '#64748b',
                border: activeFilter === filter ? 'none' : '1px solid #e2e8f0',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                ':hover': {
                  backgroundColor: activeFilter === filter ? '#3b82f6' : '#f8fafc'
                }
              }}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
        
        {/* Modern Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '30px'
        }}>
          {projects.map((project) => (
            <ModernProjectCard key={project.id} project={project} isMobile={isMobile} />
          ))}
        </div>
        
        {/* Modern View All Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <a href="#all-projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 32px',
            backgroundColor: '#4361ee',
            color: 'white',
            fontWeight: '600',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(67, 97, 238, 0.25)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 15px rgba(67, 97, 238, 0.3)',
              backgroundColor: '#3b82f6'
            }
          }}>
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Modern Project Card Component
const ModernProjectCard = ({ project, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        position: 'relative',
        border: '1px solid #f1f5f9',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          borderColor: '#e0e7ff'
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image with Modern Overlay */}
      <div style={{
        position: 'relative',
        height: isMobile ? '220px' : '260px',
        overflow: 'hidden'
      }}>
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Modern Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 50%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px'
        }}>
          <div>
            <p style={{
              color: 'white',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              {project.description}
            </p>
            <a href={project.link} style={{
              padding: '10px 20px',
              backgroundColor: '#4361ee',
              color: 'white',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#3b82f6'
              }
            }}>
              Visit to Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div style={{
        padding: '24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            {project.title}
          </h3>
          
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#64748b',
            backgroundColor: '#f1f5f9',
            padding: '4px 10px',
            borderRadius: '50px'
          }}>
            {project.client}
          </span>
        </div>
        
        {/* Results with modern icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#10b981'
          }}>
            {project.results}
          </span>
        </div>
        
        {/* Modern Technology Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              style={{
                backgroundColor: '#f8fafc',
                fontSize: '0.75rem',
                padding: '6px 12px',
                borderRadius: '50px',
                color: '#334155',
                fontWeight: '500',
                border: '1px solid #e2e8f0'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;