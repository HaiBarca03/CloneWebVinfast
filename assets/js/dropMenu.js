// var input1 = document.getElementById("test");
// input1.addEventListener("click", showMessage);
// function showMessage(){
//    //viet code vao day
//    console.log("THis is test");
// }

// let input2 = document.getElementById("icons-click");
// let input3 = document.getElementByClassName("modelShown");
// input2.addEventListener("click", showContent);
// function showContent() {
//     // input3.classList.add("open");
//     console.log("THis is test");
//   }


  function menuToggle_open(){
    const toggleMenu = document.querySelector('.modelShown');
    toggleMenu.classList.remove('active_close');
    toggleMenu.classList.toggle('active_open');
}
  function menuToggle_close(){
  const toggleMenu = document.querySelector('.modelShown');
  toggleMenu.classList.toggle('active_close');
  toggleMenu.classList.remove('active_open');
}

// function openRegister(){
//   const toggleRegister = document.querySelector('.register');
//   toggleRegister.classList.toggle('active_open-register')
// }

// function loginAcc(){
//   const toggleLogin = document.querySelector('.login');
//   toggleLogin.classList.toggle('active_open-login')
// }
