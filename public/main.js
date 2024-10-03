
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


    if(navToggle)
    {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }



/* Ascunde meniu telefon*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))



/*  Blur Header  */
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll' , blurHeader)



/*    */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)


/* EMAIL JS */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_y53hzvf','template_scl2k2d','#contact-form','ZVc46u-E3JCTNS5LB')
    .then(() =>{
        //Arata mesajul trimis
        contactMessage.textContent = 'Mesajul s-a trimis cu succes!'

        //Stergem mesajul
        setTimeout(() =>{
            contactMessage.textContent='';
        },5000)

        //Stergem campurile completate
        contactForm.reset();
    }, () =>{
        contactMessage.textContent = 'Mesajul nu a fost'
    })
}

contactForm.addEventListener('submit' , sendEmail)


/* Afisare scroll up */
const scrollUp = () =>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Link-uri active */
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId +']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
        {
            sectionsClass.classList.add('active-link')
        }
        else
        {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll' , scrollActive)