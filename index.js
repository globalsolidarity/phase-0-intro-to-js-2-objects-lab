// Write your solution in this file!

const employee = {
    name: "Current",
    streetAddress: "1401 Rosewood Avenue Austin TX 78702",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newObj = {...employee}  
  delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
    return employee;
}
/* deleteFromEmployeeByKey(): this function should take in a employee Object and a key. 
It should delete the property with that key from the employee Object. 
This should not mutate the original employee Object; 
it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!*/
