const links = document.querySelector(".links");
const lis = document.querySelectorAll(".links li");
const icon = document.querySelector(".fa-bars");

icon.addEventListener("click", () => {
  links.classList.toggle("open");
  icon.classList.toggle("fa-xmark");
});

lis.forEach(function (ele) {
  ele.addEventListener("click", function () {
    links.classList.remove("open");
    icon.classList.remove("fa-xmark");
  });
});
console.log('hello, world! From Linux Mint!');
