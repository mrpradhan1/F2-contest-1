/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let prof=arr.filter(obj=>obj.profession=='developer').map(p);
  function p(x){
    return x;
  }
  console.log(prof);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let profe=[];
  arr.forEach(x=>{
    if(x.profession==='developer')
    profe.push(x);
  });
  console.log(profe);
}

function addData() {
  //Write your code here, just console.log
  let addobj={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(addobj);
  console.log(arr);
  
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeobj=arr.filter(x => x.profession != 'admin')
  console.log(removeobj);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "mano", age: "30", profession: "engineer" },
    { id: 5, name: "akash", age: "32", profession: "doctor" },
    { id: 6, name: "avinash", age: "23", profession: "GET" },
  ];
  let concatenateobj=arr.concat(arr1);
  console.log(concatenateobj);
}
