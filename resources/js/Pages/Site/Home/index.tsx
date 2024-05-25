import BrandGrid from "@/Components/site/BrandGrid";
import HeroHome from "@/Components/site/HeroHome";
import ProductsGrid from "@/Components/site/ProductsGrid";
import ServicesGrid from "@/Components/site/ServicesGrid";
import GuestLayout from "@/Layouts/GuestLayout";


const Home = ({ sections, categories }: any) => {

  const hero = categories
    .filter((s: any) => s.id === sections?.section1)
    .map((category: any) => category);

  const services = categories
    .filter((s: any) => s.id === sections?.section2)
    .map((category: any) => category);

  const brands = categories
    .filter((s: any) => s.id === sections?.section3)
    .map((category: any) => category);

  const products = categories
    .filter((s: any) => s.id === sections?.section4)
    .map((category: any) => category);
console.log(products.posts);

  return (
    <GuestLayout>
      {sections?.section1 && <HeroHome data={hero[0].posts} />}
      {sections?.section2 && <ServicesGrid data={services[0].posts} />}
      {sections?.section3 && <BrandGrid data={brands[0].posts} />}
      {sections?.section4 && <ProductsGrid data={products[0].posts} />}
    </GuestLayout>
  );

};

export default Home;
