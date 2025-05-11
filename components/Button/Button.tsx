import React from 'react';
import { components } from '../../styles/tokens';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button label
   */
  label: string;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Is the button in a loading state?
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional additional class name
   */
  className?: string;
  /**
   * Accessible label for the button when needed
   * Use this when the visual label is not descriptive enough
   */
  ariaLabel?: string;
  /**
   * ID of the element that describes the button
   */
  ariaDescribedby?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  icon,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ariaLabel,
  ariaDescribedby,
  ...props
}: ButtonProps) => {
  const baseClass = 'ds-button';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const stateClasses = [
    disabled ? `${baseClass}--disabled` : '',
    loading ? `${baseClass}--loading` : '',
  ].filter(Boolean).join(' ');

  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    stateClasses,
    className
  ].filter(Boolean).join(' ');

  // Generate a unique ID for the loading state announcement
  const loadingId = React.useId();

  return (
    <>
      {loading && (
        <div 
          id={loadingId} 
          className="sr-only" 
          role="status" 
          aria-live="polite"
        >
          Loading, please wait
        </div>
      )}
      <button
        type="button"
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby ? ariaDescribedby : loading ? loadingId : undefined}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="ds-button__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" strokeWidth="4" />
            </svg>
          </span>
        )}
        {icon && !loading && (
          <span className="ds-button__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="ds-button__label">{label}</span>
      </button>
    </>
  );
};

export default Button;
