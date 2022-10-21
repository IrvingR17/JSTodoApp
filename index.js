document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title')
    const alert = document.getElementById('alert')
    const table = document.getElementById('table')
    const description = document.getElementById('description')
    const btnAdd = document.getElementById('add')
    let id = 0

    function deleteTask (id){
        document.getElementById(id).remove()
    }

    function addTask(){
        if(title.value === '' | description.value === ''){
            alert.classList.remove('d-none')
            alert.innerText = 'Title and description are required'
            return
        }

        alert.classList.add('d-none')
        const row = table.insertRow()
        row.setAttribute('id', id++)
        row.innerHTML = `
            <td>
                ${title.value}
            </td>
            <td>
                ${description.value}
            </td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
                </button>
            </td>
        `
        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        btnDelete.innerHTML = '<i class="fa fa-trash"></i>'
        btnDelete.onclick = function (){
            deleteTask(row.getAttribute('id'))
        }
        row.children[3].appendChild(btnDelete)
    }

    btnAdd.onclick = addTask;
})
 