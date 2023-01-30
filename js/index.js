const setting = document.querySelector(".setting");
const aboutSection= document.querySelector(".about-sec");
const header = window.document.querySelector(".home-sec");
const MY_WINDOW_HEIGHT = window.innerHeight;
     





function movingBar() {
        setting.classList.toggle("active");
}

$(document).ready(function(){

$(".setting-icon").click(function () {
        $(".setting-body").toggle();
  });
      $(".setting-body span").eq(0).css("background-color", "#f25454");
      $(".setting-body span").eq(1).css("background-color", "#4e9cb5");
      $(".setting-body span").eq(2).css("background-color", "#24bca4");
      $(".setting-body span").eq(3).css("background-color", "#c86f98");
      $(".setting-body span").eq(4).css("background-color", "#e4d20c");
      $(".setting-body span").eq(5).css("background-color", "#6b798f");
      

});     
$('.setting-body span').click(function(){
    let colors = $(this).css('background-color')
    $('h2 , h3 ,.service-sec i').css('color' ,colors )
    $(".progress-bar").css("background-color",colors)
}) 


window.addEventListener("scroll", () => {
  if (window.scrollY > MY_WINDOW_HEIGHT - 250) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY > aboutSection.offsetTop -150) {
    
$(".progress-bar").addClass("growing");
  }
});
