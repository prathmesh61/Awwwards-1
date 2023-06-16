gsap.from(".nav", {
  duration: 1,
  opacity: 0,
  y: -30,
  scrub: 1,
});
gsap.from(".content h1", {
  duration: 2,
  opacity: 0,
  y: -30,
  delay: 0.5,
  scrub: 1,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start: "75% 50%",
    end: "100% 50%",
    scrub: 5,
    duration: 1,
    pin: true,
  },
});
tl.to(".img", {
  width: "110vw",
  height: "100vh",
});
