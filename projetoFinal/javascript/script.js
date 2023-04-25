//Botão ativo no menu
const links = document.querySelectorAll(".btn");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    links.forEach(function(link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});