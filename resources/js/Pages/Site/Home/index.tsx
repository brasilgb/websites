import BrandGrid from "@/Components/site/BrandGrid";
import CarouselSlide from "@/Components/site/CarouselSlide";
import HeroHome from "@/Components/site/HeroHome";
import HomeCategoriesGrid from "@/Components/site/HomeCategoriesGrid";
import ProductsGrid from "@/Components/site/ProductsGrid";
import GuestLayout from "@/Layouts/GuestLayout";


const Home = ({ sections, categories, products }: any) => {

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

  // const products = categories
  //   .filter((s: any) => s.id === sections?.section5)
  //   .map((category: any) => category);

  return (
    <GuestLayout>
      {sections?.section1 && <HeroHome data={hero[0]?.posts} />}
      {sections?.section2 && <CarouselSlide data={slides[0]?.posts} />}
      {sections?.section3 && <HomeCategoriesGrid data={services[0]?.sub_categories} />}
      {sections?.section4 && <BrandGrid data={brands[0]?.posts} />}
      {sections?.section5 && <ProductsGrid data={products} />}
    </GuestLayout>
  );
};

export default Home;
