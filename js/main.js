(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const maxTags = 5;
    const tagsList = document.querySelectorAll(".tags-container .tag");
    tagsList.forEach((tag, index) => {
      if (index >= maxTags) {
        tag.style.display = "none";
      }
    });
    if (tagsList.length > maxTags) {
      const showMore = document.createElement("button");
      showMore.textContent = "Show more";
      showMore.style.marginTop = "2rem";
      showMore.style.padding = "1rem 2rem";
      showMore.style.border = "none";
      showMore.style.backgroundColor = "#ff9800";
      showMore.style.color = "#1e1e1e";
      showMore.style.borderRadius = "0.3rem";
      showMore.style.cursor = "pointer";
      showMore.style.fontSize = "1.25rem";
      showMore.style.transition = "background-color 0.3s ease, color 0.3s ease";
      document.querySelector(".tags").appendChild(showMore);
      showMore.addEventListener("click", function() {
        tagsList.forEach((tag, index) => {
          if (index >= maxTags) {
            tag.style.display = tag.style.display === "none" ? "inline-block" : "none";
          }
        });
        showMore.addEventListener("mouseover", () => {
          showMore.style.backgroundColor = "#1e1e1e";
          showMore.style.color = "#ff9800";
        });
        showMore.addEventListener("mouseout", () => {
          showMore.style.backgroundColor = "#ff9800";
          showMore.style.color = "#1e1e1e";
        });
        showMore.textContent = showMore.textContent === "Show more" ? "Show less" : "Show more";
      });
    }
  });
})();
