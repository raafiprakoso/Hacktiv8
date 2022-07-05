// target element dengan id date
const dateHTML = document.getElementById("date");
// mendapatkan tanggal hari ini
const date = new Date().toUTCString().slice(5, 16);
// memasukkan tanggal ke dalam elemen dateHTML
dateHTML.innerHTML = date;

// ==== input ====
const todoInput = document.querySelector(".todo-input");
const btnInput = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

// event listener
btnInput.addEventListener("click", addTodo);
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    alert("Input tidak boleh kosong");
    return;
  }

  // expectasi
  // <div class="todo">
  //   <li class="todo-item">Todo ke 1</li>
  //   <button class="done-btn">Done</button>
  //   <button class="delete-btn">Delete</button>
  // </div>

  // membuat div
  const div = document.createElement("div");
  div.classList.add("todo");

  // membuat li
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = todoInput.value;

  // membuat done button
  const done = document.createElement("button");
  done.classList.add("done-btn");
  done.innerHTML = "Done";

  // membuat delete button
  const del = document.createElement("button");
  del.classList.add("delete-btn");
  del.innerHTML = "Delete";

  // masukkan li ke div
  div.appendChild(li);
  div.appendChild(done);
  div.appendChild(del);

  // masukkan div ke todolist
  todoList.appendChild(div);

  // kosongkan input
  todoInput.value = "";
}

todoList.addEventListener("click", doneAndDelete);
function doneAndDelete(event) {
  // mendapatkan element yang di click
  const btn = event.target;
  // mendapatkan parent nya button
  const todo = btn.parentElement;

  // check jika button yang di click done/delete
  if (btn.innerText === "Done") {
    // tambahkan class done-todo ke element todo
    todo.classList.add("done-todo");
    // hapus button done
    btn.remove();
  } else if (btn.innerText === "Delete") {
    // tambahkan class remove ke element todo
    todo.classList.add("remove");
    // hapus todo menggunakan transition
    todo.addEventListener("transitionend", function () {
      // hapus todo
      todo.remove();
    });
  }
}

