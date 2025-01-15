


// bom.js file
document.addEventListener('DOMContentLoaded', function() { //Ensure DOM is loaded
    
    const input = document.getElementById('favchap'); // Get the input element
    const addButton = document.getElementById('submit');
    const chapterList = document.getElementById('list')
    
    if (!input || !addButton || !chapterList) {
        console.error('Error: Could not find required HTML elements.');
        return; // Stop script execution if elements are missing
    }
    
    addButton.addEventListener('click', function() {
            
        // check to make sure the input is not blank before doing the following tasks in this list
        // us an if block
        if (input.value.trim() !== '') {
                

        // create a li element that will hold each entries 
        // chapter title and an associated delete button
        const li = document.createElement('li');

        //create a delete button
        const deleteButton = document.createElement('button');

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
     });

    
});

