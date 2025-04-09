import React from 'react'

function ElementInputLabel({ label, idInput, className = "", classNameInput, placeholder, type = "text", ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className={`font-semibold cursor-pointer relative max-w-max ${props.required ? "after:text-red-500 after:content-['*'] after:absolute after:top-0 after:-right-3" : ""}`} htmlFor={idInput}>{label}</label>
      <input type={type} id={idInput} name={idInput} className={`rounded-md p-2 border-1 border-black/50 focus:border-black dark:border-amber-100/50   dark:focus:border-amber-100 ${classNameInput}`} placeholder={placeholder}  {...props} />
    </div>
  )
}

export default ElementInputLabel