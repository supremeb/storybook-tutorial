import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  /**
   * Avatar image source URL
   */
  src?: string;
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  /**
   * Fallback initials when image is not available
   */
  initials?: string;
  /**
   * Avatar size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
 * Avatar component for user profile images
 */
export const Avatar = ({
  src,
  alt = 'User avatar',
  initials,
  size = 'md',
  className = '',
  onClick,
  ...props
}: AvatarProps) => {
  const baseClass = 'ds-avatar';
  const sizeClass = `${baseClass}--${size}`;
  const clickableClass = onClick ? `${baseClass}--clickable` : '';
  
  const classes = [
    baseClass,
    sizeClass,
    clickableClass,
    className
  ].filter(Boolean).join(' ');

  const [imageError, setImageError] = React.useState(!src);

  const handleImageError = () => {
    setImageError(true);
  };

  const renderContent = () => {
    if (src && !imageError) {
      return <img src={src} alt={alt} onError={handleImageError} />;
    }
    
    if (initials) {
      return <span className="ds-avatar__initials">{initials}</span>;
    }
    
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="ds-avatar__fallback">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    );
  };

  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

export default Avatar;
