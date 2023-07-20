import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';

import { clear, addElem, equal } from "../actions/actions";


function Buttons() {
  
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  
  const { value, btns } = selector.calc;
  
  return (                                            
          <div className="row col-12 mx-auto pt-3">
            {btns.map((item, key) => {
              if(item == "C"){
                return(
                  <div class="col-3 p-2 text-center"><button type="button" class="btn btn-danger btn-lg" onClick={() => dispatch(clear()) } key={key}>{item}</button></div>
                )
              } else if(item == "="){
                return(
                  <div class="col-12 p-2 text-center"><button type="button" class="btn btn-success btn-lg col-6" onClick={() => dispatch(equal(value)) } key={key}>{item}</button></div>
                )
              } else {
                return(
                  <div class="col-3 p-2 text-center"><button type="button" class="btn btn-dark btn-lg" onClick={() => dispatch(addElem(item)) } key={key}>{item}</button></div>
                )
              }
            })}
          </div>          
    );
  }

  export default Buttons;
