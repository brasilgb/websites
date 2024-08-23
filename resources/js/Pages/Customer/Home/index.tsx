import LinkMenuCustomers from "@/Components/Customer/LinkMenuCustomers";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { usePage } from "@inertiajs/react";
import React from 'react'
import { IoBuild, IoConstruct, IoHomeSharp, IoPeople, IoPerson, IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";

interface CustomerProps {
  clientes: any;
}

const HomeCustomer = ({ clientes }: CustomerProps) => {
  const { auth } = usePage().props as any;
  console.log(clientes);

  return (
    <CustomerLayout>
      <main className="container m-auto p-2">
        <div className="md:text-lg text-sm text-gray-500 font font-semibold py-6">
          Olá <span className="text-megb-red-primary">{auth?.user?.name}</span>, você está em seu ambiente Eplus
        </div>
        {/* Botões de menus */}
        <div className="w-full">
          <div className="flex items-center justify-start gap-4 overflow-x-auto md:w-full w-[295px]">
            <LinkMenuCustomers
              label="Minhas pendências"
              icon={<IoHomeSharp />}
              active={true}
              url={''}
            />
            <LinkMenuCustomers
              label="Ordens de serviço"
              icon={<IoConstruct />}
              active={false}
              url={''}
            />
            <LinkMenuCustomers
              label="Meu perfil"
              icon={<IoPersonSharp />}
              active={false}
              url={''}
            />
          </div>
        </div>
        <div className="bg-gray-50 border border-white mt-4 rounded-md shadow-sm">
          <div className="p-2 border-b">
            <h1 className="text-lg font-medium border-b">Ordens de serviço</h1>
          </div>
          <div className="">
            {clientes?.orders?.filter((fl: any) => (fl.status != 8)).map((order: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <div>{order.id}</div>
                <div>{order.detalhes}</div>
                <div>{order.orcamento}</div>
                <div>{order.status}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </CustomerLayout>
  )
}

export default HomeCustomer