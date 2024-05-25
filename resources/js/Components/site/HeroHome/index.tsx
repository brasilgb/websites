import { Link } from '@inertiajs/react';
import { IoArrowForward, IoLogoWhatsapp } from 'react-icons/io5';

interface HeroProps {
  data: any;
}

const HeroHome = ({data}: HeroProps) => {
  console.log(data)
  return (
    <section className="bg-gray-200 md:py-12 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="mx-auto max-w-7xl px-4 lg:px-8 flex gap-3 flex-col md:flex-row">
          <div className="md:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 md:text-5xl">
              <span className="block xl:inline">{data[0]?.title}</span>
            </h1>
            <p
              className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg md:max-w-xl md:mx-auto lg:mx-0">
              {/* <div dangerouslySetInnerHTML={{ __html: data[0]?.content }} /> */}
              {data[0]?.summary}
            </p>

            <div className="mt-5 md:mt-8 md:flex md:justify-center lg:justify-start">
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


          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img className="h-56 w-full object-cover md:h-96 lg:w-full lg:h-full" src={`/storage/uploads/${data[0]?.featured}`} alt="" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroHome