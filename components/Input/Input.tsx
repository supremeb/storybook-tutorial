import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * Input type
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  /**
   * Input value
   */
  value?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input label
   */
  label?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  /**
   * Is the input required?
   */
  required?: boolean;
  /**
   * Input name
   */
  name?: string;
  /**
   * Input id
   */
  id?: string;
  /**
   * Optional additional class name
   */
  className?: string;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input component for text entry
 */
export const Input = ({
  type = 'text',
  value,
  placeholder,
  label,
  helperText,
  error,
  disabled = false,
  required = false,
  name,
  id,
  className = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const baseClass = 'ds-input';
  const wrapperClass = `${baseClass}-wrapper`;
  const errorClass = error ? `${baseClass}--error` : '';
  const disabledClass = disabled ? `${baseClass}--disabled` : '';
  
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const classes = [
    baseClass,
    errorClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label className="ds-input__label" htmlFor={inputId}>
          {label}
          {required && <span className="ds-input__required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={classes}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${inputId}-error` : 
          helperText ? `${inputId}-helper` : 
          undefined
        }
        {...props}
      />
      {helperText && !error && (
        <div className="ds-input__helper" id={`${inputId}-helper`}>
          {helperText}
        </div>
      )}
      {error && (
        <div className="ds-input__error" id={`${inputId}-error`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
