setTimeout(function() {
    // Create a new <p> element
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "WATCH THIS VID";
    newParagraph.style.color = "red";
    newParagraph.style.fontSize = "150px";
    newParagraph.style.position = "fixed";
    newParagraph.style.top = "50%";
    newParagraph.style.left = "50%";
    newParagraph.style.transform = "translate(-50%, -50%)";
    newParagraph.style.textAlign = "center";
    document.body.appendChild(newParagraph);

    // Wait for 2 seconds
    setTimeout(function() {
        // Open a new tab to the specified link
        window.open("https://www.youtube.com/watch?v=qLooSc5ewIA", "_blank");
    }, 2000);

    // Hide the paragraph after 2 more seconds
    setTimeout(function() {
        newParagraph.style.display = "none";
    }, 4000);
}, 5000);
