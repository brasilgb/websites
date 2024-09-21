import { maskMoney } from "@/Utils";
import { statusOrdemByValue } from '@/Utils/functions';
import moment from "moment";
import React from 'react'

interface FechadasProps {
    data?: any;
}

const Fechadas = ({ data }: FechadasProps) => {

    const stylesOrderStatus = (value: any) => {
        switch (value) {
            case 1:
                return "bg-rose-600/80 border border-gray-300 text-gray-50 text-xs uppercase";;
            case 2:
                return "bg-cyan-600/50 border border-cyan-600 text-cyan-800 text-xs uppercase";
            case 3:
                return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";
            case 4:
                return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";
            case 5:
                return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
            case 6:
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 7:
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 8:
                return "bg-blue-600/50 border border-blue-600 text-blue-800 text-xs uppercase";
        }
    };

    return (
        <>
            <div className="p-2">
                <h1 className="text-base font-semibold border-b text-megb-red-primary/80 uppercase">Ordens de serviço entregues</h1>
            </div>
            <div className="w-full px-2 pb-2 overflow-x-auto max-h-[650px]">
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="text-left bg-slate-200 md:text-base text-sm text-gray-600">
                            <th className="px-2 py-1 w-20">N° OS</th>
                            <th className="px-2 py-1">Defeito</th>
                            <th className="px-2 py-1">Desc. Orçamento</th>
                            <th className="px-2 py-1">Val. Orçamento</th>
                            <th className="px-2 py-1">Val. Serviços</th>
                            <th className="px-2 py-1">Val. Peças</th>
                            <th className="px-2 py-1">Val. Custo Total</th>
                            <th className="px-2 py-1">Entrega</th>
                            <th className="px-2 py-1">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.filter((fl: any) => (fl.status == 8)).map((order: any, idx: number) => (
                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-slate-100 text-gray-600' : 'text-gray-500'}`}>
                                <td className="px-2 py-1">{order?.id}</td>
                                <td className="px-2 py-1">{order?.defeito}</td>
                                <td className="px-2 py-1">{order?.descorcamento}</td>
                                <td className="px-2 py-1">R$ {maskMoney(order?.valorcamento ? order?.valorcamento : '0.00')}</td>
                                <td className="px-2 py-1">R$ {maskMoney(order?.vaservico ? order?.vaservico : '0.00')}</td>
                                <td className="px-2 py-1">R$ {maskMoney(order?.valpecas ? order?.valpecas : '0.00')}</td>
                                <td className="px-2 py-1">R$ {maskMoney(order?.custo ? order?.custo : '0.00')}</td>
                                <td className="px-2 py-1">{order?.dtentrega ? moment(order?.dtentrega).format("DD/MM/YYYY") : ''}</td>
                                <td className="py-1"><span className={`px-3 py-1 rounded-full font-semibold drop-shadow-md ${stylesOrderStatus(parseInt(order?.status))}`}>{statusOrdemByValue(parseInt(order?.status))}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Fechadas