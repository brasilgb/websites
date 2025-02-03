import React, { Fragment, useMemo } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Parser } from "html-to-react";
import HeaderSection from "@/Components/site/HeaderSection";

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
                  {url.split('/')[2]
                    ? <Link
                      className="text-gray-300 hover:text-gray-600"
                      href={`/${url.split('/')[1]}`}
                    >
                      <span>{url.split('/')[1]}</span>
                    </Link>
                    : <span>{url.split('/')[1]}</span>
                  }
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
            <div className='flex items-start justify-between w-full'>
              {Parser().parse(products?.summary)}
              <div>
                <div className="styles-timynce" dangerouslySetInnerHTML={{ __html: products?.content }} />
              </div>
              <div className='border-2'>
                <img
                  src={`/storage/uploads/${products?.featured}`}
                  alt=""
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