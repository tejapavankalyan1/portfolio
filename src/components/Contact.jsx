import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [activeContact, setActiveContact] = useState(null);
  const [copied, setCopied] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const contacts = [
    {
      id: 1,
      type: 'Email',
      value: 'tejapavankalyan456@gmail.com',
      icon: '✉️',
      color: '#FF6B6B',
      action: () => {
        navigator.clipboard.writeText('tejapavankalyan456@gmail.com');
        setCopied('email');
        setTimeout(() => setCopied(null), 2000);
        window.location.href = 'mailto:tejapavankalyan456@gmail.com';
      }
    },
    {
      id: 2,
      type: 'Phone',
      value: '+91 96409 62211',
      icon: '📱',
      color: '#4ECDC4',
      action: () => {
        navigator.clipboard.writeText('+919640962211');
        setCopied('phone');
        setTimeout(() => setCopied(null), 2000);
        window.location.href = 'tel:+919640962211';
      }
    },
    {
      id: 3,
      type: 'LinkedIn',
      value: 'linkedin.com/in/tejapavankalyank',
      icon: '💼',
      color: '#0A66C2',
      action: () => window.open('https://www.linkedin.com/in/tejapavankalyank/', '_blank')
    },
    {
      id: 4,
      type: 'Company',
      value: 'Audree Info Tech Pvt Ltd',
      icon: '🏢',
      color: '#96CEB4',
      action: null
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getContactStatus = () => {
    const now = new Date();
    const hours = now.getHours();
    const isBusinessHours = hours >= 9 && hours < 18;
    return {
      available: isBusinessHours,
      message: isBusinessHours 
        ? 'Currently available for calls' 
        : 'Available for email, will respond within 24 hours',
      icon: isBusinessHours ? '🟢' : '🟡'
    };
  };

  const status = getContactStatus();

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">04.</span>
          Get In Touch
        </h2>
        <div className="section-line"></div>
      </div>

      <div 
        className="contact-container" 
        ref={containerRef}
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      >

        {/* Quick Actions Panel */}
        <div className="quick-actions-panel">
          <div className="panel-header">
            <h3>Quick Actions</h3>
            <span className="panel-badge">Click to Connect</span>
          </div>
          
          <div className="actions-grid">
            <a 
              href="mailto:kodavarthitejapavankalyan456@gmail.com" 
              className="action-card email"
              onMouseEnter={() => setActiveContact(1)}
              onMouseLeave={() => setActiveContact(null)}
            >
              <div className="action-icon">📧</div>
              <div className="action-content">
                <h4>Send Email</h4>
                <p>kodavarthitejapavankalyan456@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+919640962211" 
              className="action-card phone"
              onMouseEnter={() => setActiveContact(2)}
              onMouseLeave={() => setActiveContact(null)}
            >
              <div className="action-icon">📱</div>
              <div className="action-content">
                <h4>Make a Call</h4>
                <p>+91 96409 62211</p>
              </div>
            </a>
            
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/tejapavankalyank/', '_blank')}
              className="action-card linkedin"
              onMouseEnter={() => setActiveContact(3)}
              onMouseLeave={() => setActiveContact(null)}
            >
              <div className="action-icon">💼</div>
              <div className="action-content">
                <h4>Connect on LinkedIn</h4>
                <p>View Profile</p>
              </div>
            </button>
          </div>
        </div>
        


        

        {/* Interactive Message */}
        <div className="interactive-message">
          <div className="message-content">
            <div className="message-avatar">👨‍💻</div>
            <div className="message-bubble">
              <p className="message-text">
                I'm currently open to exciting opportunities, collaborations, 
                and innovative projects. Let's connect and create something remarkable!
              </p>
              <div className="message-footer">
                <span className="message-author">Teja Pavan Kalyan</span>
                <span className="message-time">Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Visualization */}
        <div className="connection-visual">
          <div className="visual-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <div className="visual-nodes">
            {contacts.map((contact, index) => (
              <div
                key={contact.id}
                className={`visual-node ${activeContact === contact.id ? 'active' : ''}`}
                style={{ 
                  left: `${25 + (index * 25)}%`,
                  backgroundColor: contact.color
                }}
                onMouseEnter={() => setActiveContact(contact.id)}
                onMouseLeave={() => setActiveContact(null)}
              >
                <span className="node-tooltip">{contact.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Contact;