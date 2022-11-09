// Constants
let students = []
let addBtn = document.querySelector('#submit')
let retrieveStudents = document.querySelector('#getStudents')

class Student {
    constructor(firstName, lastName, age, assignment, score) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.assignment = assignment
        this.score = score
    }


}

const printTable = (firstName, lastName, age, assignment, score) => {
    let getTable = document.getElementById('studentsList')
    let newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${assignment}</td>
        <td>${score}</td>
        `
    getTable.appendChild(newRow)
}

const eraseMessage = () => {
    setTimeout(() => {
        document.querySelector('#message').innerHTML = ''
    }, 2000)
}

const addStudent = () => {
    let name = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let age = document.querySelector('#age').value
    let assignment = document.querySelector('#assignment').value
    let score = document.querySelector('#score').value
    document.querySelector('#message').innerHTML = 'Alumno añadido correctamente'

    // Calling function to erase message
    eraseMessage()

    // Calling printTable with same data in fields
    printTable(name, lastName, age, assignment, score)

    // Saving into new prototype array
    return students.push(new Student(name, lastName, age, assignment, score))




}





// addBtn.addEventListener('click', printTable(students))