import React from 'react'
import ProductContent from "./ProductContent"

interface ProductsProps {
    data: any
};

const ProductsGrid = ({ data }: ProductsProps) => {
    console.log(data);
    
    return (
        <section className="bg-gray-50 px-4 py-8">
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {data[0]?.posts.map((post: any, idx: number) => (
                        <ProductContent product={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsGrid