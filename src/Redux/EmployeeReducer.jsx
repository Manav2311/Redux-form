import {
  ADDEMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  VIEWEMPLOYEES,
} from "./Actions";

const initialState = {
  employees: [
    {
      designation: "Web Developer",
      email: "manavprajapati141@gmail.com",
      id: "m92u44sv6zlhbto5t",
      image: "wdwdd",
      name: "Manav Prajapati",
      phoneNumber: "09327424663",
    },
  ],
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWEMPLOYEES: {
      return state;
    }
    case ADDEMPLOYEE: {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }
    case DELETE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.filter(
          (val, i) => val.id !== action.payload
        ),
      };
    }
    case UPDATE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    }

    default:
      return state;
  }
};

export default EmployeeReducer;
