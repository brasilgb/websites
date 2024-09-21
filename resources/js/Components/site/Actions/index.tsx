import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import { IoPerson } from 'react-icons/io5'

const Actions = () => {
  const { auth } = usePage().props as any;
  console.log(auth.user);

  return (
    <>
      {auth?.user
        ? <Link
          className="flex items-center gap-1 bg-megb-red-primary hover:bg-megb-red-primary/90 md:rounded-full rounded-lg md:shadow-md py-1 px-3 border-2 border-megb-red-primary/50 transition-colors duration-300"
          href={auth?.user?.name === 'customer' ? route("clientes") : route("dashboard")}
        >
          <IoPerson className="text-slate-100/60" />
          <span className="text-sm drop-shadow font-semibold text-slate-50/80">{auth?.user?.name}</span>
        </Link>
        : <Link
          className="flex items-center gap-1 bg-megb-red-primary hover:bg-megb-red-primary/90 md:rounded-full rounded-lg md:shadow-md py-1 px-3 border-2 border-megb-red-primary/50 transition-colors duration-300"
          href={route("clientes")}
        >
          <IoPerson className="text-slate-100/60" />
          <span className="text-sm drop-shadow font-semibold text-slate-50/80">Área do cliente</span>
        </Link>
      }
    </>
  )
}

export default Actions