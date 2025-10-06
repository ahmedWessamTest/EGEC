  // const data = {
  //   "مصر": {
  //     "بكالوريوس": {
  //       "جامعة القاهرة": {
  //         "10000$": ["هندسة", "طب", "علوم"],
  //         "5000$": ["زراعة", "تجارة"]
  //       },
  //       "جامعة عين شمس": {
  //         "7000$": ["حاسبات", "حقوق"]
  //       }
  //     }
  //   },
  //   "الامارات": {
  //     "بكالوريوس": {
  //       "جامعة دبي": {
  //         "15000$": ["إدارة أعمال", "تسويق"]
  //       }
  //     }
  //   },
  //   "تركيا": {
  //     "ماجستير": {
  //       "جامعة اسطنبول": {
  //         "12000$": ["ذكاء اصطناعي", "أمن سيبراني"]
  //       }
  //     }
  //   }
  // };

  // // Helpers
  // function updateDropdown(listEl, values, targetSpan, placeholder = "اختر") {
  //   listEl.innerHTML = "";
  //   values.forEach(v => {
  //     const li = document.createElement("li");
  //     const a = document.createElement("a");
  //     a.href = "#";
  //     a.textContent = v;
  //     a.className = "block px-4 py-2 hover:bg-main-text/90 text-main-text hover:text-main-white transition-colors duration-500";
  //     a.addEventListener("click", e => {
  //       e.preventDefault();
  //       targetSpan.textContent = v; // update label
  //       a.closest("div").classList.add("hidden"); // close dropdown
  //       // Trigger next step
  //       targetSpan.dispatchEvent(new CustomEvent("selected", { detail: v }));
  //     });
  //     li.appendChild(a);
  //     listEl.appendChild(li);
  //   });
  // }

  // // DOM elements
  // const placeSpan = document.querySelector("#PlaceSearchDropdown span");
  // const degreeSpan = document.querySelector("#AcademicDegreesSearchDropdown span");
  // const uniSpan = document.querySelector("#TheUniversitySearchDropdown span");
  // const costSpan = document.querySelector("#CostSearchDropdown span");
  // const specSpan = document.querySelector("#SpecializationDropdownSearch span");

  // const degreeList = document.querySelector("#AcademicDegreesSearchDropdownNavbar ul");
  // const uniList = document.querySelector("#TheUniversitySearchDropdownNavbar ul");
  // const costList = document.querySelector("#CostSearchDropdownNavbar ul");
  // const specList = document.querySelector("#SpecializationDropdownSearchNavbar ul");

  // placeSpan.addEventListener("selected", e => {
  //   const loc = e.detail;
  //   if (data[loc]) {
  //     updateDropdown(degreeList, Object.keys(data[loc]), degreeSpan, "اضف الدرجة");
  //   }
  //   degreeSpan.textContent = "اضف الدرجة";
  //   uniSpan.textContent = "اضف الجامعة";
  //   costSpan.textContent = "اضف التكلفة";
  //   specSpan.textContent = "اضف التخصص";
  // });

  // degreeSpan.addEventListener("selected", e => {
  //   const loc = placeSpan.textContent;
  //   const deg = e.detail;
  //   if (data[loc] && data[loc][deg]) {
  //     updateDropdown(uniList, Object.keys(data[loc][deg]), uniSpan, "اضف الجامعة");
  //   }
  //   uniSpan.textContent = "اضف الجامعة";
  //   costSpan.textContent = "اضف التكلفة";
  //   specSpan.textContent = "اضف التخصص";
  // });

  // uniSpan.addEventListener("selected", e => {
  //   const loc = placeSpan.textContent;
  //   const deg = degreeSpan.textContent;
  //   const uni = e.detail;
  //   if (data[loc] && data[loc][deg] && data[loc][deg][uni]) {
  //     updateDropdown(costList, Object.keys(data[loc][deg][uni]), costSpan, "اضف التكلفة");
  //   }
  //   costSpan.textContent = "اضف التكلفة";
  //   specSpan.textContent = "اضف التخصص";
  // });

  // costSpan.addEventListener("selected", e => {
  //   const loc = placeSpan.textContent;
  //   const deg = degreeSpan.textContent;
  //   const uni = uniSpan.textContent;
  //   const cost = e.detail;
  //   if (data[loc] && data[loc][deg] && data[loc][deg][uni] && data[loc][deg][uni][cost]) {
  //     updateDropdown(specList, data[loc][deg][uni][cost], specSpan, "اضف التخصص");
  //   }
  //   specSpan.textContent = "اضف التخصص";
  // });
  const initTestimonialsCarousel = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // عدد الكروت في الموبايل
    spaceBetween: 20, // المسافة بين الكروت
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
initTestimonialsCarousel();