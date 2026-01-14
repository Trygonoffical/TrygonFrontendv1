'use client';

import { forwardRef } from 'react';

const formVariants = {
  light: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500',
  glass: 'bg-white/5 border-white/10 text-white placeholder-gray-400 hover:border-white/20 focus:border-blue-400 focus:ring-blue-400 focus:bg-white/10'
};

const labelVariants = {
  light: 'text-gray-700',
  glass: 'text-gray-300'
};

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  variant = 'light',
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className={`block text-sm font-medium ${labelVariants[variant]}`}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 ${formVariants[variant]} ${error ? '!border-red-500 !focus:border-red-500 !focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

const Textarea = forwardRef(({ 
  label, 
  error, 
  className = '', 
  rows = 4,
  variant = 'light',
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className={`block text-sm font-medium ${labelVariants[variant]}`}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-vertical ${formVariants[variant]} ${error ? '!border-red-500 !focus:border-red-500 !focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

const Select = forwardRef(({ 
  label, 
  error, 
  className = '', 
  options = [],
  placeholder,
  variant = 'light',
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className={`block text-sm font-medium ${labelVariants[variant]}`}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 ${formVariants[variant]} ${error ? '!border-red-500 !focus:border-red-500 !focus:ring-red-500' : ''} ${className}`}
        {...props}
      >
        {placeholder && <option value="" className="text-gray-500">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-gray-900 bg-white">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
Textarea.displayName = 'Textarea';
Select.displayName = 'Select';

// Simple exports for backwards compatibility (default to light)
export const SimpleInput = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 hover:border-gray-400 shadow-sm ${className}`}
      {...props}
    />
  );
};

export const SimpleTextarea = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 hover:border-gray-400 resize-vertical shadow-sm ${className}`}
      {...props}
    />
  );
};

export const SimpleSelect = ({ options = [], className = '', placeholder, ...props }) => {
  return (
    <select
      className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-400 shadow-sm ${className}`}
      {...props}
    >
      {placeholder && <option value="" className="text-gray-500">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-gray-900 bg-white">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { Input, Textarea, Select };