let $ = document;
const logos = [
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture14.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture21.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture22.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture20.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture23.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture13.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture24.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture25.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture26.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture17.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture27.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture28.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture29.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture16.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture13.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture14.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture21.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture22.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture20.png",
    'http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture23.png',
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture24.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture25.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture26.png",
    'http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture17.png',
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture27.png",
    'http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture28.png',
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture29.png",
    "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture16.png"
]


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


// randomly looping through costomer's logos
const logoGrid = document.querySelector('.logo-grid')

const getRandomImgSrc = () => {
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex]
}

const updateLogoGrid = () => {
    const logoElement = logoGrid.querySelectorAll('img');

    logoElement.forEach((src) => {
        const randomImgSrc = getRandomImgSrc();
        src.src = randomImgSrc;
    })
}

updateLogoGrid();
setInterval(updateLogoGrid, 3500);