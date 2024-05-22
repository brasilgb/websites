import HeroHome from "@/Components/site/HeroHome";
import MarkGrid from "@/Components/site/MarkGrid";
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
  const section3 = categories
    .filter((s: any) => s.id === sections?.section3)
    .map((category: any) => category);
  const produtos = categories
    .filter((s: any) => s.id === sections?.section4)
    .map((category: any) => category);

  return (
    <GuestLayout>
      {sections?.section1 && <HeroHome data={hero} />}
      {sections?.section2 && <ServicesGrid data={services} />}
      {sections?.section3 && <MarkGrid />}
      {sections?.section4 && <ProductsGrid />}
    </GuestLayout>
  );
};

export default Home;
