document.addEventListener("DOMContentLoaded", function () {
  const scrollProgress = document.querySelector(".scroll-progress");

  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (windowScroll / windowHeight) * 100;

      scrollProgress.style.width = scrollPercentage + "%";
    });
  }

  const readMoreBtn = document.getElementById("read-more-btn");
  const hiddenContent = document.getElementById("hidden-content");

  if (readMoreBtn && hiddenContent) {
    readMoreBtn.addEventListener("click", function () {
      if (
        hiddenContent.style.display === "none" ||
        hiddenContent.style.display === ""
      ) {
        hiddenContent.style.display = "block";
        readMoreBtn.textContent = "READ LESS";
      } else {
        hiddenContent.style.display = "none";
        readMoreBtn.textContent = "READ MORE";
      }
    });
  }

  const menuToggle = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".main-nav");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  const teamMembers = document.querySelectorAll(".team-member");

  if (teamMembers.length > 0) {
    teamMembers.forEach((member) => {
      const overlay = member.querySelector(".member-overlay");
      const memberImage = member.querySelector(".member-image img");

      member.addEventListener("mouseenter", () => {
        if (overlay) overlay.style.opacity = "1";
        if (memberImage) memberImage.style.transform = "scale(1.1)";
      });

      member.addEventListener("mouseleave", () => {
        if (overlay) overlay.style.opacity = "0";
        if (memberImage) memberImage.style.transform = "scale(1)";
      });
    });
  }

  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 200);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 500);
        }
      });
    });
  });

  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const dots = document.querySelectorAll(".dot");
  const prevArrow = document.querySelector(".prev-testimonial");
  const nextArrow = document.querySelector(".next-testimonial");
  let currentSlide = 0;

  function showSlide(index) {
    testimonialItems.forEach((item) => {
      item.classList.remove("active");
      item.style.opacity = "0";
      item.style.transform = "translateX(30px)";
    });

    dots.forEach((dot) => dot.classList.remove("active"));

    if (index < 0) {
      index = testimonialItems.length - 1;
    } else if (index >= testimonialItems.length) {
      index = 0;
    }

    testimonialItems[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;

    setTimeout(() => {
      testimonialItems[index].style.opacity = "1";
      testimonialItems[index].style.transform = "translateX(0)";
    }, 50);
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      showSlide(currentSlide - 1);
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      showSlide(currentSlide + 1);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  function autoAdvance() {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= testimonialItems.length) {
      nextSlide = 0;
    }
    showSlide(nextSlide);
  }

  let slideInterval = setInterval(autoAdvance, 5000);

  const testimonialSlider = document.querySelector(".testimonial-slider");
  const testimonialControls = document.querySelector(".testimonial-controls");

  if (testimonialSlider) {
    testimonialSlider.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    testimonialSlider.addEventListener("mouseleave", () => {
      slideInterval = setInterval(autoAdvance, 5000);
    });
  }

  if (testimonialControls) {
    testimonialControls.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    testimonialControls.addEventListener("mouseleave", () => {
      slideInterval = setInterval(autoAdvance, 5000);
    });
  }

  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    const detailsBtn = card.querySelector(".service-details-btn");
    const details = card.querySelector(".service-details");

    if (detailsBtn && details) {
      details.style.height = "0";

      card.addEventListener("mouseenter", () => {
        details.style.height = "50px";
        detailsBtn.style.opacity = "1";
        detailsBtn.style.transform = "translateY(0)";
      });

      card.addEventListener("mouseleave", () => {
        details.style.height = "0";
        detailsBtn.style.opacity = "0";
        detailsBtn.style.transform = "translateY(20px)";
      });

      detailsBtn.addEventListener("click", () => {
        const serviceName = card.querySelector("h3").textContent;
        alert(`You clicked to learn more about: ${serviceName}`);
      });
    }
  });

  if (portfolioItems.length > 0) {
    portfolioItems.forEach((item) => {
      const overlay = item.querySelector(".portfolio-overlay");
      const title = overlay.querySelector("h3");
      const description = overlay.querySelector("p");
      const link = overlay.querySelector(".portfolio-link");

      if (title) title.style.transform = "translateY(20px)";
      if (title) title.style.opacity = "0";
      if (description) description.style.transform = "translateY(20px)";
      if (description) description.style.opacity = "0";
      if (link) link.style.transform = "translateY(20px)";
      if (link) link.style.opacity = "0";

      item.addEventListener("mouseenter", () => {
        overlay.style.opacity = "1";

        if (title) {
          setTimeout(() => {
            title.style.transform = "translateY(0)";
            title.style.opacity = "1";
          }, 100);
        }

        if (description) {
          setTimeout(() => {
            description.style.transform = "translateY(0)";
            description.style.opacity = "1";
          }, 200);
        }

        if (link) {
          setTimeout(() => {
            link.style.transform = "translateY(0)";
            link.style.opacity = "1";
          }, 300);
        }
      });

      item.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";

        if (title) {
          title.style.transform = "translateY(20px)";
          title.style.opacity = "0";
        }

        if (description) {
          description.style.transform = "translateY(20px)";
          description.style.opacity = "0";
        }

        if (link) {
          link.style.transform = "translateY(20px)";
          link.style.opacity = "0";
        }
      });
    });
  }

  const allSectionLinks = document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
  );

  allSectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (mobileMenu && mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
          if (menuToggle) menuToggle.classList.remove("active");
        }

        history.pushState(null, null, targetId);
      }
    });
  });

  function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      const requiredFields = form.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      if (isValid) {
        alert("Form submitted successfully! We'll be in touch soon.");
        form.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  });

  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (darkModeToggle) {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("darkMode", "enabled");
      } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  const backToTopBtn = document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  const adventureOptions = document.querySelectorAll(".option");

  adventureOptions.forEach((option) => {
    option.addEventListener("click", function () {
      alert(`You selected: ${this.querySelector("p").textContent}`);
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (currentPage === "index.html" || currentPage === "") {
    const heroText = document.querySelector(".hero-text h1");
    if (heroText) {
      heroText.classList.add("animate");
    }

    const adventureOptions = document.querySelectorAll(".adventure-option");
    if (adventureOptions.length > 0) {
      adventureOptions.forEach((option) => {
        option.addEventListener("click", function () {
          const adventure = this.getAttribute("data-adventure");
          alert(
            `You selected: ${adventure}! We'll share details about this adventure soon!`
          );
        });
      });
    }
  }

  if (currentPage === "portfolio.html") {
    const portfolioFilters = document.querySelectorAll(
      ".portfolio-filter button"
    );

    if (portfolioFilters.length > 0 && portfolioItems.length > 0) {
      portfolioFilters.forEach((filter) => {
        filter.addEventListener("click", function () {
          portfolioFilters.forEach((f) => f.classList.remove("active"));

          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");

          portfolioItems.forEach((item) => {
            if (filterValue === "all") {
              item.style.display = "block";
              setTimeout(() => {
                item.classList.remove("hidden");
              }, 10);
            } else {
              if (item.classList.contains(filterValue)) {
                item.style.display = "block";
                setTimeout(() => {
                  item.classList.remove("hidden");
                }, 10);
              } else {
                item.classList.add("hidden");
                setTimeout(() => {
                  item.style.display = "none";
                }, 300);
              }
            }
          });
        });
      });
    }

    const portfolioViewButtons = document.querySelectorAll(".portfolio-link");
    const portfolioModal = document.querySelector(".portfolio-modal");
    const modalClose = document.querySelector(".modal-close");

    if (portfolioViewButtons.length > 0 && portfolioModal) {
      portfolioViewButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const projectId = this.getAttribute("data-project");

          document.querySelector(
            ".modal-project-title"
          ).textContent = `Project ${projectId}`;

          portfolioModal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });

      modalClose.addEventListener("click", function () {
        portfolioModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });

      portfolioModal.addEventListener("click", function (e) {
        if (e.target === portfolioModal) {
          portfolioModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
    }
  }

  if (currentPage === "services.html") {
    const packageCards = document.querySelectorAll(".package-card");

    if (packageCards.length > 0) {
      packageCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          packageCards.forEach((c) => c.classList.remove("hover"));
          this.classList.add("hover");
        });

        card.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });
    }
  }

  if (currentPage === "contact.html") {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        const requiredFields = contactForm.querySelectorAll("[required]");

        requiredFields.forEach((field) => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add("error");
          } else {
            field.classList.remove("error");
          }
        });

        if (isValid) {
          alert("Thank you for your message! We'll get back to you soon.");
          contactForm.reset();
        } else {
          alert("Please fill in all required fields.");
        }
      });

      const formInputs = contactForm.querySelectorAll("input, textarea");
      formInputs.forEach((input) => {
        input.addEventListener("input", function () {
          if (this.value.trim()) {
            this.classList.remove("error");
          }
        });
      });
    }

    const faqToggles = document.querySelectorAll(".faq-toggle");

    if (faqToggles.length > 0) {
      faqToggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
          const faqItem = this.closest(".faq-item");
          faqItem.classList.toggle("active");

          if (faqItem.classList.contains("active")) {
            this.innerHTML = '<i class="fas fa-minus"></i>';
          } else {
            this.innerHTML = '<i class="fas fa-plus"></i>';
          }
        });
      });
    }

    const scrollToFormButton = document.getElementById("scrollToForm");

    if (scrollToFormButton) {
      scrollToFormButton.addEventListener("click", function () {
        const contactForm = document.querySelector(".contact-form-container");
        contactForm.scrollIntoView({ behavior: "smooth" });
      });
    }

    const loadMapButton = document.querySelector(".load-map");

    if (loadMapButton) {
      loadMapButton.addEventListener("click", function () {
        const mapPlaceholder = document.querySelector(".map-placeholder");
        const mapOverlay = document.querySelector(".map-overlay");

        mapOverlay.innerHTML = "<p>Map loading...</p>";

        setTimeout(() => {
          mapPlaceholder.innerHTML =
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1679902926886!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        }, 1000);
      });
    }
  }

  if (
    currentPage === "index.html" ||
    currentPage === "" ||
    currentPage === "about.html"
  ) {
    const testimonialSlides = document.querySelectorAll(".testimonial-item");
    const testimonialDots = document.querySelectorAll(".testimonial-dot");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");

    if (testimonialSlides.length > 0) {
      let currentSlide = 0;

      function showSlide(index) {
        testimonialSlides.forEach((slide) => {
          slide.classList.remove("active");
        });

        if (testimonialDots.length > 0) {
          testimonialDots.forEach((dot) => {
            dot.classList.remove("active");
          });
        }

        testimonialSlides[index].classList.add("active");
        if (testimonialDots.length > 0) {
          testimonialDots[index].classList.add("active");
        }

        currentSlide = index;
      }

      showSlide(currentSlide);

      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          currentSlide =
            (currentSlide - 1 + testimonialSlides.length) %
            testimonialSlides.length;
          showSlide(currentSlide);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          currentSlide = (currentSlide + 1) % testimonialSlides.length;
          showSlide(currentSlide);
        });
      }

      if (testimonialDots.length > 0) {
        testimonialDots.forEach((dot, index) => {
          dot.addEventListener("click", function () {
            showSlide(index);
          });
        });
      }

      let slideInterval;

      function startSlideInterval() {
        slideInterval = setInterval(function () {
          currentSlide = (currentSlide + 1) % testimonialSlides.length;
          showSlide(currentSlide);
        }, 5000);
      }

      startSlideInterval();

      const testimonialContainer = document.querySelector(
        ".testimonial-slider"
      );
      if (testimonialContainer) {
        testimonialContainer.addEventListener("mouseenter", function () {
          clearInterval(slideInterval);
        });

        testimonialContainer.addEventListener("mouseleave", function () {
          startSlideInterval();
        });
      }
    }
  }

  if (portfolioItems.length > 0) {
    portfolioItems.forEach((item) => {
      const overlay = item.querySelector(".portfolio-overlay");
      const title = item.querySelector(".portfolio-title");
      const description = item.querySelector(".portfolio-description");
      const link = item.querySelector(".portfolio-link");

      if (overlay && title && description && link) {
        item.addEventListener("mouseenter", function () {
          overlay.style.opacity = "1";
          title.style.transform = "translateY(0)";
          title.style.opacity = "1";
          description.style.transform = "translateY(0)";
          description.style.opacity = "1";
          link.style.transform = "translateY(0)";
          link.style.opacity = "1";
        });

        item.addEventListener("mouseleave", function () {
          overlay.style.opacity = "0";
          title.style.transform = "translateY(-20px)";
          title.style.opacity = "0";
          description.style.transform = "translateY(-10px)";
          description.style.opacity = "0";
          link.style.transform = "translateY(20px)";
          link.style.opacity = "0";
        });
      }
    });
  }
});
