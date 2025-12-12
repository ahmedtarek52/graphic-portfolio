import React from 'react'

const Textarea = ({ 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  label,
  rows = 5, 
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
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        aria-required={ariaRequired}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${className}`}
        {...props}
      />
    </div>
  )
}

export default Textarea