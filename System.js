const adminBttn = document.getElementById("AdminSubmit");
const employeeBttn = document.getElementById("Esubmit");
let time = []


let admins = [
    { id: 36685, Name: "defualtAdmin" }
];
let employees = [
    { id: 48684, Name: "defualtAdmin" }
]

//Validate Admin Id

const validateAdminId = () => {
    const adminInput = document.getElementById("AdminId").value.trim();
    const AdminExists = admins.some(admins => admins.id === Number(adminInput));
    const wrongInput = document.getElementById("incorrect");
    if (wrongInput) wrongInput.innerHTML = ""
    if (adminInput === "") {
        if (wrongInput) {
            wrongInput.innerHTML = "Error: Input ID.";
        }
    } else if (AdminExists) {
        window.location.href = 'Admin_Dashboard.html';
    } else {
        if (wrongInput) {
            wrongInput.innerHTML = "Error: Failed to login <br>ID does not exist."
        }
    };
}

if (adminBttn) {
    adminBttn.addEventListener("click", validateAdminId);
}

//Validate Employeee Id
const validateEmployeeId = () => {
    const employeeInput = document.getElementById("EmployeeId").value.trim();
    const employeeExist = employees.some(employees => employees.id === Number(employeeInput));
    const wrongInput = document.getElementById("incorrect");

    if (wrongInput) wrongInput.innerHTML = "";

    if (employeeInput === "") {
        if (wrongInput) {
            wrongInput.innerHTML = " Error: Input ID."
        }
    } else if (employeeExist) {
        console.log("Correct")
        window.location.href = 'Check_In_Out.html'
    } else {
        if (wrongInput) {
            wrongInput.innerHTML = "Error: Failed to login <br>ID does not exist.";
        }
    }
}
if (employeeBttn) {
    employeeBttn.addEventListener("click", validateEmployeeId)
}
const checkIn = document.getElementById('checkin')

// Display

let disPlay = document.getElementById("display-time");

let display = ""

let showTime = () => {
    display = "";
    for (let i = 0; i < time.length; i++) {
        display += `<li id="times"> ${time[i]}  </li>`
    }
    disPlay.innerHTML = display
}

//Days and Months
let now = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"]

const day = days[now.getDay()];
const month = months[now.getMonth()];
const hour = now.getHours();
const date = now.getDate();
const year = now.getFullYear();
const minute = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
const ampm = hour > 12 ? "PM" : "AM";
hour = hour % 12 || 12;

let localTime = `${hour}:${minute}:${seconds} ${ampm}, ${day} ${date} ${month} ${year}`

checkIn.addEventListener("click", checkin => {
    // console.log Check In time
    const now = new Date();
    const localTime = now.toLocaleString('en-US', options);
    time.push(`Check In Time:, ${localTime}`);
    console.log(time)
    showTime()
})

const checkOut = document.getElementById("checkout")

checkOut.addEventListener("click", checkout => {
    // console.log Check out time
    const now = new Date();
    const localTime = now.toLocaleString('en-US', options);
    time.push(`Check Out Time:, ${localTime}`);
    console.log(time)
    showTime()
})