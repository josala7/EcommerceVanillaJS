// Arrow button
let arrow = document.getElementById("arrow");

window.onscroll = function () {
  if (window.scrollY > 500) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};
window.onclick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
// =============================================================
// search bar

let search = document.querySelector(".search");
let searchingform = document.querySelector(".search-form");

search.addEventListener("click", () => {
  searchingform.classList.toggle("active");
});

// ===================================================================
//  add to cart

const AddtoCart = document.querySelectorAll(".addtocart");
let countershow = document.querySelector(".count span");

let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let cartIcon = document.querySelector(".carticon");

// let minus = document.querySelectorAll(".minus");
// let plus = document.querySelectorAll(".plus");
// let num = document.querySelectorAll(".num");

// Retrieve count value from local storage or default to 1
// count = localStorage.getItem("count") || 1;

// // Update all number elements with the initial count
// num.forEach((num) => {
//   num.textContent = count;
// });

// minus.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     if (count > 1) {
//       count--;
//       num[index].textContent = count;
//       localStorage.setItem("count", count);
//       countershow.textContent = count;
//     }
//   });
// });

// // Add event listeners to all plus buttons
// plus.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     count++;
//     num[index].textContent = count;
//     localStorage.setItem("count", count);
//     countershow.textContent = count;
//   });
// });

cartIcon.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

for (let i = 0; i < AddtoCart.length; i++) {
  AddtoCart[i].addEventListener("click", (event) => {
    // Prevent the default behavior (scrolling to the top)
    event.preventDefault();
    // Call your function to update the cart counter
    cartcounter();
    // window.style.position = "fixed";
  });
}

function cartcounter() {
  let prodcounter = localStorage.getItem("count");
  prodcounter = parseInt(prodcounter);
  if (prodcounter) {
    localStorage.setItem("count", prodcounter + 1);
    countershow.textContent = prodcounter + 1;
  } else {
    localStorage.setItem("count", 1);
    countershow.textContent = prodcounter = 1;
  }
}
function displaycart() {
  let prodcounter = localStorage.getItem("count");
  if (prodcounter) {
    countershow.textContent = prodcounter;
  }
}
displaycart();

// ========================================

function validateLogin() {
  let signInEmail = document.getElementById("exampleInputEmail").value;
  let signInPassword = document.getElementById("exampleInputPassword").value;
  let emailerror = document.getElementById("emailError");
  let passworderror = document.getElementById("passwordError");

  if (signInEmail === "") {
    emailerror.style.display = "block";
    return false;
  } else if (!signInEmail.includes("@")) {
    emailerror.style.display = "block";
    return false;
  } else {
    emailerror.innerText = "";
  }

  if (!signInPassword) {
    passworderror.innerText = " Password is required";
    return false;
  } else if (signInPassword.length < 5) {
    passworderror.innerText = " Password must be at least 6 characters long.";
    return false;
  } else {
    passworderror.innerText = "";
  }

  return true;
}

// =================================================
// menu list
let MenuIcon = document.querySelector(".menuList");
let MenuList = document.querySelector(".showtheList");

MenuIcon.addEventListener("click", () => {
  MenuList.classList.toggle("active");
});
