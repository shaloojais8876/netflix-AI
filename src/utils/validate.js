export const checkValidData = (email, password) => {
  //const isfullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);  
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  //if(!isfullNameValid) return "Please! Provide a valid Name";
  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "Password is not valid";

  return null;
};