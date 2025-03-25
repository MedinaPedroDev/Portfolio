import React from 'react'

function LinkIcon({ className, children,...props }) {
    return (
        <a href="" className={`text-2xl p-2 border-3 leading-8 md:leading-10 border-gray-950 dark:border-amber-100 rounded-xl bg-gray-200 dark:bg-gray-950 hover:bg-gray-300 hover:dark:bg-gray-800 transition-all duration-100 group ${className}`} {...props}>
            {children}
        </a>
    )
}

export default LinkIcon