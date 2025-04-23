import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Nuwan Ranjan',
      role: 'Owner of Noble Visa Centre',
      feedback:
        'Working with Codedev was an absolute pleasure. The team delivered beyond expectations and on time!',
      avatar: 'WhatsApp Image 2025-04-21 at 00.26.22_cba4fcd9.jpg',
    },
    {
      id: 2,
      name: 'Deshan Wijesekara',
      role: 'Owner of Bristol Tailors',
      feedback:
        'Excellent communication and stunning results. Our new website looks fantastic and performs smoothly.',
      avatar: "WhatsApp Image 2025-04-21 at 00.24.48_516a1ae1.jpg",
    },
    {
      id: 3,
      name: 'Sandun Chathuranga',
      role: 'Startup Founder',
      feedback:
        'Highly recommend Codedev for any digital product needs. Creative, reliable, and easy to work with.',
      avatar: 'WhatsApp Image 2025-04-18 at 22.06.40_9bd8990c.jpg',
    },
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(79, 70, 229, 0.1)',
        filter: 'blur(30px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(79, 70, 229, 0.1)',
        filter: 'blur(40px)'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: '800',
          marginBottom: '60px',
          color: '#1a1a1a',
          position: 'relative',
          display: 'inline-block'
        }}>
          What Our Clients Say
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #4f46e5, #8b5cf6)',
            borderRadius: '2px'
          }}></span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          padding: '0 20px'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.2)',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)'
              }
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '8px',
                background: 'linear-gradient(90deg, #4f46e5, #8b5cf6)'
              }}></div>
              
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                border: '4px solid #e0e7ff',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '5px',
                color: '#1a1a1a',
                background: 'linear-gradient(90deg, #4f46e5, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{testimonial.name}</div>
              
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '20px',
                fontWeight: '500'
              }}>{testimonial.role}</div>
              
              <p style={{
                fontSize: '16px',
                color: '#4b5563',
                lineHeight: '1.7',
                position: 'relative',
                padding: '0 10px',
                ':before': {
                  content: '"\\201C"',
                  fontSize: '60px',
                  position: 'absolute',
                  top: '-20px',
                  left: '-10px',
                  color: 'rgba(79, 70, 229, 0.1)',
                  fontFamily: 'serif',
                  lineHeight: '1'
                },
                ':after': {
                  content: '"\\201D"',
                  fontSize: '60px',
                  position: 'absolute',
                  bottom: '-50px',
                  right: '-10px',
                  color: 'rgba(79, 70, 229, 0.1)',
                  fontFamily: 'serif',
                  lineHeight: '1'
                }
              }}>{testimonial.feedback}</p>
              
              <div style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
                gap: '5px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;