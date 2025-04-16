import React, { useState } from 'react'

function ElementTextAreaLabel({ label, idInput, className = "", classNameInput, placeholder, type = "text", rows = 5, ...props }) {
  const [value, setValue] = useState('0/500')
  const handleKeyUp = (e) => {
    setValue(e.target.value.length + "/" + 500)
  }
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className={`font-semibold cursor-pointer max-w-max  relative ${props.required ? "after:text-red-500 after:content-['*'] after:absolute after:top-0 after:-right-3" : ""}`} htmlFor={idInput}>{label}</label>
      <div className={`relative block bg-transparent`}>
        <span className={`absolute bottom-3 right-5 text-sm font-semibold text-gray-500 dark:text-gray-400`}>{value}</span>

        <textarea onInput={handleKeyUp} type={type} id={idInput} name={idInput} rows={rows} className={`w-full pb-5 rounded-md p-2 border-1 border-black/50 focus:border-black dark:border-amber-100/50 dark:focus:border-amber-100 ${classNameInput}`} placeholder={placeholder} {...props} />
      </div>
    </div>
  )
}

export default ElementTextAreaLabel