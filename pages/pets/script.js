'use strict'

let petsArray = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-katrine-2.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-katrine-4.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

let body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar'),
        menuItem = document.querySelectorAll('.main-menu__item')[0],
        hamburger = document.querySelector('.hamburger'),
        burger = document.querySelector('.burger'),
        overlay = document.querySelector('.overlay'),
        linkActive = document.querySelector('.main-menu__link_active');

    hamburger.addEventListener('click', () => {
        hamburger.classList.add('hamburger_active');
        menu.classList.add('navbar__active');
        burger.classList.add('burger__active');
        body.style.overflow = 'hidden';
        overlay.style.display = 'block';
    });

    burger.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    })

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    })

    linkActive.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    });

})

let popUp = document.querySelector('.pet');
let overlayPopUp = document.querySelector('.overlay-popUp');
let closePet = document.querySelector('.pet__close');
let petImg = document.querySelector('.pet__img');
let petTitle = document.querySelector('.pet__title');
let petTypes = document.querySelector('.pet__type');
let petBreed = document.querySelector('.pet__breed');
let petDescr = document.querySelector('.pet__descr');
let petAge = document.querySelector('.pet-desr__age span');
let petInoculation = document.querySelector('.pet-desr__inoculation span');
let petDiseases = document.querySelector('.pet-desr__diseases span');
let petParasites = document.querySelector('.pet-desr__parasites span');

function popUpShow(e) {
    let target = e.target;
    let title = target.closest('li').querySelector('img');
    let src = title.getAttribute('src');
    for (let item of petsArray) {
        if (item.img == src) {
            petImg.setAttribute('src', `${src}`);
            petTitle.textContent = item.name;
            petTypes.textContent = item.type;
            petBreed.textContent = item.breed;
            petDescr.textContent = item.description;
            petAge.textContent = item.age;
            petInoculation.textContent = item.inoculations;
            petDiseases.textContent = item.diseases;
            petParasites.textContent = item.diseases;
        }
    }
    body.style.overflow = 'hidden';
    popUp.style.display = 'flex';
    overlayPopUp.style.display = 'block';

}


let slidesItems = document.querySelectorAll('.our-friends__item');
for (let slideItem of slidesItems) {
    slideItem.addEventListener('click', popUpShow);
}

overlayPopUp.addEventListener('click', () => {
    body.style.overflow = 'visible';
    popUp.style.display = 'none';
    overlayPopUp.style.display = 'none';
})

overlayPopUp.addEventListener('mouseenter', () => {
    closePet.style.background = 'red';
})

overlayPopUp.addEventListener('mouseout', () => {
    closePet.style.background = 'none';
})


closePet.addEventListener('click', () => {
    body.style.overflow = 'visible';
    popUp.style.display = 'none';
    overlayPopUp.style.display = 'none';
})

const currentButton = document.querySelector('.our-friends__current'),
    rightButtonOne = document.querySelector('.our-friends__right-two'),
    rightButtonTwo = document.querySelector('.our-friends__right-one'),
    leftButtonOne = document.querySelector('.our-friends__left-one'),
    leftButtonTwo = document.querySelector('.our-friends__left-two'),
    buttonCurrent = document.querySelector('.our-friends__current'),
    ourFriendsItem = document.querySelectorAll('.our-friends__item'),
    overlayItem = document.querySelectorAll('.overlayItem'),
    img = document.querySelectorAll('.our-friends__img'),
    name = document.querySelectorAll('.our-friends__name');



let arrPagination = [];
let count = 0;
let indexPage = 1;
let amountPages;


function randomPagination() {
    let arrIndex = [0, 1, 2, 3, 4, 5, 6, 7];
    return arrIndex.sort((a, b) => Math.random() * 2 - 1);
}


if (document.documentElement.offsetWidth + 17 < 768) {
    for (let i = 0; i < 13; i++) {
        arrPagination.push(randomPagination());
        amountPages = 13;
    }
} else if (document.documentElement.offsetWidth + 17 < 1280) {
    for (let i = 0; i < 8; i++) {
        arrPagination.push(randomPagination());
        amountPages = 8;
    }
} else if (document.documentElement.offsetWidth + 17 > 1280 || document.documentElement.offsetWidth + 17 === 1280) {
    for (let i = 0; i < 6; i++) {
        arrPagination.push(randomPagination());
        amountPages = 6;
    }
}



for (let i = 0; i < img.length; i++) {
    img[i].src = petsArray[arrPagination[0][i]].img;
    name[i].textContent = petsArray[arrPagination[count][i]].name;
}

console.log(arrPagination);

function nextPage() {
    rightButtonOne.removeEventListener('click', nextPage);

    leftButtonTwo.removeAttribute('disabled');
    leftButtonTwo.classList.add('button-active');
    leftButtonOne.removeAttribute('disabled');
    leftButtonOne.classList.add('button-active');

    indexPage++;
    buttonCurrent.textContent = `${indexPage}`;
    count++;

    if (count + 1 === amountPages) {
        rightButtonOne.setAttribute('disabled', 'disabled');
        rightButtonTwo.setAttribute('disabled', 'disabled');
        rightButtonTwo.classList.add('button-nonActive');
        rightButtonOne.classList.add('button-nonActive');
        rightButtonOne.style.cursor = 'default';
        rightButtonTwo.style.cursor = 'default';
    }
    for (let item of overlayItem) {
        item.style.opacity = '1';
        item.style.zIndex = '0';
    }
    setTimeout(() => {
        for (let i = 0; i < img.length; i++) {
            img[i].src = petsArray[arrPagination[count][i]].img;
            name[i].textContent = petsArray[arrPagination[count][i]].name;
        }
    }, 1000)

    setTimeout(() => {
        let slidesItems = document.querySelectorAll('.our-friends__item');
        for (let slideItem of slidesItems) {
            slideItem.addEventListener('click', popUpShow);
        }
        for (let item of overlayItem) {
            item.style.opacity = '0';
            item.style.zIndex = '-1';
        }
        rightButtonOne.addEventListener('click', nextPage);
    }, 1000)
}

function lastPage() {
    rightButtonTwo.removeEventListener('click', lastPage);

    leftButtonTwo.removeAttribute('disabled');
    leftButtonTwo.classList.add('button-active');
    leftButtonOne.removeAttribute('disabled');
    leftButtonOne.classList.add('button-active');
    rightButtonOne.style.cursor = 'default';
    rightButtonTwo.style.cursor = 'default';

    count = amountPages - 1;

    indexPage = amountPages;
    buttonCurrent.textContent = `${indexPage}`;

    rightButtonOne.setAttribute('disabled', 'disabled');
    rightButtonOne.classList.add('button-nonActive');
    rightButtonTwo.setAttribute('disabled', 'disabled');
    rightButtonTwo.classList.add('button-nonActive');

    for (let item of overlayItem) {
        item.style.opacity = '1';
        item.style.zIndex = '0';
    }
    setTimeout(() => {
        for (let i = 0; i < img.length; i++) {
            img[i].src = petsArray[arrPagination[count][i]].img;
            name[i].textContent = petsArray[arrPagination[count][i]].name;
        }
    }, 1000)


    setTimeout(() => {
        for (let item of overlayItem) {
            item.style.opacity = '0';
            item.style.zIndex = '-1';
        }
        rightButtonTwo.addEventListener('click', lastPage);
    }, 1000)
}


function prevPage() {
    leftButtonOne.removeEventListener('click', prevPage);

    leftButtonTwo.removeAttribute('disabled');
    leftButtonTwo.classList.add('button-active');
    leftButtonOne.removeAttribute('disabled');
    leftButtonOne.classList.add('button-active');
    rightButtonOne.style.cursor = 'pointer';
    rightButtonTwo.style.cursor = 'pointer';

    indexPage--;
    buttonCurrent.textContent = `${indexPage}`;
    count--;
    if (count - 1 === -1) {
        leftButtonOne.setAttribute('disabled', 'disabled');
        leftButtonTwo.setAttribute('disabled', 'disabled');
        leftButtonOne.classList.remove('button-active');
        leftButtonTwo.classList.remove('button-active');
        rightButtonOne.removeAttribute('disabled');
        rightButtonTwo.removeAttribute('disabled');
        rightButtonOne.classList.remove('button-nonActive');
        rightButtonTwo.classList.remove('button-nonActive');
    }
    for (let item of overlayItem) {
        item.style.opacity = '1';
        item.style.zIndex = '0';
    }
    console.log(count);
    setTimeout(() => {
        for (let i = 0; i < img.length; i++) {
            img[i].src = petsArray[arrPagination[count][i]].img;
            name[i].textContent = petsArray[arrPagination[count][i]].name;
        }
    }, 1000)


    setTimeout(() => {
        for (let item of overlayItem) {
            item.style.opacity = '0';
            item.style.zIndex = '-1';
        }
        leftButtonOne.addEventListener('click', prevPage);
    }, 1000)
}


function firstPage() {
    leftButtonTwo.removeEventListener('click', firstPage);

    rightButtonOne.removeAttribute('disabled');
    rightButtonTwo.removeAttribute('disabled');
    rightButtonTwo.classList.remove('button-nonActive');
    rightButtonOne.classList.remove('button-nonActive');
    rightButtonOne.style.cursor = 'pointer';
    rightButtonTwo.style.cursor = 'pointer';

    count = 0

    indexPage = 1;
    buttonCurrent.textContent = `${indexPage}`;

    leftButtonTwo.setAttribute('disabled', 'disabled');
    leftButtonTwo.classList.remove('button-active');
    leftButtonOne.setAttribute('disabled', 'disabled');
    leftButtonOne.classList.remove('button-active');

    for (let item of overlayItem) {
        item.style.opacity = '1';
        item.style.zIndex = '0';
    }
    setTimeout(() => {
        for (let i = 0; i < img.length; i++) {
            img[i].src = petsArray[arrPagination[count][i]].img;
            name[i].textContent = petsArray[arrPagination[count][i]].name;
        }
    }, 1000)


    setTimeout(() => {
        for (let item of overlayItem) {
            item.style.opacity = '0';
            item.style.zIndex = '-1';
        }
        leftButtonTwo.addEventListener('click', firstPage);
    }, 1000)
}

rightButtonOne.addEventListener('click', nextPage);
rightButtonTwo.addEventListener('click', lastPage);
leftButtonTwo.addEventListener('click', firstPage);
leftButtonOne.addEventListener('click', prevPage);
