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


// Create new student in table
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

// Erase message searchByName
const eraseMessageSearchName = () => {
    setTimeout(() => {
        document.querySelector('#messageSearchByName').innerHTML = ''
    }, 2000)
}

// Erase message success
const eraseMessage = () => {
    setTimeout(() => {
        document.querySelector('#message').innerHTML = ''
    }, 2000)
}

// Clear inputs
function clearInput() {
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

// Students average
const average = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Object.hasOwnProperty('score')) {
            let sum = 0
            let total = sum += Number(arr[i].score)
            console.log(total)
            let getRes = document.querySelector('#average')
            return getRes.innerHTML = total / arr.length
        }

    }


    // for (let i = 0; i < students.length; i++) {
    //     if (students[i].score != undefined) {
    //         let scores = []
    //         scores.push(students[i].scores)
    //         for (num in scores) {
    //             let getAvgField = document.querySelector('#avgClass')
    //             let add = 0
    //             add += num
    //             let avg = add / scores.length
    //             return getAvgField.innerHTML = avg

    //         }
    //     }
    // }
}

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

// Search student by name
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




// Add Students and unleashed functions

const addStudent = () => {
    let name = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let age = document.querySelector('#age').value
    let assignment = document.querySelector('#assignment').value
    let score = document.querySelector('#score').value
    let edit = `<button onclick ="editSudent()">Editar</button>`
    document.querySelector('#message').innerHTML = 'Alumno añadido correctamente'

    // Calling function to erase message
    eraseMessage()

    // Erase inputs
    clearInput()

    // Calling printTable with same data in fields
    printTable(name, lastName, age, assignment, score, edit)

    // Saving into new prototype array
    students.push(new Student(name, lastName, age, assignment, score))

    //Saving to local storage
    localSave(students)

}

// Calling to average group
let btnAvgGroup = document.querySelector('#getAvgGroup')
btnAvgGroup.addEventListener('click', average(students))


// Getting data from local storage
// document.addEventListener('DOMContentLoaded', function (){
//     let getLocalData = localStorage.getItem(student)
//     for (student in getLocalData){
//         student[index]
//     }

//     });
//     if (searchInput == students[i].firstName) {
//         // console.log(students[i])
//         let modalContainer = document.querySelector('.modal-container')
//         modalContainer.style.display = 'flex'
//         let getTable = document.querySelector('#results')
//         let result = document.createElement('tr')
//         result.innerHTML = `
//         <td>${students[i].firstName}</td>
//         <td>${students[i].lastName}</td>
//         <td>${students[i].age}</td>
//         <td>${students[i].assignment}</td>
//         <td>${students[i].score}</td>
//         `
//         getTable.appendChild(result)
// })



// Loading Data from local storage
const loadStored = (storedArr) => {
    for (let i = 0; i < storedArr.length; i++) {
        let getTable = document.getElementById('studentsList')
        let newRow = document.createElement('tr')
        newRow.innerHTML = `
        <td>${storedArr[i].firstName}</td>
        <td>${storedArr[i].lastName}</td>
        <td>${storedArr[i].age}</td>
        <td>${storedArr[i].assignment}</td>
        <td>${storedArr[i].score}</td>
        `
        getTable.appendChild(newRow)
    }


}

// Calling local storage to bring data on page load
document.addEventListener('DOMContentLoaded', loadStored(JSON.parse(localStorage.getItem('student'))))