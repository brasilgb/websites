import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import moment from 'moment'
import React from 'react'
import NavFooter from '../NavFooter';
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';

interface FooterProps {
  data?: any;
}

const FooterLayout = ({ data }: FooterProps) => {

  return (
    <footer>
      <div className="bg-megb-blue-plus py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <Link
                href={route('home')}
                className=""
              >
                <div className="w-44">
                  <ApplicationLogo />
                </div>
              </Link>
              <p className="text-left mt-4">
                {data.config?.description}
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">{data.config?.title}</h2>
              </div>
              <div>
                <NavFooter data={data} />
              </div>
            </div>
            
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Encontre-nos</h2>
              </div>
              <div className='flex flex-col gap-1'>
                <p>{data.config?.email}</p>
                <p>{data.config?.phone}</p>
                <p>{data.config?.city}</p>
                <p>{data.config?.neighborhood}</p>
                <p>{data.config?.address}</p>
              </div>
            </div>
            
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Conecte-se conosco</h2>
              </div>
              <div className='flex'>
              <a href={`https://api.whatsapp.com/send?phone=${data.config?.whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`} target='_blank'>
                    <div className='mr-2 text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                        <IoLogoWhatsapp size={18} />
                    </div>
                </a>
                <a href={`https://ig.me/m/${data.config?.instagram}`} target='_blank'>
                    <div className='text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                        <IoLogoInstagram size={18} />
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-4 text-gray-500">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 md:w-auto md:text-left w-full text-center text-sm">
              &copy;{moment().format('YYYY')} - {data.config?.title} . Todos os direitos reservados.
            </div>
            <div className="px-4 md:w-auto md:text-left w-full text-center text-sm">
              <a href="https://megb.com.br" target="_blank" rel="noopener noreferrer" title='Dsenvolvido por MEGB'>
                <span className='text-sm font-bold text-gray-500 drop-shadow-md'>MEGB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout