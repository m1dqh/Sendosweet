const nav = document.querySelector('.nav');
const clipboardVal = document.querySelector('.clipboard-input');
const clipboardBtn = document.querySelector('.clipboard-btn');
const modal = document.querySelector('.clipboard-popup');
const aboutPara = document.querySelectorAll('.main__paragraph');

const clipboard = {
    copyData() {
        clipboardBtn.addEventListener('click', () => {
            clipboardVal.select();
            document.execCommand('copy');
        })
    },
    popup() {
        clipboardBtn.addEventListener('click', () => {
            modal.textContent = `Copied ${clipboardVal.value} to Clipboard`
            modal.classList.toggle('popup');
            const timer = setTimeout(() => {
                modal.classList.remove('popup');
            }, 1500);

        })
    }
}

clipboard.copyData();
clipboard.popup();


document.addEventListener('scroll', e => {
    if (scrollY > 350) {
        nav.classList.add('light-nav');
    } else {
        nav.classList.remove('light-nav');
    }

    const footer = document.getElementById('contact');
    const io = new IntersectionObserver(entry => {
        if (entry[0].isIntersecting) {
            nav.classList.remove('light-nav');
        }
    }, {
        threshold: .9,
    });

    io.observe(footer)
})

const aboutPages = {
    timer() {

        const circles = document.querySelectorAll('.circle');

        let counter = 0;
        setInterval(() => {


            aboutPara.forEach(para => {
                console.log(para.clientWidth);
            })
            circles.forEach(circle => {
                circle.classList.remove('active');
            })
            if (counter > 2) {
                counter = 0;
            }

            circles[counter].classList.add('active');
            counter++
        }, 2000)
    }
}

aboutPages.timer();

// TODO: Need to fix this.

const carouselContainer = document.querySelector('.carousel__container');
carouselContainer.animate([
    { transform: `translateX(-${aboutPara[0].clientWidth * (aboutPara.length - 1)}px)` }
], {
    duration: 1000,
    fill: 'forwards',
    delay: 2000,
})
