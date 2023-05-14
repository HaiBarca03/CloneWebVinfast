//slide
var images = [
    "./assets/img/VinFast-VF8-VF9-electric-SUV-cars.mp4",
    "./assets/img/slide-home.jpg",
  ];
  var num = 0;
  
  function next() {
    var slider = document.getElementById("slide");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
  }
  
  function prev() {
    var slider = document.getElementById("slide");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
  }

// chuyển trang xe máy
function test11(){
  console.log('óke');
  const xxx = document.querySelector('.high-class');
  // xxx.classList.toggle('.actMid');
  xxx.classList.remove('.testRemove');
}

