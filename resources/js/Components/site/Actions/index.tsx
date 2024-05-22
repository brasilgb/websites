import { Link } from '@inertiajs/react'
import React from 'react'
import { IoPerson } from 'react-icons/io5'

const Actions = () => {
  return (
    <div className="flex justify-start">
        <Link
        className="bg-gray-50 px-4 py-1 rounded border border-gray-200"
        href={route("dashboard")}
        >
        <span className="text-base">
          <IoPerson />
        </span>
        </Link>
    </div>
  )
}

export default Actions