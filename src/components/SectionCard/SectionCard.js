import React from 'react';
import './SectionCard.css';

const SectionCard = ({ item, isExpanded, onToggle }) => {
  const { id, title, icon, backgroundImage, description, position } = item;
  
  return (
    <section className={`section-card ${position}`}>
      <div className="section-content">
        <div className="text-content">
          <div className="icon-container">
            <div className="icon-circle">
              <span className="icon-text">{icon}</span>
            </div>
          </div>
          <h2 className="section-title">{title}</h2>
          <button 
            className="know-more-btn"
            onClick={() => onToggle(id)}
            aria-expanded={isExpanded}
          >
            KNOW MORE
          </button>
          
          {isExpanded && (
            <div className="expanded-content">
              <p className="description">{description}</p>
              <button 
                className="back-btn"
                onClick={() => onToggle(null)}
              >
                BACK
              </button>
            </div>
          )}
        </div>
        
        <div className="image-content">
          <img 
            src={backgroundImage} 
            alt={title}
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;