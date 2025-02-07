// 모바일용 플로팅 메뉴
function toggleMenu() {
  const menu = document.getElementById('floatingMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

const hereGallery = document.getElementById('here-gallery');
hereGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = hereGallery.scrollLeft;
  hereGallery.scrollLeft += e.deltaY;

  if (hereGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});
setInterval(() => {
  const tmp = hereGallery.scrollLeft;
  hereGallery.scrollLeft += 1;
  if (hereGallery.scrollLeft === tmp) hereGallery.scrollLeft = 0;
}, 10);

const personalColorGallery = document.getElementById('personal-color-system');
personalColorGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = personalColorGallery.scrollLeft;
  personalColorGallery.scrollLeft += e.deltaY;

  if (personalColorGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});
setInterval(() => {
  const tmp = personalColorGallery.scrollLeft;
  personalColorGallery.scrollLeft += 1;
  if (personalColorGallery.scrollLeft === tmp)
    personalColorGallery.scrollLeft = 0;
}, 10);

const imageBrandingGallery = document.getElementById('image-branding-gallery');
imageBrandingGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = imageBrandingGallery.scrollLeft;
  imageBrandingGallery.scrollLeft += e.deltaY;

  if (imageBrandingGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});
setInterval(() => {
  const tmp = imageBrandingGallery.scrollLeft;
  imageBrandingGallery.scrollLeft += 1;
  if (imageBrandingGallery.scrollLeft === tmp)
    imageBrandingGallery.scrollLeft = 0;
}, 10);

const moreReview = document.getElementById('more-review');
const reviewReadMoreBtn = document.getElementById('review-read-more');
reviewReadMoreBtn.addEventListener('click', () => {
  moreReview.style.display = 'flex';
});
