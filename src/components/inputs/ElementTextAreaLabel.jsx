import React from 'react'

function ElementTextAreaLabel({label, idInput, className, classNameInput, placeholder, type="text", rows=5}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label className='font-semibold cursor-pointer max-w-max' htmlFor={idInput}>{label}</label>
        <textarea type={type} id={idInput} name={idInput} rows={rows} className={`rounded-md p-2 border-1 border-black/50 focus:border-black dark:border-amber-100/50 dark:focus:border-amber-100 ${classNameInput}`} placeholder={placeholder} />
    </div>
  )
}

export default ElementTextAreaLabel