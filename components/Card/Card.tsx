import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Optional card title
   */
  title?: string;
  /**
   * Enable hover effect
   */
  hoverable?: boolean;
  /**
   * Optional additional class name
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Card component for displaying content in a contained box
 */
export const Card = ({
  children,
  title,
  hoverable = false,
  className = '',
  onClick,
  ...props
}: CardProps) => {
  const baseClass = 'ds-card';
  const hoverableClass = hoverable ? `${baseClass}--hoverable` : '';
  const clickableClass = onClick ? `${baseClass}--clickable` : '';
  
  const classes = [
    baseClass,
    hoverableClass,
    clickableClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {title && <div className="ds-card__header">{title}</div>}
      <div className="ds-card__body">{children}</div>
    </div>
  );
};

export default Card;
