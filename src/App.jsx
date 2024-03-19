import './App.css'
import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';


function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <h1 className="text-7xl text-center my-12 font-bold">Global Gym</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App

// import PropTypes from 'prop-types';
