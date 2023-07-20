import React from 'react';
import './Home.css';

import InputResult from './InputResult';
import ErrorMessage from './ErrorMessage';
import Buttons from './Buttons';

function Home() {   
    
  return (
      <section id="home" className="bg-dark">
        <div className="container mx-auto">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 mx-auto shadow p-3 mb-5 bg-white rounded">

          <h2 className="text-center text-dark p-3"><i>Calculator</i></h2>
          
          <InputResult />

          <ErrorMessage />
          
          <Buttons />
          
          </div>
        </div>
      </section>
    );
  }

  export default Home;
