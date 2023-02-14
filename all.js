let data = [
  {
    content: "exercise.",
    status: "",
  },
  {
    content: "take a nap.",
    status: "",
  },
  {
    content: "clean my bedroom.",
    status: "",
  },
  {
    content: "prepare English exam",
    status: "",
  },
];
const list = document.querySelector(".list");
function init() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li><p>●</p><h3>${item.content}</h3><input type="button" class="check"data-number="${index}" value="✔" /><input type="button" class="delete" data-num ="${index}" value="✘" /></li>`;
  });
  list.innerHTML = str;
}
init();

//✘
list.addEventListener("click", function (e) {
  //點擊到其他地方
  if (e.target.getAttribute("class") == "delete") {
    //抓取data-num

    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);

    init();
  }
});

//✔
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") == "check") {
    let number = e.target.getAttribute("data-number");
    console.log(number);
    data[number].status = "Finished";
  }
});
//將finish的資訊呈現在網頁上

const finished = document.querySelector(".finished");
finished.addEventListener("click", function (e) {
  let done = "";
  data.forEach(function (item, index) {
    if (item.status == "Finished") {
      done += `<li><p>📍</p><h3>${item.content}</h3><input type="button" class="check"data-number="${index}" value="✔" /><input type="button" class="delete" data-num ="${index}" value="✘" /></li>`;
    }
  });
  list.innerHTML = done;
});
//all
const all = document.querySelector(".all");
all.addEventListener("click", function (e) {
  let allStr = "";
  data.forEach(function (item, index) {
    allStr += `<li><p>📍</p><h3>${item.content}</h3><input type="button" class="check"data-number="${index}" value="✔" /><input type="button" class="delete" data-num ="${index}" value="✘" /></li>`;
  });
  list.innerHTML = allStr;
});
//pending
const pending = document.querySelector(".pending");
pending.addEventListener("click", function (e) {
  let undone = "";
  data.forEach(function (item, index) {
    if (item.status == "") {
      undone += `<li><p>📍</p><h3>${item.content}</h3><input type="button" class="check"data-number="${index}" value="✔" /><input type="button" class="delete" data-num ="${index}" value="✘" /></li>`;
    }
  });
  list.innerHTML = undone;
});
//新增待辦事項
const btn = document.querySelector(".btn");
const todoAdd = document.querySelector(".todoAdd");
btn.addEventListener("click", function (e) {
  if (todoAdd.value == "") {
    alert("write somthing");
    return;
  }
  //抓取todoadd.value
  let obj = {};
  obj.content = todoAdd.value;
  obj.status = "";
  data.push(obj);
  init();
  todoAdd.value = "";
});
