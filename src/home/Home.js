import Header from './Header';
import Slider from './Slider';
import Error from './Errorpg';
import MapDiv from './Map'
import Footer from './Footer'

function Home() {
  return (
    <div className="App">
        <Header />
        <Slider />
        {/* <Error /> */}
        <MapDiv />
        <Footer/>
    </div>
  );
}

export default Home;