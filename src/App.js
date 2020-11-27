import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import ProductContainer  from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
function App() {
  return (
       <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <MessageContainer />
                <CartContainer/>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
