import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import ProductsGrid from "@/Components/site/ProductsGrid";
import ServicesGrid from "@/Components/site/ServicesGrid";
import { Head, Link, usePage } from '@inertiajs/react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import SubCategoriesGrid from "@/Components/site/SubCategoriesGrid";
import CategoriesGrid from "@/Components/site/CategoriesGrid";

interface CategoryProps {
  category: any;
}

const Categories = ({ category }: CategoryProps) => {
  const { url } = usePage();
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
            className="object-fill object-center w-full h-full"
          />
          {/* title and breadcumb */}
          <div className="absolute bg-gray-700 bg-opacity-60 w-full bottom-0 text-gray-50 md:px-0 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-left text-red-um py-4">
                <span className="drop-shadow">{category.name}</span>
              </h1>
              <div className="container m-auto">
                <ul className="flex items-center justify-start gap-1 text-base font-medium">
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
                      : <span className="text-gray-50">{url.split('/')[1]}</span>
                    }
                  </li>
                  {url.split('/')[2] &&
                    <>
                      <li>
                        /
                      </li>
                      <li>
                        <span className="text-gray-50">{url.split('/')[2]}</span>
                      </li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CategoriesGrid data={category.posts} />
        <SubCategoriesGrid data={category.sub_categories} />
      </>
    </GuestLayout>
  );
};

export default Categories;