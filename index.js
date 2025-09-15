// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(employeeobj, key, value) {
  return Object.assign({}, employeeobj, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}
function deleteFromEmployeeByKey(employeeObj, key) {
  const newEmployee = Object.assign({}, employeeObj);
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};
