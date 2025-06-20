// console.log("hello world");

function test() {
    let r, g, b
    let color
    let btncolor = document.getElementById("change")
    // console.log("John");
    document.getElementById("image").src = "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg";
    document.getElementById("change").style.backgroundColor = "red";


    if (btncolor.style.backgroundColor == "black") {

        btncolor.style.backgroundColor = "red"
        btncolor.style.color = "black"

        document.getElementById("image").src = "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
    }

    else {
        btncolor.style.backgroundColor = "black"
        btncolor.style.color = "red"
        document.getElementById("image").src = "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg";

    }
    // console.log(`random number is ${Math.floor(Math.random()*255)}`);






}
//  document.getElementById("catbutton").style.backgroundColor = "black"
//         document.getElementById("catbutton").style.color = "red";
//     }
// console.log(document);
// console.log(document.getElementsByClassName("flowers")[0]);
//document.getElementsByClassName("flowers")[0].style.color="Green";
//document.getElementById("change").style.backgroundColor="red";//
// arrow functio
//()=>{}
// (() => {
//     console.log("arrow functio");

// })()

// function getName(e)
// {
//     console.log(e);
// }

function getName(e) {
    //     const value=e.target.value


    //    if (value === "blue") {
    //       document.getElementById("bg").style.backgroundColor = "blue";
    //     }
    //      else 
    //      {
    //       document.getElementById("bg").style.backgroundColor = "green";
    //     }
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    color = `rgb(${r},${g},${b})`
    document.getElementById("bg").style.backgroundColor = color


}



// function sum(num1,num2,p) {
//     p(num1+num2)
// }
// function print(res)
// {
//     console.log(res);
// }
// sum(1,2,print)

let student4={
    age:22,
    phone:2883883888,
    name:"Dona",
    address:{
        home:{place:"Ernkaulam"},
        college:{place:"Kottayam"}
    }
}
let students=[student4]
console.log(student4.address.name);

function checkName(e)
{
    let Name=e.target.value;
    // console.log(Name.length);
    if(Name.length<3 || Name.length>12)
    
    {
        console.log("not valid")
        document.getElementById("nameERROR").innerText="Name must be between 3-12 characters"
    }
    else{
        console.log("valid");
         document.getElementById("nameERROR").innerText="valid";
         document.getElementById("nameERROR").style.color="green";

    }


}
function checkemail(e)
{
    let email=e.target.value;
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(email))
    if(emailRegex.test(email))
    {
        document.getElementById("email").innerText="valid";
        document.getElementById("email").style.color="green";
    }
    else{
        document.getElementById("email").innerText=" not valid";
        document.getElementById("email").style.color="red"
    }
}

function checkPass(e)
{
    let pass=e.target.value;
    const passRegex=/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    console.log(passRegex.test(pass))
       if(passRegex.test(email))
    {
        document.getElementById("pass").innerText="valid";
        document.getElementById("pass").style.color="green";
    }
    else{
        document.getElementById("pass").innerText=" not valid";
        document.getElementById("pass").style.color="red"
    }
}



