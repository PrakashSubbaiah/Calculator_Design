export const addElem = (text) => dispatch => {
    return dispatch({
      type: 'ADD_ELEM',
      text
    })
  };
  
export const clear = () => dispatch => {
  return dispatch({
        type: 'CLEAR'
    })
};

export const equal = (value) => dispatch => {

    try {
      eval(value);
      return dispatch({
        type: 'EQUAL',
        value
      })
      } catch (e) {        
        return dispatch({
          type: 'ERROR',
          message: "Invalid Calculation"
        });
      }

};
