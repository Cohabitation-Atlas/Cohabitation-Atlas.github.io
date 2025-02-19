document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector("#totalcontainer");
    let isProgrammaticScroll = false;

    scrollContainer.addEventListener("wheel", function (event) {
        if (isProgrammaticScroll) return; // Prevent interference

        const isMouse = Math.abs(event.deltaX) < Math.abs(event.deltaY);
        if (isMouse) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        }
    });

    // Listen for navigation clicks
    document.querySelectorAll("#footer a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                isProgrammaticScroll = true;

                scrollContainer.scrollTo({
                    left: targetElement.offsetLeft,
                    behavior: "smooth"
                });

                // Allow mouse wheel scrolling again after smooth scroll finishes
                setTimeout(() => { isProgrammaticScroll = false; }, 1000);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#footer a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href"); // Get target section ID
            if (!targetId || targetId === "#") return; // Ignore invalid links

            const targetElement = document.querySelector(targetId); // Find the section
            if (!targetElement) {
                console.error("Target section not found:", targetId);
                return;
            }

            console.log("Scrolling to:", targetId, "at position", targetElement.offsetLeft);

            window.scrollTo({
                left: targetElement.offsetLeft, // Align section to the left
                behavior: "smooth" // Smooth scrolling effect
            });
        });
    });
});




