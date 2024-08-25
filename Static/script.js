function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
locomotive()

// ------------------------------------------------------------------------
// Page 1 GSAP-Scroll Trigger
// ------------------------------------------------------------------------

var tl = gsap.timeline()

tl.to("#page1 video", {
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "3% top",
    end: "bottom top",
  },
  onStart: () => {
    document.querySelector("#page1 video").play()
  }

}),

  gsap.to("#page1-bottom", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "3% top",
      end: "5% top",
    }
  })

tl.to("#page1 video", {
  width: "65%",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "5% top",
    end: "70% top",
    scrub: 2,
    pin: true,
  }
})

tl.to("#page1 video", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "6% top",
    end: "75% top",
    scrub: true,
    pin: true
  }
})


// ------------------------------------------------------------------------
// Page 2 GSAP-Scroll Trigger
// ------------------------------------------------------------------------

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    pin: true
  }
})


tl2.from("#video1>h1 , #video1>video", {
  bottom: "0%",
  opacity: 0,
  onStart: () => {
    document.querySelector("#video1>video").play()
  }
})

tl2.to("#video1>h1", {
  duration: 1,
  top: "20%"
})

tl2.to("#video1>h1,#video1>video", {
  top: "0%",
  opacity: 0
})

// 

tl2.from("#video2>h1 , #video2>video", {
  bottom: "0%",
  opacity: 0,
  onStart: () => {
    document.querySelector("#video2>video").play()
  }
})

tl2.to("#video2>h1", {
  top: "20%"
})

tl2.to("#video2>h1,#video2>video", {
  top: "0%",
  opacity: 0
})

// 


tl2.from("#video3>h1 , #video3>video", {
  bottom: "0%",
  opacity: 0,
  onStart: () => {
    document.querySelector("#video3>video").play()
  }
})

tl2.to("#video3>h1", {
  top: "20%"
})

tl2.to("#video3>h1,#video3>video", {
  top: "0%",
  opacity: 0
})

// 

tl2.from("#h1-1 , #video4>video", {
  bottom: "0%",
  opacity: 0,
  onStart: () => {
    document.querySelector("#video4>video").play()
  }
})

tl2.to("#h1-1 ", {
  top: "20%"
})

tl2.to("#h1-1 ", {
  top: "10%",
  opacity: 0
})

tl2.from("#h1-2", {
  bottom: "0%",
  opacity: 0,
  onStart: () => {
    document.querySelector("#video4>video").play()
  }
})

tl2.to("#h1-2 ", {
  top: "20%"
})

tl2.to("#h1-2 , #video4>video", {
  top: "0%",
  opacity: 0,
})

// ------------------------------------------------------------------------
// Page 3 GSAP-Scroll Trigger
// ------------------------------------------------------------------------



function myCanva1(canva) {

  const canvas = canva;
  const context = canvas.getContext("2d");

  // Frames of apple vision
  function files(index) {
    const data = `
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_000.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_001.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_002.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_003.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_004.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_005.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_006.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_007.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_008.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_009.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_010.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_011.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_012.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_013.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_014.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_015.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_016.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_017.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_018.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_019.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_020.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_021.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_022.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_023.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_024.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_025.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_026.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_027.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_028.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_029.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_030.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_031.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_032.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_033.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_034.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_035.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_036.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_037.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_038.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_039.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_040.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_041.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_042.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_043.png
    ./Raw/images/apple-vision_pro_000/apple-vision_pro_044.png
     `;
    return data.split("\n")[index];
  }

  const frameCount = 45;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 1,
      trigger: `#page3>canvas`,
      start: `420% top`,
      end: `465% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

}

var myCanvas1 = document.getElementById("myCanvas");
myCanva1(myCanvas1);


var tl3 = gsap.timeline();

tl3.from("#page3-upper-part>img", {
  y: 60,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    // markers : true,
    start: "-50% top", //trigger element , viweport window
    end: "40% 50%",
    scrub: true
  }
})

tl3.from("#page3-upper-part>div", {
  y: 70,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    // markers : true,
    start: "-40% top", //trigger element , viweport window
    end: "40% 50%",
    scrub: true
  }
})

tl3.from("#page3-upper-part>h3", {
  y: 75,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    // markers : true,
    start: "-30% top", //trigger element , viweport window
    end: "40% 50%",
    scrub: true
  }
})

// ------------------------------------------------------------------------
// Page 4 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.from("#video5", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "22% bottom"
  },
  onStart: () => {
    document.querySelector("#video5>video").play()
  }
})

gsap.to("#vid5-text", {
  y: -490,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top top",
    scrub: true,
    pin: true
  }
})

gsap.to("#blackLayer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top top",
    scrub: true,
    // markers : true
  }
})


gsap.to("#video5", {
  scale: 0.9,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top -3%",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 5 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.from("#video6", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page5",
    start: "22% bottom"
  },
  onStart: () => {
    document.querySelector("#video6>video").play()
  }
})

gsap.to("#vid6-text", {
  y: -490,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page5",
    start: "top top",
    scrub: true,
    pin: true
  }
})

gsap.to("#blackLayer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page5",
    start: "top top",
    scrub: true,
    // markers : true
  }
})


gsap.to("#video6", {
  scale: 0.9,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page5",
    start: "top -3%",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 6 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.from("#video7", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page6",
    start: "22% bottom"
  },
  onStart: () => {
    document.querySelector("#video7>video").play()
  }
})

gsap.to("#vid7-text", {
  y: -490,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page6",
    start: "top top",
    scrub: true,
    pin: true
  }
})

gsap.to("#blackLayer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page6",
    start: "top top",
    scrub: true,
    // markers : true
  }
})


gsap.to("#video7", {
  scale: 0.9,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page6",
    start: "top -3%",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 7 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.from("#video8", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "22% bottom"
  },
  onStart: () => {
    document.querySelector("#video8>video").play()
  }
})

gsap.to("#vid8-text", {
  y: -490,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "top top",
    scrub: true,
    pin: true
  }
})

gsap.to("#blackLayer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "top top",
    scrub: true,
    // markers : true
  }
})


gsap.to("#video8", {
  scale: 0.9,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "top -3%",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 8 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


function myCanva2(canva) {

  const canvas = canva;
  const context = canvas.getContext("2d");

  // Frames of apple vision
  function files(index) {
    const data = `
    ./Raw/images/Apple-Vision-Pro-Model-2/0000.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0001.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0002.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0003.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0004.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0005.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0006.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0007.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0008.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0009.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0010.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0011.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0012.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0013.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0014.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0015.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0016.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0017.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0018.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0019.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0020.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0021.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0022.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0023.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0024.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0025.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0026.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0027.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0028.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0029.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0030.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0031.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0032.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0033.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0034.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0035.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0036.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0037.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0038.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0039.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0040.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0041.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0042.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0043.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0044.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0045.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0046.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0047.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0048.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0049.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0050.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0051.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0052.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0053.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0054.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0055.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0056.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0057.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0058.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0059.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0060.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0061.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0062.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0063.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0064.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0065.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0066.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0067.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0068.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0069.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0070.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0071.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0072.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0073.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0074.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0075.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0076.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0077.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0078.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0079.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0080.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0081.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0082.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0083.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0084.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0085.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0086.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0087.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0088.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0089.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0090.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0091.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0092.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0093.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0094.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0095.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0096.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0097.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0098.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0099.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0100.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0101.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0102.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0103.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0104.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0105.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0106.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0107.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0108.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0109.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0110.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0111.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0112.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0113.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0114.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0115.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0116.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0117.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0118.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0119.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0120.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0121.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0122.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0123.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0124.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0125.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0126.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0127.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0128.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0129.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0130.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0131.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0132.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0133.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0134.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0135.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0136.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0137.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0138.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0139.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0140.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0141.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0142.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0143.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0144.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0145.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0146.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0147.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0148.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0149.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0150.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0151.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0152.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0153.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0154.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0155.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0156.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0157.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0158.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0159.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0160.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0161.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0162.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0163.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0164.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0165.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0166.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0167.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0168.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0169.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0170.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0171.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0172.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0173.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0174.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0175.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0176.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0177.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0178.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0179.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0180.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0181.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0182.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0183.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0184.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0185.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0186.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0187.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0188.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0189.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0190.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0191.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0192.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0193.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0194.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0195.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0196.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0197.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0198.jpg
    ./Raw/images/Apple-Vision-Pro-Model-2/0199.jpg
     `;
    return data.split("\n")[index];
  }

  const frameCount = 200;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 1,
      trigger: `#page8`,
      start: `47% top`,
      end: `565% top`,
      scroller: `#main`,
      pin: true
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

}

var myCanvas2 = document.getElementById("page8-canvas");
myCanva2(myCanvas2);

var tl5 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page8",
    start: "47% top",
    end: "622% bottom",
    scrub: true
  }
});

tl5.from("#p8text1", {
  y: 60,
  opacity: 0,
})
tl5.to("#p8text1", {
  y: -60,
  opacity: 0,
})

tl5.from("#p8text2", {
  y: 60,
  opacity: 0
})
tl5.to("#p8text2", {
  y: -60,
  opacity: 0,
})

tl5.from("#p8text3", {
  y: 60,
  opacity: 0
})
tl5.to("#p8text3", {
  y: -60,
  opacity: 0,
})

tl5.from("#p8text4", {
  y: 60,
  opacity: 0
})
tl5.to("#p8text4", {
  y: -60,
  opacity: 0,
})

tl5.from("#p8text5", {
  y: 60,
  opacity: 0
})
tl5.to("#p8text5", {
  y: -60,
  opacity: 0,
})

tl5.from("#p8text6", {
  y: 60,
  opacity: 0
})
tl5.to("#p8text6", {
  y: -60,
  opacity: 0,
})


// ------------------------------------------------------------------------
// Page 9 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.to("#second-part", {

  scrollTrigger: {
    scroller: "#main",
    trigger: "#page9",
    start: "35% bottom",
    // markers : true
  },
  onStart: () => {
    document.querySelector("#second-part>video").play()
  }

})


// ------------------------------------------------------------------------
// Page 10 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.from("#video11", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page10",
    start: "22% bottom",
    // markers : true
  },
  onStart: () => {
    document.querySelector("#video11>video").play()
  }
})

gsap.to("#vid11-text", {
  y: -490,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page10",
    start: "top top",
    scrub: true,
    pin: true
  }
})

gsap.to("#blackLayer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page10",
    start: "top top",
    scrub: true,
    // markers : true
  }
})


gsap.to("#video11", {
  scale: 0.9,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page10",
    start: "top -3%",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 11 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


const carousel = document.querySelector(".carousel");
const backgroundImage = document.querySelector(".bg-image");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;
console.log("totalImages - " + totalImages);

// Use this in your project, if you're doing it locally
// const imageWidth = images[1].getBoundingClientRect().x;

const imageWidth = 1440;
console.log("getbounding1", images[1].getBoundingClientRect());

leftArrow.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
    backgroundImage.src = images[currentIndex].src.slice(0, -3) + "1000";
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 500);
});

rightArrow.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;
  carousel.style.transform = `translateX(${imageWidth}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);


  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
    backgroundImage.src = images[currentIndex].src.slice(0, -3) + "1000";
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 500);
});

// ------------------------------------------------------------------------
// Page 12 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


function myCanva3(canva) {

  const canvas = canva;
  const context = canvas.getContext("2d");

  // Frames of apple vision
  function files(index) {
    const data = `
    ./Raw/images/Apple-vision-canvas/Vision00001.png
    ./Raw/images/Apple-vision-canvas/Vision00002.png
    ./Raw/images/Apple-vision-canvas/Vision00003.png
    ./Raw/images/Apple-vision-canvas/Vision00004.png
    ./Raw/images/Apple-vision-canvas/Vision00005.png
    ./Raw/images/Apple-vision-canvas/Vision00006.png
    ./Raw/images/Apple-vision-canvas/Vision00007.png
    ./Raw/images/Apple-vision-canvas/Vision00008.png
    ./Raw/images/Apple-vision-canvas/Vision00009.png
    ./Raw/images/Apple-vision-canvas/Vision00010.png
    ./Raw/images/Apple-vision-canvas/Vision00011.png
    ./Raw/images/Apple-vision-canvas/Vision00012.png
    ./Raw/images/Apple-vision-canvas/Vision00013.png
    ./Raw/images/Apple-vision-canvas/Vision00014.png
    ./Raw/images/Apple-vision-canvas/Vision00015.png
    ./Raw/images/Apple-vision-canvas/Vision00016.png
    ./Raw/images/Apple-vision-canvas/Vision00017.png
    ./Raw/images/Apple-vision-canvas/Vision00018.png
    ./Raw/images/Apple-vision-canvas/Vision00019.png
    ./Raw/images/Apple-vision-canvas/Vision00020.png
    ./Raw/images/Apple-vision-canvas/Vision00021.png
    ./Raw/images/Apple-vision-canvas/Vision00022.png
    ./Raw/images/Apple-vision-canvas/Vision00023.png
    ./Raw/images/Apple-vision-canvas/Vision00024.png
    ./Raw/images/Apple-vision-canvas/Vision00025.png

     `;
    return data.split("\n")[index];
  }

  const frameCount = 25;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 2,
      trigger: `#page12`,
      start: `20% top`,
      end: `25% top`,
      scroller: `#main`,
      pin: true,
      // markers : true,
    },
    onUpdate: render,
  });

  gsap.from("#belowp12-canvas", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page12",
      scroller: "#main",
      start: `22% top`,
      end: `25% top`,
      scrub: 1,
      // markers : true
    }
  })

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

}

var myCanvas3 = document.getElementById("page12-canvas");
myCanva3(myCanvas3);


gsap.to("#page12-video", {
  scrollTrigger: {
    trigger: "#page12",
    scroller: "#main",
    start: "36% top",
    // markers : true
  },
  onStart: () => {
    document.querySelector("#page12-video").play()
  }

})


gsap.from("#eye-tracking2", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#eye-tracking",
    scroller: "#main",
    // markers : true ,
    start: "10% top",
    end: "45% top",
    scrub: true
  }
})


// ------------------------------------------------------------------------
// Page 13 GSAP-Scroll Trigger
// ------------------------------------------------------------------------


gsap.to("#sensor-vision>video", {
  scrollTrigger: {
    trigger: "#page13",
    scroller: "#main",
    start: "-9% top",
    // markers : true
  },
  onStart: () => {
    document.querySelector("#sensor-vision>video").play()
  }

})


gsap.from("#sensor-chips>img", {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    trigger: "#sensor-chip-container",
    scroller: "#main",
    start: "-70% top",
    end: "-20% top",
    // markers : true,
    scrub: true
  }

})

