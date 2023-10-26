// Navbar

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "-20px";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-121%";
};

// sidebar submenu open close js code
let HomepageArrow = document.querySelector(".Homepage-arrow");
HomepageArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

// ColorMode

if (localStorage.getItem("color") === "blue") {
  console.log("test");
  //change text and background color
  document.querySelector("body").classList.add("blueBage");
  //change logo
  const logo = document.querySelector(".navbar .logo img");
  logo.src = "../public/images/home/Saba Logo-01 JPEG_preview_rev_1 1.png";

  //cahnge numbers and the adress
  const whatsNumber = document.querySelector(".whatsUpp .whatsNumber");
  const phoneNumber = document.querySelector(".phone .phoneNumber");
  whatsNumber.href = "https://wa.me/971585630092";
  phoneNumber.href = "tel: 971585630092";
  const adress = document.querySelector("footer .item .adress");
  adress.innerText =
    "Dr Sabaa medical center LLC, Mfloor\n, Al majaz tower,\n opposite al majaz park, \njamal abdul nasser street,\n Sharjah-UAE";
  const phone = document.querySelector("footer .item .phone");
  const whatsNum = document.querySelector("footer .item .whatsNum");
  phone.innerText = "Phone : 065530092";
  whatsNum.innerText = "Whatsapp: 971585630092";
}
