//@@@@@@@@@@@@@@ assignmnt ques 1 @@@@@@@@@@@@@@@@@
// function addtion (num1){  
//     return function (num2) {
//         console.log( num1 + num2);
//     }   
// }

// let var1 = addtion(5);
// var1(2);
// var1(3);

//________________________________________________


//@@@@@@@@@@@@@@@ assignmt ques 2 @@@@@@@@@@@@@@@

// function searching(arr, num, i=0 ){
//     if (i===arr.length){
//         return false;
//     }else if (arr[i]===num){
//         return true;
//     }else {
//         return searching(arr, num ,i+1);
//     }

// }

// let arr = [1,2,3,4,5]
// let var1 = 9;

// console.log(searching(arr,var1));

//_______________________________________________________


// @@@@@@@@@@@@@@Assignnt ques3@@@@@@@@@@@@@@@@@@@@@
// function addNewPara (Val){
//     let addElement =document.createElement("p");
//     addElement.innerHTML= Val;
//     document.body.appendChild(addElement);
// }
//  addNewPara(prompt("Enter whatever you want to add:"));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//_______________________________________________






//__________________________________________
//@@@@@@@@@@@@@@ Assigmnt ques 4 @@@@@@@@@@@@@@@@@



// function addingElements (val){
//     let unorderedList = document.getElementById("mylist");
//     let newElement = document.createElement("li");
//     let myText = document.createTextNode(val);
//     newElement.appendChild(myText);
//     unorderedList.appendChild(newElement);

// }

// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));



//_______________________________________
//@@@@@@@@@@@@@@@@@ assignmnt ques 5 @@@@@@@@@@@@@@@

// function changeColor (id ,color){
//     id.style.background = color;

// }


// let getid= document.getElementById("para-1")
// let color = "#FFB6C1"
// changeColor(getid,color)

//_______________________________________________



//@@@@@@@@@@@ assignmnt Ques 6 @@@@@@@@@@@@@@@@


// let prevFile = localStorage.getItem("File")
// let File = prevFile? JSON.parse(prevFile) : [];

// function storingData(){
//     let PersonInfo = {
//         name: prompt("Enter Name"),
//         course: prompt("Enter course")
//     }
//     File.push(PersonInfo);
//     console.log(File)
//     let stringify = JSON.stringify(File)
//     localStorage.setItem("File",stringify)


// }


// let AnObj = {
//     animal:"Cat" ,
//     Color:"Black" ,
//     age: 4
// }

// function Storing(About,Obj){
//     let stringify=JSON.stringify(About)
//     localStorage.setItem(Obj,stringify);

// }
// Storing(AnObj,"Animal")



//________________________________________________

//@@@@@@@@@@@@@ assignmnt ques 7 @@@@@@@@@@@@@@@@@


// function geting (nameOfObj){
//     let var1 = localStorage.getItem(nameOfObj)
//     let nameOfObj = var1 ? JSON.parse(var1) : []
// }

// console.log(geting("Animal"));



//_______________________________________________

//@@@@@@@@@@@@@@@@ assignment ques 8 @@@@@@@@@@@@@@@@

function saveObjectToLocalStorage(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        localStorage.setItem(key, JSON.stringify(value));
      }
    }

    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }

    return newObj;
  }

  const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

  document.getElementById('save-button').addEventListener('click', function() {
    const newObj = saveObjectToLocalStorage(myObject);
    alert(`Object saved to local storage: ${JSON.stringify(newObj)}`);
  });



//________________________________________________









    






