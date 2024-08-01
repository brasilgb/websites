import React, { Fragment } from "react";
import CategoryContent from "./CategoryContent";

interface ServiceProps {
    data: any;
}

const SubCategoriesGrid = ({ data }: ServiceProps) => {
    return (
        <section className="bg-gray-50 px-4 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data?.map((service: any, idx: number) => (
                        <Fragment key={idx}>
                            <CategoryContent data={service} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default SubCategoriesGrid