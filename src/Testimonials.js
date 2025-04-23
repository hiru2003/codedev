import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Nuwan Ranjan',
      role: 'Owner of Noble Visa Centre',
      feedback:
        'Working with Codedev was an absolute pleasure. The team delivered beyond expectations and on time!',
      avatar: '\WhatsApp Image 2025-04-21 at 00.26.22_cba4fcd9.jpg',
    },
    {
      id: 2,
      name: 'Deshan Wijesekara.',
      role: 'Owner of Bristol Tailors ',
      feedback:
        'Excellent communication and stunning results. Our new website looks fantastic and performs smoothly.',
      avatar: "\WhatsApp Image 2025-04-21 at 00.24.48_516a1ae1.jpg",
    },
    {
      id: 3,
      name: 'Sandun Chathuranga',
      role: 'Startup Founder',
      feedback:
        'Highly recommend Codedev for any digital product needs. Creative, reliable, and easy to work with.',
      avatar: '\WhatsApp Image 2025-04-18 at 22.06.40_9bd8990c.jpg',
    },
  ];

  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#f9fafb',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#333',
  };

  const testimonialsWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '25px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    maxWidth: '320px',
    flex: '1 1 300px',
    transition: 'transform 0.3s ease',
  };

  const avatarStyle = {
    width: '180px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
  };

  const nameStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '4px',
    color: '#4f46e5',
  };

  const roleStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
  };

  const feedbackStyle = {
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.6',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>What Our Clients Say</h2>

      <div style={testimonialsWrapperStyle}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={cardStyle}>
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              style={avatarStyle}
            />
            <div style={nameStyle}>{testimonial.name}</div>
            <div style={roleStyle}>{testimonial.role}</div>
            <p style={feedbackStyle}>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
