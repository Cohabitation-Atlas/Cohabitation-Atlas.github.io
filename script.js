document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector("#totalcontainer");

    scrollContainer.addEventListener("wheel", function (event) {
        // Detect if it's a mouse wheel (primarily vertical scroll)  
        const isMouse = Math.abs(event.deltaX) < Math.abs(event.deltaY);

        if (isMouse) {
            // If using a mouse, convert vertical scroll to horizontal
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        }
        // If it's a touchpad, let the natural scrolling happen (no preventDefault)
    });
});