import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    backgroundColor: '#1B56FD', // dark background
    color: 'white',
    padding: '24px 16px',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const flexRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const logoStyle = {
    fill: '#60a5fa'
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '16px'
  };

  const iconLinkStyle = {
    padding: '8px',
    color: 'white',
    transition: 'color 0.3s'
  };

  const dividerStyle = {
    borderTop: '1px solid #374151',
    marginBottom: '24px'
  };

  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '14px',
    color: '#fffff'
  };

  // Media query handling with React
  const useResponsiveLayout = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile(); // Initial check
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
  };

  const isMobile = useResponsiveLayout();

  const responsiveFlexStyle = {
    ...flexRowStyle,
    flexDirection: isMobile ? 'column' : 'row'
  };

  const logoContainerStyle = {
    marginBottom: isMobile ? '16px' : '0'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Top section with logo and social icons */}
        <div style={responsiveFlexStyle}>
          {/* Logo */}
          <div style={logoContainerStyle}>
            <svg width="40" height="40" viewBox="0 0 40 40" style={logoStyle}>
              <path d="M20 0L0 10v20l20 10 20-10V10L20 0zm-5 25.5l-5-5 5-5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5zm10 0l-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5 5 5-5 5z" />
            </svg>
          </div>

          {/* Social icons */}
          <div style={socialContainerStyle}>
            <a href="#" style={iconLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#60a5fa'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            <a href="#" style={iconLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#60a5fa'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v12"></path>
                <path d="M15 10v12"></path>
                <path d="M15 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                <path d="M11 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                <path d="M7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
              </svg>
            </a>
            <a href="#" style={iconLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#60a5fa'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" style={iconLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#60a5fa'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={dividerStyle}></div>

        {/* Copyright section */}
        <div style={copyrightStyle}>
          Copyright © 2025 CodeDev All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;