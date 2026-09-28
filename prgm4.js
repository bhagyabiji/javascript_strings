//eg for object creation


//[1000,'Neel','developer','kochi',25000,3]

const employee = {
    empId:1000 ,
    empName:'Neel' ,
    empDesg:'Developer' , 
    empLoc:'kochi' ,
    empSalary:25000 , 
    

}
console.log(employee);
console.log(employee['empName']);

console.log(employee.empDesg);

console.log('------------');


//to access index names
for(items in employee){
    console.log(items);
    
}
console.log('------------');

//to access the contents
for(items in employee){
    console.log(employee[items]); //items is an variable so dont put quotes
    
}
console.log('------------');

// for(items in employee){
//    console.log(employee.items);  this will not work as the items in not an index name in the employee object
    
// }

//adding a new data to an object

employee['empAddress'] = 'xyz 1123'
console.log(employee);

console.log('------------');

Object.assign(employee,{companyId: 223})
console.log(employee);

console.log('------------');

//check whether employee experience is present in the given object or not, if present print 'key is available' else add a new key value pair as empExp: 3

// isPresent = false
// for(item in employee){
//     if(item == 'empExp'){
//         isPresent = true
        
//     }
// }
// isPresent?console.log('key is available'):(employee['empExp']=3,console.log(employee))

//can also be done like this


'empExp' in employee?console.log('Key is available'):(employee['empExp'] = 3, console.log(employee))

console.log('------------');

//update the data
employee['empExp'] += 2
console.log(employee);

employee['empName'] = 'Max'
console.log(employee);

console.log('------------');

//to delete data

delete employee.empLoc
console.log(employee);



