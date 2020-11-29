import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import ProductContainer  from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
toast.configure()
function App() {
  return (
       <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <CartContainer/>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
