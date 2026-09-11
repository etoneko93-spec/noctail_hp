/* =========================================================
   NOCTAIL
========================================================= */


/* =========================================================
   ONLINE STORE
========================================================= */

const SHOP_LINKS = {

  booth: {

    name:
      "BOOTH",

    url:
      "https://noctail.booth.pm/"

  },


  suzuri: {

    name:
      "SUZURI",

    url:
      "https://suzuri.jp/NOCTAIL_shop"

  },


  tshirtTrinity: {

    name:
      "Tシャツトリニティ",

    url:
      "https://www.ttrinity.jp/shop/noctail/"

  }

};


/* =========================================================
   INFORMATION / NEWS
========================================================= */

const NEWS = [

  {

    date:
      "2026.09.12",

    category:
      "SITE",

    title:
      "NOCTAIL公式サイトを更新しました。",

    url:
      ""

  },


  {

    date:
      "2026.09",

    category:
      "SHOP",

    title:
      "BOOTH・SUZURIにてNOCTAILアイテムを販売中です。",

    url:
      ""

  },


  {

    date:
      "2026.09",

    category:
      "SHOP",

    title:
      "Tシャツトリニティでの販売を開始しました。",

    url:
      "https://www.ttrinity.jp/shop/noctail/"

  }

];


/* =========================================================
   LOADING
========================================================= */

const loadingScreen =
  document.getElementById(
    "loadingScreen"
  );


window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        if (
          loadingScreen
        ) {

          loadingScreen
            .classList
            .add(
              "hide"
            );

        }

      },
      650
    );

  }
);


/* =========================================================
   STAR FIELD
========================================================= */

const starField =
  document.getElementById(
    "starField"
  );


function createStars() {

  if (
    !starField
  ) {
    return;
  }


  const amount =
    window.innerWidth < 700
      ? 35
      : 70;


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const star =
      document.createElement(
        "span"
      );


    star.className =
      "star";


    const size =
      Math.random() *
      1.8 +
      .5;


    star.style.width =
      `${size}px`;


    star.style.height =
      `${size}px`;


    star.style.left =
      `${Math.random() * 100}%`;


    star.style.top =
      `${Math.random() * 100}%`;


    star.style.setProperty(
      "--duration",
      `${3 + Math.random() * 6}s`
    );


    star.style.setProperty(
      "--delay",
      `${Math.random() * 5}s`
    );


    starField.appendChild(
      star
    );

  }

}


createStars();


/* =========================================================
   NEWS RENDER
========================================================= */

const newsList =
  document.getElementById(
    "newsList"
  );


function createNewsItem(
  news
) {

  const item =
    document.createElement(
      news.url
        ? "a"
        : "div"
    );


  item.className =
    "news-item reveal";


  if (
    news.url
  ) {

    item.href =
      news.url;


    item.target =
      "_blank";


    item.rel =
      "noopener noreferrer";

  }


  const date =
    document.createElement(
      "time"
    );


  date.className =
    "news-date";


  date.textContent =
    news.date;


  const category =
    document.createElement(
      "span"
    );


  category.className =
    "news-category";


  category.textContent =
    news.category;


  const title =
    document.createElement(
      "p"
    );


  title.className =
    "news-title";


  title.textContent =
    news.title;


  const arrow =
    document.createElement(
      "span"
    );


  arrow.className =
    "news-arrow";


  arrow.textContent =
    news.url
      ? "↗"
      : "✦";


  item.appendChild(
    date
  );


  item.appendChild(
    category
  );


  item.appendChild(
    title
  );


  item.appendChild(
    arrow
  );


  return item;

}


function renderNews() {

  if (
    !newsList
  ) {
    return;
  }


  newsList.innerHTML =
    "";


  NEWS.forEach(
    news => {

      newsList.appendChild(
        createNewsItem(
          news
        )
      );

    }
  );

}


renderNews();


/* =========================================================
   SHOP LINKS
========================================================= */

function setupShopLinks() {

  const links =
    document.querySelectorAll(
      "[data-shop]"
    );


  links.forEach(
    link => {

      const key =
        link.dataset.shop;


      const shop =
        SHOP_LINKS[
          key
        ];


      if (
        !shop
      ) {
        return;
      }


      if (
        shop.url
      ) {

        link.href =
          shop.url;


        link.target =
          "_blank";


        link.rel =
          "noopener noreferrer";


        link.classList.remove(
          "store-pending"
        );


        link.classList.remove(
          "store-link-pending"
        );


        const action =
          link.querySelector(
            ".store-action"
          );


        if (
          action
        ) {

          action.textContent =
            "VISIT STORE";

        }

      } else {

        link.href =
          "#";


        if (
          link.classList.contains(
            "store-card"
          )
        ) {

          link.classList.add(
            "store-pending"
          );

        } else {

          link.classList.add(
            "store-link-pending"
          );

        }


        const action =
          link.querySelector(
            ".store-action"
          );


        if (
          action
        ) {

          action.textContent =
            "COMING SOON";

        }


        link.addEventListener(
          "click",
          event => {

            event.preventDefault();

          }
        );

      }

    }
  );

}


setupShopLinks();


/* =========================================================
   HEADER
========================================================= */

const header =
  document.getElementById(
    "header"
  );


function updateHeader() {

  if (
    !header
  ) {
    return;
  }


  if (
    window.scrollY > 30
  ) {

    header
      .classList
      .add(
        "scrolled"
      );

  } else {

    header
      .classList
      .remove(
        "scrolled"
      );

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive:
      true
  }
);


updateHeader();


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
  document.getElementById(
    "scrollProgress"
  );


function updateProgress() {

  if (
    !scrollProgress
  ) {
    return;
  }


  const scrollTop =
    window.scrollY;


  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;


  const progress =
    pageHeight > 0
      ? (
          scrollTop /
          pageHeight
        ) * 100
      : 0;


  scrollProgress.style.width =
    `${progress}%`;

}


window.addEventListener(
  "scroll",
  updateProgress,
  {
    passive:
      true
  }
);


updateProgress();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );


const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );


function openMenu() {

  if (
    !menuButton ||
    !mobileMenu
  ) {
    return;
  }


  menuButton
    .classList
    .add(
      "active"
    );


  mobileMenu
    .classList
    .add(
      "active"
    );


  document.body
    .classList
    .add(
      "menu-open"
    );


  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

}


function closeMenu() {

  if (
    !menuButton ||
    !mobileMenu
  ) {
    return;
  }


  menuButton
    .classList
    .remove(
      "active"
    );


  mobileMenu
    .classList
    .remove(
      "active"
    );


  document.body
    .classList
    .remove(
      "menu-open"
    );


  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

}


function toggleMenu() {

  if (
    mobileMenu
      ?.classList
      .contains(
        "active"
      )
  ) {

    closeMenu();

  } else {

    openMenu();

  }

}


if (
  menuButton
) {

  menuButton.addEventListener(
    "click",
    toggleMenu
  );

}


if (
  mobileMenu
) {

  mobileMenu
    .querySelectorAll(
      "a"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );

}


/* =========================================================
   REVEAL
========================================================= */

function setupReveal() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    items.forEach(
      item => {

        item
          .classList
          .add(
            "visible"
          );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            const delay =
              Number(
                entry.target.dataset.delay ||
                0
              );


            setTimeout(
              () => {

                entry.target
                  .classList
                  .add(
                    "visible"
                  );

              },
              delay
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },

      {

        threshold:
          .10,

        rootMargin:
          "0px 0px -35px 0px"

      }

    );


  items.forEach(
    item => {

      observer.observe(
        item
      );

    }
  );

}


setupReveal();


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  document.getElementById(
    "cursorGlow"
  );


let mouseX =
  window.innerWidth / 2;


let mouseY =
  window.innerHeight / 2;


let glowX =
  mouseX;


let glowY =
  mouseY;


window.addEventListener(
  "mousemove",
  event => {

    mouseX =
      event.clientX;


    mouseY =
      event.clientY;

  },
  {
    passive:
      true
  }
);


function animateCursor() {

  if (
    cursorGlow
  ) {

    glowX +=
      (
        mouseX -
        glowX
      ) * .08;


    glowY +=
      (
        mouseY -
        glowY
      ) * .08;


    cursorGlow.style.left =
      `${glowX}px`;


    cursorGlow.style.top =
      `${glowY}px`;

  }


  requestAnimationFrame(
    animateCursor
  );

}


animateCursor();


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const heroFrame =
  document.getElementById(
    "heroFrame"
  );


const heroImage =
  document.getElementById(
    "heroImage"
  );


if (
  heroFrame &&
  heroImage &&
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  heroFrame.addEventListener(
    "mousemove",
    event => {

      const rect =
        heroFrame
          .getBoundingClientRect();


      const x =
        (
          event.clientX -
          rect.left
        ) /
        rect.width -
        .5;


      const y =
        (
          event.clientY -
          rect.top
        ) /
        rect.height -
        .5;


      heroImage.style.transform =
        `
          scale(1.02)
          translate(
            ${x * 8}px,
            ${y * 8}px
          )
        `;

    }
  );


  heroFrame.addEventListener(
    "mouseleave",
    () => {

      heroImage.style.transform =
        "scale(1) translate(0,0)";

    }
  );

}


/* =========================================================
   MAGNETIC CARDS
========================================================= */

const magneticCards =
  document.querySelectorAll(
    ".magnetic-card"
  );


if (
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  magneticCards.forEach(
    card => {

      card.addEventListener(
        "mousemove",
        event => {

          const rect =
            card
              .getBoundingClientRect();


          const x =
            (
              event.clientX -
              rect.left
            ) /
            rect.width -
            .5;


          const y =
            (
              event.clientY -
              rect.top
            ) /
            rect.height -
            .5;


          card.style.transform =
            `
              translateY(-8px)
              perspective(900px)
              rotateX(${y * -2.5}deg)
              rotateY(${x * 2.5}deg)
            `;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform =
            "";

        }
      );

    }
  );

}


/* =========================================================
   SMOOTH ANCHOR
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    anchor => {

      anchor.addEventListener(
        "click",
        event => {

          const href =
            anchor.getAttribute(
              "href"
            );


          if (
            !href ||
            href === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              href
            );


          if (
            !target
          ) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView(
            {

              behavior:
                "smooth",

              block:
                "start"

            }
          );

        }
      );

    }
  );


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeMenu();

    }

  }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
  document.getElementById(
    "currentYear"
  );


if (
  currentYear
) {

  currentYear.textContent =
    new Date()
      .getFullYear();

}


/* =========================================================
   INITIAL HERO
========================================================= */

window.addEventListener(
  "load",
  () => {

    document
      .querySelectorAll(
        ".hero .reveal"
      )
      .forEach(
        (
          element,
          index
        ) => {

          setTimeout(
            () => {

              element
                .classList
                .add(
                  "visible"
                );

            },

            350 +
            index * 140

          );

        }
      );

  }
);
