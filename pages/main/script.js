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
        overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.add('hamburger__active');
        menu.classList.add('navbar__active');
        burger.classList.add('burger__active');
        body.style.overflow = 'hidden';
        overlay.style.display = 'block';
    });

    burger.addEventListener('click', () => {
        hamburger.classList.remove('hamburger__active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    })

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger__active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    })

    menuItem.addEventListener('click', () => {
        hamburger.classList.remove('hamburger__active');
        menu.classList.remove('navbar__active');
        burger.classList.remove('burger__active');
        body.style.overflow = 'visible';
        overlay.style.display = 'none';
    })

})

let slideWidth;
let dogsSlider = document.querySelector('.dogs-slider');
let sliderArrowLeft = document.querySelector('.our-friends__button_left');
let sliderArrowRight = document.querySelector('.our-friends__button_right');
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

let slidesItems = document.querySelectorAll('.dogs-slider__item');
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

function widthSlide() {
    let clientWidth = document.documentElement.clientWidth;
    slideWidth = document.querySelectorAll('.dogs-slider__item')[0];
    let sliderWidth = parseInt(getComputedStyle(slideWidth).marginRight) + slideWidth.offsetWidth;
    if (clientWidth > 768 && clientWidth < 1280) {
        return sliderWidth * 2;
    }
    if (clientWidth > 1280) return sliderWidth * 3;
    return sliderWidth;
}

let imgSrc = '',
    petType = '',
    petName = '';

let randomCard;
let randomCardId = [];

function randomElem() {
    if (randomCardId.length === 6) {
        randomCardId.splice(0, 3);
    }
    let randomIndex;
    function ran() {
        randomIndex = Math.floor(0 + Math.random() * (petsArray.length + 1 - 1));
    }
    ran();
    function random() {
        for (let i = 0; i < randomCardId.length; i++) {
            if (randomIndex === randomCardId[i]) {
                ran();
                i = 0;
            }
        }
        randomCard = petsArray[randomIndex];
        randomCardId.push(randomIndex);
    }
    random();


    imgSrc = randomCard.img;
    petType = randomCard.type;
    petName = randomCard.name;
}



let offset = 1;

function draw(leftSlide) {
    let clonedNodeAppend = document.querySelector('.dogs-slider').cloneNode(true);
    let img = clonedNodeAppend.querySelectorAll('.dogs-slider__img');
    let name = clonedNodeAppend.querySelectorAll('.dogs-slider__name');
    for (let i = 0; i < img.length; i++) {
        randomElem();
        img[i].src = imgSrc;
        img[i].alt = petType;
        name[i].textContent = petName;
    }

    clonedNodeAppend.style.left = `${offset * widthSlide()}px`;

    if (leftSlide == true) {
        clonedNodeAppend.style.left = `${-offset * widthSlide()}px`;
        document.querySelector('.carousel__wrapper').prepend(clonedNodeAppend);
    } else {
        document.querySelector('.carousel__wrapper').appendChild(clonedNodeAppend);
    }
    console.log(randomCardId);
}

draw(); draw(true);

let count = '---';

function left(e) {
    sliderArrowLeft.removeEventListener('click', left);
    sliderArrowRight.removeEventListener('click', right);
    let slides = document.querySelectorAll('.dogs-slider');

    if (count == '---') {
        slides[2].remove();
        count = 'right';
    }
    if (count == 'left') {
        slides[1].remove();
        draw(true);
        count = 'right';
    }

    let offset = 1;
    slides = document.querySelectorAll('.dogs-slider');
    for (let i = 1; i >= 0; i--) {
        slides[i].style.left = offset * widthSlide() + 'px';
        offset--;
    }

    setTimeout(() => {
        slides[1].remove();
        draw(true);
        let slidesItems = document.querySelectorAll('.dogs-slider__item');
        for (let slideItem of slidesItems) {
            slideItem.addEventListener('click', popUpShow);
        }
        sliderArrowLeft.addEventListener('click', left);
        sliderArrowRight.addEventListener('click', right);
    }, 1000)
}

function right(e) {
    sliderArrowRight.removeEventListener('click', right);
    sliderArrowLeft.removeEventListener('click', left);
    let slides = document.querySelectorAll('.dogs-slider');

    if (count == '---') {
        slides[0].remove();
        count = 'left';
    }

    if (count == 'right') {
        slides[0].remove();
        draw();
        count = 'left';
    }

    let offset = 0;
    slides = document.querySelectorAll('.dogs-slider');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = offset * widthSlide() - widthSlide() + 'px';
        offset++;
    }
    setTimeout(() => {
        slides[0].remove();
        draw();
        let slidesItems = document.querySelectorAll('.dogs-slider__item');
        for (let slideItem of slidesItems) {
            slideItem.addEventListener('click', popUpShow);
        }
        sliderArrowRight.addEventListener('click', right);
        sliderArrowLeft.addEventListener('click', left);
    }, 1000)
}

sliderArrowLeft.addEventListener('click', left);
sliderArrowRight.addEventListener('click', right);
