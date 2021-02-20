let classOn = document.querySelectorAll(".question").forEach((item, i) => {
  item.addEventListener("click", function Clicked() {
    let id = this.id;
    DeselectQuestion(id);
    switch (id) {

      case id:
        let bolded = document.getElementById(id).getElementsByTagName("h3")[0].style.fontWeight = 'bold';
        let hidden = document.querySelector(`.hidden-text-${id}`).style.display = "block";
        let arrowRotate = document.querySelectorAll(".question img")[id - 1].style.transform = "rotate(180deg)";

        break;

      default:
        console.log(whichQuestion);


    }
  });
});

function DeselectQuestion(id) {
  const disable = document.querySelectorAll(".question").forEach(num => {
    if (num.id != id) {
      let close = document.querySelector(`.hidden-text-${num.id}`).style.display = "none";
      document.getElementById(num.id).getElementsByTagName("h3")[0].style.fontWeight = '400';
      let arrowRotate = document.getElementById(num.id).getElementsByTagName("img")[0].style.transform = "rotate(0)";

    }
  });

}
