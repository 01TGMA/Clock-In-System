const adminBttn = document.getElementById("AdminSubmit");
const employeeBttn = document.getElementById("Esubmit");
let admins = [
    {id: 36685, Name: "defualtAdmin"}
];
let employees = [
    {id: 48684, Name: "defualtAdmin"}
]


const validateAdminId = () => {
    const adminInput = document.getElementById("AdminId").value.trim();
    const AdminExists = admins.some( admins => admins.id === Number(adminInput));
    if(adminInput === "") {
        console.log("Input ID")
    }else if (AdminExists){
        console.log("Correct")
        window.location.href = 'Admin_Dashboard.html'
    }else{console.log("wrong ID")} 
}
if (adminBttn) {
    adminBttn.addEventListener("click", validateAdminId);
  }


const validateEmployeeId = () => {
    const employeeInput = document.getElementById("EmployeeId").value.trim();
    const employeeExist =  employees.some(employees => employees.id === Number(employeeInput));
    
    if(employeeInput === "") {
        console.log("Input ID")
    }else if (employeeExist) {
        console.log("Correct")
        window.location.href = 'Check_In_Out.html'
    } else{
        console.log("Wrong ID")
    }
}
if (employeeBttn) {
    employeeBttn.addEventListener("click", validateEmployeeId)
  }