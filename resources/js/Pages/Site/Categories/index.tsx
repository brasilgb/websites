import GuestLayout from '@/Layouts/GuestLayout';
import ProductsGrid from "@/Components/site/ProductsGrid";
import { Head, Link, usePage } from '@inertiajs/react';
import SubCategoriesGrid from "@/Components/site/SubCategoriesGrid";
import FilterProducts from "@/Components/site/FilterProducts";
import CategoriesGrid from "@/Components/site/CategoriesGrid";

const Categories = ({ category, products, imagefeatured, query }: any) => {
  const { url } = usePage();

  return (
    <GuestLayout>

      <>
        <Head>
          <title>{category?.name}</title>
        </Head>
        <div className="relative h-16 md:h-60 w-full">
          <img
            src={`/storage/uploads/${url.split('/')[1] === 'servicos' ? imagefeatured : category?.featured}`}
            alt=""
            className="object-fill object-center w-full h-full"
          />
          {/* title and breadcumb */}
          <div className="absolute bg-gray-700 bg-opacity-60 w-full -bottom-4 md:bottom-0 text-gray-50 md:px-0 px-4">
            <div className="container mx-auto">
              <h1 className="md:text-4xl font-bold text-left text-red-um md:py-4">
                <span className="drop-shadow">{category?.name}</span>
              </h1>
              <div className="container m-auto">
                <ul className="flex items-center justify-start gap-1 text-xs md:text-base font-medium">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-gray-400"
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
                        className="text-gray-300 hover:text-gray-400"
                        href={`/${url.split('/')[1]}`}
                      >
                        <span>{url.split('/')[1] === 'servicos' ? 'Serviços' : url.split('/')[1]}</span>
                      </Link>
                      : <span className="text-gray-50">{url.split('/')[1] === 'servicos' ? 'Serviços' : url.split('/')[1]}</span>
                    }
                  </li>
                  {url.split('/')[3] &&
                    <>
                      <li>
                        /
                      </li>
                      <li>
                        <span className="text-gray-50">{url.split('/')[3]}</span>
                      </li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        {url === '/produtos' || query
          ? <>
            <FilterProducts data={category?.sub_categories} />
            <ProductsGrid data={products} datacat={category} />
          </>
          :
          <>
            {category?.posts.length > 0 && <CategoriesGrid data={category} />}
            {category?.sub_categories.length > 0 && <SubCategoriesGrid data={category?.sub_categories} />}
          </>
        }
      </>
    </GuestLayout>
  );
};

export default Categories;