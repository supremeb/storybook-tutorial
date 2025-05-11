import React, { useEffect } from 'react';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Callback when modal is closed
   */
  onClose: () => void;
  /**
   * Size of the modal
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;
  /**
   * Optional additional class name
   */
  className?: string;
}

/**
 * Modal component for displaying content in a layer above the app
 */
export const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  size = 'md',
  showCloseButton = true,
  className = '',
  ...props
}: ModalProps) => {
  const baseClass = 'ds-modal';
  const sizeClass = `${baseClass}--${size}`;
  
  const classes = [
    baseClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      handleBodyScroll();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="ds-modal-overlay" onClick={onClose}>
      <div 
        className={classes}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="ds-modal__header">
            {title && <h2 className="ds-modal__title" id="modal-title">{title}</h2>}
            {showCloseButton && (
              <button 
                className="ds-modal__close" 
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="ds-modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
