import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import reqeusts from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
      <div className='app'>
        <Nav/>
        <Banner/>
        <Row
          title="NETFLIX ORIGINALS"
          id="NO"
          fetchUrl={reqeusts.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" id="TN" fetchUrl={reqeusts.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={reqeusts.fetchTopRated} />
        <Row title="Action Movies" id="AM" fetchUrl={reqeusts.fetchActionMovies} />
        <Row title="Comedy Movies" id="CM" fetchUrl={reqeusts.fetchComedyMovies} />
        <Footer/>
      </div>
  );
}

export default App;
