import React, { useState, useEffect, useRef } from 'react';

function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [interactiveTerminal, setInteractiveTerminal] = useState('');
  const [interactiveCommands, setInteractiveCommands] = useState([
    { label: 'View Projects', value: 'ls -la projects/' },
    { label: 'Contact Me', value: 'contact --email' },
    { label: 'About', value: 'cat about.md' }
  ]);
  const terminalRef = useRef(null);
  const fullText = "Transform Your Ideas Into Digital Reality";
  
  // Terminal command sequences
  const commandSequences = [
    { text: "cd projects/", delay: 800, type: "command" },
    { text: "ls -la", delay: 800, type: "command" },
    { text: "ecommerce-platform/  last modified: 2 days ago", delay: 400, type: "output", color: "#3b82f6" },
    { text: "ai-dashboard/       last modified: 1 week ago", delay: 400, type: "output", color: "#3b82f6" },
    { text: "blockchain-tool/    last modified: 3 days ago", delay: 400, type: "output", color: "#3b82f6" },
    { text: "git status", delay: 1200, type: "command" },
    { text: "On branch main", delay: 300, type: "output" },
    { text: "Your branch is up to date with 'origin/main'", delay: 300, type: "output" },
    { text: "npm run build", delay: 1000, type: "command" },
    { text: "Creating optimized production build...", delay: 700, type: "output" },
    { text: "Compiled successfully", delay: 500, type: "output" },
    { text: "Ready for deployment", delay: 300, type: "output", color: "#10b981" },
    { text: "deploy --production", delay: 1200, type: "command" },
    { text: "Deploying to production server...", delay: 500, type: "output" },
    { text: "Deployment successful! Site is live.", delay: 700, type: "output", color: "#10b981" },
  ];

  // For smaller terminal in mobile view
  const mobileCommandSequences = [
    { text: "init_project.sh", delay: 800, type: "command" },
    { text: "Initializing new project repository...", delay: 400, type: "output" },
    { text: "Installing dependencies: react@18 next@13", delay: 600, type: "output" },
    { text: "Success! Project ready at ./digital-solution", delay: 500, type: "output", color: "#3b82f6" },
    { text: "npm run dev", delay: 1000, type: "command" },
    { text: "Starting development server...", delay: 500, type: "output" },
    { text: "Ready on http://localhost:3000", delay: 400, type: "output", color: "#10b981" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Main title typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const sequence = windowWidth < 768 ? mobileCommandSequences : commandSequences;
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    let currentDelay = 0;
    let isTyping = false;
    
    const typeNextCharacter = () => {
      if (lineIndex >= sequence.length) return;
      
      const currentCommand = sequence[lineIndex];
      
      if (!isTyping) {
        isTyping = true;
        
        // If it's a command, type it character by character
        if (currentCommand.type === "command") {
          const typeChar = () => {
            if (charIndex < currentCommand.text.length) {
              currentLine = currentCommand.text.substring(0, charIndex + 1);
              charIndex++;
              
              setTerminalLines(prev => {
                const newLines = [...prev];
                newLines[lineIndex] = {
                  text: currentLine,
                  type: "command-typing",
                  color: "#ffffff"
                };
                return newLines;
              });
              
              setTimeout(typeChar, 100);
            } else {
              setTerminalLines(prev => {
                const newLines = [...prev];
                newLines[lineIndex] = {
                  text: currentCommand.text,
                  type: "command",
                  color: "#ffffff"
                };
                return newLines;
              });
              
              isTyping = false;
              charIndex = 0;
              currentLine = '';
              lineIndex++;
              
              setTimeout(typeNextCharacter, currentCommand.delay);
            }
          };
          
          setTimeout(typeChar, 100);
        } else {
          // If it's output, show it immediately
          setTimeout(() => {
            setTerminalLines(prev => {
              const newLines = [...prev];
              newLines[lineIndex] = {
                text: currentCommand.text,
                type: "output",
                color: currentCommand.color || "#e2e8f0"
              };
              return newLines;
            });
            
            isTyping = false;
            lineIndex++;
            
            setTimeout(typeNextCharacter, currentCommand.delay);
          }, 100);
        }
      }
    };
    
    // Start typing after a short delay
    const initialTimeout = setTimeout(() => {
      typeNextCharacter();
    }, 1000);
    
    return () => {
      clearTimeout(initialTimeout);
    };
  }, [windowWidth]);

  // Handle interactive terminal commands
  const handleCommandClick = (command) => {
    setInteractiveTerminal(command);
    
    // Simulate command execution - would be linked to actual navigation in a real app
    setTimeout(() => {
      setInteractiveTerminal('');
    }, 2000);
  };

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const isMobile = windowWidth < 768;

  return (
    <div style={{
      background: '#ffffff',
      padding: isMobile ? '80px 20px' : '120px 20px',
      color: '#111827',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"IBM Plex Mono", monospace',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Animated background grid with pulse effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.3,
        zIndex: 1
      }}></div>
      
      {/* Animated floating geometric shapes */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1
      }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="floating-shape" style={{
            position: 'absolute',
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            borderRadius: Math.random() > 0.5 ? '50%' : '8px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 1,
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}></div>
        ))}
      </div>
      
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          .floating-shape {
            animation: float infinite linear;
          }
          
          .cursor {
            display: inline-block;
            width: 8px;
            height: 24px;
            background: #3b82f6;
            vertical-align: middle;
            margin-left: 5px;
            animation: blink 1s infinite;
          }
          
          .terminal-cursor {
            display: inline-block;
            width: 8px;
            height: 16px;
            background: #3b82f6;
            vertical-align: middle;
            margin-left: 2px;
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }
          
          .terminal-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          
          .terminal-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          
          .tech-chip {
            transition: all 0.3s ease;
          }
          
          .tech-chip:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            background-color: #3b82f6 !important;
            color: white !important;
          }
          
          .command-chip {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .command-chip:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .button-glow {
            animation: pulse 2s infinite;
          }
          
          @keyframes gradientBg {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .interactive-cursor {
            animation: blink 0.8s infinite;
          }
        `}
      </style>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '50px' : '80px',
        width: '100%'
      }}>
        {/* Text Content */}
        <div style={{
          flex: '1',
          textAlign: isMobile ? 'center' : 'left',
          maxWidth: isMobile ? '100%' : '550px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(59, 130, 246, 0.1)',
            color: '#3b82f6',
            borderRadius: '4px',
            padding: '10px 18px',
            marginBottom: '28px',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: '"IBM Plex Mono", monospace',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            $ developer@portfolio:~
          </div>
          
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: 'bold',
            marginBottom: '28px',
            lineHeight: 1.2,
            color: '#111827',
            fontFamily: '"Inter", sans-serif',
            textAlign: isMobile ? 'center' : 'left',
            letterSpacing: '-0.025em'
          }}>
            {typedText}
            {showCursor && <span className="cursor"></span>}
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1.05rem' : '1.15rem',
            marginBottom: '36px',
            lineHeight: 1.7,
            color: '#4b5563',
            fontFamily: '"Inter", sans-serif',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            We craft high-performance digital solutions with clean code and modern architecture. From concept to deployment, we bring your vision to life.
          </p>
          
          {/* Interactive Terminal Navigation */}
          <div className="terminal-card" style={{
            backgroundColor: '#1e293b',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'left',
            marginBottom: '40px',
            border: '1px solid #334155',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
              <div style={{ 
                flex: 1,
                height: '20px',
                backgroundColor: '#334155',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                color: '#94a3b8',
                fontSize: '0.8rem',
                fontFamily: '"IBM Plex Mono", monospace'
              }}>
                navigation
              </div>
            </div>
            
            <div style={{ 
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#e2e8f0',
              padding: '4px 0'
            }}>
              <div>
                <span style={{ color: '#10b981' }}>$ </span>
                <span style={{ color: '#ffffff' }}>
                  {interactiveTerminal || 'help --navigation'}
                  {!interactiveTerminal && <span className="terminal-cursor interactive-cursor"></span>}
                </span>
              </div>
              
              {!interactiveTerminal && (
                <div style={{ marginTop: '12px', color: '#94a3b8' }}>
                  Available commands:
                </div>
              )}
            </div>
            
            {/* Command chips that act as navigation */}
            {!interactiveTerminal && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '10px',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                {interactiveCommands.map((command, index) => (
                  <div 
                    className="command-chip" 
                    key={index}
                    onClick={() => handleCommandClick(command.value)}
                    style={{
                      backgroundColor: '#334155',
                      color: '#e2e8f0',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontFamily: '"IBM Plex Mono", monospace',
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #475569'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    {command.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Dark Command Line Card for Mobile */}
          {isMobile && (
            <div className="terminal-card" style={{
              backgroundColor: '#1e293b',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'left',
              marginBottom: '40px',
              border: '1px solid #334155',
              position: 'relative'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '15px'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <div style={{ 
                  flex: 1,
                  height: '20px',
                  backgroundColor: '#334155',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontFamily: '"IBM Plex Mono", monospace'
                }}>
                  terminal
                </div>
              </div>
              
              <div style={{ 
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#e2e8f0',
                height: '180px',
                overflow: 'hidden'
              }} ref={terminalRef}>
                {terminalLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    {line.type === "command" || line.type === "command-typing" ? (
                      <div>
                        <span style={{ color: '#10b981' }}>$ </span>
                        <span style={{ color: line.color }}>{line.text}</span>
                        {line.type === "command-typing" && <span className="terminal-cursor"></span>}
                      </div>
                    ) : (
                      <div style={{ color: line.color, paddingLeft: '16px' }}>
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}
                {terminalLines.length === 0 && (
                  <>
                    <div style={{ color: '#10b981' }}>$ <span className="terminal-cursor"></span></div>
                  </>
                )}
              </div>
              
              {/* Floating badge for mobile */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                transform: 'rotate(5deg)',
                fontFamily: '"IBM Plex Mono", monospace',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 3
              }}>
                $ npm run dev
              </div>
            </div>
          )}
          
          {/* Tech stack chips */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {['React.js', 'WordPress', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, index) => (
              <div className="tech-chip" key={index} style={{
                backgroundColor: '#f3f4f6',
                color: '#111827',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontFamily: '"IBM Plex Mono", monospace',
                border: '1px solid #e5e7eb',
                cursor: 'pointer'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Dark Terminal Window (Desktop only) */}
        {!isMobile && (
          <div style={{
            flex: '1',
            maxWidth: '500px',
            position: 'relative',
            perspective: '1000px'
          }}>
            <div className="terminal-card" style={{
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
              border: '1px solid #1e293b',
              transform: 'rotateY(-5deg)'
            }}>
              {/* Terminal header */}
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#1e293b',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontFamily: '"IBM Plex Mono", monospace'
                }}>
                  bash -- 80x24
                </div>
                <div style={{ width: '36px' }}></div>
              </div>
              
              {/* Terminal content */}
              <div style={{
                padding: '20px',
                height: '350px',
                overflowY: 'auto',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                backgroundColor: '#0f172a'
              }} ref={terminalRef}>
                {terminalLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    {line.type === "command" || line.type === "command-typing" ? (
                      <div>
                        <span style={{ color: '#10b981' }}>$ </span>
                        <span style={{ color: line.color }}>{line.text}</span>
                        {line.type === "command-typing" && <span className="terminal-cursor"></span>}
                      </div>
                    ) : (
                      <div style={{ color: line.color, paddingLeft: '16px' }}>
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}
                {terminalLines.length === 0 && (
                  <>
                    <div style={{ color: '#10b981' }}>$ <span className="terminal-cursor"></span></div>
                  </>
                )}
              </div>
            </div>
            
            {/* Floating badges */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-15px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              transform: 'rotate(5deg)',
              fontFamily: '"IBM Plex Mono", monospace',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
              zIndex: 3
            }}>
              $ npm run dev
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '30px',
              backgroundColor: '#10b981',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              transform: 'rotate(-3deg)',
              fontFamily: '"IBM Plex Mono", monospace',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 9999
            }}>
              Ready on localhost:3000
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;