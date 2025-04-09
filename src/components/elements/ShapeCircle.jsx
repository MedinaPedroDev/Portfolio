import { div } from 'motion/react-client'
import React from 'react'

function ShapeCircle({className="", size="30rem"}) {
  return (
    <div className={`absolute rounded-[9999px] opacity-50 blur-[90px] -z-1 ${className}`} style={{width: size, height: size}} >

    </div>
  )
}

export default ShapeCircle