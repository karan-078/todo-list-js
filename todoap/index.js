const input = document.querySelector(".note");
const save = document.querySelector(".add_note");

const container = document.querySelector(".task");
save.addEventListener("click", (e) => {
  e.preventDefault();
  const task = input.value;

  if (!task) {
    alert("please enter value");
    container = "none";
  }

  const show_note = document.createElement("div");
  const text_store = document.createElement("p");
  show_note.classList.add("input_task");
  show_note.appendChild(text_store);
  text_store.innerText = task;
  container.appendChild(show_note);

  localStorage.setItem('container',JSON.stringify(container))

  // const show_input = document.createElement("input");
  // show_input.classList.add("showinput");
  // show_input.type = "text";
  // show_input.value = task;
  // show_input.setAttribute("readonly", "readonly");

  // show_note.appendChild(show_input);

  const show_actions = document.createElement("div");
  show_actions.classList.add("actions");

  const show_Delete = document.createElement("button");
  show_Delete.classList.add("delete");
  show_Delete.innerHTML = "Delete";

  const show_Edit = document.createElement("button");
  show_Edit.classList.add("edit");
  show_Edit.innerHTML = "Edit";
  show_actions.appendChild(show_Edit);
  show_actions.appendChild(show_Delete);
  show_note.appendChild(show_actions);
  input.value = null;
  show_Delete.addEventListener("click", () => {
    container.removeChild(show_note);
  });

  show_Edit.addEventListener("click", () => {
    if (show_Edit.innerText.toLowerCase() == "edit") {
      show_note.contentEditable = true;
      show_Edit.innerHTML = "Save";
    } else {
      show_note.contentEditable = false;
      show_Edit.innerHTML = "Edit";
    }
  });
});

