import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from "../actions/actions";

function ErrorMessage() {

    const dispatch = useDispatch();     
    const selector = useSelector(state => state);
    const { message } = selector.calc;

    return (
        <div className="row col-12 mx-auto text-center pt-3">
                {message? <div className="alert alert-danger alert-dismissible col-12 mx-auto text-center ">
                            <a className="close" onClick={() => dispatch(clear())}>&times;</a>
                            <strong>{message}</strong>
                          </div>
                : null}
          </div>            
        );
    }

export default ErrorMessage;