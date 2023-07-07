import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Cards from './components/Cards'

const data  = [
  {
    bgcolor: "#42cbf5",
    heading: "HTML Color Picker",
    desc: "Color Picker:Color Picker: With this online tool you can upload an image or provide a website URL and get the RGB Color, HEX Color and HSL Color code."
  },
  {
    bgcolor: "#42f596",
    heading: "HTML Color Picker",
    desc: "Color Picker:Color Picker: With this online tool you can upload an image or provide a website URL and get the RGB Color, HEX Color and HSL Color code."
  },
  {
    bgcolor: "#b3f542",
    heading: "HTML Color Picker",
    desc: "Color Picker:Color Picker: With this online tool you can upload an image or provide a website URL and get the RGB Color, HEX Color and HSL Color code."
  },
  {
    bgcolor: "#e042f5",
    heading: "HTML Color Picker",
    desc: "Color Picker:Color Picker: With this online tool you can upload an image or provide a website URL and get the RGB Color, HEX Color and HSL Color code."
  }
]

function App() {
  return (
    <div>
     <NavBar/>
     <HomePage/>
     <Cards data={data}/>
    </div>
  );
}

export default App;
