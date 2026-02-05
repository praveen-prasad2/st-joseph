

import Header from '../home/Header';
import Footer from '../home/Footer';
import Table from './table';
import bgImage from '../assets/banner/bgimage1.jpeg';

function Home() {
  return (
    <div className="App">
        <Header />
        {/* <img src={bgImage} loading="eager" alt="Image" 
            style={{width:'100%',height:'100%',opacity:'0.3',display:'block',position:'absolute'}}
            ></img> */}
        <Table />
        <Footer/>
    </div>
  );
}

export default Home;