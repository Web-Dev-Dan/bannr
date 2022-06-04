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
}

const openBannersPage = () => {
    bannersPageBtn.classList.add('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');
}

const openFollowersPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.add('btn-selected');
    imagesPageBtn.classList.remove('btn-selected');
}

const openImagesPage = () => {
    bannersPageBtn.classList.remove('btn-selected');
    followersPageBtn.classList.remove('btn-selected');
    imagesPageBtn.classList.add('btn-selected');
}

homePageBtn.addEventListener('click', openHomePage);
bannersPageBtn.addEventListener('click', openBannersPage);
followersPageBtn.addEventListener('click', openFollowersPage);
imagesPageBtn.addEventListener('click', openImagesPage);

makeBannerBtn.addEventListener('click', openBannersPage);
celebrateFollowersBtn.addEventListener('click', openFollowersPage);
makeImageBtn.addEventListener('click', openImagesPage);

// btn-selected (add to navigation buttons to display current page)