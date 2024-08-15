import { Link } from '@inertiajs/react';
import { url } from "inspector";
import { IoArrowForward, IoLogoWhatsapp } from 'react-icons/io5';

interface HeroProps {
  data: any;
}

const HeroHome = ({ data }: HeroProps) => {

  return (
    // <section className="md:py-12 py-6 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('/storage/uploads/${data[0]?.featured})`}}>
    <section className="bg-no-repeat bg-cover bg-center bg-red-200 h-96 md:h-[450px]"
      style={{
        backgroundImage:
          `url('/storage/uploads/${data[0]?.featured}')`,
      }}
    >
      <div className='bg-gray-800 bg-opacity-60 w-full h-full md:py-14 py-6'>
        <div className="max-w-7xl mx-auto">
          <div className="px-4 flex gap-3 flex-col md:justify-end">
            <div className='flex flex-col items-end justify-center'>
              <div className='md:w-3/6'>
                <h1 className="text-2xl tracking-tight font-extrabold text-gray-50 md:text-5xl">
                  {data[0]?.title}
                </h1>
                <p className="mt-3 text-base text-gray-50 md:mt-5 md:text-lg">
                  {data[0]?.summary}
                </p>
              </div>
              <div className="mt-5 md:mt-8 md:flex md:justify-start justify-start md:w-3/6">
                <div className="rounded-md shadow">
                  <Link href={route("slug", data[0]?.slug)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 hover:bg-rose-600 md:py-4 md:text-lg md:px-10">
                    <span className='mr-2'>Conhecer mais</span>
                    <IoArrowForward size={25} />
                  </Link>
                </div>
                <div className="mt-3 md:mt-0 md:ml-3">
                  <a href={`https://api.whatsapp.com/send?phone=${data[0]?.whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-50 bg-green-600 hover:bg-green-500 md:py-4 md:text-lg md:px-10">
                    <span className='mr-2'>Solicitar orçamento</span>
                    <IoLogoWhatsapp size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome