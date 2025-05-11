import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /**
   * Badge content
   */
  label: string;
  /**
   * Badge variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Optional additional class name
   */
  className?: string;
}

/**
 * Badge component for displaying short status descriptors
 */
export const Badge = ({
  label,
  variant = 'primary',
  className = '',
  ...props
}: BadgeProps) => {
  const baseClass = 'ds-badge';
  const variantClass = `${baseClass}--${variant}`;
  
  const classes = [
    baseClass,
    variantClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={classes}
      {...props}
    >
      {label}
    </span>
  );
};

export default Badge;
