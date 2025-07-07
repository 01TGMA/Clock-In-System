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
    const wrongInput = document.getElementById("incorrect");
    wrongInput = ""
    if(adminInput === "") {
        if (wrongInput){
            wrongInput.innerHTML = "Error: Input ID.";
        }
    }else if (AdminExists){
        window.location.href = 'Admin_Dashboard.html';
    }else{
        if(wrongInput) {
            wrongInput.innerHTML = "Error: Failed to login <br>ID does not exist."
        }
    };
}
  
if (adminBttn) {
    adminBttn.addEventListener("click", validateAdminId);
  }


const validateEmployeeId = () => {
    const employeeInput = document.getElementById("EmployeeId").value.trim();
    const employeeExist =  employees.some(employees => employees.id === Number(employeeInput));
    const wrongInput = document.getElementById("incorrect");
    
    if(wrongInput) wrongInput.innerHTML = "";

    if(employeeInput === "") {
        if (wrongInput){
            wrongInput.innerHTML = " Error: Input ID."
        }
    }else if (employeeExist) {
        console.log("Correct")
        window.location.href = 'Check_In_Out.html'
    } else{
       if(wrongInput){
        wrongInput.innerHTML = "Error: Failed to login <br>ID does not exist.";
       } 
    }
}
if (employeeBttn) {
    employeeBttn.addEventListener("click", validateEmployeeId)
  }
