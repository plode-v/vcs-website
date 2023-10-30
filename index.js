let $ = document;

const companies = [
    { 
        name: "บริษัท วี.ซี.เอส. (ไทยแลนด์) จำกัด", 
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.057823881915!2d100.97938839215954!3d13.59327945270141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f58fc08a863%3A0x6c9730448f2ad342!2sV.C.S.%20(THAILAND)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1696038961236!5m2!1sen!2sth",
        address: "เลขที่ 8 ม.3 ถ.บ้านคลองใหม่-บางควาย ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: "038-578528-30", 
        email: "marketing@vcsthailand.co.th", 
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture10-1.png" 
    },
    { 
        name: "บริษัท วี.ซี.เอส. จำกัด สำนักงานใหญ่",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.10677020738873!2d100.52373457542122!3d13.82395397080278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b83783d15e7%3A0xeecd03eb43d91596!2sV.C.S.%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1696046818886!5m2!1sen!2sth", 
        address: 'เลขที่ 656 ถ.วงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800',
        phone: "02-9130500-3",
        email: "hrvcsgroup@hotmail.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture8-1.png"
    },
    {
        name: "บริษัท บี.วี.เอส. แมนูแฟคเจอริ่ง จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124104.03958940944!2d100.90823408090749!3d13.581456624723433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f5269f81fd3%3A0x2f878aba69a73d7!2sB.V.S.%20Manufacturing%20Co.%2CLTD.!5e0!3m2!1sen!2sth!4v1696039325651!5m2!1sen!2sth",
        address: "เลขที่ 46 ม.3 ถ.บ้านคลองใหม่-บางควาย ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: "038-578-585-90",
        email: "hrm@bvs.co.th",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture15-1.png"
    },
    {
        name: 'บริษัท ไทยคิน แมนูแฟคเจอริ่ง จำกัด',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.3776081535243!2d100.94387389215815!3d13.573726452764244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d47322761fb27%3A0xab06dd4abbb05fe6!2sTHAIKIN%20MENUFACTURING%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1696039393641!5m2!1sen!2sth",
        address: "เลขที่ 84/14,84/15 ม.9 ตำบลบางวัว อำเภอบางปะกง จังหวัดฉะเชิงเทรา",
        phone: '038-134-346-8',
        email: 'kreangsak@kokenthailand.com',
        img: 'https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture1.png'
    },
    {
        name: 'บริษัท เอ.เอ.เอ. แมนูเฟคเจอริ่ง จำกัด',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0735720596504!2d100.97570287694217!3d13.5923171867831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f622abec641%3A0x6270e51eef2b7ca5!2sAAA%20Manufacturing%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1696039560071!5m2!1sen!2sth",
        address: "เลขที่ 8/1 ม.3 ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: '038-578471-6',
        email: 'mkt@aaa.co.th',
        img: 'https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture14-1.png'
    },
    {
        name: 'บริษัท โคเค็น (ไทยแลนด์) จำกัด',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124104.03958940944!2d100.90823408090749!3d13.581456624723433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f5269f81fd3%3A0x2f878aba69a73d7!2sB.V.S.%20Manufacturing%20Co.%2CLTD.!5e0!3m2!1sen!2sth!4v1696039325651!5m2!1sen!2sth",
        address: 'เลขที่ 46 ม.3 ถ.บ้านคลองใหม่-บางควาย ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130',
        phone: '02-9130500-3 ต่อ 666',
        email: "kreangsak@kokenthailand.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture9-1.png"
    },
    {
        name: "บริษัท เอ เอ ไฟน์ แบล๊งกิ๊ง จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1773.9894096558517!2d100.9832976005517!3d13.593873594522872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f60f45750f1%3A0x73c834cd355a5893!2sAA%20FINE%20BLANKING%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1696052245496!5m2!1sen!2sth",
        address: "เลขที่ 8/2 ม.3 ต.หนองจอก อ.บางปะกง ฉะเชิงเทรา 24130",
        phone: "038-578293-5",
        email: 'p_kitti@aafb.co.th',
        email2: 'n_ronnarong@aafb.co.th',
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture4-1.png",
    },
    {
        name: "บริษัท บีเอสเพรส จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.29651126792314!2d100.50367269773805!3d13.67331350040893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d81049e4d4673%3A0x3bd2f95cee19bc86!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4muC4teC5gOC4reC4quC5gOC4nuC4o-C4qiDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sus!4v1696052472975!5m2!1sen!2sus",
        address: "เลขที่ 288, 288/1,416 ม.8 ถนนสุขสวัสดิ์ แขวงราษฎร์บูรณะ เขตราษฎร์บูรณะ กทม. 10140",
        phone: '02-427-5331 | 02-427-1894',
        email: 'bspressgroup@yahoo.com',
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture13-1.png"
    },
    {
        name: "บริษัท ไทย โคเค็น โคเงียว จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61988.25707200317!2d100.44711564863279!3d13.823055500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b815554dae7%3A0x763bd16105678d9!2sThai%20Koken%20Kogyo%20Co.%2C%20LTD.!5e0!3m2!1sen!2sus!4v1696052629692!5m2!1sen!2sus",
        address: "เลขที่ 4 ซ.ปานทิพย์ 2 ถ.วงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กทม. 10800",
        phone: "02-913-0962",
        email: 'pi@thaikoken.com',
        img: 'https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture2-1.png'
    },
    {
        name: "บริษัท อะตอม แมนูแฟคเจอริ่ง จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.9095074714535!2d100.50903854505101!3d13.81898420079055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b8c2e4e9fef%3A0xfc0d5d3fcf0981c!2z4Lia4LiI4LiBLiDguK3guLDguJXguK3guKEg4LmB4Lih4LiZ4LiZ4Li54LmB4Lif4LiE4LmA4LiI4Lit4Lij4LmM4Lij4Li04LmI4LiH!5e0!3m2!1sen!2sth!4v1696052934601!5m2!1sen!2sth",
        address: "เลขที่ 1567 ถ.ประชาราษฎร์ 1 แขวงวงศ์สว่าง เขตบางซื่อ กทม. 10800",
        phone: "02-912-2801-2 | 02-912-2811-3",
        email: 'atom_hr2555@hotmail.com',
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture11-1.png"
    },
    {
        name: "บริษัท ไทยคิน อินดัสทรี (ประเทศไทย) จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2456603204123!2d100.52091737694462!3d13.8242819865752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b822f74e5f1%3A0xdb25a94258a65303!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5hOC4l-C4ouC4hOC4tOC4mSDguK3guLTguJnguJTguLHguKrguJXguKPguLUgKOC5hOC4l-C4ouC5geC4peC4meC4lOC5jCkg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sen!2sth!4v1696052957206!5m2!1sen!2sth",
        address: "เลขที่ 527 / 7 ถ.วงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กทม. 10800",
        phone: "02-556-0125-7",
        email: "hr@thaikin.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture3-1.png"
    },
    {
        name: "บริษัท ซันชายน์ เอเชีย จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15497.352579902903!2d100.5100003!3d13.8187226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b791d2446f1%3A0x8a53b2ad9af5bf0d!2sSun-shine%20Asia!5e0!3m2!1sen!2sth!4v1696053147619!5m2!1sen!2sth",
        address: "เลขที่ 98-108 ซ.วัดเลียบราษฎร์บำรุง ถ.วงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กทม. 10800",
        phone: "02-910-7361",
        email: "taweesak_pv@gmail.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture5-1.png"
    },
    {
        name: "บริษัท ชิมิสึ แมนนิวแฟคเจอร์ริ่ง จำกัด",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.905873834259!2d100.80431547694359!3d13.724148186664845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d688740155b81%3A0xc797358f4c24165!2sShimizu%20Manufacturing%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1696053248453!5m2!1sen!2sth",
        address: "เลขที่ 230 ม.2 ถ.ประชาพัฒนา แขวงทับยาว เขตลาดกระบัง กทม. 10520",
        phone: "02-172-9637-8",
        email: "shimizu_thai@hotmail.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture6-1.png"
    },
    {
        name: "บริษัท วีซีที-09 จำกัด",
        address: "เลขที่ 38 ซอยรัขดาภิเษก 70 ถ.รัชดาภิเษก แขวงบางซื่อ เขตบางซื่อ กทม. 10800",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0966151091666!2d100.5326846004305!3d13.833236699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c83b5876323%3A0x98b2644b35da5918!2z4Lia4LiI4LiBLiDguKfguLXguIvguLXguJfguLUtMDk!5e0!3m2!1sen!2sth!4v1696054450001!5m2!1sen!2sth",
        phone: "02-922-3027-8",
        email: "vct@vct09.com",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture12-1.png"
    },
    {
        name: "บริษัท โอ เอส ทรานสปอร์ต จำกัด",
        address: "เลขที่ 5 ซอย 67 ถนนสุขุมวิท แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
        phone: "02-391-4945",
        img: "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/07/Picture7-1.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.0072922225378!2d100.58862137609114!3d13.71668319701909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fbbbec74345%3A0xd9e70b4e388f5911!2s1%2F5%20Sukhumvit%2067%20Alley%2C%20Khwaeng%20Phra%20Khanong%20Nuea%2C%20Watthana%2C%20Krung%20Thep%20Maha%20Nakhon%2010110!5e0!3m2!1sen!2sth!4v1696054922395!5m2!1sen!2sth"
    }
]

const logos = [
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture3-2.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture1-2.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture2-2.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture21-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture15-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture4-2.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture5-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture28.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture9-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture13-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture7.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture8.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture11.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture16.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture18.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture14-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture6.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture19-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture20.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture10-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture22-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture26.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture23-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture24.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture12-1.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture25.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture27.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture29.png",
    "https://vcsgroupthai.com/webvcs/wp-content/uploads/2023/08/Picture17.png"
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
    switchTab('automotive-products')
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


const updateLogoGrid = (logoGrid, logos, currentIndex, interval) => {
    const logoElements = logoGrid.querySelectorAll('img');
    logoElements.forEach(img => {
        img.src = logos[currentIndex];
        setInterval(() => {
            img.style.opacity = .5;
            img.style.opacity = 1;
        }, 100)
    });

    // logoElements[currentIndex].style.opacity = 1;
    
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

const resetRandomInterval = (logoGrid, logos, currentIndex) => {
    if(intervals[logoGrid.classList]){
        clearInterval(intervals[logoGrid.classList]);
    }
    intervals[logoGrid.classList] = setInterval(() => {
        currentIndex = updateLogoGrid(logoGrid, logos, currentIndex, 3000);
    }, 3000);
}

logoGrids.map(({ selector, initialIndex, interval }) => {
    let logoElement = $.querySelector(selector);
    updateLogoGrid(logoElement, logos, initialIndex, interval)
})


// const updateLogoGrid = (logoGrid, logos, currentIndex, interval) => {
//     const logoElements = logoGrid.querySelectorAll('img');

//     // Fade out the current image
//     logoElements[currentIndex].style.opacity = 0;

//     // Toggle between consecutive indices
//     if (currentIndex === 0 || currentIndex === 1) {
//         currentIndex = 1 - currentIndex;
//     } else if (currentIndex % 2 === 0) {
//         currentIndex = currentIndex + 1;
//     } else {
//         currentIndex = currentIndex - 1;
//     }

//     // Preload the next image to avoid flickering during transition
//     const nextIndex = currentIndex === 0 ? 1 : 0;
//     const nextImage = new Image();
//     nextImage.src = logos[nextIndex];

//     // Fade in the next image after a short delay
//     setTimeout(() => {
//         logoElements[currentIndex].src = logos[currentIndex];
//         logoElements[currentIndex].style.opacity = 1;
//     }, 300);

//     // Reset the interval with a new random value
//     resetRandomInterval(logoGrid, logos, currentIndex, interval);

//     return currentIndex; // return the updated index
// }

// const intervals = {};

// const resetRandomInterval = (logoGrid, logos, currentIndex, interval) => {
//     if (intervals[logoGrid.classList]) {
//         clearInterval(intervals[logoGrid.classList]);
//     }
//     intervals[logoGrid.classList] = setInterval(() => {
//         currentIndex = updateLogoGrid(logoGrid, logos, currentIndex, interval);
//     }, interval); // Use the provided interval value
// }

// logoGrids.forEach(({ selector, initialIndex, interval }) => {
//     let logoElement = document.querySelector(selector);
//     updateLogoGrid(logoElement, logos, initialIndex, interval);
// });


// MAP SECTION

const container = $.querySelector('.companies-section')
companies.map(({ name, map, phone, email, email2, img, address }) => {
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
        const companyEmailElement2 = $.getElementById('companyEmail2')
        const companyAddressElement = $.getElementById('companyAddress')
        const companyMapElement = $.getElementById("companyMap");
        const companyImageElement = $.getElementById('companyImage');

        if (!email2) {
            companyEmailElement2.style.display = 'none'
        } if (!email) {
            companyEmailElement.style.display = 'none'
        } else if (email2) {
            companyEmailElement2.style.display = 'flex'
            companyEmailElement2.style.margin = '10px'
        } else if (email) {
            companyEmailElement.style.display = 'flex'
        }

        companyEmailElement2.textContent = `Email: ${email2}`
        companyEmailElement2.href = `mailto:${email2}`
        companyImageElement.textContent = img;
        companyNameElement.textContent = name;
        companyPhoneElement.textContent = `โทร: ${phone}`;
        companyEmailElement.textContent = `Email: ${email}`
        companyEmailElement.href = `mailto:${email}`
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
            window.location.href = companyEmailElement.href;
        }
    })
})