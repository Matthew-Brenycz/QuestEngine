var nodePositions = [];
var nodePositionsStorage = JSON.parse(localStorage.getItem("nodePositions"));

// Restablish the previous node - node slot positions on page load
window.addEventListener("load", (event) => {

    if (nodePositionsStorage != null) {

        nodePositions = nodePositionsStorage;

        for (i = 0; i < nodePositions.length; i++) {

        var dragged;
        var slot;

        if ([i] % 2 == 0) {
            dragged = document.getElementById(nodePositions[i]);
            if (dragged == null) {
                delete nodePositions[i];
            }
        }

        if ([i] % 2 != 0) {
            slot = document.getElementById(nodePositions[i]);
            if (slot == null) {
                delete nodePositions[i];
            }
            if (dragged != null && slot != null){
                slot.appendChild(dragged);
            }
        }

        }

    }

});

// Functions for dragging and dropping nodes onto node slots
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("nodeId", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var draggedNode = ev.dataTransfer.getData("nodeId");
    if (nodePositions.includes(draggedNode)) {
        clearDuplicateDrop(draggedNode);
    }
    ev.target.appendChild(document.getElementById(draggedNode));
    nodePositions.push(draggedNode);
    nodePositions.push(ev.target.id);
    localStorage.setItem("nodePositions", JSON.stringify(nodePositions));
}


function clearDuplicateDrop(draggedNode) {
    var splicedElement = (nodePositions.indexOf(draggedNode));
    nodePositions.splice(splicedElement, 2);
}

// Variables for node links
const nodeLinks = document.getElementById("main-content").getElementsByTagName("a");
const nodeLinkAddresses = []

// Store the node link href values 
for (i = 0; i < nodeLinks.length; i++){
    let address = nodeLinks[i].getAttribute("href");
    nodeLinkAddresses.push(address);
}

// Hover styles for node supporting information links
const subLinkStyles = {
    borderRadius: '5px',
    boxShadow: 'inset 0px 0px 0px 2px',
    backgroundColor: 'lightgreen',
}

// Hover styles for node title links
const titleLinkStyles = {
    borderRadius: '5px',
    boxShadow: 'inset 0px 0px 0px 2px',
    backgroundColor: 'yellow',
}

// Hover and mouseout function listener assignment
for (i = 0; i < nodeLinks.length; i++){
    nodeLinks[i].addEventListener("mouseover", highlightLinkPair);
    nodeLinks[i].addEventListener("mouseout", clearLinkPair);
}

// Highlight all equivalent href links on hover
function highlightLinkPair(ev){

    let targetAddress = ev.currentTarget.getAttribute("href");

    for (i = 0; i < nodeLinks.length; i++){
        if (targetAddress == nodeLinks[i].getAttribute("href")){
            if (nodeLinks[i].parentElement.classList.contains("card-header")) {
                let parent = nodeLinks[i].parentElement;
                Object.assign(parent.style, titleLinkStyles);
            }
            else {
                Object.assign(nodeLinks[i].style, subLinkStyles);
            }
        }
    }
}

// Clear styles on mouseout
function clearLinkPair(ev){

    let targetAddress = ev.currentTarget.getAttribute("href");

    for (i = 0; i < nodeLinks.length; i++){
        if (targetAddress == nodeLinks[i].getAttribute("href")){
            nodeLinks[i].removeAttribute("style");
            if (nodeLinks[i].parentElement.classList.contains("card-header")) {
                let parent = nodeLinks[i].parentElement;
                parent.removeAttribute("style");
            }
            else {
                nodeLinks[i].removeAttribute("style");
            }
        }
    }
};