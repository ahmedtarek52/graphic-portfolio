import React from 'react'

const Input = ({ 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  label,
  className = '', 
  ariaRequired, 
  ariaInvalid, 
  ariaDescribedby,
  ...props 
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-required={ariaRequired}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input