function addNote(){
    const notesContainer = document.getElementById('notesContainer');
    const col = document.createElement('div');
    col.classList.add('col');
    const note = document.createElement('div');
    note.classList.add('note');
    note.setAttribute('contenteditable', '');
    note.textContent = '';
    note.addEventListener("keyup", (event) => {
        if(event.shiftKey && event.keyCode === 46){
            col.remove();
        }
    });

    col.appendChild(note);
    notesContainer.appendChild(col);
   
}

function makeBold(){
    document.execCommand('bold');
}

function makeItalic(){
    document.execCommand('italic');
}

function makeUnderLine(){
    document.execCommand('underline');
}