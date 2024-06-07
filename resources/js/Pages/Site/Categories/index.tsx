import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import ProductsGrid from "@/Components/site/ProductsGrid";
import ServicesGrid from "@/Components/site/ServicesGrid";
import { Head, Link } from '@inertiajs/react';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface CategoryProps {
  category: any;
}

const Categories = ({ category }: CategoryProps) => {
  const categorytype = category.slug;
  return (
    <GuestLayout>
      <Head>
        <title>{category.name}</title>
        <meta
          head-key="description"
          name="description"
          content="This is the default description"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <>
        <div className="relative h-60 w-full">
          <img
            src={`/storage/uploads/${category?.featured}`}
            alt=""
            className="object-cover object-center w-full h-full"
          />
          {/* title and breadcumb */}
          <div className="absolute bg-gray-700 bg-opacity-60 w-full bottom-0 text-gray-50 md:px-0 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-left text-red-um py-4">
                <span className="drop-shadow">{category.name}</span>
              </h1>
              <div className="container m-auto">
                <ul className="py-2 flex items-center justify-start">
                  <li>
                    <Link
                      className="text-base font-medium hover:text-gray-600"
                      href="/"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="text-base text-blue-quatro mx-1">
                    <IoChevronForwardOutline size={16} />
                  </li>
                  <li className="text-base text-blue-quatro">
                    <span>{category.name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {categorytype === 'cat-produtos'
          ? <ProductsGrid data={category.posts} />
          : <ServicesGrid data={category.posts} />
        }
      </>
    </GuestLayout>
  );
};

export default Categories;