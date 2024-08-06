import BrandGrid from "@/Components/site/BrandGrid";
import CarouselSlide from "@/Components/site/CarouselSlide";
import CategoriesGrid from "@/Components/site/CategoriesGrid";
import HeroHome from "@/Components/site/HeroHome";
import ProductsGrid from "@/Components/site/ProductsGrid";
import ServicesGrid from "@/Components/site/ServicesGrid";
import SubCategoriesGrid from "@/Components/site/SubCategoriesGrid";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";


const Home = ({ sections, categories }: any) => {

  const hero = categories
    .filter((s: any) => s.id === sections?.section1)
    .map((category: any) => category);

  const slides = categories
    .filter((s: any) => s.id === sections?.section2)
    .map((category: any) => category);

  const services = categories
    .filter((s: any) => s.id === sections?.section3)
    .map((category: any) => category);

  const brands = categories
    .filter((s: any) => s.id === sections?.section4)
    .map((category: any) => category);

  const products = categories
    .filter((s: any) => s.id === sections?.section5)
    .map((category: any) => category);

  return (
    <GuestLayout>
      <Head>
        <title>Home</title>
        <meta
          head-key="description"
          name="description"
          content="This is the default description"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      {sections?.section1 && <HeroHome data={hero[0].posts} />}
      {sections?.section2 && <CarouselSlide data={slides[0].posts} />}
      {sections?.section3 && <SubCategoriesGrid data={services[0].sub_categories} />}
      {sections?.section4 && <BrandGrid data={brands[0].posts} />}
      {sections?.section5 && <ProductsGrid data={products[0].posts} />}
    </GuestLayout>
  );

};

export default Home;
