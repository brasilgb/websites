import React from 'react'

interface FechadasProps {
    data?: any;
}

const Fechadas = ({ data }: FechadasProps) => {
    return (
        <>
            <div className="p-2">
                <h1 className="text-base font-semibold border-b text-megb-red-primary/80 uppercase">Ordens de serviço</h1>
            </div>
            <div className="w-full px-2 pb-2 overflow-x-auto">
                <table className="table whitespace-nowrap w-full">
                    <thead>
                        <tr className="text-left bg-slate-200 md:text-base text-sm text-gray-600">
                            <th className="px-2 py-1">Ordem</th>
                            <th className="px-2 py-1">Detalhes do Serviço</th>
                            <th className="px-2 py-1">Orçamento</th>
                            <th className="px-2 py-1">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.filter((fl: any) => (fl.status == 8)).map((order: any, idx: number) => (
                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-slate-100 text-gray-600' : 'text-gray-500'}`}>
                                <td className="px-2 py-1">{order.id}</td>
                                <td className="px-2 py-1">{order.detalhes}</td>
                                <td className="px-2 py-1">{order.orcamento}</td>
                                <td className="px-2 py-1">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Fechadas