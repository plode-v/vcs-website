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
