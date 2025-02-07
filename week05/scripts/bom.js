


// bom.js file
document.addEventListener('DOMContentLoaded', function() { //Ensure DOM is loaded
    
    const input = document.getElementById('favchap'); // Get the input element
    const addButton = document.getElementById('submit');
    const chapterList = document.getElementById('list');

    let chapterArray = getChapterList() || [];
    chapterArray.forEach(chapter=> {
        displayList(chapter);
    })

    button.addEventListener('click', () => {
        if (input.value != '') { //checks to ensure input is not empty
            displayList(input.value); //calls function to outputs the submitted chapter
            chapterArray.push(input.value); //adds chapter to array
            setChapterList(); //update the LocalStorage with new array
            input.value = ''; // clear the input
            input.focus(); //set the focus back to the input
        }
    })

    function displayList(item) {
        let li = document.createElement('li');

        //create a delete button
        let deleteButton = document.createElement('button');

        //populate the li element variable's textContent or
        //inner HTML with the input value
        li.textContent = input.value;

        // populate the button textContent with a x
        deleteButton.textContent = 'x';
        
        // add a delete button and an event listener to the
        // list items
        li.appendChild(deleteButton);

        // append the list item to the parent element or
        // unordered list
        chapterList.appendChild(li);

        // empty the input field after button has been
        // clicked
        input.value = '';
        
        deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus();
            })

            input.value = '';

            input.focus();
    }
    
    if (!input || !addButton || !chapterList) {
        console.error('Error: Could not find required HTML elements.');
        return; // Stop script execution if elements are missing
    }
    
    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
    
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length -1);
        chaptersArray = chapterArray.filter(item => item !== chapter);
        setChapterList();
    }
});

