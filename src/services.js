import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Monitor, ShoppingCart, Volume2, Search } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Enhanced service data with subtle emoji accents
  const services = [
    {
      title: "Web Development",
      icon: <Code size={26} />,
      description: "🚀 From responsive websites to complex web applications, we craft pixel-perfect digital experiences...",
      accentColor: "#6366f1"
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone size={26} />,
      description: "📱 Extend your business reach with native and cross-platform mobile applications built for iOS and Android...",
      accentColor: "#10b981"
    },
    {
      title: "Software Development",
      icon: <Monitor size={26} />,
      description: "💻 Custom software solutions designed to address your specific business challenges...",
      accentColor: "#3b82f6"
    },
    {
      title: "E-commerce Solutions",
      icon: <ShoppingCart size={26} />,
      description: "🛒 Empower your business with secure, scalable, and feature-rich e-commerce platforms...",
      accentColor: "#f59e0b"
    },
    {
      title: "Digital Marketing",
      icon: <Volume2 size={26} />,
      description: "📢 Ignite your brand's online presence with our data-driven digital marketing solutions...",
      accentColor: "#ec4899"
    },
    {
      title: "SEO",
      icon: <Search size={26} />,
      description: "🔍 Climb to the top of search engine rankings and stay there with our proven strategies...",
      accentColor: "#8b5cf6"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
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

  return (
    <section 
      id="services-section"
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
        position: 'relative',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease'
      }}
    >
      {/* Floating gradient circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
        zIndex: 1,
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Animated Section Header */}
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
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '20px',
              letterSpacing: '1.5px',
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
              transition: 'all 0.6s ease 0.2s',
              boxShadow: '0 4px 10px rgba(99, 102, 241, 0.2)'
            }}
          >
            ✨ OUR SERVICES ✨
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
            Transform Your <span style={{ 
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text'
            }}>Business</span> Digitally
          </h2>
          
          <div 
            style={{
              width: '100px',
              height: '5px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              margin: '0 auto 30px',
              borderRadius: '5px',
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'center',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
              boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
            }}
          ></div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#475569',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            We blend <strong>innovation</strong> with <strong>technology</strong> to deliver exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '40px',
          justifyItems: 'center'
        }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              isVisible={isVisible}
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ service, index, isVisible }) => {
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
        border: `1px solid ${isHovered ? service.accentColor : '#e2e8f0'}`,
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
        background: `linear-gradient(90deg, ${service.accentColor}, ${service.accentColor}00)`,
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
          background: `linear-gradient(135deg, ${service.accentColor}20, ${service.accentColor}10)`,
          color: service.accentColor,
          borderRadius: '18px',
          marginBottom: '25px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-5px) scale(1.1)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? `0 10px 20px ${service.accentColor}20` 
            : '0 5px 15px rgba(0,0,0,0.05)'
        }}
      >
        {service.icon}
      </div>
      
      {/* Service Title */}
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '18px',
        lineHeight: 1.3,
        transition: 'color 0.3s ease',
        color: isHovered ? service.accentColor : '#0f172a'
      }}>
        {service.title}
      </h3>
      
      {/* Service Description */}
      <p style={{
        color: '#475569',
        lineHeight: 1.7,
        marginBottom: '20px',
        fontSize: '1rem'
      }}>
        {service.description}
      </p>
      
      {/* Learn More Link */}
      <div style={{
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        color: service.accentColor,
        fontWeight: '600',
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
        opacity: isHovered ? 1 : 0.8,
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
      }}>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={service.accentColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
};

export default ServicesSection;