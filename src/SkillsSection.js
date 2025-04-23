import React, { useState, useEffect } from 'react';

const ReactSkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Focused only on React skills with all required properties
  const reactSkills = [
    {
      name: "React",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/react.svg",
      level: "Expert",
      description: "Component-based UI development with React hooks and state management for dynamic web applications",
      years: "5+ years",
      projects: "40+ projects",
      accentColor: "#61DAFB"
    },
    {
      name: "WordPress",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/wordpress.svg",
      level: "Intermediate",
      description: "Building and customizing WordPress themes and plugins using React for dynamic content", 
      years: "2+ years",
      projects: "10+ projects",
      accentColor: "#21759B"
    },
    {
      name: "Python",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/python.svg",
      level: "Intermediate",
      description: "Backend development with Python, integrating with React for full-stack applications",
      years: "2+ years",
      projects: "5+ projects",
      accentColor: "#3776AB"
    },
    {
      name: "JavaScript",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/javascript.svg",
      level: "Expert",
      description: "Core language for web development, including ES6+ features and asynchronous programming",
      years: "5+ years",
      projects: "50+ projects",
      accentColor: "#F7DF1E"
    },
    {
      name: "Next.js",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/next-dot-js.svg",
      level: "Expert",
      description: "Server-side rendering and static site generation with React framework",
      years: "3+ years",
      projects: "20+ projects",
      accentColor: "#000000"
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/tailwindcss.svg",
      level: "Advanced",
      description: "Utility-first CSS framework for rapid UI development with React",
      years: "3+ years",
      projects: "15+ projects",
      accentColor: "#06B6D4"
    },
    {
      name: "C++",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/cplusplus.svg",
      level: "Intermediate",
      description: "Object-oriented programming and data structures, integrating with React for performance-critical applications",
      years: "2+ years",
      projects: "5+ projects",
      accentColor: "#00599C"
    },
    {
      name: "Node.js",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/node-dot-js.svg",
      level: "Advanced",
      description: "Backend development with Node.js, building RESTful APIs and integrating with React",
      years: "3+ years",
      projects: "15+ projects",
      accentColor: "#8CC84B"
    },
    {
      name: "MongoDB",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/mongodb.svg",
      level: "Intermediate",
      description: "NoSQL database management, integrating with React for data-driven applications",
      years: "2+ years",
      projects: "10+ projects",
      accentColor: "#47A248"
    }
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('react-skills-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "#7e22ce";
      case "Advanced": return "#3b82f6";
      case "Intermediate": return "#10b981";
      default: return "#6b7280";
    }
  };

  return (
    <section 
      id="react-skills-section"
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
        position: 'relative',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease'
      }}
    >
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%)',
        zIndex: 1,
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Header */}
        <div 
          style={{ 
            textAlign: 'center', 
            marginBottom: '80px',
            padding: '0 20px',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}
        >
          <span 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #61DAFB, #00B4D8)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '20px',
              letterSpacing: '1.5px',
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
              transition: 'all 0.6s ease 0.2s',
              boxShadow: '0 4px 10px rgba(97, 218, 251, 0.3)'
            }}
          >
            ✨ Experience ✨
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #0f172a, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            lineHeight: 1.2,
            letterSpacing: '-0.5px'
          }}>
            <span style={{ 
              background: 'linear-gradient(90deg, #61DAFB, #00B4D8)',
              WebkitBackgroundClip: 'text'
            }}>Our</span> Expertise
          </h2>
          
          <div 
            style={{
              width: '100px',
              height: '5px',
              background: 'linear-gradient(90deg, #61DAFB, #00B4D8)',
              margin: '0 auto 30px',
              borderRadius: '5px',
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'center',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
              boxShadow: '0 4px 10px rgba(97, 218, 251, 0.3)'
            }}
          ></div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#475569',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Specialized skills in React and its ecosystem for building modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '40px',
          justifyItems: 'center'
        }}>
          {reactSkills.map((skill, index) => (
            <ReactSkillCard 
              key={index} 
              skill={skill} 
              index={index}
              isVisible={isVisible}
              levelColor={getLevelColor(skill.level)}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

// React Skill Card Component
const ReactSkillCard = ({ skill, index, isVisible, levelColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        maxWidth: '380px',
        background: 'white',
        borderRadius: '20px',
        padding: '40px 30px',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
          : '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: `1px solid ${isHovered ? skill.accentColor : '#e2e8f0'}`,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: isVisible 
          ? 'translateY(0)' 
          : `translateY(${50 + (index * 10)}px)`,
        opacity: isVisible ? 1 : 0,
        transitionDelay: isVisible ? `${0.3 + (index * 0.1)}s` : '0s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Animated border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${skill.accentColor}, ${skill.accentColor}00)`,
        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}></div>

      {/* Icon Container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70px',
          height: '70px',
          background: `linear-gradient(135deg, ${skill.accentColor}20, ${skill.accentColor}10)`,
          borderRadius: '18px',
          marginBottom: '25px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-5px) scale(1.1)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? `0 10px 20px ${skill.accentColor}20` 
            : '0 5px 15px rgba(0,0,0,0.05)'
        }}
      >
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          style={{
            width: '36px',
            height: '36px',
            objectFit: 'contain'
          }}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMNm4zNiA2LjM2TDcuMDggMTcuNjRMMTIgMjJsNC45Mi00LjM2TDE3LjY0IDguMzZMMTIgMnptMCAxNS4yN0wtOC43OSA4LjY0bDEuODktOC4yOUwxMiA1LjE4bDYuOS0yLjgzbDEuODkgOC4yOUwxMiAxNy4yN3oiIGZpbGw9IiM2MURBRkIiLz48L3N2Zz4=';
          }}
        />
      </div>
      
      {/* Skill Name */}
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '700',
        color: isHovered ? skill.accentColor : '#0f172a',
        marginBottom: '12px',
        lineHeight: 1.3,
        transition: 'color 0.3s ease'
      }}>
        {skill.name}
      </h3>
      
      {/* Level Badge */}
      <span style={{
        display: 'inline-block',
        padding: '6px 16px',
        fontSize: '0.8rem',
        fontWeight: '600',
        borderRadius: '9999px',
        backgroundColor: `${levelColor}20`,
        color: levelColor,
        marginBottom: '18px',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}>
        {skill.level}
      </span>
      
      {/* Skill Description */}
      <p style={{
        color: '#475569',
        lineHeight: 1.7,
        marginBottom: '20px',
        fontSize: '1rem'
      }}>
        {skill.description}
      </p>
      
      {/* Experience Info */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        width: '100%',
        borderTop: '1px solid #f3f4f6',
        paddingTop: '16px'
      }}>
        <span style={{
          fontSize: '0.85rem',
          color: '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          {skill.years}
        </span>
        
        <span style={{
          fontSize: '0.85rem',
          color: '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          {skill.projects}
        </span>
      </div>
    </div>
  );
};

export default ReactSkillsSection;