


/* =========================
   OC Flip Cards (Mobile)
========================= */

document.querySelectorAll(".oc-card").forEach(card => {

    card.addEventListener("click", function(){

        if(window.innerWidth <= 1100){

            this.classList.toggle("flipped");

        }

    });

});
