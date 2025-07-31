'use client';

import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 hover:border-gray-400 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
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
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 hover:border-gray-400 resize-vertical ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
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
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-400 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
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

// Simple exports for backwards compatibility
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