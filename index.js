function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  let originalEmployee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(originalEmployee, "name", "Carl");
  
  console.log(updatedEmployee);
  
  
  // Destructively update employee
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  let employee = {
    name: "Sam",
    streetAddress: "12 Broadway"
  };
  
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }
  
  let clonedEmployee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  let updatedClonedEmployee = deleteFromEmployeeByKey(clonedEmployee, "name");
  console.log(updatedClonedEmployee);
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }