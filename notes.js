function addNote(){
    const notesContainer = document.getElementById('notesContainer');
    const col = document.createElement('div');
    col.classList.add('col');
    const note = document.createElement('div');
    note.classList.add('note');
    note.setAttribute('contenteditable', '');
    note.textContent = '';
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    note.style.backgroundColor = getRandomColor();
    note.addEventListener("keyup", (event) => {
        if(event.altKey && event.keyCode === 46){
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


document.addEventListener("DOMContentLoaded", () => {


    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".links");
    
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

});