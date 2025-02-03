import React, { Fragment, useMemo } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Parser } from "html-to-react";
import HeaderSection from "@/Components/site/HeaderSection";
import { IoDocumentText, IoLogoWhatsapp } from 'react-icons/io5';

const Products = ({ products, category }: any) => {
  console.log(products);
  const { datasite } = usePage().props as any;
  const { url } = usePage();

  return (
    <GuestLayout>
      <Head>
        <title>{products?.title}</title>
      </Head>
      <div className="relative h-16 md:h-60 w-full">
        <img
          src={`/storage/uploads/${category?.featured}`}
          alt=""
          className="object-fill object-center w-full h-full"
        />
        {/* title and breadcumb */}
        <div className="absolute bg-gray-700 bg-opacity-60 w-full -bottom-4 md:bottom-0 text-gray-50 md:px-0 px-4">
          <div className="container mx-auto">
            <h1 className="md:text-4xl font-bold text-left text-red-um md:py-4">
              <span className="drop-shadow">{products.title}</span>
            </h1>
            <div className="container m-auto">
              <ul className="flex items-center justify-start gap-1 text-xs md:text-base font-medium">
                <li>
                  <Link
                    className="text-gray-300 hover:text-gray-600"
                    href="/"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  /
                </li>
                <li>
                <Link
                    className="text-gray-300 hover:text-gray-600"
                    href="/produtos"
                  >
                    <span>Produtos</span>
                  </Link>
                </li>
                {url.split('/')[2] &&
                  <>
                    <li>
                      /
                    </li>
                    <li>
                      <span className="text-gray-50">{products.title}</span>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-10">
        <div className='container mx-auto'>
          <div className="px-4 text-base text-gray-600">
            <HeaderSection title={products.title} />
            <div className='flex sm:flex-row flex-col items-start justify-between w-full'>
              <div className='sm:order-1 order-2 sm:w-3/5'>
                {/* {Parser().parse(products?.summary)} */}
                <div className='flex items-center gap-1'><IoDocumentText size={22} /> <h1 className='sm:text-2xl text-lg text-gray-700 uppercase font-bold'>Descrição do produto</h1></div>
                <div className="styles-timynce" dangerouslySetInnerHTML={{ __html: products?.content }} />
              </div>
              <div className='sm:order-2 mb-2'>
                
              <a
                  href={`https://wa.me/${datasite.config?.whatsapp}?text=Quero informações sobre ${products?.title}`}
                  target="_blank" className="flex justify-end text-color bottom-2 right-2 text-[#25D366] hover:text-[#25D366]/90">
                  <IoLogoWhatsapp size={30} />
                </a>
              </div>
              <div className='border bg-gray-50 p-2 sm:order-3 border-white shadow-md mb-4'>
                <img
                  src={`/storage/uploads/${products?.featured}`}
                  alt={products.title}
                  className="object-fill object-center w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
};

export default Products;