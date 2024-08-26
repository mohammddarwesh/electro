import "./App.css";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Billboard from "@/components/billboard/billboard";
import Featured from "@/components/featured/Featured";
import BestDealsGrid from "@/components/bestDeals/BestdealsGrid";
import BigDeals from "@/components/bigDeals/BigDeals";
import BestSellers from "@/components/bestSellers/BestSellers";
import SaleBanner from "@/components/SaleBanner/SaleBanner";
import RecentlyViewed from "@/components/recentlyViewed/RecentlyViewed";
import QuickView from "@/components/quickView/QuickView";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Billboard />
      <BigDeals />
      <Featured />
      <BestDealsGrid />
      <BestSellers />
      <SaleBanner />
      <RecentlyViewed />
      <QuickView />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
