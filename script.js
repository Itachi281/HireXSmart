/**
 * 
 * @description all javascript code for the site is contained in this file.
 */

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const container = document.getElementById('container');
        const overlaycon = document.getElementById('overlayCon');
        const overlaybtn = document.getElementById('overlayBtn');

        overlaybtn.addEventListener('click', () => {
            container.classList.toggle('right-panel-active');

            overlaybtn.classList.remove('btnScaled');
            window.requestAnimationFrame(() => {
              overlaybtn.classList.add('btnScaled');
            })
        });