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


// MAP SECTION

const companies = [
    { 
        name: "บริษัท วี.ซี.เอส. (ไทยแลนด์) จำกัด", 
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.057823881915!2d100.97938839215954!3d13.59327945270141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f58fc08a863%3A0x6c9730448f2ad342!2sV.C.S.%20(THAILAND)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1696038961236!5m2!1sen!2sth",
        address: "เลขที่ 8 ม.3 ถ.บ้านคลองใหม่-บางควาย ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: "038-578528-30", 
        email: "marketing@vcsthailand.co.th", 
        img: "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture10-1.png" 
    },
    { 
        name: "บริษัท วี.ซี.เอส. จำกัด สำนักงานใหญ่",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.10677020738873!2d100.52373457542122!3d13.82395397080278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b83783d15e7%3A0xeecd03eb43d91596!2sV.C.S.%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1696046818886!5m2!1sen!2sth", 
        address: 'เลขที่ 656 ถ.วงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800',
        phone: "02-9130500-3",
        email: "hrvcsgroup@hotmail.com",
        img: "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture8-1.png"
    },
    {
        name: "บริษัท บี.วี.เอส. แมนูแฟคเจอริ่ง จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124104.03958940944!2d100.90823408090749!3d13.581456624723433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f5269f81fd3%3A0x2f878aba69a73d7!2sB.V.S.%20Manufacturing%20Co.%2CLTD.!5e0!3m2!1sen!2sth!4v1696039325651!5m2!1sen!2sth",
        address: "ลขที่ 46 ม.3 ถ.บ้านคลองใหม่-บางควาย ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: "038-578-585-90",
        email: "hrm@bvs.co.th",
        img: "http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture15-1.png"
    },
    {
        name: 'บริษัท ไทยคิน แมนูแฟคเจอริ่ง จำกัด',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.3776081535243!2d100.94387389215815!3d13.573726452764244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d47322761fb27%3A0xab06dd4abbb05fe6!2sTHAIKIN%20MENUFACTURING%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1696039393641!5m2!1sen!2sth",
        address: "เลขที่ 84/14,84/15 ม.9 ตำบลบางวัว อำเภอบางปะกง จังหวัดฉะเชิงเทรา",
        phone: '038-134-346-8',
        email: 'kreangsak@kokenthailand.com',
        img: 'http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture1.png'
    },
    {
        name: 'บริษัท เอ.เอ.เอ. แมนูเฟคเจอริ่ง จำกัด',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0735720596504!2d100.97570287694217!3d13.5923171867831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f622abec641%3A0x6270e51eef2b7ca5!2sAAA%20Manufacturing%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1696039560071!5m2!1sen!2sth",
        address: "เลขที่ 8/1 ม.3 ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: '038-578471-6',
        email: 'mkt@aaa.co.th',
        img: 'http://125.25.57.91:8081/wp-content/uploads/2023/07/Picture14-1.png'
    }
]


// companies.forEach(company => {
    //     let div = $.createElement("div")
    //     div.innterHTML = company.name;
    //     container.appendChild(div);
    // })

const container = $.querySelector('.companies-section')
companies.map(({ name, map, phone, email, img, address }) => {
    let div = $.createElement('img')
    div.src = img;
    div.alt= name;
    div.classList.add("companies")
    div.addEventListener('click', () => {
        const modal = $.getElementById('modal');
        const overlay = $.getElementById('overlay')
        const companyNameElement = $.getElementById("companyName")
        const companyPhoneElement = $.getElementById("companyPhone")
        const companyEmailElement = $.getElementById('companyEmail')
        const companyAddressElement = $.getElementById('companyAddress')
        const companyMapElement = $.getElementById("companyMap");
        const companyImageElement = $.getElementById('companyImage');

        companyImageElement.textContent = img;
        companyNameElement.textContent = name;
        companyPhoneElement.textContent = `โทร: ${phone}`;
        companyEmailElement.textContent = `Email: ${email}`
        companyAddressElement.textContent = address;
        companyImageElement.src = img;
        companyMapElement.src = map;

        modal.style.display = 'block'
        overlay.style.display = 'block'
    })
    container.appendChild(div);

    window.addEventListener('click', (event) => {
        const modal = $.getElementById('modal')
        const exitButton = $.getElementById("modal-exit")
        
        if (event.target === modal || event.target === exitButton) {
            modal.style.display = 'none'
            overlay.style.display = 'none'
        }

        if (event.target === companyEmailElement) {
            // add code here
        }
    })
})

// const modalContainer = $.querySelector(".companies");

// modalContainer.map((div, index) => {
//     div.addEventListener('click', () => {
//         const modal = $.getElementById("modal");
//         console.log("hello")
//         const companyNameElement = $.getElementById("companyName")
//         const companyPhoneElement = $.getElementById("companyPhone")
        
//         companyNameElement.textContent = companies[index].name;
//         companyPhoneElement.textContent = companies[index].phone;

//         modal.style.display = 'flex';

//     })
// });

// window.addEventListener('click', (event) => {
//     const modal = $.getElementById('modal')
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// })