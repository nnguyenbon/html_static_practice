let currentPage = 1;
const totalPages = 6;

const pageColors = ["#ffffff", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffcce0"];

function next() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageDisplay();
        updateBackgroundColor();
        console.log(`Navigated to page: ${currentPage}`);
    }
    checkButtonState();
}

function previous() {
    if (currentPage > 1) {
        currentPage--;
        updatePageDisplay();
        updateBackgroundColor();
        console.log(`Navigated to page: ${currentPage}`);
    }
    checkButtonState();
}

function updatePageDisplay() {
    const pageIndicator = document.getElementById("page-indicator");
    if (pageIndicator) {
        pageIndicator.textContent = `Page: ${currentPage}/${totalPages}`;
    }
}

function updateBackgroundColor() {
    const newColor = pageColors[currentPage - 1]; 
    document.body.style.backgroundColor = newColor; 
    
    console.log(`Background color updated to: ${newColor}`);
}

function checkButtonState() {
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");

    if (currentPage >= totalPages) {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = "#ccc";
    } else {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "";
    }

    if (currentPage <= 1) {
        previousButton.disabled = true;
        previousButton.style.backgroundColor = "#ccc";
    } else {
        previousButton.disabled = false;
        previousButton.style.backgroundColor = "#000";
    }
}

checkButtonState();

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        next(); 
    } else if (event.key === "ArrowLeft") {
        previous(); 
    }
});
