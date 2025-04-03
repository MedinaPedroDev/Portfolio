import { h2 } from 'motion/react-client'
import React from 'react'

function TitleH2({children, className, ...props}) {
  return (
    <h2 className={`text-center text-4xl md:text-5xl font-bold mb-12 ${className}`} {...props}>
        {children}
    </h2>
  )
}

export default TitleH2