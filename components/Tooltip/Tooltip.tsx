import React, { useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  /**
   * Tooltip content
   */
  content: React.ReactNode;
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactElement;
  /**
   * Tooltip position
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Optional additional class name
   */
  className?: string;
}

/**
 * Tooltip component for displaying additional information
 */
export const Tooltip = ({
  content,
  children,
  position = 'top',
  className = '',
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const baseClass = 'ds-tooltip';
  const wrapperClass = `${baseClass}-wrapper`;
  const positionClass = `${baseClass}--${position}`;
  const visibilityClass = isVisible ? `${baseClass}--visible` : '';
  
  const tooltipClasses = [
    baseClass,
    positionClass,
    visibilityClass,
    className
  ].filter(Boolean).join(' ');

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className={wrapperClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {React.cloneElement(children, {
        'aria-describedby': isVisible ? 'tooltip' : undefined,
      })}
      
      <div 
        className={tooltipClasses}
        id="tooltip"
        role="tooltip"
        {...props}
      >
        {content}
        <div className={`${baseClass}__arrow`} />
      </div>
    </div>
  );
};

export default Tooltip;
