'use strict'

// ----- ❌ Close 'Update Bar' ❌ -----
const updateBar = document.getElementById('updateBar');
const closeUpdateBarBtn = document.getElementById('closeUpdateBarBtn');

const closeUpdateBar = () => {
    updateBar.classList.add('element-hidden');
}

closeUpdateBarBtn.addEventListener('click', closeUpdateBar);


// ----- ⏰ Update Footer Date ⏰ -----
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDateText = document.getElementById('currentDateText');

currentDateText.textContent = currentYear;


// ----- 📄 Select Page 📄 -----
// 📄 Pages:
let currentPage = 'home-page';

const homePage = document.getElementById('homePage');
const bannersPage = document.getElementById('bannersPage');
const followersPage = document.getElementById('followersPage');
const imagePage = document.getElementById('imagePage');

// 🧭 Navbar buttons:
const homePageBtn = document.getElementById('homePageBtn');
const bannersPageBtn = document.getElementById('bannersPageBtn');
const followersPageBtn = document.getElementById('followersPageBtn');
const imagesPageBtn = document.getElementById('imagesPageBtn');


// 🍔 Hamburger Button:
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigationBar = document.getElementById('navigationBar');
const closeSideMenuBtn = document.getElementById('closeSideMenuBtn');

const openSideMenu = () => {
    navigationBar.classList.add('navbar__side-menu');
    hamburgerBtn.classList.add('element-hidden');
    closeSideMenuBtn.classList.remove('element-hidden');

    homePage.classList.add('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.add('element-hidden');
}

const closeSideMenu = () => {
    navigationBar.classList.remove('navbar__side-menu');
    hamburgerBtn.classList.remove('element-hidden');
    closeSideMenuBtn.classList.add('element-hidden');

    if (currentPage === 'home-page') {
        openHomePage();
    } else if (currentPage === 'banner-page') {
        openBannersPage();
    } else if (currentPage === 'followers-page') {
        openFollowersPage();
    } else if (currentPage === 'image-page') {
        openImagesPage();
    }
}

hamburgerBtn.addEventListener('click', openSideMenu);
closeSideMenuBtn.addEventListener('click', closeSideMenu);


// 🏡 Homepage option buttons:
const makeBannerBtn = document.getElementById('makeBannerBtn');
const celebrateFollowersBtn = document.getElementById('celebrateFollowersBtn');
const makeImageBtn = document.getElementById('makeImageBtn');

const openHomePage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');

    homePage.classList.remove('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.add('element-hidden');

    currentPage = 'home-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navigationBar.classList.contains('navbar__side-menu')) {
        closeSideMenu();
    }
}

const openBannersPage = () => {
    bannersPageBtn.classList.add('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.remove('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.add('element-hidden');

    currentPage = 'banner-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navigationBar.classList.contains('navbar__side-menu')) {
        closeSideMenu();
    }
}

const openFollowersPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.add('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.remove('element-hidden');
    imagePage.classList.add('element-hidden');

    currentPage = 'followers-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navigationBar.classList.contains('navbar__side-menu')) {
        closeSideMenu();
    }
}

const openImagesPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.add('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.remove('element-hidden');

    currentPage = 'image-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navigationBar.classList.contains('navbar__side-menu')) {
        closeSideMenu();
    }
}

// Navbar Event Listeners:
homePageBtn.addEventListener('click', openHomePage);
bannersPageBtn.addEventListener('click', openBannersPage);
followersPageBtn.addEventListener('click', openFollowersPage);
imagesPageBtn.addEventListener('click', openImagesPage);

// Options Boxes Event Listeners:
makeBannerBtn.addEventListener('click', openBannersPage);
celebrateFollowersBtn.addEventListener('click', openFollowersPage);
makeImageBtn.addEventListener('click', openImagesPage);

// btn-selected (add to navigation buttons to display current page)



// Banner Section

// Followers Section

// ----- 🏙 Images Section 🏙 -----
let images__dropdownTemplateShown = false;
let images__dropdownBackgroundShown = false;
let images__dropdownTextShown = false;
let images__dropdownColoursShown = false;

const images__dropdownTemplateBtn = document.getElementById('images__dropdownTemplateBtn');
const images__dropdownBackgroundBtn = document.getElementById('images__dropdownBackgroundBtn');
const images__dropdownTextBtn = document.getElementById('images__dropdownTextBtn');
const images__dropdownColoursBtn = document.getElementById('images__dropdownColoursBtn');

const images__dropdownTemplateBox = document.getElementById('images__dropdownTemplateBox');
const images__dropdownBackgroundBox = document.getElementById('images__dropdownBackgroundBox');
const images__dropdownTextBox = document.getElementById('images__dropdownTextBox');
const images__dropdownColoursBox = document.getElementById('images__dropdownColoursBox');

const images__dropdownTemplateIcon = document.getElementById('images__dropdownTemplateIcon');
const images__dropdownBackgroundIcon = document.getElementById('images__dropdownBackgroundIcon');
const images__dropdownTextIcon = document.getElementById('images__dropdownTextIcon');
const images__dropdownColoursIcon = document.getElementById('images__dropdownColoursIcon');

const images__openTemplateDropdown = () => {
    images__dropdownTemplateBox.classList.toggle('element-hidden');
    images__dropdownTemplateShown = !images__dropdownTemplateShown;

    if (images__dropdownTemplateShown) {
        images__dropdownTemplateIcon.classList.remove('fa-chevron-down');
        images__dropdownTemplateIcon.classList.add('fa-chevron-up');
    } else {
        images__dropdownTemplateIcon.classList.add('fa-chevron-down');
        images__dropdownTemplateIcon.classList.remove('fa-chevron-up');
    }
}

const images__openBackgroundDropdown = () => {
    images__dropdownBackgroundBox.classList.toggle('element-hidden');
    images__dropdownBackgroundShown = !images__dropdownBackgroundShown;

    if (images__dropdownBackgroundShown) {
        images__dropdownBackgroundIcon.classList.remove('fa-chevron-down');
        images__dropdownBackgroundIcon.classList.add('fa-chevron-up');
    } else {
        images__dropdownBackgroundIcon.classList.add('fa-chevron-down');
        images__dropdownBackgroundIcon.classList.remove('fa-chevron-up');
    }
}

const images__openTextDropdown = () => {
    images__dropdownTextBox.classList.toggle('element-hidden');
    images__dropdownTextShown = !images__dropdownTextShown;

    if (images__dropdownTextShown) {
        images__dropdownTextIcon.classList.remove('fa-chevron-down');
        images__dropdownTextIcon.classList.add('fa-chevron-up');
    } else {
        images__dropdownTextIcon.classList.add('fa-chevron-down');
        images__dropdownTextIcon.classList.remove('fa-chevron-up');
    }
}

const images__openColoursDropdown = () => {
    images__dropdownColoursBox.classList.toggle('element-hidden');
    images__dropdownColoursShown = !images__dropdownColoursShown;

    if (images__dropdownColoursShown) {
        images__dropdownColoursIcon.classList.remove('fa-chevron-down');
        images__dropdownColoursIcon.classList.add('fa-chevron-up');
    } else {
        images__dropdownColoursIcon.classList.add('fa-chevron-down');
        images__dropdownColoursIcon.classList.remove('fa-chevron-up');
    }
}

images__dropdownTemplateBtn.addEventListener('click', images__openTemplateDropdown);
images__dropdownBackgroundBtn.addEventListener('click', images__openBackgroundDropdown);
images__dropdownTextBtn.addEventListener('click', images__openTextDropdown);
images__dropdownColoursBtn.addEventListener('click', images__openColoursDropdown);


// Edit Text
const images__textContentBox = document.getElementById('images__textContentBox');

let images__textContent = '#100DaysOfCode';

const textTestBtn = document.getElementById('textTestBtn');
textTestBtn.addEventListener('click', () => {
    images__textContentBox.textContent = 'Dan';
})


// Choose a template image buttons (select functionality)
// const image__chooseTemplateBtn = document.querySelectorAll('#image__chooseTemplateBtn');

// image__chooseTemplateBtn.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const templatePreview = e.target;
//         const templateBtn = templatePreview.parentElement;
//         const templateContainer = templateBtn.parentElement;

//         image__chooseTemplateBtn.forEach(button => {
//             const templateContainer = button.parentElement;
//             templateContainer.classList.remove('image__template-container--selected');
//         });

//         templateContainer.classList.add('image__template-container--selected');
//     })
// });




// ----------- MAIN FUNCTIONALITY ----------
const captureImageBtn = document.getElementById('captureImageBtn');
const testBox = document.getElementById('testBox');
const screenshotImageContainer = document.getElementById('screenshotImageContainer');

const testFunc = () => {
    html2canvas(screenshotImageContainer).then(canvas => {
        testBox.appendChild(canvas);
        let image = canvas.toDataURL(`image/png`).replace('image/png', 'image/octet-stream');
        console.log(image);

        // Now for the magic to make it a download:
        window.location.href = image;
    });
}

captureImageBtn.addEventListener('click', testFunc);





// 📸 Capture Image 📸
// const captureBox = document.getElementById('captureBox');
// const captureBtn = document.getElementById('captureBtn');
// const resultBox = document.getElementById('resultBox');

// const takeScreenshot = () => {
//     console.log('Screenshot taken...');
//     html2canvas(document.getElementById('captureBox')).then(canvas => {
//         resultBox.appendChild(canvas);
//         console.log(canvas);
//     });
// }

// captureBtn.addEventListener('click', takeScreenshot);

// 💽 Download Image 💽
// const downloadBtn = document.getElementById('downloadBtn');

// const downloadImage = () => {
//     console.log('Downloading image...');

//     html2canvas(document.getElementById('captureBox')).then(canvas => {
//         let image = canvas.toDataURL(`image/png`).replace('image/png', 'image/octet-stream');
//         console.log(image);

//         window.location.href = image;
//     });
// }

// downloadBtn.addEventListener('click', downloadImage);

/*
    NEED:
    1. container that will be captured
    2. button to fire capture function
    3. result container to display the screenshot
*/
