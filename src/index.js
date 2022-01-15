const form = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(e)
  const task = e.target.new_task_description.value
  const li = document.createElement("li")
  li.innerText=task
  taskList.append(li)
})