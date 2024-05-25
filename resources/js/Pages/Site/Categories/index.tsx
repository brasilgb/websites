import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import ProductsGrid from "@/Components/site/ProductsGrid";
import ServicesGrid from "@/Components/site/ServicesGrid";

interface CategoryProps {
  category: any;
}

const Categories = ({ category }: CategoryProps) => {
  console.log(category.posts)
  const categorytype = category.slug;
  return (
    <GuestLayout>
      ok
      {categorytype === 'cat-produtos'
        ? <ProductsGrid data={category} />
        : <ServicesGrid data={category} />
      }
    </GuestLayout>
  );
};

export default Categories;