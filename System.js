const adminBttn = document.getElementById("AdminSubmit");
let admins = [
    {id: 36685, Name: "defualtAdmin"}
];

const validateId = () => {
    const adminInput = document.getElementById("AdminId").value.trim();
    const exists = admins.some( admins => admins.id === Number(adminInput));
    if (exists){
        console.log("Correct")
        window.location.href = 'Admin_Dashboard.html'
    }else{console.log("wrong ID")} 
}

adminBttn.addEventListener("click", validateId)

// User Inputs ID, then clicks login button
// it then tirgers a function that checks if the id exist
// if it does proceeds to next page, if not displays incorrect id
// //