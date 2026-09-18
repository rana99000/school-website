/* =========================================================
   BASIC HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => [
  ...document.querySelectorAll(selector)
];




const headerContainer = $("#header-container");
const footerContainer = $("#footer-container");
const loaderContainer = $("#loader-container");


/* =========================================================
   HEADER
========================================================= */

if (headerContainer) {

  headerContainer.innerHTML = `
    <header class="nav" id="nav">

      <a class="brand" href="index.html">

        <span>NOTRE-DAME</span>

        <em>DE LA DÉLIVRANDE · Al-Daher</em>

      </a>


      <nav class="nav-links" aria-label="Navigation principale">


        <!-- =================================================
             ACCUEIL
        ================================================== -->

        <a href="index.html">
          Accueil
        </a>


        <!-- =================================================
             HISTOIRE DROPDOWN
        ================================================== -->

        <div class="nav-dropdown">

          <a
            href="histoire.html"
            class="nav-dropdown-toggle"
          >

            Histoire

            <span
              class="nav-arrow"
              aria-hidden="true"
            >⌄</span>

          </a>


          <div class="nav-dropdown-menu">

            <a href="histoire-origines.html">
              Aux origines
            </a>

            <a href="histoire-egypte.html">
              Délivrande en Égypte
            </a>

            <a href="histoire-ecole.html">
              L'école d'Al-Daher
            </a>

            <a href="histoire-batiments.html">
              Les bâtiments
            </a>

            <a href="histoire-directrices.html">
              Les directrices
            </a>

            <a href="histoire-uniformes.html">
              Les uniformes
            </a>

            <a href="histoire-generations.html">
              Les générations
            </a>

          </div>

        </div>


        <!-- =================================================
             CYCLES DROPDOWN
        ================================================== -->

        <div class="nav-dropdown">

          <a
            href="cycles.html"
            class="nav-dropdown-toggle"
          >

            Cycles

            <span
              class="nav-arrow"
              aria-hidden="true"
            >⌄</span>

          </a>


          <div class="nav-dropdown-menu">

            <a href="maternelle.html">
              Maternelle
            </a>

            <a href="primaire.html">
              Primaire
            </a>

            <a href="preparatoire.html">
              Préparatoire
            </a>

            <a href="secondaire.html">
              Secondaire
            </a>

          </div>

        </div>


        <!-- =================================================
             OTHER PAGES
        ================================================== -->

        <a href="vie.html">
          Vie de l'école
        </a>

        <a href="actualites.html">
          Actualités
        </a>

        <a href="contact.html">
          Contact
        </a>


      </nav>


      <!-- =================================================
           ADMISSION
      ================================================== -->

      <div class="nav-right">

        <a
          class="nav-admission"
          href="admission.html"
        >
          Admission
        </a>

      </div>


    </header>
  `;

}


/* =========================================================
   FOOTER
========================================================= */

if (footerContainer) {

  footerContainer.innerHTML = `
    <footer>

      <div class="footer-top">

        <div class="footer-brand">

          <span>NOTRE-DAME</span>

          <em>
            DE LA DÉLIVRANDE · Al-Daher
          </em>

        </div>


        <div class="footer-tag">

          Joie.<br>
          Bonheur.<br>
          Servir.

        </div>


        <div class="footer-address">

          Daher, 5 Habib Shalaby,
          Berket AZ Zatli,
          Bab El Sharia,
          Gouvernorat du Caire

          <br>

          (02) 2415 5192

        </div>

      </div>


      <div class="footer-bottom">

        <span>
          © 2026 Notre-Dame de la Délivrande
        </span>


        <div>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            YouTube
          </a>

          <a href="vie.html">
            Galerie
          </a>

        </div>


        <span>
          Prototype
        </span>

      </div>

    </footer>
  `;

}


/* =========================================================
   LOADER
========================================================= */

if (loaderContainer) {

  loaderContainer.innerHTML = `
    <div class="loader" id="loader">

      <div class="loader-inner">

        <div class="school-logo">

          <img
            src="images/notre_dame_school_logo.jpg"
            alt="Notre-Dame de la Délivrande logo"
          >

        </div>


        <div class="school-name">
          NOTRE-DAME DE LA DÉLIVRANDE
        </div>


        <strong>
          Al-Daher
        </strong>


        <div class="loader-line">

          <i></i>

        </div>


        <small>
          DEPUIS 1921 · LE CAIRE
        </small>

      </div>

    </div>
  `;

}


/* =========================================================
   LOADER ANIMATION
========================================================= */

const loader = $("#loader");

if (loader) {

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("hide");

    }, 1000);

  });

}


/* =========================================================
   NAVIGATION + SCROLL
========================================================= */

const nav = $("#nav");

const progress = $("#progress");


function scrollFX() {

  const y = window.scrollY;


  /* -------------------------------------------------------
     NAVBAR
  ------------------------------------------------------- */

  if (nav) {

    nav.classList.toggle(
      "scrolled",
      y > 40
    );

  }


  /* -------------------------------------------------------
     READING PROGRESS
  ------------------------------------------------------- */

  if (progress) {

    const max =
      document.documentElement.scrollHeight
      -
      window.innerHeight;


    progress.style.width =
      (
        max > 0
          ? (y / max) * 100
          : 0
      ) + "%";

  }


  /* -------------------------------------------------------
     PARALLAX
  ------------------------------------------------------- */

  if (
    window.innerWidth <= 900 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    $$("[data-parallax]").forEach((el) => {
      el.style.transform = "";
    });
  } else {
    $$("[data-parallax]").forEach((el) => {

      const r =
        el.parentElement.getBoundingClientRect();


    const a =
      (
        window.innerHeight / 2
        -
        (
          r.top
          +
          r.height / 2
        )
      ) * .035;


      el.style.transform =
        `translate3d(0,${a}px,0) scale(1.04)`;

    });
  }


  /* -------------------------------------------------------
     HORIZONTAL FACILITIES
  ------------------------------------------------------- */

  const track =
    $(".facility-track");

  const section =
    $(".facilities");


  if (
    track &&
    section &&
    window.innerWidth > 900
  ) {

    const r =
      section.getBoundingClientRect();


    const denominator =
      r.height - window.innerHeight;


    const p =
      denominator > 0
        ? Math.min(
          Math.max(
            (
              window.innerHeight
              -
              r.top
            ) / denominator,
            0
          ),
          1
        )
        : 0;


    const maxX =
      Math.max(
        track.scrollWidth
        -
        window.innerWidth
        +
        window.innerWidth * .08,
        0
      );


    track.style.transform =
      `translate3d(${-p * maxX}px,0,0)`;

  }

}


window.addEventListener(
  "scroll",
  scrollFX,
  { passive: true }
);


window.addEventListener(
  "resize",
  scrollFX
);


scrollFX();


/* =========================================================
   CURRENT NAVIGATION
========================================================= */

const current =
  location.pathname.split("/").pop()
  ||
  "index.html";


$$(".nav-links a").forEach((link) => {

  const href =
    link.getAttribute("href");


  if (href === current) {

    link.classList.add("active");

  }

});


/* =========================================================
   NAVIGATION DROPDOWNS
   Handles BOTH:
   - Histoire
   - Cycles
========================================================= */

const navDropdowns =
  $$(".nav-dropdown");


navDropdowns.forEach((dropdown) => {

  const toggle =
    dropdown.querySelector(
      ".nav-dropdown-toggle"
    );


  const menu =
    dropdown.querySelector(
      ".nav-dropdown-menu"
    );


  if (!toggle || !menu) {
    return;
  }


  /* -------------------------------------------------------
     CLICK / TAP TO OPEN
  ------------------------------------------------------- */

  toggle.addEventListener("click", (event) => {

    /*
       If the dropdown is closed:

       - prevent navigation
       - open dropdown
       - close other dropdowns

       If it is already open:

       - allow the normal link to work
       - therefore Histoire → histoire.html
       - or Cycles → cycles.html
    */

    /*
       On small screens the dropdown panel is hidden and
       Histoire / Cycles behave as normal links.
    */

    if (
      window.matchMedia("(max-width: 900px)").matches
    ) {

      return;

    }


    if (!dropdown.classList.contains("open")) {

      event.preventDefault();


      navDropdowns.forEach((otherDropdown) => {

        if (
          otherDropdown !== dropdown
        ) {

          otherDropdown.classList.remove(
            "open"
          );

        }

      });


      dropdown.classList.add("open");

    }

  });


  /* -------------------------------------------------------
     KEYBOARD ACCESSIBILITY
  ------------------------------------------------------- */

  toggle.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        toggle.click();

      }

    }
  );


  /* -------------------------------------------------------
     DROPDOWN LINKS
  ------------------------------------------------------- */

  menu.addEventListener(
    "click",
    (event) => {

      const submenuLink =
        event.target.closest("a");


      if (submenuLink) {

        dropdown.classList.remove(
          "open"
        );

      }

    }
  );

});


/* ---------------------------------------------------------
   CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
--------------------------------------------------------- */

document.addEventListener(
  "click",
  (event) => {

    navDropdowns.forEach((dropdown) => {

      if (
        !dropdown.contains(event.target)
      ) {

        dropdown.classList.remove(
          "open"
        );

      }

    });

  }
);


/* ---------------------------------------------------------
   CLOSE DROPDOWNS WITH ESCAPE
--------------------------------------------------------- */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }


    navDropdowns.forEach((dropdown) => {

      dropdown.classList.remove(
        "open"
      );

    });

  }
);


/* =========================================================
   TIMELINE
========================================================= */

const timelineButtons =
  $$(".timeline-dots button");


const year =
  $("#year");


const yearTitle =
  $("#yearTitle");


const yearText =
  $("#yearText");


timelineButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      timelineButtons.forEach((item) => {

        item.classList.remove("active");

      });


      button.classList.add("active");


      [
        year,
        yearTitle,
        yearText
      ].forEach((element) => {

        if (element) {

          element.style.opacity = 0;

        }

      });


      setTimeout(() => {

        if (year) {

          year.textContent =
            button.dataset.year;

        }


        if (yearTitle) {

          yearTitle.textContent =
            button.dataset.title;

        }


        if (yearText) {

          yearText.textContent =
            button.dataset.text;

        }


        [
          year,
          yearTitle,
          yearText
        ].forEach((element) => {

          if (element) {

            element.style.opacity = 1;

          }

        });

      }, 220);

    }
  );

});


/* =========================================================
   PHILOSOPHY WORD ROTATION
========================================================= */

const words =
  $$(".changing-word .word");


const dots =
  $$(".statement-progress i");


if (words.length) {

  let wordIndex = 0;


  setInterval(() => {

    if (document.hidden) {
      return;
    }


    words[wordIndex]
      .classList
      .remove("active");


    if (dots[wordIndex]) {

      dots[wordIndex]
        .classList
        .remove("active");

    }


    wordIndex =
      (wordIndex + 1)
      % words.length;


    words[wordIndex]
      .classList
      .add("active");


    if (dots[wordIndex]) {

      dots[wordIndex]
        .classList
        .add("active");

    }

  }, 2300);

}


/* =========================================================
   CYCLE CARD 3D MOVEMENT
========================================================= */

const cards =
  $$(".cycle-card");


cards.forEach((card) => {


  card.addEventListener(
    "mousemove",
    (event) => {

      if (window.innerWidth < 900) {
        return;
      }


      const r =
        card.getBoundingClientRect();


      const x =
        event.clientX
        -
        r.left
        -
        r.width / 2;


      const y =
        event.clientY
        -
        r.top
        -
        r.height / 2;


      card.style.transform =
        `
        perspective(900px)
        rotateY(${x / r.width * 4}deg)
        rotateX(${-y / r.height * 4}deg)
        `;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform = "";

    }
  );

});


/* =========================================================
   ADMISSION APPLICATION FLOW
========================================================= */

const applicationArea =
  document.querySelector(
    "#applicationArea"
  );


const startApplication =
  document.querySelector(
    "#startApplication"
  );


const applicationSteps =
  [
    ...document.querySelectorAll(
      ".application-step"
    )
  ];


const levelCards =
  [
    ...document.querySelectorAll(
      ".level-card"
    )
  ];


const stepCounter =
  document.querySelector(
    "#stepCounter"
  );


const formProgress =
  document.querySelector(
    "#formProgress"
  );


const selectedLevel =
  document.querySelector(
    "#selectedLevel"
  );


const kindergartenFields =
  document.querySelector(
    "#kindergartenFields"
  );


const primaryFields =
  document.querySelector(
    "#primaryFields"
  );


const primaryRules =
  document.querySelector(
    "#primaryRules"
  );


const prejardinNote =
  document.querySelector(
    "#prejardinNote"
  );


const applicationSuccess =
  document.querySelector(
    "#applicationSuccess"
  );


const agreement =
  document.querySelector(
    "#agreement"
  );


const submitApplication =
  document.querySelector(
    "#submitApplication"
  );


let currentStep = 1;

let selectedAdmissionLevel = null;

const totalSteps = 6;


/* =========================================================
   START APPLICATION
========================================================= */

if (
  startApplication &&
  applicationArea
) {

  startApplication.addEventListener(
    "click",
    () => {

      applicationArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

}


/* =========================================================
   LEVEL SELECTION
========================================================= */

levelCards.forEach((card) => {

  card.addEventListener(
    "click",
    () => {

      levelCards.forEach((item) => {

        item.classList.remove(
          "selected"
        );

      });


      card.classList.add(
        "selected"
      );


      selectedAdmissionLevel =
        card.dataset.level;


      updateConditionalFields();


      if (selectedLevel) {

        selectedLevel.style.display =
          "block";


        const title =
          card.querySelector("h3");


        selectedLevel.innerHTML = `
          <strong>
            Niveau sélectionné :
          </strong>
          ${title ? title.textContent : ""}
        `;

      }


      setTimeout(() => {

        goToStep(2);

      }, 500);

    }
  );

});


/* =========================================================
   CONDITIONAL FIELDS
========================================================= */

function updateConditionalFields() {

  if (!selectedAdmissionLevel) {
    return;
  }


  /* -------------------------------------------------------
     KINDERGARTEN
  ------------------------------------------------------- */

  if (
    selectedAdmissionLevel === "prejardin" ||
    selectedAdmissionLevel === "jardin"
  ) {

    if (kindergartenFields) {

      kindergartenFields.classList.add(
        "visible"
      );

    }

  } else {

    if (kindergartenFields) {

      kindergartenFields.classList.remove(
        "visible"
      );

    }

  }


  /* -------------------------------------------------------
     PRIMARY TRANSFER
  ------------------------------------------------------- */

  if (
    selectedAdmissionLevel === "primaire"
  ) {

    if (primaryFields) {

      primaryFields.classList.add(
        "visible"
      );

    }


    if (primaryRules) {

      primaryRules.classList.add(
        "visible"
      );

    }

  } else {

    if (primaryFields) {

      primaryFields.classList.remove(
        "visible"
      );

    }


    if (primaryRules) {

      primaryRules.classList.remove(
        "visible"
      );

    }

  }


  /* -------------------------------------------------------
     PRE-JARDIN
  ------------------------------------------------------- */

  if (
    selectedAdmissionLevel === "prejardin"
  ) {

    if (prejardinNote) {

      prejardinNote.classList.add(
        "visible"
      );

    }

  } else {

    if (prejardinNote) {

      prejardinNote.classList.remove(
        "visible"
      );

    }

  }

}


/* =========================================================
   GO TO STEP
========================================================= */

function goToStep(step) {

  if (step < 1) {
    step = 1;
  }


  if (step > totalSteps) {
    step = totalSteps;
  }


  currentStep = step;


  applicationSteps.forEach(
    (section) => {

      section.classList.remove(
        "active"
      );


      if (
        Number(section.dataset.step)
        ===
        currentStep
      ) {

        section.classList.add(
          "active"
        );

      }

    }
  );


  /* -------------------------------------------------------
     PROGRESS
  ------------------------------------------------------- */

  const percentage =
    totalSteps <= 1
      ? 100
      : ((currentStep - 1) / (totalSteps - 1)) * 100;


  if (formProgress) {

    formProgress.style.width =
      percentage + "%";

  }


  if (stepCounter) {

    stepCounter.textContent =
      `Étape ${currentStep} / ${totalSteps}`;

  }


  /* -------------------------------------------------------
     SCROLL
  ------------------------------------------------------- */

  if (applicationArea) {

    window.scrollTo({

      top:
        applicationArea.offsetTop - 90,

      behavior: "smooth"

    });

  }

}


/* =========================================================
   NEXT BUTTONS
========================================================= */

document
  .querySelectorAll("[data-next]")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        if (
          currentStep === 1 &&
          !selectedAdmissionLevel
        ) {

          alert(
            "Veuillez sélectionner un niveau d'inscription."
          );

          return;

        }


        if (
          !validateCurrentStep()
        ) {

          return;

        }


        goToStep(
          currentStep + 1
        );

      }
    );

  });


/* =========================================================
   PREVIOUS BUTTONS
========================================================= */

document
  .querySelectorAll("[data-prev]")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        goToStep(
          currentStep - 1
        );

      }
    );

  });


/* =========================================================
   FORM VALIDATION
========================================================= */

function clearFieldError(field) {
  const wrapper = field.closest(".field, .form-group");
  if (!wrapper) return;

  wrapper.classList.remove("field-error");

  const oldMessage = wrapper.querySelector(".field-error-message");
  if (oldMessage) oldMessage.remove();

  field.removeAttribute("aria-invalid");
}

function showFieldError(field, message) {
  const wrapper = field.closest(".field, .form-group");
  if (!wrapper) return;

  wrapper.classList.add("field-error");
  field.setAttribute("aria-invalid", "true");

  let error = wrapper.querySelector(".field-error-message");

  if (!error) {
    error = document.createElement("span");
    error.className = "field-error-message";
    error.setAttribute("role", "alert");
    wrapper.appendChild(error);
  }

  error.textContent = message;
}

function clearStepErrors(activeStep) {
  activeStep
    .querySelectorAll(".field-error")
    .forEach((wrapper) => wrapper.classList.remove("field-error"));

  activeStep
    .querySelectorAll(".field-error-message")
    .forEach((message) => message.remove());

  activeStep
    .querySelectorAll("[aria-invalid='true']")
    .forEach((field) => field.removeAttribute("aria-invalid"));

  activeStep
    .querySelectorAll(".group-error")
    .forEach((group) => group.classList.remove("group-error"));
}

function isVisibleField(field) {
  return field.offsetParent !== null;
}

function validateCurrentStep() {
  const activeStep = document.querySelector(
    `.application-step[data-step="${currentStep}"]`
  );

  if (!activeStep) return true;

  clearStepErrors(activeStep);

  const requiredFields = [
    ...activeStep.querySelectorAll(
      "input[required], select[required], textarea[required]"
    )
  ].filter(isVisibleField);

  let firstInvalid = null;

  requiredFields.forEach((field) => {
    const value = String(field.value || "").trim();

    if (!value) {
      showFieldError(field, "Ce champ est obligatoire.");
      if (!firstInvalid) firstInvalid = field;
      return;
    }

    if (field.type === "email") {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!validEmail) {
        showFieldError(field, "Veuillez saisir une adresse e-mail valide.");
        if (!firstInvalid) firstInvalid = field;
      }
    }

    if (field.type === "tel") {
      const digits = value.replace(/[^\d+]/g, "");

      if (digits.length < 8) {
        showFieldError(field, "Veuillez vérifier le numéro de téléphone.");
        if (!firstInvalid) firstInvalid = field;
      }
    }
  });

  /*
    Validate radio groups only when the HTML marks a radio
    in that group as required.
  */
  const requiredRadioNames = [
    ...activeStep.querySelectorAll('input[type="radio"][required]')
  ]
    .filter(isVisibleField)
    .map((radio) => radio.name)
    .filter(Boolean);

  [...new Set(requiredRadioNames)].forEach((name) => {
    const group = [
      ...activeStep.querySelectorAll(
        `input[type="radio"][name="${CSS.escape(name)}"]`
      )
    ].filter(isVisibleField);

    if (!group.some((radio) => radio.checked)) {
      const container =
        group[0]?.closest(".radio-group, .field, .form-group");

      if (container) {
        container.classList.add("group-error");

        const message = document.createElement("span");
        message.className = "field-error-message";
        message.textContent = "Veuillez sélectionner une option.";
        container.appendChild(message);
      }

      if (!firstInvalid) firstInvalid = group[0];
    }
  });

  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: true });
    firstInvalid.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return false;
  }

  return true;
}


/* =========================================================
   SUBMIT APPLICATION
========================================================= */

if (submitApplication) {
  submitApplication.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (!agreement || !agreement.checked) {
      const agreementBox = agreement?.closest(".agreement");

      if (agreementBox) {
        agreementBox.classList.add("field-error");

        let message =
          agreementBox.querySelector(".field-error-message");

        if (!message) {
          message = document.createElement("span");
          message.className = "field-error-message";
          agreementBox.appendChild(message);
        }

        message.textContent =
          "Veuillez confirmer que vous avez lu et compris les informations d'admission.";

        agreement?.focus();
      }

      return;
    }

    applicationSteps.forEach((step) => {
      step.classList.remove("active");
      step.style.display = "none";
    });

    if (applicationSuccess) {
      applicationSuccess.classList.add("visible");
      applicationSuccess.style.display = "block";

      const reference =
        `NDD-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;

      const referenceTarget =
        document.querySelector("#applicationReference");

      if (referenceTarget) {
        referenceTarget.textContent = reference;
      }
    }

    if (formProgress) {
      formProgress.style.width = "100%";
    }

    if (stepCounter) {
      stepCounter.textContent = "Demande terminée";
    }

    const progressNote = document.querySelector("#progressNote");

    if (progressNote) {
      progressNote.textContent =
        "Prototype : la demande n'est pas encore envoyée à un serveur.";
    }

    if (applicationArea) {
      window.scrollTo({
        top: applicationArea.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
}


/* =========================================================
   CLEAR VALIDATION AS THE USER EDITS
========================================================= */

document.addEventListener("input", (event) => {
  const field = event.target.closest("input, select, textarea");

  if (!field) return;

  clearFieldError(field);

  const agreementBox = field.closest(".agreement");

  if (agreementBox) {
    agreementBox.classList.remove("field-error");
    agreementBox
      .querySelectorAll(".field-error-message")
      .forEach((message) => message.remove());
  }
});


/* =========================================================
   NOTRE-DAME TODAY CAROUSEL — HOME
========================================================= */

const todayCarousel = document.querySelector("#todayCarousel");

if (todayCarousel) {
  const todayTag = document.querySelector("#todayTag");
  const todayTitle = document.querySelector("#todayTitle");
  const todayCenterImage = document.querySelector("#todayCenterImage");
  const todayPrev = document.querySelector("#todayPrev");
  const todayNext = document.querySelector("#todayNext");
  const slides = [...todayCarousel.querySelectorAll(".today-slide")];

  const todaySlides = [
    {
      tag: "LA VIE DE L'ÉCOLE",
      title: "Un cadre pour grandir, apprendre et partager.",
      image: "images/notre_dame_school_courtyard.jpg",
      alt: "Cour de Notre-Dame de la Délivrande"
    },
    {
      tag: "CULTURE",
      title: "La culture fait partie du quotidien de l'école.",
      image: "images/notre-dame-de-la-delivandre-theatre.jpeg",
      alt: "Espace culturel de Notre-Dame de la Délivrande"
    },
    {
      tag: "NOTRE ÉCOLE",
      title: "Un environnement où tradition et avenir se rencontrent.",
      image: "images/notre.jpeg",
      alt: "Notre-Dame de la Délivrande"
    },
    {
      tag: "AUJOURD'HUI",
      title: "Une communauté scolaire qui avance ensemble.",
      image: "images/WhatsApp Image 2026-09-17 at 16.16.13.jpeg",
      alt: "Vie de l'école Notre-Dame de la Délivrande"
    }
  ];

  let todayIndex = 0;
  let autoPlay;

  const modulo = (number, length) =>
    (number + length) % length;

  function getSlide(index) {
    return todaySlides[modulo(index, todaySlides.length)];
  }

  function setImage(imageElement, data) {
    if (!imageElement) return;

    imageElement.src = data.image;
    imageElement.alt = data.alt;
  }

  function renderTodaySlide(animate = true) {
    const previous = getSlide(todayIndex - 1);
    const current = getSlide(todayIndex);
    const next = getSlide(todayIndex + 1);

    if (animate) {
      todayCarousel.classList.add("is-changing");
    }

    setImage(
      slides.find((slide) => slide.dataset.slot === "prev")
        ?.querySelector("img"),
      previous
    );

    setImage(todayCenterImage, current);

    setImage(
      slides.find((slide) => slide.dataset.slot === "next")
        ?.querySelector("img"),
      next
    );

    if (todayTag) todayTag.textContent = current.tag;
    if (todayTitle) todayTitle.textContent = current.title;

    slides.forEach((slide) => {
      slide.dataset.state = slide.dataset.slot;
    });

    if (animate) {
      window.setTimeout(() => {
        todayCarousel.classList.remove("is-changing");
      }, 300);
    }
  }

  function goToday(direction) {
    todayIndex = modulo(
      todayIndex + direction,
      todaySlides.length
    );

    renderTodaySlide(true);
    restartTodayAutoplay();
  }

  function restartTodayAutoplay() {
    window.clearInterval(autoPlay);

    if (document.hidden) return;

    autoPlay = window.setInterval(() => {
      if (!document.hidden) goToday(1);
    }, 5500);
  }

  todayPrev?.addEventListener("click", () => goToday(-1));
  todayNext?.addEventListener("click", () => goToday(1));

  todayCarousel.addEventListener("mouseenter", () => {
    window.clearInterval(autoPlay);
  });

  todayCarousel.addEventListener("mouseleave", restartTodayAutoplay);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(autoPlay);
    } else {
      restartTodayAutoplay();
    }
  });

  renderTodaySlide(false);
  restartTodayAutoplay();
}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor = document.querySelector("#cursor");

if (cursor && window.matchMedia("(pointer:fine)").matches) {
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let targetX = cursorX;
  let targetY = cursorY;

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  }, { passive: true });

  function moveCursor() {
    cursorX += (targetX - cursorX) * 0.18;
    cursorY += (targetY - cursorY) * 0.18;

    cursor.style.transform =
      `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    requestAnimationFrame(moveCursor);
  }

  moveCursor();

  const cursorTargets = [
    "a",
    "button",
    ".level-card",
    ".cycle-card",
    ".cycle-option",
    ".pillar-card"
  ];

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest(cursorTargets.join(","))) {
      cursor.classList.add("active");
    }
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest(cursorTargets.join(","))) {
      cursor.classList.remove("active");
    }
  });
}
