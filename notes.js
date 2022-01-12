const notes = [
    {
        id: 1,
        subject: "git",
        date: "1/11/22",
        feeling: "confused but hopeful",
        timeSpent: 120
    },
    {
        id: 2,
        subject: "arrays",
        date: "1/11/22",
        feeling: "confident but learning more",
        timeSpent: 30
    }
]

const noteAboutToday = {
    id: 3,
    subject: "push()",
    date: "1/12/22",
    feeling: "almost confident",
    timeSpent: 30
}

notes.push(noteAboutToday)

for (const note of notes) {
    console.log(`Note ${note.id}
${note.date}
I learned about ${note.subject}.
I spent ${note.timeSpent} minutes working on it.
I felt ${note.feeling}.
    
    `)
}

//console.log(notes)