import React from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import ProductContainer  from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
toast.configure()
function App() {
  return (
       <Router>
          <div>
        <Navbar />
        <main id="mainContainer">
            <div className="container">
                <Switch >
                    <Route exact path="/">
                      <ProductContainer />
                    </Route>
                    <Route path="/Cart">
                      <CartContainer/>
                    </Route>
                </Switch>
            </div>
        </main>
        <Footer />
      </div>
       </Router>
  );
}

export default App;
