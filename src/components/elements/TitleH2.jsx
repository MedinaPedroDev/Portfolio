import { h2 } from 'motion/react-client'
import React from 'react'

function TitleH2({children, className="", ...props}) {
  return (
    <h2 className={`font-(family-name:--font-lexend) text-center text-4xl md:text-5xl font-black mb-12 ${className}`} {...props}>
        {children}
    </h2>
  )
}

export default TitleH2