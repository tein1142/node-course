const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes =  () => 'Hi my name is Tien, I learning node js'

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( (note) =>  note.title === title )
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }else {
        console.log('Note title taken!')
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notesData = loadNotes()
   
    const indexOfNoteData= notesData.filter((note)=>note.title != title)
    const hasTitle = notesData.filter((note) =>  note.title === title)    
        if(hasTitle.length != 0){
            saveNotes(indexOfNoteData)
            console.log(chalk.bgGreen.inverse('Notes has remove!'))
        }else
            console.log(chalk.bgRed.inverse('Noting remove!'))
    
}

    const listNotes = () => {
        const notesData = loadNotes()
            console.log(chalk.inverse('Your Notes !'))

            notesData.forEach((notesData) => {
            console.log('title: ' + notesData.title + ' body: ' + notesData.body)
            });
    }

    const readNotes = (title) => {
        const notesData = loadNotes()
        const findNoteData = notesData.find( (note) => note.title === title )
        if(findNoteData){
            console.log(chalk.inverse(findNoteData.title))
            console.log(chalk.inverse(findNoteData.body))
        }else{
            console.log('Not found title')
        }
    }
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}