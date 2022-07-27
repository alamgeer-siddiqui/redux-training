export const depositBalance = (amount) => {
  return (dispatch)=>{
    dispatch({
      type:'DEPOSIT',
      payload:amount
    })
  }
};
export const withdrawBalance = (amount) => {
  return (dispatch)=>{
    dispatch({
      type:'WITHDRAW',
      payload:amount
    })
  }
};
