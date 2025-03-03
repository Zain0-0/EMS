const dataBase = JSON.parse(localStorage.getItem(JSON.stringify("database"))) || [];
renderData()

function addBtn() {
    document.getElementById("add_btn").style.display = "none"
    document.getElementById("add_form").style.display = "flex"
}

function subBtn() {
    let empId = document.getElementById("add_emp_id").value
    let empName = document.getElementById("add_emp_name").value
    let empDepartment = document.getElementById("add_emp_department").value

    let addToObj = {
        id: empId,
        name: empName,
        department: empDepartment
    }
    
    
    dataBase.push(addToObj)
    
    localStorage.setItem('database', JSON.stringify(dataBase));

    renderData()
    document.getElementById("add_btn").style.display = "block"
    document.getElementById("add_form").style.display = "none"
}

function renderData() {
    document.getElementById("add_btn").style.display = "block"
    let tBody = document.getElementById("tbody");
    tBody.innerHTML = ""
    tRow = "";
    
    dataBase.forEach((item, index) => {
        // dataBase[index].id = index
        tRow += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.department}</td>
        <td>
            <Button type="reset" id="edit_btn" onclick="editBtn(${index})">Edit</Button>
            <Button type="button" id="dlt_btn" onclick="dltBtn(${index})">Delete</Button>
        </td>
    </tr>`
    });
    

    tBody.innerHTML = tRow
}

function editBtn(index) {
    let editDiv = document.getElementById("edit_div")
    let editForm = ` <form action="#" id="edit_form">
                    <label for="edit_emp_id">ID</label>
                    <input type="number" placeholder="enter ID" id="edit_emp_id"  value="${dataBase[index].id}">
                    <label for="edit_emp_name">Name</label>
                    <input type="text" placeholder="enter ID" id="edit_emp_name" value="${dataBase[index].name}">
                    <label for="edit_emp_department">Department</label>
                    <input type="text" placeholder="enter ID" id="edit_emp_department" value="${dataBase[index].department}">
                    <button type="reset" onclick="editSubBtn(${index})">Edit</button>
                </form>`

    editDiv.innerHTML = editForm
    document.getElementById("edit_form").style.display = "flex"
    document.getElementById("add_btn").style.display = "none"
}

function editSubBtn(index){
    let editId = document.getElementById("edit_emp_id").value
    let editName = document.getElementById("edit_emp_name").value
    let editDepartment = document.getElementById("edit_emp_department").value

    dataBase[index].id = editId
    dataBase[index].name = editName
    dataBase[index].department = editDepartment

    
    localStorage.setItem('database', JSON.stringify(dataBase));
    renderData()
    document.getElementById("edit_form").style.display = "none"
}

function dltBtn(index){ 
   dataBase.splice(index,1)
   localStorage.setItem('database', JSON.stringify(dataBase));
   renderData()
}
