const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
}));

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	/// add three more
	{
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, Febuary, 10",
        area: 57504,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-lds-759405-wallpaper.jpg"
    },
	{
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
    },
	{
        templeName: "Snowflake Arizona",
        location: "Snowflake, Arizona, United States",
        dedicated: "2002, March, 3",
        area: 18621,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-46560-main.jpg"
    },
  ];

  function createTempleCard(templesToDisplay) {
	console.log(templesToDisplay); 
   const gallery = document.querySelector(".gallery");
   gallery.innerHTML = "";
   
   templesToDisplay.forEach(temple => {
		 let templeCard = document.createElement('section');
		 let templeName = document.createElement('h2');
		 let templeLocation = document.createElement('p');
		 let templeDedicated = document.createElement('p');
		 let templeArea = document.createElement('p');
		 let templeImage = document.createElement('img');
 
		 templeName.textContent = temple.templeName;
		 templeLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		 templeDedicated.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		 templeArea.innerHTML = `<span class="label">Area:</span> ${temple.area} sq. ft`;
		 templeImage.setAttribute('src', temple.imageUrl);
		 templeImage.setAttribute('alt', `${temple.templeName} Temple`);
		 templeImage.setAttribute('width', '400');
		 templeImage.setAttribute('height', '250');
		 templeImage.setAttribute('loading', 'lazy');
 
		 templeCard.appendChild(templeName);
		 templeCard.appendChild(templeLocation);
		 templeCard.appendChild(templeDedicated);
		 templeCard.appendChild(templeArea);
		 templeCard.appendChild(templeImage);
 
		 document.querySelector(".gallery").appendChild(templeCard);
 });
 }
 
 function filterTemples(category) {
   let filteredTemples;
   switch (category) {
	 case "old":
	   filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
	   break;
	 case "new":
	   filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
	   break;
	 case "large":
	   filteredTemples = temples.filter(temple => temple.area > 90000);
	   break;
	 case "small":
	   filteredTemples = temples.filter(temple => temple.area < 10000);
	   break;
	   case "all":
	   filteredTemples = temples;
	   break;
	 default:
	   filteredTemples = temples;
	   break;
   }
 
   createTempleCard(filteredTemples);
 }
 
 document.addEventListener("DOMContentLoaded", () => {
   createTempleCard(temples);
 });
 
 document.querySelector("#old").addEventListener("click", function(event) {
   event.preventDefault();
   setActiveLink(this);
   filterTemples("old");
 });
 
 document.querySelector("#new").addEventListener("click", function(event) {
   event.preventDefault();
   setActiveLink(this);
   filterTemples("new");
 });
 
 document.querySelector("#large").addEventListener("click", function(event) {
   event.preventDefault();
   setActiveLink(this);
   filterTemples("large");
 });
 
 document.querySelector("#small").addEventListener("click", function(event) {
   event.preventDefault();
   setActiveLink(this);
   filterTemples("small");
 });
 
 document.querySelector("#home").addEventListener("click", function(event) {
   event.preventDefault();
   setActiveLink(this);
   filterTemples("all");
 });
 
 function setActiveLink(selectedLink) {
   document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
   selectedLink.classList.add("active");
 }