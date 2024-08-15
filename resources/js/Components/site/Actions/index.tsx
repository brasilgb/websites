import { Link } from '@inertiajs/react'
import React from 'react'
import { IoPerson } from 'react-icons/io5'

const Actions = () => {
  return (
    <Link
      className="flex items-center bg-megb-red-primary hover:bg-megb-red-primary/90 rounded-full shadow-md py-1 px-3  border-2 border-megb-red-primary/50 transition-colors duration-300"
      href={route("dashboard")}
    >
      <span className="text-sm drop-shadow font-semibold text-slate-50/80"></span>
      <IoPerson className="text-slate-100/60"/>
    </Link>
  )
}

export default Actions