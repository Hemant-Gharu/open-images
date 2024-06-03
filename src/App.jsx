import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesCards from './components/ImagesContainer/ImagesCards';
import { useImage } from './context/Context'

function App() {
   const { images } = useImage();
   console.log("images => ", images);

   return (
      <>
         <ImagesCards />
      </>
   )
}

export default App
