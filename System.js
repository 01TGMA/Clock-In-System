const adminBttn = document.getElementById("AdminSubmit");
const employeeBttn = document.getElementById("Esubmit");
let time = []


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
    if (wrongInput) wrongInput.innerHTML = ""
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
const checkIn = document.getElementById('checkin')

// time options
    const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    };

    
checkIn.addEventListener("click", checkin => {
    // console.log Check In time
    const now = new Date();
    const localTime = now.toLocaleString('en-US', options);
    time.push(`Check In Time:", ${localTime}`);
    console.log(time)
})
   
const checkOut = document.getElementById("checkout")

checkOut.addEventListener("click", checkout => {
    // console.log Check out time
    const now = new Date();
    const localTime = now.toLocaleString('en-US', options);
    time.push(`Check Out Time:, ${localTime}`);
    console.log(time)
})
    
