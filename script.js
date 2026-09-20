"use strict";

/* =========================================================
   APSARA BEAUTY ATELIER
   PUBLIC WEBSITE
   =========================================================

   DESIGN:
   Original Apsara website design preserved.

   DATABASE:
   Supabase is the source of salon-specific information.

   SECURITY:
   Publishable browser key only.
   Never put service-role keys in this file.

   IMPORTANT:
   Website UI initializes independently from Supabase.
   A database/network failure must never destroy navigation,
   animations, pages or the visual design.
========================================================= */


/* =========================================================
   SUPABASE CONNECTION
========================================================= */

const SUPABASE_URL =
  "https://xswwxebfmnhfsczhnuxe.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_PNtKfSQtEnEMtYf9kQ8CdQ_YRFhT2kN";

const SALON_CODE =
  "salon-01";


let db = null;


/*
  Safe initialization.

  The old version could stop the entire website if the
  Supabase CDN was unavailable.

  This version does not.
*/

if (
  window.supabase &&
  typeof window.supabase.createClient === "function"
) {

  db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

} else {

  console.error(
    "Supabase client unavailable. " +
    "Website will continue using its built-in fallback content."
  );

}



/* =========================================================
   FALLBACK WHATSAPP
========================================================= */

let SALON_WHATSAPP =
  "https://wa.me/919999999999";



/* =========================================================
   SERVICE DATA
   ORIGINAL DESIGN DATA / FALLBACK
========================================================= */

const SERVICE_DATA = [

  {
    number: "01",

    name: "Hair",

    description:
      "Thoughtful cuts, colour and care to bring out the best in your hair.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Hair Cut",
        price: "Price on request"
      },

      {
        name: "Hair Styling",
        price: "Price on request"
      },

      {
        name: "Blow Dry",
        price: "Price on request"
      },

      {
        name: "Hair Colour",
        price: "Price on request"
      },

      {
        name: "Root Touch-Up",
        price: "Price on request"
      },

      {
        name: "Global Colour",
        price: "Price on request"
      },

      {
        name: "Highlights",
        price: "Price on request"
      },

      {
        name: "Balayage",
        price: "Price on request"
      },

      {
        name: "Hair Spa",
        price: "Price on request"
      },

      {
        name: "Keratin / Smoothing",
        price: "Price on request"
      }

    ]
  },


  {
    number: "02",

    name: "Makeup",

    description:
      "Artistry for everyday expression, celebrations and unforgettable occasions.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Party Makeup",
        price: "Price on request"
      },

      {
        name: "Engagement Makeup",
        price: "Price on request"
      },

      {
        name: "Reception Makeup",
        price: "Price on request"
      },

      {
        name: "Bridal Makeup",
        price: "Price on request"
      },

      {
        name: "HD Makeup",
        price: "Price on request"
      },

      {
        name: "Airbrush Makeup",
        price: "Price on request"
      },

      {
        name: "Editorial Makeup",
        price: "Price on request"
      },

      {
        name: "Cocktail Makeup",
        price: "Price on request"
      },

      {
        name: "Dewy Makeup",
        price: "Price on request"
      },

      {
        name: "Makeup Consultation",
        price: "Price on request"
      }

    ]
  },


  {
    number: "03",

    name: "Skin",

    description:
      "Restorative skin rituals designed around your individual needs.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Classic Facial",
        price: "Price on request"
      },

      {
        name: "Deep Cleansing Facial",
        price: "Price on request"
      },

      {
        name: "Glow Facial",
        price: "Price on request"
      },

      {
        name: "Hydrating Facial",
        price: "Price on request"
      },

      {
        name: "Brightening Facial",
        price: "Price on request"
      },

      {
        name: "Acne Care Facial",
        price: "Price on request"
      },

      {
        name: "Detan Treatment",
        price: "Price on request"
      },

      {
        name: "Clean-Up",
        price: "Price on request"
      },

      {
        name: "Skin Consultation",
        price: "Price on request"
      },

      {
        name: "Premium Skin Ritual",
        price: "Price on request"
      }

    ]
  },


  {
    number: "04",

    name: "Nails",

    description:
      "Considered colour, clean finishes and delicate details for your hands and feet.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Classic Manicure",
        price: "Price on request"
      },

      {
        name: "Classic Pedicure",
        price: "Price on request"
      },

      {
        name: "Gel Manicure",
        price: "Price on request"
      },

      {
        name: "Gel Pedicure",
        price: "Price on request"
      },

      {
        name: "French Tips",
        price: "Price on request"
      },

      {
        name: "Nail Art",
        price: "Price on request"
      },

      {
        name: "Chrome Nails",
        price: "Price on request"
      },

      {
        name: "Extensions",
        price: "Price on request"
      },

      {
        name: "Nail Removal",
        price: "Price on request"
      },

      {
        name: "Nail Care Ritual",
        price: "Price on request"
      }

    ]
  },


  {
    number: "05",

    name: "Bridal",

    description:
      "A personal beauty experience for the moments you'll always remember.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Bridal Makeup",
        price: "Price on request"
      },

      {
        name: "Bridal Hair",
        price: "Price on request"
      },

      {
        name: "Bridal Draping",
        price: "Price on request"
      },

      {
        name: "Bridal Trial",
        price: "Price on request"
      },

      {
        name: "Engagement Look",
        price: "Price on request"
      },

      {
        name: "Reception Look",
        price: "Price on request"
      },

      {
        name: "Haldi Look",
        price: "Price on request"
      },

      {
        name: "Mehendi Look",
        price: "Price on request"
      },

      {
        name: "Bridal Skin Prep",
        price: "Price on request"
      },

      {
        name: "Complete Bridal Package",
        price: "Price on request"
      }

    ]
  },


  {
    number: "06",

    name: "Wellness",

    description:
      "A gentle pause from the everyday, with rituals for rest and renewal.",

    startingPrice:
      "Price on request",

    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbece2?auto=format&fit=crop&w=900&q=85",

    subcategories: [

      {
        name: "Head Massage",
        price: "Price on request"
      },

      {
        name: "Relaxation Ritual",
        price: "Price on request"
      },

      {
        name: "Aromatherapy",
        price: "Price on request"
      },

      {
        name: "Scalp Ritual",
        price: "Price on request"
      },

      {
        name: "Body Relaxation",
        price: "Price on request"
      },

      {
        name: "Foot Ritual",
        price: "Price on request"
      },

      {
        name: "Hand Ritual",
        price: "Price on request"
      },

      {
        name: "Stress Relief Ritual",
        price: "Price on request"
      },

      {
        name: "Wellness Consultation",
        price: "Price on request"
      },

      {
        name: "Signature Wellness Ritual",
        price: "Price on request"
      }

    ]
  }

];



/* =========================================================
   HOME SERVICE CARDS
========================================================= */

function renderHomeCards() {

  const container =
    document.getElementById("home-service-cards");

  if (!container) return;


  container.innerHTML =
    SERVICE_DATA.map(item => `

      <a
        class="service-card"
        href="#services"
        aria-label="Explore ${item.name} services"
      >

        <img
          src="${item.image}"
          alt="${item.name} beauty service"
          loading="lazy"
        >

        <div class="service-card-content">

          <small>
            ${item.number} / SIGNATURE
          </small>

          <h3>
            ${item.name}
          </h3>

          <p>
            ${item.description}
          </p>

        </div>

        <span
          class="card-arrow"
          aria-hidden="true"
        >
          ↗
        </span>

      </a>

    `).join("");

}



/* =========================================================
   SERVICES MENU
========================================================= */

function renderServiceMenu() {

  const container =
    document.getElementById("service-menu");

  if (!container) return;


  container.innerHTML =
    SERVICE_DATA.map(item => `

      <article class="service-entry">

        <div class="service-entry-head">

          <span class="service-number">
            ${item.number}
          </span>

          <div>

            <h3>
              ${item.name}
            </h3>

            <p>
              ${item.description}
            </p>

            <span class="starting-price">
              STARTING AT · ${item.startingPrice}
            </span>

          </div>

        </div>


        <details class="service-accordion">

          <summary>
            Explore ${item.name.toLowerCase()} services
          </summary>

          <ul class="service-list">

            ${item.subcategories.map(service => `

              <li>

                <span>
                  ${service.name}
                </span>

                <span>
                  ${service.price}
                </span>

              </li>

            `).join("")}

          </ul>

        </details>

      </article>

    `).join("");

}



/* =========================================================
   SERVICE DROPDOWN
========================================================= */

function populateServiceSelect() {

  const select =
    document.getElementById("service-select");

  if (!select) return;


  /*
    Remove old generated options.
    Keep only "Choose a service".
  */

  select
    .querySelectorAll("option:not(:first-child)")
    .forEach(option => option.remove());


  SERVICE_DATA.forEach(item => {

    const option =
      document.createElement("option");

    option.value =
      item.name;

    option.textContent =
      item.name;

    select.appendChild(option);

  });

}



/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

  const nav =
    document.getElementById("site-nav");

  const toggle =
    document.querySelector(".menu-toggle");

  const close =
    document.querySelector(".menu-close");

  const overlay =
    document.querySelector(".nav-overlay");


  if (
    !nav ||
    !toggle ||
    !close ||
    !overlay
  ) {
    return;
  }


  const links =
    nav.querySelectorAll("a");


  function setOpen(open) {

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );


    toggle.setAttribute(
      "aria-label",
      open
        ? "Close navigation"
        : "Open navigation"
    );


    nav.classList.toggle(
      "open",
      open
    );


    nav.setAttribute(
      "aria-hidden",
      String(!open)
    );


    overlay.hidden =
      !open;


    document.body.classList.toggle(
      "menu-open",
      open
    );


    if (open) {

      close.focus();

    } else {

      toggle.focus();

    }

  }


  toggle.addEventListener(
    "click",
    () => {

      const isOpen =
        toggle.getAttribute(
          "aria-expanded"
        ) === "true";

      setOpen(!isOpen);

    }
  );


  close.addEventListener(
    "click",
    () => setOpen(false)
  );


  overlay.addEventListener(
    "click",
    () => setOpen(false)
  );


  links.forEach(link => {

    link.addEventListener(
      "click",
      () => setOpen(false)
    );

  });


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        toggle.getAttribute(
          "aria-expanded"
        ) === "true"
      ) {

        setOpen(false);

      }

    }
  );

}



/* =========================================================
   PAGE ROUTING
========================================================= */

function routeToHash() {

  const validPages =
    new Set([
      "home",
      "gallery",
      "services",
      "contact",
      "enquiry"
    ]);


  const requested =
    window.location.hash
      .replace(/^#/, "") ||
      "home";


  const page =
    validPages.has(requested)
      ? requested
      : "home";


  document
    .querySelectorAll(".page")
    .forEach(section => {

      const active =
        section.dataset.page === page;


      section.hidden =
        !active;


      section.classList.toggle(
        "active",
        active
      );

    });


  document
    .querySelectorAll(".site-nav a")
    .forEach(link => {

      if (
        link.hash === `#${page}`
      ) {

        link.setAttribute(
          "aria-current",
          "page"
        );

      } else {

        link.removeAttribute(
          "aria-current"
        );

      }

    });


  window.scrollTo({
    top: 0,
    behavior:
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth"
  });

}



/* =========================================================
   STATISTIC ANIMATION
========================================================= */

function setupCounters() {

  const counters =
    document.querySelectorAll(
      "[data-count]"
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    counters.forEach(element => {

      element.textContent =
        element.dataset.count +
        (
          element.dataset.suffix ||
          ""
        );

    });

    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          const element =
            entry.target;


          const target =
            Number(
              element.dataset.count
            );


          const suffix =
            element.dataset.suffix ||
            "";


          const duration =
            1400;


          const start =
            performance.now();


          function animate(now) {

            const progress =
              Math.min(
                (now - start) /
                  duration,
                1
              );


            const eased =
              1 -
              Math.pow(
                1 - progress,
                3
              );


            element.textContent =
              Math.round(
                target * eased
              ) + suffix;


            if (progress < 1) {

              requestAnimationFrame(
                animate
              );

            }

          }


          requestAnimationFrame(
            animate
          );


          observer.unobserve(
            element
          );

        });

      },
      {
        threshold: 0.35
      }
    );


  counters.forEach(
    element =>
      observer.observe(element)
  );

}



/* =========================================================
   DATE VALIDATION
========================================================= */

function setupDateMinimum() {

  const dateInput =
    document.getElementById(
      "preferred-date"
    );


  if (!dateInput) return;


  const now =
    new Date();


  const localToday =
    `${now.getFullYear()}-` +
    `${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-` +
    `${String(
      now.getDate()
    ).padStart(2, "0")}`;


  dateInput.min =
    localToday;

}



/* =========================================================
   WHATSAPP ENQUIRY
========================================================= */

function setupEnquiryForm() {

  const form =
    document.getElementById(
      "enquiry-form"
    );


  const status =
    document.getElementById(
      "form-status"
    );


  if (!form || !status) {
    return;
  }


  form.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      status.hidden =
        true;


      if (!form.checkValidity()) {

        form.reportValidity();


        status.textContent =
          "Please complete the required fields with valid details.";


        status.hidden =
          false;


        return;

      }


      const dateInput =
        document.getElementById(
          "preferred-date"
        );


      const chosenDate =
        form.elements.date.value;


      if (
        chosenDate &&
        dateInput &&
        chosenDate <
          dateInput.min
      ) {

        status.textContent =
          "Please choose today or a future date.";


        status.hidden =
          false;


        return;

      }


      const formData =
        new FormData(form);


      const name =
        String(
          formData.get("name") ||
          ""
        );


      const phone =
        String(
          formData.get("phone") ||
          ""
        );


      const email =
        String(
          formData.get("email") ||
          ""
        );


      const service =
        String(
          formData.get("service") ||
          ""
        );


      const date =
        String(
          formData.get("date") ||
          ""
        );


      const message =
        String(
          formData.get("message") ||
          ""
        );


      /*
        If Supabase is available, use the
        WhatsApp destination controlled by
        Admin Dashboard → Salon Info.

        If it isn't available, use the safe
        fallback number.
      */

      if (db) {

        try {

          const {
            data,
            error
          } = await db
            .from("salons")
            .select("whatsapp")
            .eq(
              "salon_code",
              SALON_CODE
            )
            .single();


          if (
            !error &&
            data &&
            data.whatsapp
          ) {

            SALON_WHATSAPP =
              data.whatsapp;

          }

        } catch (error) {

          console.error(
            "Could not load WhatsApp destination:",
            error
          );

        }

      }


      let whatsappNumber =
        SALON_WHATSAPP
          .replace(
            /^https?:\/\/(www\.)?wa\.me\//i,
            ""
          )
          .replace(
            /\D/g,
            ""
          );


      if (!whatsappNumber) {

        status.textContent =
          "The salon WhatsApp number is not configured correctly.";


        status.hidden =
          false;


        return;

      }


      const whatsappMessage =
        "New Appointment Enquiry\n\n" +

        "Name: " +
        name +
        "\n" +

        "Phone: " +
        phone +
        "\n" +

        "Email: " +
        (
          email ||
          "Not provided"
        ) +
        "\n" +

        "Service: " +
        service +
        "\n" +

        "Preferred Date: " +
        date +
        "\n" +

        "Message: " +
        (
          message ||
          "Not provided"
        );


      const whatsappUrl =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
          whatsappMessage
        );


      /*
        Opening WhatsApp directly.
        No enquiry is inserted into
        Supabase.
      */

      window.open(
        whatsappUrl,
        "_blank",
        "noopener"
      );


      form.reset();


      setupDateMinimum();


      status.textContent =
        "Your enquiry is ready to send on WhatsApp.";


      status.hidden =
        false;

    }
  );

}



/* =========================================================
   FOOTER YEAR
========================================================= */

function setupFooterYear() {

  const year =
    document.getElementById(
      "copyright-year"
    );


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

}



/* =========================================================
   SUPABASE — TEST
========================================================= */

async function testSupabaseConnection() {

  if (!db) return;


  try {

    const {
      data,
      error
    } = await db
      .from("salons")
      .select(
        "salon_code, name"
      )
      .eq(
        "salon_code",
        SALON_CODE
      )
      .single();


    if (error) {

      console.error(
        "Supabase connection test failed:",
        error
      );

      return;

    }


    console.log(
      "Supabase connection successful:",
      data
    );

  } catch (error) {

    console.error(
      "Supabase test error:",
      error
    );

  }

}



/* =========================================================
   LOAD SALON INFORMATION
========================================================= */

async function loadSalonInformation() {

  if (!db) return;


  try {

    const {
      data,
      error
    } = await db
      .from("salons")
      .select(`
        name,
        tagline,
        description,
        location,
        phone,
        email,
        whatsapp,
        instagram,
        working_hours,
        about_text
      `)
      .eq(
        "salon_code",
        SALON_CODE
      )
      .single();


    if (
      error ||
      !data
    ) {

      console.error(
        "Could not load salon information:",
        error
      );

      return;

    }


    /* BRAND */

    const brandName =
      document.getElementById(
        "brand-name"
      );


    const footerBrand =
      document.getElementById(
        "footer-brand-name"
      );


    if (
      data.name &&
      brandName
    ) {

      brandName.textContent =
        data.name;

    }


    if (
      data.name &&
      footerBrand
    ) {

      footerBrand.textContent =
        data.name;

    }


    /* ABOUT */

    const about =
      document.getElementById(
        "salon-about"
      );


    if (
      about &&
      data.about_text
    ) {

      about.textContent =
        data.about_text;

    }


    /* LOCATION */

    const location =
      document.getElementById(
        "salon-location"
      );


    if (
      location &&
      data.location
    ) {

      location.textContent =
        data.location;

    }


    /* PHONE */

    const phone =
      document.getElementById(
        "salon-phone"
      );


    const footerPhone =
      document.getElementById(
        "footer-phone"
      );


    if (
      data.phone &&
      phone
    ) {

      phone.textContent =
        data.phone +
        " ⇗";

      phone.href =
        "tel:" +
        data.phone.replace(
          /\s+/g,
          ""
        );

    }


    if (
      data.phone &&
      footerPhone
    ) {

      footerPhone.textContent =
        data.phone;

      footerPhone.href =
        "tel:" +
        data.phone.replace(
          /\s+/g,
          ""
        );

    }


    /* EMAIL */

    const email =
      document.getElementById(
        "salon-email"
      );


    const footerEmail =
      document.getElementById(
        "footer-email"
      );


    if (
      data.email &&
      email
    ) {

      email.textContent =
        data.email +
        " ⇗";

      email.href =
        "mailto:" +
        data.email;

    }


    if (
      data.email &&
      footerEmail
    ) {

      footerEmail.textContent =
        data.email;

      footerEmail.href =
        "mailto:" +
        data.email;

    }


    /* WHATSAPP */

    if (
      data.whatsapp
    ) {

      SALON_WHATSAPP =
        data.whatsapp;

    }


    const whatsapp =
      document.getElementById(
        "salon-whatsapp"
      );


    const footerWhatsapp =
      document.getElementById(
        "footer-whatsapp"
      );


    if (
      whatsapp &&
      data.whatsapp
    ) {

      whatsapp.href =
        data.whatsapp;

    }


    if (
      footerWhatsapp &&
      data.whatsapp
    ) {

      footerWhatsapp.href =
        data.whatsapp;

    }


    /* INSTAGRAM */

    const instagram =
      document.getElementById(
        "salon-instagram"
      );


    const footerInstagram =
      document.getElementById(
        "footer-instagram"
      );


    if (
      instagram &&
      data.instagram
    ) {

      instagram.textContent =
        data.instagram;

    }


    if (
      footerInstagram &&
      data.instagram
    ) {

      footerInstagram.textContent =
        data.instagram;

    }


    /* HOURS */

    const hours =
      document.getElementById(
        "salon-hours"
      );


    if (
      hours &&
      data.working_hours
    ) {

      hours.textContent =
        data.working_hours;

    }

  } catch (error) {

    console.error(
      "Salon information error:",
      error
    );

  }

}



/* =========================================================
   SITE SETTINGS
========================================================= */

async function loadSiteSettings() {

  if (!db) return;


  try {

    const {
      data,
      error
    } = await db
      .from("site_settings")
      .select(
        "setting_key, setting_value"
      )
      .eq(
        "salon_code",
        SALON_CODE
      );


    if (
      error ||
      !data
    ) {

      console.error(
        "Could not load site settings:",
        error
      );

      return;

    }


    const settings = {};


    data.forEach(item => {

      settings[
        item.setting_key
      ] =
        item.setting_value;

    });


    /* HERO EYEBROW */

    const eyebrow =
      document.getElementById(
        "hero-eyebrow"
      );


    if (
      eyebrow &&
      settings.hero_eyebrow
    ) {

      eyebrow.textContent =
        settings.hero_eyebrow;

    }


    /* HERO TITLE */

    const title =
      document.getElementById(
        "hero-title"
      );


    if (
      title &&
      settings.hero_title
    ) {

      /*
        Preserve the original
        typography by converting
        the last phrase into <em>.
      */

      const titleText =
        settings.hero_title.trim();


      const words =
        titleText.split(/\s+/);


      if (
        words.length >= 2
      ) {

        const lastWord =
          words.pop();


        title.innerHTML =
          escapeHtml(
            words.join(" ")
          ) +
          "<br>" +
          "<em>" +
          escapeHtml(lastWord) +
          "</em>";

      } else {

        title.textContent =
          titleText;

      }

    }


    /* HERO COPY */

    const copy =
      document.getElementById(
        "hero-copy"
      );


    if (
      copy &&
      settings.hero_copy
    ) {

      copy.textContent =
        settings.hero_copy;

    }


    /* STATISTICS */

    applyStatistic(
      "stat-experience",
      settings.stat_experience
    );


    applyStatistic(
      "stat-clients",
      settings.stat_clients
    );


    applyStatistic(
      "stat-beauty",
      settings.stat_beauty_moments
    );

  } catch (error) {

    console.error(
      "Site settings error:",
      error
    );

  }

}



/* =========================================================
   SAFE HTML TEXT
========================================================= */

function escapeHtml(value) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}



/* =========================================================
   STATISTIC PARSER
========================================================= */

function applyStatistic(
  elementId,
  value
) {

  const element =
    document.getElementById(
      elementId
    );


  if (
    !element ||
    !value
  ) {
    return;
  }


  const text =
    String(value)
      .trim();


  const match =
    text.match(
      /^([\d.]+)\s*([a-zA-Z%+]*)$/
    );


  if (!match) {

    element.textContent =
      text;

    return;

  }


  element.dataset.count =
    match[1];


  element.dataset.suffix =
    match[2] || "";


  element.textContent =
    "0";

}



/* =========================================================
   LOAD SERVICES FROM SUPABASE
========================================================= */

async function loadServicesFromSupabase() {

  if (!db) return;


  try {

    const {
      data,
      error
    } = await db
      .from("services")
      .select(`
        category,
        name,
        description,
        price,
        image_url,
        display_order
      `)
      .eq(
        "salon_code",
        SALON_CODE
      )
      .order(
        "display_order",
        {
          ascending: true
        }
      );


    if (
      error ||
      !data ||
      !data.length
    ) {

      console.error(
        "Could not load services:",
        error
      );

      return;

    }


    const categories =
      {};


    data.forEach(service => {

      if (
        !categories[
          service.category
        ]
      ) {

        categories[
          service.category
        ] = {

          name:
            service.category,

          description:
            service.description ||
            "",

          startingPrice:
            "Price on request",

          image:
            service.image_url ||
            "",

          subcategories:
            []

        };

      }


      const category =
        categories[
          service.category
        ];


      if (
        !category.image &&
        service.image_url
      ) {

        category.image =
          service.image_url;

      }


      if (
        !category.description &&
        service.description
      ) {

        category.description =
          service.description;

      }


      category.subcategories.push({

        name:
          service.name,

        price:
          service.price ||
          "Price on request"

      });

    });


    SERVICE_DATA.length =
      0;


    Object.values(
      categories
    ).forEach(
      (category, index) => {

        SERVICE_DATA.push({

          number:
            String(
              index + 1
            ).padStart(
              2,
              "0"
            ),

          name:
            category.name,

          description:
            category.description,

          startingPrice:
            category.startingPrice,

          image:
            category.image,

          subcategories:
            category.subcategories

        });

      }
    );


    renderHomeCards();

    renderServiceMenu();

    populateServiceSelect();

  } catch (error) {

    console.error(
      "Services loading error:",
      error
    );

  }

}



/* =========================================================
   LOAD GALLERY
========================================================= */

async function loadGalleryFromSupabase() {

  if (!db) return;


  const container =
    document.getElementById(
      "gallery-grid"
    );


  if (!container) return;


  try {

    const {
      data,
      error
    } = await db
      .from("gallery_images")
      .select(`
        image_url,
        caption,
        display_order
      `)
      .eq(
        "salon_code",
        SALON_CODE
      )
      .order(
        "display_order",
        {
          ascending: true
        }
      );


    if (
      error ||
      !data ||
      !data.length
    ) {

      console.error(
        "Could not load gallery:",
        error
      );

      return;

    }


    const layouts = [
      "tall",
      "",
      "",
      "wide",
      "",
      "tall",
      "",
      "",
      ""
    ];


    container.innerHTML =
      data.map(
        (item, index) => `

          <figure
            class="gallery-item ${
              layouts[index] || ""
            }"
          >

            <img
              loading="lazy"
              src="${escapeHtml(
                item.image_url
              )}"
              alt="${escapeHtml(
                item.caption ||
                "Beauty gallery image"
              )}"
            >

            <figcaption>

              <span>
                ${
                  String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )
                }
                / APSARA BEAUTY
              </span>

              <b>
                ${escapeHtml(
                  item.caption ||
                  ""
                )}
              </b>

            </figcaption>

          </figure>

        `
      ).join("");

  } catch (error) {

    console.error(
      "Gallery loading error:",
      error
    );

  }

}



/* =========================================================
   INITIALIZE WEBSITE
   CORE UI FIRST
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /*
      ----------------------------------------
      1. BUILD ORIGINAL WEBSITE IMMEDIATELY
      ----------------------------------------

      These run BEFORE Supabase.

      Therefore:
      - menu works
      - navigation works
      - stats work
      - services exist
      - pages exist
      - animations work
    */

    renderHomeCards();

    renderServiceMenu();

    populateServiceSelect();


    setupNavigation();

    setupCounters();

    setupDateMinimum();

    setupEnquiryForm();

    setupFooterYear();


    routeToHash();


    window.addEventListener(
      "hashchange",
      routeToHash
    );


    /*
      ----------------------------------------
      2. DATABASE DATA SECOND
      ----------------------------------------

      Database failure can no longer destroy
      the website UI.
    */

    if (!db) {
      return;
    }


    testSupabaseConnection();

    loadSalonInformation();

    loadSiteSettings();

    loadServicesFromSupabase();

    loadGalleryFromSupabase();

  }
);
