import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExploreCategories from "./components/ExploreCategories";
import WhyChoose_Brand from "./components/WhyChoose_Brand";
import Services from "./components/Services";
import Brands from "./components/Brands";
import CustomerReviews from "./components/CustomerReviews";
import TellRequirement from "./components/TellRequirement";
import About from "./components/About";

export default function Home() {
  return (
 <Wrapper>
  <Navbar/>
  <Banner/>
  <ExploreCategories/>
  <Services/>
  <WhyChoose_Brand/>
  <Brands/>
  <CustomerReviews/>
  <TellRequirement/>
  <About/>
  </Wrapper>
  );
}
