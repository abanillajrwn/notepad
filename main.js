const title = document.getElementById("title");
const notes = document.getElementById("notes");
const addNote = document.getElementById("add-note");
const titleTag = document.querySelector("input");
const descTag = document.querySelector("textarea");
const addBox = document.querySelector(".add-box");
const nav = document.querySelector('.bottom');
const newNotes = document.querySelector('.note');


const newNote = JSON.parse(localStorage.getItem("notes") || "[]");

notes.addEventListener('click', () =>{
        title.style.display = "flex";
        addNote.style.display = "flex";
});



function autoAdjustHeight(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
};


function showNotes() {
        
        newNote.forEach((note) => {
                let noteForm = `<li class="note">
                                        <div class="detail">
                                                <p>${note.title}</p>
                                                <pre>${note.description}</pre>
                                        </div>
                                        <div class="bottom">
                                                <img class="delete-button" src="/image/bin.png" alt="">
                                        </div>
                                </li>`;
                addBox.insertAdjacentHTML("afterend", noteForm);
        });

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((button) => {
                button.addEventListener('click', handleDelete);
        });
}

function handleDelete(event) {
        const index = event.target.dataset.index; // Get the index of the note to be deleted
        newNote.splice(index, 1); // Remove the note from the array
        localStorage.setItem('notes', JSON.stringify(newNote)); // Update the localStorage
}



showNotes();

addNote.addEventListener('click', e => {
        e.preventDefault();
        let noteTitle = titleTag.value;
        noteDesc = descTag.value;

        if(noteTitle || noteDesc){
                let noteInfo = {
                        title: noteTitle, description: noteDesc
                };
                newNote.push(noteInfo);
                localStorage.setItem("notes", JSON.stringify(newNote));
        }      
});

