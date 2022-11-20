// Constants
let students = []
let addBtn = document.querySelector('#submit')
let retrieveStudents = document.querySelector('#getStudents')

class Student {
    constructor(firstName, lastName, age, assignment, score, edit) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.assignment = assignment
        this.score = score
        this.edit = edit
    }
}


// Create new student in FRONT table
const printTable = (firstName, lastName, age, assignment, score, edit) => {
    let getTable = document.getElementById('studentsList')
    let newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${assignment}</td>
        <td>${score}</td>
        <td>${edit}</td>
        `
    getTable.appendChild(newRow)
}

// Erasing message searchByName
const eraseMessageSearchName = () => {
    setTimeout(() => {
        document.querySelector('#messageSearchByName').innerHTML = ''
    }, 2000)
}

// Erase message adding new student successfully
const eraseMessage = () => {
    setTimeout(() => {
        document.querySelector('#message').innerHTML = ''
    }, 2000)
}

// Clear inputs
function clearInput(name, lastName, age, score) {
    name = ''
    lastName = ''
    age = ''
    score = ''
}

// Local storage of data
const localSave = (fnAdd) => {
    for (student in fnAdd) {
        localStorage.setItem("student", JSON.stringify(students))
    }

}

// Group average
const averageGroup = (arr) => {
    // Empty array outside to store data out of iteration
    let arrForAdd = []
    for (let i = 0; i < arr.length; i++) {
        const adding = () => {
            if (arr[i].score) {
                let score = Number(arr[i].score)
                arrForAdd.push(score)
                return arrForAdd
            }
        }
        adding()
    }
    // After iterate through array we add values within

    let getAvg = document.querySelector('#average')
    getAvg.innerHTML =
        `${arrForAdd.reduce((a, b) => a + b, 0) / arr.length}`
}

// Calling to average group
let btnAvgGroup = document.querySelector('#getAvgGroup')
btnAvgGroup.addEventListener("click", averageGroup(students))



// Search student by name
const searchByName = () => {
    let searchInput = document.querySelector('#searchInput').value
    for (let i = 0; i < students.length; i++) {
        if (searchInput == students[i].firstName) {
            // console.log(students[i])
            let modalContainer = document.querySelector('.modal-container')
            modalContainer.style.display = 'flex'
            let getTable = document.querySelector('#results')
            let result = document.createElement('tr')
            result.innerHTML = `
            <td>${students[i].firstName}</td>
            <td>${students[i].lastName}</td>
            <td>${students[i].age}</td>
            <td>${students[i].assignment}</td>
            <td>${students[i].score}</td>
            <td>${students[i].edit}</td>
            `
            getTable.appendChild(result)

            // Removing modal on click elsewhere
            modalContainer.addEventListener('click', function() {
                modalContainer.style.display = 'none'
            })
        } else {
            let getMessage = document.querySelector('#messageSearchByName')
            getMessage.innerHTML = 'Alumno no encontrado'

            // Calling function to erase fail message
            eraseMessageSearchName()
        }
    }
}

// Search student by last name
const searchByLast = () => {
    let searchInput = document.querySelector('#searchInputLast').value
    for (let i = 0; i < students.length; i++) {
        if (searchInput == students[i].lastName) {
            // console.log(students[i])
            let modalContainer = document.querySelector('.modal-container')
            modalContainer.style.display = 'flex'
            let getTable = document.querySelector('#results')
            let result = document.createElement('tr')
            result.innerHTML = `
            <td>${students[i].firstName}</td>
            <td>${students[i].lastName}</td>
            <td>${students[i].age}</td>
            <td>${students[i].assignment}</td>
            <td>${students[i].score}</td>
            <td>${students[i].edit}</td>
            `
            getTable.appendChild(result)

            // Removing modal on click elsewhere
            modalContainer.addEventListener('click', function() {
                modalContainer.style.display = 'none'
            })
        } else {
            let getMessage = document.querySelector('#messageSearchByName')
            getMessage.innerHTML = 'Alumno no encontrado'

            // Calling function to erase fail message
            eraseMessageSearchName()
        }
    }
}

// Edit student
const editStudent = (e) => {
    let modalContainer = document.querySelector('.modal-container')
    modalContainer.style.display = 'flex'
    let getTable = document.querySelector('#results')
    let result = document.createElement('tr')
    result.innerHTML = `
    <td>${this.firstName}</td>
    <td>${this.lastName}</td>
    <td>${this.age}</td>
    <td>${this.assignment}</td>
    <td>${this.score}</td>
    <td>${this.edit}</td>
    `

    // Removing modal on click elsewhere
    modalContainer.addEventListener('click', function() {
        modalContainer.style.display = 'none'
    })
}


// Add Students and leashed functions

const addStudent = () => {
    let name = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let age = document.querySelector('#age').value
    let assignment = document.querySelector('#assignment').value
    let score = document.querySelector('#score').value
    let edit = `<button onclick ="editStudent()">Editar</button>`
    document.querySelector('#message').innerHTML = 'Alumno añadido correctamente'

    // Calling function to erase message
    eraseMessage()

    // Erase inputs
    clearInput(name, lastName, age, assignment, score, edit)

    // Calling printTable with same data in fields
    printTable(name, lastName, age, assignment, score, edit)

    // Saving into new prototype array
    students.push(new Student(name, lastName, age, assignment, score, edit))

    //Saving to local storage
    localSave(students)

}





// Loading Data from local storage. ONLY IN FRONT
const loadStored = (storedArr) => {
    if (storedArr != undefined) {
        for (let i = 0; i < storedArr.length; i++) {
            let getTable = document.getElementById('studentsList')
            let newRow = document.createElement('tr')
            newRow.innerHTML = `
        <td>${storedArr[i].firstName}</td>
        <td>${storedArr[i].lastName}</td>
        <td>${storedArr[i].age}</td>
        <td>${storedArr[i].assignment}</td>
        <td>${storedArr[i].score}</td>
        <td>${storedArr[i].edit}</td>
        `
            getTable.appendChild(newRow)
        }
    }



}

// Loading Data from local storage to MEMORY
const loadArr = (storedArr) => {
    if (storedArr != undefined) {
        for (let i = 0; i < storedArr.length; i++) {

            students.push(new Student(storedArr[i].firstName, storedArr[i].lastName, storedArr[i].age, storedArr[i].assignment, storedArr[i].score, storedArr[i].edit))
        }
    }

}

// Calling local storage to bring data on page load. THIS ONLY SHOWS THE ARRAY IN FRONT, ARRAY IS SAVED ON MEMORY ON NEXT FUNCTION. Local storage is saved as a string, so we use JSON.parse to bring it back to array
document.addEventListener('DOMContentLoaded', loadStored(JSON.parse(localStorage.getItem('student'))))

// Saving local storage in Memory
document.addEventListener('DOMContentLoaded', loadArr(JSON.parse(localStorage.getItem('student'))))