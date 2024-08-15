import React, { Fragment } from "react";
import CategoryContent from "./CategoryContent";
import HeaderSection from "../HeaderSection";

interface ServiceProps {
    data: any;
}

const SubCategoriesGrid = ({ data }: ServiceProps) => {
    return (
        <section className="px-4 py-8" data-aos="zoom-in">
            {data.length > 0 &&
                <div className="container mx-auto">
                    <HeaderSection title="Serviços" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data?.map((service: any, idx: number) => (
                            <Fragment key={idx}>
                                <CategoryContent data={service} />
                            </Fragment>
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default SubCategoriesGrid