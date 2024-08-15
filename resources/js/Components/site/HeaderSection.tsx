import React from 'react'

interface HeaderSectionProps {
    title: string
}

const HeaderSection = (props: HeaderSectionProps) => {
  return (
    <div className="mb-4">
    <h1 className="text-xl text-megb-red-primary/80 font-bold uppercase">{props.title}</h1>
    <div className="border-b-2 border-gray-400/40 mb-0.5 w-1/3" />
    <div className="border-b-2 border-gray-400/40 mb-0.5 w-2/3" />
    <div className="border-b-2 border-gray-400/40 w-3/3" />
</div>
  )
}

export default HeaderSection