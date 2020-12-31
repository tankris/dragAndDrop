// Holds the current item being dragged
// Using var since it has global scope
var item;

// Select all the elements with the draggable class
const draggables = document.querySelectorAll(".draggable");
// Select all the elements with the container class
const containers = document.querySelectorAll(".container");

// Listens to when an elements gets dragged
document.addEventListener("dragstart", function(event) {
    let currentDragged = event.target;

    // If the element being dragged has the draggable class, then execute
    if(currentDragged.classList.contains("draggable")) {
        // Store the current dragged item to a variable of global scope
        item = currentDragged;
        item.style.opacity = "0.3";
        item.style.borderStyle = "dotted"; 
        item.style.borderColor = "white"; 
    }
})

// Listens to when the dragged element is not being dragged anymore
document.addEventListener("dragend", function(event) {
    // If the element being dragged has the draggable class, then execute
    // Reset the dragged elements opacity since it isn't being dragged anymore
    // Notice that item variable is being used since the dragged element had previously been stored
    item.style.opacity = "";
    item.style.borderStyle = "solid";
    item.style.borderColor = "black"; 
})

// Listens to the elements that the dragged element is being dragged over
document.addEventListener("dragover", function(event) {
    // Storing the current dragged over element
    let currentDraggedOver = event.target;

    // Check if the element is being dragged over a container
    if(currentDraggedOver.classList.contains("container")) {
        // If the dragged item is out of its container, then append it to the new container and remove it from the old one
        if(item.parentElement !== currentDraggedOver) {
            item.parentElement.removeChild(item);
            currentDraggedOver.appendChild(item);
        }
    }

    // Check if the element is being dragged over another item
    if(currentDraggedOver.classList.contains("draggable")) {
        // As long as the dragged item isn't being dragged over itself, proceed
        if(item != currentDraggedOver) { 
           // Find if the dragged item happens to be dragged over an item that comes before it within its container
           for(var i = item.previousElementSibling; i !== null; i = i.previousElementSibling) {
                if(i === currentDraggedOver) {                        
                    event.target.parentNode.insertBefore(item, currentDraggedOver);
                    break;
                }
            }

            // If the check reaches null, then the item is being dragged over an item that comes after it,
            // So, place the item below the currently dragged over item 
            // One issue, if the item being dragged over happens to be bellow the dragged item, it will always be placed below it
            if(i === null) {
                event.target.parentNode.insertBefore(item, currentDraggedOver.nextSibling);
            }
        }
    }
})