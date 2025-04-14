
//header start here//

const hds = document.querySelectorAll('.hd');
const controls = document.querySelectorAll('.control');
const heading = document.getElementById('header-heading');
const paragraph = document.getElementById('header-para');
const scrollToTopButton = document.getElementById('scroll-to-top');

let activeSlide = 0;
// Change Slides Function
function changeSlides() {
  hds.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === activeSlide);
    controls[idx].classList.toggle('active', idx === activeSlide);
  });
  // Update heading and paragraph content
  const newHeading = hds[activeSlide].dataset.heading;
  const newPara = hds[activeSlide].dataset.para;
  heading.textContent = newHeading;
  paragraph.textContent = newPara;
  activeSlide = (activeSlide + 1) % hds.length;
}
// Automatic Slider Interval
let interval = setInterval(changeSlides, 4000);

// Control Click Events
controls.forEach((control, idx) => {
  control.addEventListener('click', () => {
    activeSlide = idx;
    changeSlides();
    clearInterval(interval);
    interval = setInterval(changeSlides, 4000);
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

// Scroll-to-Top Button Click Event
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  


// Define the images for each cuisine
const cuisineImages = {
  chinese: [
    "Img/chn_food_1.jpg",
    "Img/chn_food_2.jpg",
    "Img/chn_food_3.jpg",
    "Img/chn_food_4.jpg",
  ],
  italian: [
    "Img/ita_food_1.jpg",
    "Img/ita_food_2.jpg",
    "Img/ita_food_3.jpg",
    "Img/ita_food_4.jpg",
  ],
  japanese: [
    "Img/ja_food_1.jpg",
    "Img/ja_food-2.jpg",
    "Img/ja_food_3.jpg",
    "Img/ja_food_4.jpg",
  ],
  cocktail: [
    "Img/cok_drink_1.png",
    "Img/cok_drink_2.png",
    "Img/cok_drink_3.png",
    "Img/cok_drink_4.png",
  ],
  wine: [
    "Img/wine_1.jpg",
    "Img/wine_2.jpg",
    "Img/wine_3.jpg",
    "Img/wine_4.jpg",
  ],
};

// Function to display images on hover
function displayImages(section, cuisine) {
  const images = cuisineImages[cuisine];
  const imagesContainer = section.querySelector(".images-container");
  imagesContainer.innerHTML = ""; // Clear any existing images

  // Create containers for left and right images
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");

  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");

  // Left images
  const leftArchImage = document.createElement("img");
  leftArchImage.src = images[0];
  leftArchImage.alt = `${cuisine} arch 1`;
  leftArchImage.classList.add("arch-image");

  const leftRectangleImage = document.createElement("img");
  leftRectangleImage.src = images[1];
  leftRectangleImage.alt = `${cuisine} rectangle 1`;
  leftRectangleImage.classList.add("rectangle-image");

  leftContainer.appendChild(leftArchImage);
  leftContainer.appendChild(leftRectangleImage);

  // Right images
  const rightArchImage = document.createElement("img");
  rightArchImage.src = images[2];
  rightArchImage.alt = `${cuisine} arch 2`;
  rightArchImage.classList.add("arch-image");

  const rightRectangleImage = document.createElement("img");
  rightRectangleImage.src = images[3];
  rightRectangleImage.alt = `${cuisine} rectangle 2`;
  rightRectangleImage.classList.add("rectangle-image");

  rightContainer.appendChild(rightArchImage);
  rightContainer.appendChild(rightRectangleImage);

  // Append containers to images container
  imagesContainer.appendChild(leftContainer);
  imagesContainer.appendChild(rightContainer);

  // Trigger fade-in effect
  setTimeout(() => {
    imagesContainer.querySelectorAll("img").forEach((img) => {
      img.style.opacity = "1";
    });
  }, 50);
}

// Attach hover event listeners to each menu section
document.querySelectorAll(".menu-section").forEach((section) => {
  section.addEventListener("mouseenter", () => {
    const cuisine = section.dataset.cuisine; // Get cuisine type from data attribute
    displayImages(section, cuisine);
  });

  section.addEventListener("mouseleave", () => {
    const imagesContainer = section.querySelector(".images-container");
    imagesContainer.innerHTML = ""; // Clear images on hover out
  });
});




const slider = document.querySelector('.slider');

// Pause the animation on hover
slider.addEventListener('mouseenter', () => {
  slider.style.animationPlayState = 'paused';
});

// Resume the animation when hover ends
slider.addEventListener('mouseleave', () => {
  slider.style.animationPlayState = 'running';
});
