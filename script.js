// 모바일용 플로팅 메뉴
function toggleMenu() {
  const menu = document.getElementById('floatingMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

const images = [
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png',
  'image5.png',
];
let currentIndex = 0; // 현재 인덱스 (복제된 첫 이미지를 기준으로 1부터 시작)

const hereGallery = document.getElementById('here-gallery');
hereGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = hereGallery.scrollLeft;
  hereGallery.scrollLeft += e.deltaY;

  if (hereGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});

const personalColorGallery = document.getElementById('personal-color-system');
personalColorGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = personalColorGallery.scrollLeft;
  personalColorGallery.scrollLeft += e.deltaY;

  if (personalColorGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});

const imageBrandingGallery = document.getElementById('image-branding-gallery');
imageBrandingGallery.addEventListener('wheel', (e) => {
  e.preventDefault();

  const tmp = imageBrandingGallery.scrollLeft;
  imageBrandingGallery.scrollLeft += e.deltaY;

  if (imageBrandingGallery.scrollLeft === tmp) {
    window.scrollBy({ top: e.deltaY });
  }
});

const moreReview = document.getElementById('more-review');
const reviewReadMoreBtn = document.getElementById('review-read-more');
reviewReadMoreBtn.addEventListener('click', () => {
  moreReview.style.display = 'flex';
});
