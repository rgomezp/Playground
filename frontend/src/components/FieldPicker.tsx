import React, { useState } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface FieldPickerProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const FieldPicker: React.FC<FieldPickerProps> = ({
  options,
  value = '',
  placeholder = 'Select an option',
  label,
  disabled = false,
  error,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = options.find(option => option.value === value);
  
  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };
  
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <button
          type="button"
          className={`
            w-full px-3 py-2 text-left bg-white border rounded-lg shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
            ${disabled ? 'bg-gray-50 cursor-not-allowed opacity-50' : 'cursor-pointer'}
          `}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span className={`block truncate ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {isOpen && !disabled && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`
                  w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none
                  ${option.value === value ? 'bg-blue-50 text-blue-600' : 'text-gray-900'}
                `}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default FieldPicker;
