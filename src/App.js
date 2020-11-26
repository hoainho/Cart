import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import ProductContainer  from './containers/ProductContainer';
import Notification from './Components/Notification';
import CartContainer from './containers/CartContainer';
function App() {
  return (
       <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <Notification />
                <CartContainer/>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
