const notes = [
    {
        id: 1,
        subject: "git",
        date: "1/11/22",
        feeling: "confused",
        timeSpent: 120
    },
    {
        id: 2,
        subject: "arrays",
        date: "1/11/22",
        feeling: "confident",
        timeSpent: 30
    }
]

const noteAboutToday = {
    id: 3,
    subject: "push()",
    date: "1/12/22",
    feeling: "hopeful",
    timeSpent: 30
}

notes.push(noteAboutToday)

const searchTerm = "confident"

for (const note of notes) {
    if (note.feeling === searchTerm) {
    console.log(`Note ${note.id}
${note.date}
I learned about ${note.subject}.
I spent ${note.timeSpent} minutes working on it.
I felt ${note.feeling}.
    `)
    }
}

//console.log(notes)