import React from 'react'

function ContentSection({className="", children, ...props}) {
  return (
    <section className={`w-full min-h-screen flex flex-col justify-start items-center py-[6rem] px-[3rem] md:p-[5rem] lg:p-[7rem]   ${className}`} {...props}>
        {children}
    </section>
  )
}

export default ContentSection