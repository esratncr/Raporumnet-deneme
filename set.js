/// Bu fonksiyon kullanılmıyor 
/// sadece ar-ge aşamasında bir çalışma geliştirildi.
/// Bir elementin selector path ini veriyor.
function getPath(el) {
    const selectors = [];
    while (el.parentNode) {
        selectors.unshift(el.nodeName.toLowerCase() +
            (el.id ? '#' + el.id : '') +
            (el.className ? '.' + el.className.replace(/\s+/g, '.') : '') +
            (':nth-child(' + (Array.prototype.indexOf.call(el.parentNode.children, el) + 1) + ')'));
        el = el.parentNode;
    }
    return selectors.join(' > ');
}
 
var suruklenenler = document.getElementsByClassName('tasinabilir');
var bolgeler = document.getElementsByClassName('bolge');
 
/// Sayfada sürüklenecek elementleri bulup
/// dragstart ve dragend olaylarını işliyor.
for (let of suruklenenler) {
 
    // console.log(getPath(suruklenen));
 
    suruklenen.addEventListener('dragstart', function (e) {
        suruklenen.classList.add("move-item");
        suruklenen.closest(".bolge").classList.add("move-from");
 
        e.target.style.opacity = '0.4';
    });
 
    suruklenen.addEventListener('dragend', function (e) {
        e.target.style.opacity = '1';
    });
 
};
 
/// Sayfada sürüklenme bolgeleri elementlerini bulup
/// dragover ve drop olaylarını işliyor.
for (let bolge of bolgeler) {
    bolge.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
 
    bolge.addEventListener('drop', function (e) {
        e.preventDefault();
 
        var suruklenenParent = document.querySelector(".move-from");
        var suruklenenEleman = document.querySelector(".move-item");
 
        if (suruklenenParent != bolge) {
            bolge.appendChild(suruklenenEleman);
        }
 
        suruklenenParent.classList.remove("move-from");
        suruklenenEleman.classList.remove("move-item");
    });
}