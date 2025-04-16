import React from 'react'

function ContentSection({className="", children, ...props}) {
  return (
    <section className={`w-full max-w-[1600px] h-auto flex flex-col justify-start items-center py-[5rem] md:py-[6rem] px-[1.5rem] sm:px-[2rem] md:p-[5rem] lg:p-[7rem]   ${className}`} {...props}>
        {children}
    </section>
  )
}

export default ContentSection