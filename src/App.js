import React, { Component } from 'react'
import Navbar  from './Components/navbar';
import Footer  from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import router from './Components/router';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
toast.configure()
class App extends Component {
  showContentRouter = (router)=>{
    let result = null
    if(router.length > 0){
      result = router.map( (item,index)=>{
        return <Route key={index} path={item.path} exact={item.exact} component={item.main}/>
      })
    }
    return result
  }
  render(){
    
    return (
        <div>
          <Router>
            <Navbar />
              <Switch>
                <main id="mainContainer">
                    <div className="container">
                        {this.showContentRouter(router)}
                    </div>
                </main>
              </Switch>
            <Footer />
          </Router>
      </div>
    );
  }
}

export default App;
