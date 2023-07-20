import React from 'react';
import './Home.css';
import { useSelector } from 'react-redux';

function InputResult() {
    
    const selector = useSelector(state => state);
    const { value } = selector.calc;
  
    return (
        <div className="row col-12 mx-auto">
                <input className="form-control input-lg col-xs-11 col-sm-11 col-md-11 col-lg-10 col-xl-10 mx-auto text-right border border-3 border-secondary rounded" type="text" value={value} />
            </div>
            
        );
    }

export default InputResult;
