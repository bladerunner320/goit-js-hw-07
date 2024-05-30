document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("#categories .item");
  console.log(`Numbers of categories: ${categories.length}`);
  categories.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const elemCount = category.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elemCount}`);
  });
});
