import React, { Fragment } from "react";
import HomeCategoryContent from "./CategoryContent";

interface ServiceProps {
    data: any;
}

const HomeCategoriesGrid = ({ data }: ServiceProps) => {
    return (
        <section className="px-4 py-8" data-aos="zoom-in">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data?.map((service: any, idx: number) => (
                        <Fragment key={idx}>
                            <HomeCategoryContent data={service} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeCategoriesGrid