
import Header from '../home/Header';
import Footer from '../home/Footer';
import GalleryCore from './coreGallery'

function Home() {
  return (
    <div className="App">
        <Header />
        <GalleryCore />
        <Footer/>
    </div>
  );
}

export default Home;