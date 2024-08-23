import LinkMenuCustomers from "@/Components/Customer/LinkMenuCustomers";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { usePage } from "@inertiajs/react";
import React, { useState } from 'react'
import { IoBuild, IoConstruct, IoHomeSharp, IoPeople, IoPerson, IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";
import Pendencias from "./pendencias";
import Fechadas from "./fechadas";
import Alterarsenha from "./alterarsenha";

interface CustomerProps {
  clientes: any;
}

const HomeCustomer = ({ clientes }: CustomerProps) => {
  const { auth } = usePage().props as any;
  const [alterServices, setAlterServices] = useState('pendencias');

  return (
    <CustomerLayout>
      <main className="container m-auto p-2">
        <div className="md:text-lg text-sm text-gray-500 font font-semibold py-6">
          Olá <span className="text-megb-red-primary">{auth?.user?.name}</span>, você está em seu ambiente do Cliente Eplus
        </div>
        {/* Botões de menus */}
        <div className="w-full">
          <div className="flex items-center justify-start gap-4 overflow-x-auto md:w-full w-full">
            <LinkMenuCustomers
              label="Minhas pendências"
              icon={<IoHomeSharp />}
              active={alterServices === 'pendencias' ? true : false}
              url={() => setAlterServices('pendencias')}
            />
            <LinkMenuCustomers
              label="Ordens de serviço"
              icon={<IoConstruct />}
              active={alterServices === 'ordens' ? true : false}
              url={() => setAlterServices('ordens')}
            />
            <LinkMenuCustomers
              label="Meu perfil"
              icon={<IoPersonSharp />}
              active={alterServices === 'perfil' ? true : false}
              url={() => setAlterServices('perfil')}
            />
          </div>
        </div>
        <div className="bg-gray-50 border border-white mt-4 rounded-md shadow-sm">
          {alterServices === 'pendencias' &&
            <Pendencias data={clientes} />
          }
          {alterServices === 'ordens' &&
            <Fechadas data={clientes} />
          }
          {alterServices === 'perfil' &&
            <Alterarsenha customer={clientes} />
          }
        </div>
      </main>
    </CustomerLayout>
  )
}

export default HomeCustomer