import React, { ReactNode } from "react"

interface SideMenuSectionProps {
  title?: string
  children: ReactNode
}

const SideMenuSection = ({ children, title }: SideMenuSectionProps) => {
  return (
    <section>
      <div className="text-dcard-section-title px-3 font-bold py-2 cursor-default">{title}</div>
      {children}
    </section>
  )
}

export default SideMenuSection
