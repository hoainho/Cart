import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/FTCart';
import Cart  from './Components/Cart';
import Products  from './Components/Products';
import Notification from './Components/Notification';
function App() {
  return (
       <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <Products />
                <Notification />
               <Cart/>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
