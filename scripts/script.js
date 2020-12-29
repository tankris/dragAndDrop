// Select all the elements with the draggable class
const draggables = document.querySelectorAll(".draggable");
// Select all the elements with the container class
const containers = document.querySelectorAll(".container");

// Using forEach to run through each of the elements that have the draggable class
draggables.forEach(draggable => {
    // Listens to dragstart event, this event gets fired when the user begins to 
    // drag the element
    // It is possible to listen to the drag event as well but that isn't neccessary
    // since drag event gets triggered as long as the element is being dragged every
    // 100ms or so
    draggable.addEventListener("dragstart", function(event) {
        const item = event.target;
        // Adjusting the opacity of the element being dragged
        item.style.opacity = "0.5";
    })

    // Listens for a dragend event, this event get triggered as soon as the user lets
    // go of the element being dragged
    draggable.addEventListener("dragend", function(event) {
        let item = event.target;
        // Resetting opacity when the user has stopped dragging
        item.style.opacity = "";
    })
});