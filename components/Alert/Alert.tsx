import React from 'react';

export interface AlertProps {
  /**
   * Alert content
   */
  children: React.ReactNode;
  /**
   * Alert variant
   */
  variant?: 'success' | 'warning' | 'error' | 'info';
  /**
   * Alert title
   */
  title?: string;
  /**
   * Whether the alert can be dismissed
   */
  dismissible?: boolean;
  /**
   * Optional additional class name
   */
  className?: string;
  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;
}

/**
 * Alert component for displaying feedback messages
 */
export const Alert = ({
  children,
  variant = 'info',
  title,
  dismissible = false,
  className = '',
  onDismiss,
  ...props
}: AlertProps) => {
  const baseClass = 'ds-alert';
  const variantClass = `${baseClass}--${variant}`;
  
  const classes = [
    baseClass,
    variantClass,
    className
  ].filter(Boolean).join(' ');

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="ds-alert__icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case 'warning':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="ds-alert__icon">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'error':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="ds-alert__icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="ds-alert__icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={classes}
      role="alert"
      {...props}
    >
      <div className="ds-alert__content">
        <div className="ds-alert__icon-wrapper">
          {getIcon()}
        </div>
        <div className="ds-alert__message">
          {title && <div className="ds-alert__title">{title}</div>}
          <div className="ds-alert__body">{children}</div>
        </div>
      </div>
      
      {dismissible && (
        <button 
          className="ds-alert__dismiss" 
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
