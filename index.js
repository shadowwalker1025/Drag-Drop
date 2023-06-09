let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", draggedItem.id);
  event.dataTransfer.effectAllowed = "move";
}

function drop(event) {
  event.preventDefault();
  const targetContainer = event.target;
  const itemId = event.dataTransfer.getData("text/plain");
  const item = document.getElementById(itemId);
  
  if (targetContainer.classList.contains("item-container")) {
    targetContainer.appendChild(item);
  }
  
  draggedItem = null;
}

function reset() {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
}
