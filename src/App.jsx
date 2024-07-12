import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesCards from './components/ImagesContainer/ImagesCards';
import Navbar from './components/Header/Navbar';
import Header from './components/Header/Header';
import FilterButtons from './components/ImagesContainer/FilterButtons';
import Example from './components/ImagesContainer/Example';

function App() {
   return (
      <>
         <Navbar />
         <Header />
         <Example/>
         <FilterButtons />
         <ImagesCards />
      </>
   )
}

export default App;
