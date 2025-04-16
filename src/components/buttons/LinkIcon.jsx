import React from 'react'

function LinkIcon({ className="", href="#", children,...props }) {
    return (
        <a href={href} className={`text-2xl p-2 border-3 leading-8 md:leading-10 border-gray-950 dark:border-amber-100 rounded-xl bg-gray-200 dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-200 hover:dark:bg-gray-200 hover:dark:text-black transition-all duration-100 group 
        shadow-sm-bottom hover:dark:shadow-slate-400/75 hover:shadow-gray-800/75
        ${className}`} {...props}>
            {children}
        </a>
    )
}

export default LinkIcon