import Category from '../../components/category/Category.jsx';
import HeroSection from '../../components/herosection/HeroSection.jsx';
import Productcardhp from '../../components/HPproductcard/Productcardhp.jsx';
import Layout from '../../components/layout/Layout.jsx';
import Testimonial from '../../components/testimonial/Testimonial.jsx';
import Track from '../../components/track/Track.jsx';

function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/> 
      <Productcardhp/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default HomePage