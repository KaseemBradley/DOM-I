const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NAV 

const link1 = document.querySelector('nav a');
link1.append(siteContent.nav["nav-item-1"]);

const link2 = document.querySelector('nav a:nth-of-type(2)');
link2.append(siteContent.nav["nav-item-2"]);

const link3 = document.querySelector('nav a:nth-of-type(3)');
link3.append(siteContent.nav["nav-item-3"]);

const link4 = document.querySelector('nav a:nth-of-type(4)');
link4.append(siteContent.nav["nav-item-4"]);

const link5 = document.querySelector('nav a:nth-of-type(5)');
link5.append(siteContent.nav["nav-item-5"]);

const link6 = document.querySelector('nav a:nth-of-type(6)');
link6.append(siteContent.nav["nav-item-6"]);

//adding two new elements to nav
const link = document.createElement('a')
link.innerText = "Hello";
document.querySelector('nav').appendChild(link)

const newLink2 = document.createElement('a')
newLink2.innerText = "World";
document.querySelector('nav').prepend(newLink2);


//Changing color of nav text to green
const allLinks = document.querySelectorAll('nav a');
allLinks.forEach( item => {
  item.style.color = "green"
})

// End OF Nav

//Top Section 

//H1
const headline = document.querySelector('h1');
headline.innerText = siteContent.cta['h1'];

//Button
const button = document.querySelector('.cta-text button');
button.innerText = siteContent.cta['button'];

//header Img
const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent.cta["img-src"]);

//End Of Top Section 


//Main Section 

//features 
const features = document.querySelector('.top-content .text-content h4');
features.innerText = siteContent["main-content"]["features-h4"];

const featuresText = document.querySelector('.top-content .text-content p');
featuresText.innerText = siteContent["main-content"]["features-content"];

//About 

const aboutHeader = document.querySelector('.text-content:nth-of-type(2) h4');
aboutHeader.innerText = siteContent["main-content"]["about-h4"];

const aboutText = document.querySelector('.text-content:nth-of-type(2) p');
aboutText.innerText = siteContent["main-content"]["about-content"]

//middle image 

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//services 

const servicesHeader = document.querySelector('.bottom-content .text-content h4')
servicesHeader.innerText = siteContent["main-content"]["services-h4"];

const servicestext = document.querySelector('.bottom-content .text-content p');
servicestext.innerText = siteContent["main-content"]["services-content"];

// Product

const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHeader.innerText = siteContent["main-content"]["product-h4"];

const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productText.innerText = siteContent["main-content"]["product-content"];

//Vision 

const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionHeader.innerText = siteContent["main-content"]["vision-h4"];

const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionText.innerText = siteContent["main-content"]["vision-content"];

//End Of Main Section


//contact Section 

const contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent.contact["contact-h4"];

const contactAddress = document.querySelector('.contact p');
contactAddress.innerText = siteContent.contact.address;

const contactNumber = document.querySelector('.contact p:nth-of-type(2)');
contactNumber.innerText = siteContent.contact.phone;

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.innerText = siteContent.contact.email

const copyright = document.querySelector('footer p');
copyright.innerText = siteContent.footer.copyright


