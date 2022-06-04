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
// Pages:
const homePage = document.getElementById('homePage');
const bannersPage = document.getElementById('bannersPage');
const followersPage = document.getElementById('followersPage');
const imagePage = document.getElementById('imagePage');

// Navbar buttons:
const homePageBtn = document.getElementById('homePageBtn');
const bannersPageBtn = document.getElementById('bannersPageBtn');
const followersPageBtn = document.getElementById('followersPageBtn');
const imagesPageBtn = document.getElementById('imagesPageBtn');

// Homepage option buttons:
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const openBannersPage = () => {
    bannersPageBtn.classList.add('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.remove('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.add('element-hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const openFollowersPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.add('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.remove('element-hidden');
    imagePage.classList.add('element-hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const openImagesPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.add('btn-selected');

    homePage.classList.add('element-hidden');
    bannersPage.classList.add('element-hidden');
    followersPage.classList.add('element-hidden');
    imagePage.classList.remove('element-hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
