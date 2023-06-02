let span = document.querySelectorAll(".rate_btns > span");
let symbol = document.querySelector(".symbol");
let btn = document.querySelector(".submit");
let rate_page = document.querySelector(".rate_page");
let thanks_page = document.querySelector(".thanks_page");
let rate_amount = document.querySelector(".rate_amount");

let arr = [0];

function removeallactive() {
  span.forEach((i) => {
    i.classList.remove("active");
  });
}

span.forEach((i) => {
  i.addEventListener("click", function () {
    removeallactive();
    i.classList.toggle("active");
    arr[0] = i.textContent;
    symbol.classList.add("active");
    setTimeout(function () {
      symbol.classList.remove("active");
    }, 900);
  });
});

btn.addEventListener("click", function () {
  if (arr[0] !== 0) {
    rate_page.classList.add("remove");
    thanks_page.classList.remove("remove");
    rate_amount.textContent = `You selected ${arr[0]} out of 5`;
  }
});

thanks_page.addEventListener("click", function () {
  rate_page.classList.remove("remove");
  thanks_page.classList.add("remove");
  removeallactive();
  arr = [0];
});
