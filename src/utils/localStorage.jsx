export const loadState = () => {
  try {
    let employeeData = localStorage.getItem("employees");
    if (employeeData !== null) {
      return JSON.parse(employeeData);
    } else return undefined;
  } catch (error) {
    console.log("Data Not Found");
    return undefined;
  }
};

export const SetState = (state)=>{
    try {
        localStorage.setItem("employees",JSON.stringify(state))
    } catch (error) {
        console.log("Data Not Saved ");
        
    }
}
