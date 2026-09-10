/* =========================================================
   NOCTAIL
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [

  {

    id:
      "moon-cat-tshirt",

    category:
      "APPAREL",

    name:
      "MOON CAT T-SHIRT",

    price:
      "COMING SOON",

    image:
      "",

    symbol:
      "☾",

    links: {

      base:
        "",

      booth:
        "",

      suzuri:
        ""

    }

  },


  {

    id:
      "quiet-night-tshirt",

    category:
      "APPAREL",

    name:
      "QUIET NIGHT T-SHIRT",

    price:
      "COMING SOON",

    image:
      "",

    symbol:
      "✦",

    links: {

      base:
        "",

      booth:
        "",

      suzuri:
        ""

    }

  },


  {

    id:
      "noctail-wallpaper",

    category:
      "DIGITAL",

    name:
      "NOCTAIL WALLPAPER",

    price:
      "COMING SOON",

    image:
      "",

    symbol:
      "☽",

    links: {

      base:
        "",

      booth:
        "",

      suzuri:
        ""

    }

  }

];


const STORE_NAMES = {

  base:
    "BASE",

  booth:
    "BOOTH",

  suzuri:
    "SUZURI"

};


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
   PRODUCT RENDER
========================================================= */

const productGrid =
  document.getElementById(
    "productGrid"
  );


function createProductCard(
  product
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "product-card reveal";


  /* visual */

  const visual =
    document.createElement(
      "div"
    );


  visual.className =
    "product-visual";


  if (
    product.image
  ) {

    const image =
      document.createElement(
        "img"
      );


    image.src =
      product.image;


    image.alt =
      product.name;


    image.loading =
      "lazy";


    visual.appendChild(
      image
    );

  } else {

    visual.innerHTML =
      `

        <div class="product-placeholder">

          <span>
            ${product.symbol || "✦"}
          </span>

          <small>
            NOCTAIL
          </small>

        </div>

      `;

  }


  /* info */

  const info =
    document.createElement(
      "div"
    );


  info.className =
    "product-info";


  const category =
    document.createElement(
      "p"
    );


  category.className =
    "product-category";


  category.textContent =
    product.category;


  const title =
    document.createElement(
      "h3"
    );


  title.className =
    "product-name";


  title.textContent =
    product.name;


  const price =
    document.createElement(
      "p"
    );


  price.className =
    "product-price";


  price.textContent =
    product.price;


  const links =
    document.createElement(
      "div"
    );


  links.className =
    "product-links";


  Object
    .entries(
      product.links
    )
    .forEach(
      (
        [
          store,
          url
        ]
      ) => {

        if (
          !url
        ) {
          return;
        }


        const button =
          document.createElement(
            "a"
          );


        button.href =
          url;


        button.target =
          "_blank";


        button.rel =
          "noopener noreferrer";


        button.textContent =
          STORE_NAMES[
            store
          ] || store;


        links.appendChild(
          button
        );

      }
    );


  info.appendChild(
    category
  );


  info.appendChild(
    title
  );


  info.appendChild(
    price
  );


  info.appendChild(
    links
  );


  card.appendChild(
    visual
  );


  card.appendChild(
    info
  );


  return card;

}


function renderProducts() {

  if (
    !productGrid
  ) {
    return;
  }


  productGrid.innerHTML =
    "";


  PRODUCTS.forEach(
    product => {

      productGrid.appendChild(
        createProductCard(
          product
        )
      );

    }
  );

}


renderProducts();


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
        heroFrame.getBoundingClientRect();


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
            card.getBoundingClientRect();


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


/* =========================================================
   INITIAL
========================================================= */

updateProgress();
