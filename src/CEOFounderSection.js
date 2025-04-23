import React, { useState, useEffect } from 'react';

const CEOFounderSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  // Founder data with your actual information
  const founderData = {
    name: "Hirusha Kariyawasam",
    title: "CEO & Founder",
    image: "/WhatsApp Image 2025-04-21 at 00.47.53_3a20e7eb.jpg",
    quote: "Our mission is to create digital experiences that not only meet business goals but also delight users at every interaction point.",
    description: "With over 2 years of experience in digital solutions, I've led Codedev from a small startup to an industry-recognized digital agency. My background in both design and development gives me a unique perspective on creating holistic digital experiences.",
    achievements: [
      "Undergraduate in Computer Science at University of Sri Jayewardenepura",
      "Founder & CEO of Codedev",
    ],
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/hirusha-kariyawasam-5b6335282", icon: "linkedin", color: "#0A66C2" },
      { name: "Facebook", url: "https://www.facebook.com/hirusha.kariyawasam.37", icon: "facebook", color: "#1877F2" },
      { name: "WhatsApp", url: "https://wa.me/+94767511529", icon: "whatsapp", color: "#25D366" },
      { name: "Instagram", url: "https://www.instagram.com/hirusha_dx_/", icon: "instagram", color: "#E4405F" }
    ]
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      const element = document.getElementById('ceo-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = windowWidth < 768;

  // Social Icon Component
  const SocialIcon = ({ icon }) => {
    const iconStyle = {
      width: '20px',
      height: '20px',
      transition: 'all 0.3s ease'
    };

    switch (icon) {
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        );
      case 'whatsapp':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M20 4a9 9 0 0 0-15 10.6L4 20l5.4-1.4A9 9 0 0 0 20 4z"/>
            <path d="M8.5 11.5c.7 1.3 2 2.5 3.5 3l.5.2c.6.1 1.2 0 1.6-.5l.5-.5c.3-.3.4-.7.2-1.1l-.3-.6a.6.6 0 0 0-.7-.3l-1 .4a6.8 6.8 0 0 1-3-3l.4-1a.6.6 0 0 0-.3-.7l-.6-.3a.8.8 0 0 0-1 .2l-.5.5c-.5.4-.6 1-.5 1.6l.2.5z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="ceo-section"
      style={{
        padding: isMobile ? '80px 20px' : '120px 20px',
        background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Colorful decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        zIndex: 1,
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        zIndex: 1,
        animation: 'float 6s ease-in-out infinite 2s'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease'
      }}>
        {/* Section Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '40px' : '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.2s'
        }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '16px',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
            textTransform: 'uppercase'
          }}>
            Meet The Visionary
          </span>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.8rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #1e293b, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 auto 16px',
            lineHeight: 1.2,
            maxWidth: '800px'
          }}>
            The Creative Mind Behind <span style={{ 
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Codedev</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Founder Content */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '40px' : '60px'
        }}>
          {/* Founder Image */}
          <div style={{
            flex: 1,
            position: 'relative',
            maxWidth: isMobile ? '100%' : '500px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease 0.3s',
            textAlign: 'center'
          }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              background: 'linear-gradient(45deg, #f9fafb, #ffffff)'
            }}>
              <img
                src={founderData.image}
                alt={founderData.name}
                style={{
                  width: '100%',
                  height: isMobile ? '400px' : '500px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(1.02) contrast(1.05)'
                }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2eiIgZmlsbD0iI0VFRUVFRSIvPjxwYXRoIGQ9Ik0xMiAxNGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptLTktMWE5IDkgMCAwIDEgMTggMGMwIDEuOTgxLS42ODcgMy44MTEtMS44MzMgNS4yNDVDMTcuNDYzIDE5LjQ3OCAxNC45NjEgMjEgMTIgMjFzLTUuNDYzLTEuNTIyLTcuMTY3LTQuMjU1QzMuNjg3IDE1LjgxMSAzIDEzLjk4MSAzIDEyeiIgZmlsbD0iI0VFRUVFRSIvPjwvc3ZnPg==';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '12px 25px',
                borderRadius: '30px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                minWidth: '200px',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  animation: 'pulse 2s infinite'
                }}></div>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  whiteSpace: 'nowrap'
                }}>{founderData.title}</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '30px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.5s'
            }}>
              {founderData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    color: link.color,
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: link.color,
                      color: 'white',
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px ${link.color}80`
                    }
                  }}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Founder Info */}
          <div style={{
            flex: 1,
            maxWidth: isMobile ? '100%' : '600px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.4s',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div style={{ 
              marginBottom: '25px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.8rem' : '2.2rem',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: '15px',
                lineHeight: 1.2,
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {founderData.name}
              </h3>
              <div style={{
                height: '4px',
                width: '80px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                margin: isMobile ? '10px auto' : '10px 0',
                borderRadius: '2px'
              }}></div>
            </div>

            <div style={{
              background: 'rgba(241, 245, 249, 0.7)',
              borderLeft: isMobile ? 'none' : '4px solid #6366f1',
              borderTop: isMobile ? '4px solid #6366f1' : 'none',
              padding: '25px',
              borderRadius: isMobile ? '8px' : '0 8px 8px 0',
              marginBottom: '30px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
              }}></div>
              <p style={{
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                fontStyle: 'italic',
                color: '#475569',
                lineHeight: 1.7,
                margin: 0,
                position: 'relative',
                zIndex: 2
              }}>
                "{founderData.quote}"
              </p>
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.8,
              marginBottom: '30px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {founderData.description}
            </p>

            {/* Achievements */}
            <div style={{
              marginBottom: '40px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Key Achievements
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                alignItems: isMobile ? 'center' : 'flex-start'
              }}>
                {founderData.achievements.map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    maxWidth: '100%'
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      boxShadow: '0 3px 10px rgba(99, 102, 241, 0.3)'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span style={{
                      fontSize: '1rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      textAlign: 'left'
                    }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div style={{ 
              textAlign: isMobile ? 'center' : 'left',
              marginTop: '40px'
            }}>
              <a
                href="https://wa.me/+94767511529"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px rgba(99, 102, 241, 0.5)',
                    background: 'linear-gradient(90deg, #8b5cf6, #6366f1)'
                  }
                }}
              >
                Connect with {founderData.name.split(' ')[0]}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default CEOFounderSection;