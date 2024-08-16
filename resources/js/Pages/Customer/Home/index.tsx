import CustomerLayout from "@/Layouts/CustomerLayout";
import React from 'react'
import { IoBuild, IoConstruct, IoHomeSharp, IoPeople, IoPerson, IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";

interface CustomerProps {
  clientes: any;
}

const HomeCustomer = ({ clientes }: CustomerProps) => {
  return (
    <CustomerLayout>
      <main className="container m-auto">
        <div className="text-lg text-megb-red-primary font font-semibold py-6">
          empresa
        </div>
        {/* Botões de menus */}
        <div className="flex items-center justify-start gap-4">
          <button
            className="px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-megb-blue-secundary hover:bg-megb-blue-secundary/80 text-xs text-white font-bold uppercase flex items-center justify-center gap-1"
          >
            <IoHomeSharp size={18} />
            <span>texto por extenso</span>
          </button>
          <button
            className="px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1"
          >
            <IoConstruct size={18} />
            <span>texto por extenso</span>
          </button>
          <button
            className="px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1"
          >
            <IoPersonSharp size={18} />
            <span>texto por extenso</span>
          </button>
          <button
            className="px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1"
          >
            <IoPersonSharp size={18} />
            <span>texto por extenso</span>
          </button>
        </div>
      </main>
    </CustomerLayout>
  )
}

export default HomeCustomer