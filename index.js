// Write your solution in this file!
let employee = {
  name: "Jeff",
  streetAddress: "Nairobi",
};

// Step 2: Non-destructive update
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  return {
    ...employeeObj,
    [key]: value,
  };
}

// Step 3: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

// Step 4: Non-destructive delete
function deleteFromEmployeeByKey(employeeObj, key) {
  const { [key]: _, ...newEmployee } = employeeObj;
  return newEmployee;
}

// Step 5: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}

// Step 6: Export everything
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};
