import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import RecentQueries from "../Components/RecentQueries";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel> 
            <Banner></Banner> 
            <RecentQueries></RecentQueries>
            <Blog></Blog>
            <Footer></Footer>          
        </div>
    );
};

export default Home;