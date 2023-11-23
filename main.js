// <!-- Form-1-->


// const myForm = document.getElementById('myForm');
// const inpOne = document.getElementById('inpOne');
// const inpTwo = document.getElementById('inpTwo');
// const inpThree = document.getElementById('inpThree');
// const inpFour = document.getElementById('inpFour');
// myForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//   axios.post("https://northwind.vercel.app/api/customers", {
//     name: inpOne.value,
//     surname: inpTwo.value,
//     age: inpThree.value,
//     Email: inpFour.value,
//   })
//     .then(response => {
//       console.log(response.data);
//     })
// })


// Form-2

// const myForm = document.getElementById('myForm');
// const inpOne = document.getElementById('inpOne');
// const inpTwo = document.getElementById('inpTwo');
// const inpThree = document.getElementById('inpThree');
// const inpFour = document.getElementById('inpFour');
// const inpFive = document.getElementById('inpFive');

// myForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//   axios.post("https://northwind.vercel.app/api/customers", {
//     username: inpOne.value,
//     email: inpTwo.value,
//     password: inpThree.value,
//     adress: inpFour.value,
//     country: inpFive.value,

//   })
//     .then(response => {
//       console.log(response.data);
//     })
// })

// Form-3

const myForm = document.getElementById('myForm');
const inpOne = document.getElementById('inpOne');
const inpTwo = document.getElementById('inpTwo');
const inpThree = document.getElementById('inpThree');
const inpFour = document.getElementById('inpFour');
const inpFive = document.getElementById('inpFive');
const inpSix = document.getElementById('inpSix');
const inpSeven = document.getElementById('inpSeven');
const inpEight = document.getElementById('inpEight');
const inpNine = document.getElementById('inpNine');
const inpTen = document.getElementById('inpTen');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

  axios.post("https://northwind.vercel.app/api/customers", {
    title: inpOne.value,
    price: inpTwo.value,
    description: inpThree.value,
    discount: inpFour.value,
    stock: inpFive.value,
    quality: inpSix.value,
    country: inpSeven.value,
    customerscount: inpEight.value,
    category: inpNine.value,
    city: inpTen.value,

  })
    .then(response => {
      console.log(response.data);
    })
})



             