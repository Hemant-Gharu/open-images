import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesCards from './components/ImagesContainer/ImagesCards';
import Navbar from './components/Header/Navbar';
import Header from './components/Header/Header';
import SearchBar from './components/Header/SearchBar';
import FilterButtons from './components/ImagesContainer/FilterButtons';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

   return (
      <>
         <Router>
            <Navbar />
            <Header />
            <FilterButtons />
            <ImagesCards />
         </Router>
      </>
   )
}

export default App;
