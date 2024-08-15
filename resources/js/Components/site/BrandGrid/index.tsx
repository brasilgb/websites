import React from 'react'
import BrandContent from "./BrandContent"

interface BrandProps {
    data: any
}

const BrandGrid = ({ data }: BrandProps) => {

    return (
        <section className="flex justify-center items-center p-8 bg-gray-100">
            <div className="container mx-auto flex justify-center max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 text-gray-500 lg:grid-cols-5 items-center">
                    {data.map((post: any, idx: number) => (
                        <BrandContent>
                            <img width={60} src={`storage/uploads/${post?.featured}`} />
                        </BrandContent>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BrandGrid