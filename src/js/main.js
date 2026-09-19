import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// 1. Disclaimer link: park name + link to the official site
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// 2. Page title
document.title = parkData.fullName;

// 3. Hero image: first image in the data
const heroImage = document.querySelector(".hero-banner__image");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

// 4. Hero name, designation, and states
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

document.querySelector(".hero-banner__content").innerHTML =
  parkInfoTemplate(parkData);