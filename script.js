const btn = document.getElementById('addNote');
const input = document.getElementById('Userinput');
const list = document.getElementById('list');
const taskCount = document.getElementById('taskCount');

btn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const text = input.value.trim();

    if (!text) {
        input.style.background = '#fef2f2';
        setTimeout(() => {
            input.style.background = '#ffffff';
        }, 300);
        return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'removebtn';
    deleteBtn.textContent = 'delete';
    deleteBtn.onclick = () => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            li.remove();
            updateCount();
        }, 120);
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
    input.focus();

    updateCount();
}

function updateCount() {
    const count = list.children.length;
    taskCount.textContent = count + (count === 1 ? ' task' : ' tasks');
}

updateCount();
