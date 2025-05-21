var hamburger = document.getElementById('hamburger');
var closeButton = document.getElementById('close-button');
var navigation = document.getElementsByClassName('navigation')[0];

hamburger.onclick = function() {
  navigation.style.display = 'flex';
}

closeButton.onclick = function() {
  navigation.style.display = 'none';
}

// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.querySelector(".navigation");
//   if (!nav) return;

//   nav.innerHTML = `
//     <div class="nav-content-container">
//       <div class="nav-header-container">
//         <a href="./index.html" id="razia-title">Razia Sahi, Ph.D.</a>
//         <i id="close-button" class="fa fa-close"></i>
//       </div>
//       <div class="nav-link-container">
//         <a href="./index.html" class="nav-home">Home</a>
//         <a href="./publications.html" class="nav-publications">Research</a>
//         <a target="_blank" href="https://mfr.osf.io/render?url=https%3A%2F%2Fosf.io%2Fc3t8q%2Fdownload" class="nav-cv">CV</a>
//       </div>
//     </div>
//     <div id="hamburger">
//       <a href="./index.html" id="razia-title">Razia Sahi, Ph.D.</a>
//       <i class="fa fa-bars"></i>
//     </div>
//   `;

//   // Highlight active nav link (excluding razia-title)
//   const links = nav.querySelectorAll("a");
//   links.forEach(link => {
//     if (link.id === "razia-title") return;
//     const linkHref = link.getAttribute("href").replace('./', '');
//     if (window.location.pathname.includes(linkHref)) {
//       link.id = "nav-selected";
//     }
//   });

//   // Grab the nav container for toggling
//   const navContent = document.querySelector(".nav-content-container");
//   const closeButton = document.getElementById("close-button");
//   const hamburgerIcon = document.querySelector("#hamburger .fa-bars");
//   const navContainer = document.querySelector(".navigation");

//   // // Open nav when hamburger icon is clicked
//   // hamburgerIcon?.addEventListener("click", () => {
//   //   navContent?.classList.add("nav-open");
//   // });

//   // // Close nav when close button is clicked
//   // closeButton?.addEventListener("click", () => {
//   //   navContent?.classList.remove("nav-open");
//   // });

//   hamburgerIcon?.addEventListener("click", () => {
//   navContainer?.classList.add("nav-open");
// });

// closeButton?.addEventListener("click", () => {
//   navContainer?.classList.remove("nav-open");
// });
// });
