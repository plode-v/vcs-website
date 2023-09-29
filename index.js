let $ = document;


// products page switch tabs
function switchTab(tabId){
    let tabButton = $.querySelectorAll(".products-menu-button");
    tabButton.forEach(button => button.classList.remove('active'));

    // add active class to clicked button
    $.querySelector(`.products-menu-button[onclick="switchTab('${tabId}')"]`).classList.add('active');

    // hide all content divs
    let contentDivs = $.querySelectorAll('.products-wrapper');
    contentDivs.forEach(div => div.classList.remove('active'))

    // show the clicked content div
    $.getElementById(tabId).classList.add('active');
}


// initialize first tab as active
$.addEventListener('DOMContentLoaded', () => {
    siwtchTab('automotive-products')
})

// navbar hide on scroll
    let lastScrollTop = 0;
    const navbar = $.getElementById("navbar");

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || $.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-50px";
        } else {
            navbar.style.top = "0"
        }

        lastScrollTop = scrollTop;
    })

const logos = [
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture3-2.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture1-2.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture2-2.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture21-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture15-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture4-2.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture5-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture28.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture9-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture13-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture7.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture8.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture11.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture16.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture18.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture14-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture6.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture19-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture20.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture10-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture22-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture26.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture23-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture24.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture12-1.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture25.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture27.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture29.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/08/Picture17.png"
]

const logoGrids = [
    { selector: ".logo-grid-1", initialIndex: 0, interval: 8000 },
    { selector: ".logo-grid-2", initialIndex: 2, interval: 7200 },
    { selector: ".logo-grid-3", initialIndex: 4, interval: 6000 },
    { selector: ".logo-grid-4", initialIndex: 6, interval: 5400 },
    { selector: ".logo-grid-5", initialIndex: 8, interval: 7400 },
    { selector: ".logo-grid-6", initialIndex: 10, interval: 6400 },
    { selector: ".logo-grid-7", initialIndex: 12, interval: 5800 },
    { selector: ".logo-grid-8", initialIndex: 14, interval: 6100 },
    { selector: ".logo-grid-9", initialIndex: 16, interval: 7000 },
    { selector: ".logo-grid-10", initialIndex: 18, interval: 8100 },
    { selector: ".logo-grid-11", initialIndex: 20, interval: 6450 },
    { selector: ".logo-grid-12", initialIndex: 22, interval: 6321 },
    { selector: ".logo-grid-13", initialIndex: 24, interval: 5910 },
    { selector: ".logo-grid-14", initialIndex: 26, interval: 7980 },
]


const updateLogoGrid = (logoGrid, logos, currentIndex, interval) => {
    const logoElements = logoGrid.querySelectorAll('img');
    logoElements.forEach(img => {
        img.src = logos[currentIndex];
    });
    
    // Toggle between consecutive indices
    if (currentIndex === 0 || currentIndex === 1) {
        currentIndex = 1 - currentIndex;
    } else if (currentIndex % 2 === 0) {
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = currentIndex - 1;
    }

    // Reset the interval with a new random value
    resetRandomInterval(logoGrid, logos, currentIndex, interval);

    return currentIndex; // return the updated index
}

const intervals = {};

const resetRandomInterval = (logoGrid, logos, currentIndex, interval) => {
    if(intervals[logoGrid.classList]){
        clearInterval(intervals[logoGrid.classList]);
    }
    intervals[logoGrid.classList] = setInterval(() => {
        currentIndex = updateLogoGrid(logoGrid, logos, currentIndex, interval);
    }, interval);
}

logoGrids.map(({ selector, initialIndex, interval }) => {
    let logoElement = $.querySelector(selector);
    updateLogoGrid(logoElement, logos, initialIndex, interval)
})