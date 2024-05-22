import React from 'react'
import ProductContent from "./ProductContent"

type Props = {}

const ProductsGrid = (props: Props) => {
    return (
        <section className="bg-gray-50 px-4 py-8">
            <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
            </div>
            </div>
        </section>
    )
}

export default ProductsGrid