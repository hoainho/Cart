import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import Cart  from './Components/Cart';
import ProductContainer  from './containers/ProductContainer';
import Notification from './Components/Notification';
function App() {
  return (
       <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <Notification />
                <Cart/>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
