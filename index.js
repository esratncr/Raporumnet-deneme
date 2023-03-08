var suruklenenler = document.getElementsByClassName('tasinabilir');
var bolgeler = document.getElementsByClassName('bolge');

for (let suruklenen of suruklenenler) {
  suruklenen.addEventListener("dragstart", function (e) {
    suruklenen.classList.add("move-item");
    suruklenen.closest(".bolge").classList.add("move-from");

    e.target.style.opacity = ".4";
  });
  suruklenen.addEventListener("dragend", function (e) {
    e.target.style.opacity = "1";
  });
};


for (let bolge of bolgeler ){
    bolge.addEventListener("dragover", function(e){
        e.preventDefault();

    });

    bolge.addEventListener("drop", function (e){
        e.preventDefault();

        var suruklenenParent =document.querySelector(".move-from");
        var suruklenenEleman = document.querySelector(".move-item");

        if (suruklenenParent != bolge){
            bolge.appendChild(suruklenenEleman);
        }
        suruklenenParent.classList.remove("move-from");
        suruklenenEleman.classList.remove("move-item");
    });

}

