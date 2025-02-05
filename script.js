const elem = document.getElementById("container");
const cloudHTML = `
  <div class="cloud">
    <div class="cloudBubble1"></div>
    <div class="cloudBubble2"></div>
  </div>
`;

// Add 5 repeated clouds to the container
elem.innerHTML += cloudHTML.repeat(5);

// Wait until the clouds are actually in the DOM before modifying them
setTimeout(() => {
    const elements = document.getElementsByClassName('cloud');
    
    // Loop through all cloud elements and apply random properties
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        // Random position and size for each cloud
        element.style.top = (Math.random() * 100) + '%';
        element.style.left = (Math.random() * 100) + '%';
        element.style.transform = "scale(" + ((Math.random() * 0.7) + 0.3) + ")";

        // Random transition time for each cloud
        const intervalTimeInSeconds = (Math.random() * 7) + 6;
        element.style.transition = "all linear " + intervalTimeInSeconds + "s";

        // Set initial position and movement
        setTimeout(() => {
            element.style.left = '100%';
        }, 100);

        let x = 1;
        setInterval(() => {
            if (x % 2 === 0) {
                element.style.left = '100%';
            } else {
                element.style.left = '-50%';
            }
            x += 1;
        }, intervalTimeInSeconds * 1000);
    }
}, 100); // Give it a short delay to ensure the clouds are in the DOM before styling
