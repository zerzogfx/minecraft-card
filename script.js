var imgs = [
    
    {
      src: "/images/mine.png",
      background: "#362c38"
    },
    {
      src: "/images/mine2.png",
      background: "#4bb4de"
    },
    {
      src: "/images/mine3.png",
      background: "#555632"
    },
    {
      src: "/images/mine4.png",
      background: "#b56e8d"
    }
  ];
  var currentImg = 0;
  
  function miFuncion(n) {
    var img = document.getElementById('img');
    var body = document.querySelector("body");
    currentImg = (currentImg + n) % imgs.length;
    if (currentImg < 0) {
        currentImg = imgs.length - 1;
    }
    img.src = imgs[currentImg].src;
    body.style.backgroundColor = imgs[currentImg].background;
  }