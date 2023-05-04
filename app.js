const taskToDo = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(json => {
        const taskDiv = document.getElementById('task')
        taskDiv.innerText = `"${json.activity}."`
    })
}

taskToDo()
const nextBtn = document.getElementById('nextBtn')
nextBtn.onclick = () => taskToDo()