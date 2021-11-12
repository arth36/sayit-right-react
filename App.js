import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
import Login from './Login';
import Signup from './Signup';
import Myprofileadmin from './Myprofileadmin';
import Myprofileadvisor from './Myprofileadvisor';
import Myprofilestudent from './Myprofilestudent';
import Myprofileprof from './Myprofileprof';
import Blogs from './Blogs';

function App() {
  const title ='sayItRight'
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contactus">
              <Contactus />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/myprofileadmin">
              <Myprofileadmin />
            </Route>
            <Route path="/myprofilestudent">
              <Myprofilestudent />
            </Route>
            <Route path="/myprofileprof">
              <Myprofileprof />
            </Route>
            <Route path="/myprofileadvisor">
              <Myprofileadvisor />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
