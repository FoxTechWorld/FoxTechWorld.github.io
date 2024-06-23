(() => {
  // <stdin>
  function menuToggle() {
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle2 = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".pageHeader nav ul");
      menuToggle2.addEventListener("click", function() {
        menu.classList.toggle("show");
      });
    });
  }
  function listTags() {
    document.addEventListener("DOMContentLoaded", function() {
      const maxTags = 5;
      const tagsList = document.querySelectorAll(".tags ul li");
      tagsList.forEach((tag, index) => {
        if (index >= maxTags) {
          tag.style.display = "none";
        }
      });
      if (tagsList.length > maxTags) {
        const showMore = document.createElement("button");
        showMore.textContent = "Show more";
        showMore.style.marginTop = "10px";
        showMore.style.padding = "5px 10px";
        showMore.style.border = "none";
        showMore.style.backgroundColor = "#007bff";
        showMore.style.color = "#fff";
        showMore.style.borderRadius = "3px";
        showMore.style.cursor = "pointer";
        document.querySelector(".tags").appendChild(showMore);
        showMore.addEventListener("click", function() {
          tagsList.forEach((tag, index) => {
            if (index >= maxTags) {
              tag.style.display = tag.style.display === "none" ? "inline-block" : "none";
            }
          });
          showMore.textContent = showMore.textContent === "Show more" ? "Show less" : "Show more";
        });
      }
    });
  }
  function start() {
    listTags();
    menuToggle();
  }
  start();
})();
