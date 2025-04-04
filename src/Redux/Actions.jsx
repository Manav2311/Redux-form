export const VIEWEMPLOYEES = "VIEWEMPLOYEES";
export const ADDEMPLOYEE = "ADDEMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const ViewEmployees = () => ({
  type: VIEWEMPLOYEES,
});
export const AddEmployee = (data) => ({
  type: ADDEMPLOYEE,
  payload: data,
});
export const Delete_Employee = (id) => ({
  type: DELETE_EMPLOYEE,
  payload: id,
});
export const Update_Employee = (editedData) => ({
  type: UPDATE_EMPLOYEE,
  payload: editedData,
});
