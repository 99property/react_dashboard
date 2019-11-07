import React from 'react';
import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import Rightcontent from './components/rightcontent'
import Footer from './components/Footer'

function App() {
  
  return (
       <React.Fragment>
            <Header />
		    <div className="row">
            <Sidebar />
            <Rightcontent />
			</div>
            <Footer />
      </React.Fragment>  
  );
}

export default App;
