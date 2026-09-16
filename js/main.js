/* AL-Ghous Real Estate — shared behavior */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var WHATSAPP_NUMBER = "923284500054";
  var PHONE_DISPLAY = "+92 328 4500054";
  var PHONE_HREF = "+923284500054";

  document.querySelectorAll("[data-wa-link]").forEach(function (el) {
    var msg = el.getAttribute("data-wa-link") || "Hi, I need information about a property.";
    el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
  });
  document.querySelectorAll("[data-phone-link]").forEach(function (el) {
    el.setAttribute("href", "tel:" + PHONE_HREF);
  });
  document.querySelectorAll("[data-phone-text]").forEach(function (el) {
    el.textContent = PHONE_DISPLAY;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Header scroll state ----
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile nav ----
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  var mobileClose = document.querySelector(".mobile-nav-close");
  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (toggle) toggle.addEventListener("click", openNav);
  if (mobileClose) mobileClose.addEventListener("click", closeNav);
  if (mobileNav) {
    mobileNav.querySelectorAll(".nav-link").forEach(function (l) {
      l.addEventListener("click", closeNav);
    });
  }

  // ---- Active nav link ----
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach(function (l) {
    if (l.getAttribute("data-page") === path) l.classList.add("active");
  });

  // ---- Tabs ----
  document.querySelectorAll(".tab-bar").forEach(function (bar) {
    var btns = bar.querySelectorAll(".tab-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("data-tab-target");
        var panelGroup = document.querySelector(bar.getAttribute("data-tab-panels"));
        btns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        if (panelGroup) {
          panelGroup.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
          var target = panelGroup.querySelector('[data-tab-panel="' + targetId + '"]');
          if (target) target.classList.add("active");
        }
      });
    });
  });

  // ---- Contact form ----
  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll("[required]").forEach(function (field) {
        var wrap = field.closest(".form-field");
        var errorEl = wrap ? wrap.querySelector(".field-error") : null;
        if (!field.value.trim() || (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
          valid = false;
          if (wrap) wrap.classList.add("has-error");
          if (errorEl) errorEl.textContent = field.type === "email" ? "Enter a valid email address" : "This field is required";
        } else {
          if (wrap) wrap.classList.remove("has-error");
          if (errorEl) errorEl.textContent = "";
        }
      });
      if (!valid) return;

      var data = new FormData(contactForm);
      var lines = [
        "New inquiry from the website:",
        "Name: " + data.get("name"),
        "Phone: " + data.get("phone"),
        "Email: " + (data.get("email") || "-"),
        "Interested in: " + (data.get("interest") || "General inquiry"),
        "Message: " + data.get("message")
      ];
      var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));

      var successEl = document.querySelector("[data-form-success]");
      if (successEl) successEl.classList.add("show");
      contactForm.reset();

      window.open(waUrl, "_blank", "noopener");
    });

    contactForm.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.addEventListener("input", function () {
        var wrap = field.closest(".form-field");
        if (wrap) wrap.classList.remove("has-error");
      });
    });
  }

  // ---- Property rendering (only runs where relevant containers exist) ----
  if (typeof PROPERTIES !== "undefined") {
    // Featured properties (home page)
    var featuredWrap = document.querySelector("[data-featured-properties]");
    if (featuredWrap) {
      var featured = PROPERTIES.filter(function (p) { return p.featured; }).slice(0, 3);
      featuredWrap.innerHTML = featured.map(propertyCardHTML).join("");
    }

    // Full listing grid with filters (properties page)
    var gridWrap = document.querySelector("[data-property-grid]");
    if (gridWrap) {
      var params = new URLSearchParams(location.search);
      var filterPurpose = document.getElementById("filter-purpose");
      var filterType = document.getElementById("filter-type");
      var filterLocation = document.getElementById("filter-location");
      var filterSort = document.getElementById("filter-sort");
      var resultsCount = document.querySelector("[data-results-count]");

      if (filterPurpose && params.get("purpose")) filterPurpose.value = params.get("purpose");
      if (filterType && params.get("type")) filterType.value = params.get("type");
      if (filterLocation && params.get("location")) filterLocation.value = params.get("location");

      function applyFilters() {
        var purpose = filterPurpose ? filterPurpose.value : "";
        var type = filterType ? filterType.value : "";
        var loc = filterLocation ? filterLocation.value.trim().toLowerCase() : "";
        var sort = filterSort ? filterSort.value : "default";

        var list = PROPERTIES.filter(function (p) {
          if (purpose && p.purpose !== purpose) return false;
          if (type && p.type !== type) return false;
          if (loc && p.location.toLowerCase().indexOf(loc) === -1) return false;
          return true;
        });

        if (sort === "price-asc") list = list.slice().sort(function (a, b) { return a.price - b.price; });
        if (sort === "price-desc") list = list.slice().sort(function (a, b) { return b.price - a.price; });

        gridWrap.innerHTML = list.length
          ? list.map(propertyCardHTML).join("")
          : '<div class="empty-state">' + ICONS.pin + '<p>No properties match these filters yet. Try adjusting your search or <a href="contact.html">contact us</a> and we\'ll find one for you.</p></div>';

        if (resultsCount) resultsCount.textContent = list.length;

        if (window.gsap) {
          gsap.from(gridWrap.querySelectorAll(".reveal"), {
            y: 24, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out"
          });
        }
      }

      [filterPurpose, filterType, filterLocation, filterSort].forEach(function (el) {
        if (el) el.addEventListener(el.tagName === "INPUT" ? "input" : "change", applyFilters);
      });

      applyFilters();
    }

    // Single property detail page
    var detailWrap = document.querySelector("[data-property-detail]");
    if (detailWrap) {
      var pid = new URLSearchParams(location.search).get("id");
      var property = PROPERTIES.find(function (p) { return p.id === pid; }) || PROPERTIES[0];

      document.title = property.title + " | AL-Ghous Real Estate";

      var mainImg = document.querySelector("[data-gallery-main] img");
      if (mainImg) { mainImg.src = property.gallery[0]; mainImg.alt = property.title; }

      var sideWrap = document.querySelector("[data-gallery-side]");
      if (sideWrap) {
        var sideImgs = property.gallery.slice(1, 3);
        sideWrap.innerHTML = sideImgs.map(function (src, i) {
          var extra = (i === 1 && property.gallery.length > 3)
            ? '<span class="gallery-more-badge">+' + (property.gallery.length - 3) + ' photos</span>' : "";
          return '<div><img src="' + src + '" alt="' + property.title + '" loading="lazy">' + extra + '</div>';
        }).join("");
      }

      document.querySelectorAll("[data-p-title]").forEach(function (el) { el.textContent = property.title; });
      document.querySelectorAll("[data-p-location]").forEach(function (el) { el.textContent = property.location; });
      document.querySelectorAll("[data-p-price]").forEach(function (el) { el.textContent = property.priceLabel; });
      document.querySelectorAll("[data-p-description]").forEach(function (el) { el.textContent = property.description; });
      document.querySelectorAll("[data-p-area]").forEach(function (el) { el.textContent = property.area; });
      document.querySelectorAll("[data-p-type]").forEach(function (el) { el.textContent = property.type; });
      document.querySelectorAll("[data-p-purpose]").forEach(function (el) { el.textContent = property.purpose === "rent" ? "For Rent" : "For Sale"; });
      document.querySelectorAll("[data-p-year]").forEach(function (el) { el.textContent = property.yearBuilt || "New Development"; });

      var specsWrap = document.querySelector("[data-p-specs]");
      if (specsWrap) {
        var specHtml = '<div class="detail-spec">' + ICONS.area + '<div><strong>' + property.area + '</strong><span>Area</span></div></div>';
        if (property.beds) specHtml += '<div class="detail-spec">' + ICONS.bed + '<div><strong>' + property.beds + '</strong><span>Bedrooms</span></div></div>';
        if (property.baths) specHtml += '<div class="detail-spec">' + ICONS.bath + '<div><strong>' + property.baths + '</strong><span>Bathrooms</span></div></div>';
        if (property.parking) specHtml += '<div class="detail-spec">' + ICONS.car + '<div><strong>' + property.parking + '</strong><span>Parking</span></div></div>';
        specsWrap.innerHTML = specHtml;
      }

      var amenityWrap = document.querySelector("[data-p-amenities]");
      if (amenityWrap) {
        amenityWrap.innerHTML = property.amenities.map(function (a) {
          return '<div class="amenity-item">' + ICONS.check + '<span>' + a + '</span></div>';
        }).join("");
      }

      var waLinks = document.querySelectorAll("[data-p-wa-link]");
      waLinks.forEach(function (el) {
        var msg = "Hi, I'm interested in \"" + property.title + "\" (" + property.priceLabel + ") listed on your website. Could you share more details?";
        el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
      });

      var similarWrap = document.querySelector("[data-similar-properties]");
      if (similarWrap) {
        var similar = PROPERTIES.filter(function (p) { return p.id !== property.id && p.type === property.type; }).slice(0, 3);
        if (similar.length < 3) {
          PROPERTIES.filter(function (p) { return p.id !== property.id && similar.indexOf(p) === -1; }).forEach(function (p) {
            if (similar.length < 3) similar.push(p);
          });
        }
        similarWrap.innerHTML = similar.map(propertyCardHTML).join("");
      }
    }
  }

  // ---- GSAP scroll reveals ----
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (window.gsap && window.ScrollTrigger && !prefersReduced) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.utils.toArray(".hero-entrance").forEach(function (el, i) {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        delay: 0.15 + i * 0.12,
        ease: "power3.out"
      });
    });

    // Reveal-on-scroll: elements grouped under [data-reveal-parent] stagger together
    document.querySelectorAll("[data-reveal-parent]").forEach(function (parent) {
      var items = parent.querySelectorAll(".reveal");
      gsap.from(items, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: parent,
          start: "top 82%"
        }
      });
    });

    // Standalone reveals (no data-reveal-parent ancestor) animate individually
    document.querySelectorAll(".reveal").forEach(function (el) {
      if (el.closest("[data-reveal-parent]")) return;
      gsap.from(el, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });

    // Parallax hero background
    gsap.utils.toArray(".hero-bg, .page-hero-bg").forEach(function (bg) {
      gsap.to(bg, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: bg.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Counter animation
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.floor(obj.val) + suffix;
            }
          });
        }
      });
    });
  } else {
    // No GSAP / reduced motion: ensure content is visible
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
  }
})();
