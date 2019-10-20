import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/header'
import Footer from './components/footer'
import Landing from './components/landing'
import Movie from './components/movie';
import store from './redux/store'
const App: React.FC = () => {
  return (

    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}


export default App;
