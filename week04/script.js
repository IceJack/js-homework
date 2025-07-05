gsap.from(".line01", {
    x: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 0,
});

gsap.from(".line02", {
    x: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 0.5,
});
gsap.from(".line03", {
    x: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 1,
});
gsap.from(".line06", {
    y: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 0.25,
});
gsap.from(".line05", {
    y: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 0.75,
});
gsap.from(".line04", {
    y: 1500,
    opacity: 0,
    duration: 1.5,
    ease: "back.out",
    delay: 1.25,
});

gsap.from(".i2", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 1.25,
});

gsap.from(".i4", {
    x: 500,
    y: -300,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 1.45,
});

gsap.from(".i5", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 1.65,
});

gsap.from(".i1", {
    y: -300,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    delay: 1.55,
});

gsap.from(".i3", {
    scale: 0.0,
    duration: 1.2,
    ease: "expo.out",
    delay: 1.75,
});

gsap.from(".i7", {
    opacity: 0.0,
    rotation: 90,
    duration: 1,
    delay: 1.85,
});

gsap.from(".i10", {
    opacity: 0.0,
    rotation: -90,
    duration: 1,
    delay: 2.15,
});

gsap.from(".i12", {
    y: 0,
    opacity: 0.0,
    rotation: -180,
    duration: 1,
    delay: 2.45,
});

gsap.from(".i17", {
    y: 300,
    opacity: 0.0,
    duration: 1,
    delay: 2.25,
    ease: "bounce.out",
});
gsap.from(".i18", {
    y: 300,
    opacity: 0.0,
    duration: 1,
    delay: 2.45,
    ease: "sine.out",
});

gsap.from(".i14", {
    x: -400, // 원래 위치까지 이동
    opacity: 0.0,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.5,
});

gsap.from(".i14", {
    y: 20,
    duration: 0.1,
    repeat: 10, // 위아래 왕복 횟수 (2번 진동)
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.5, // x 이동과 동시에 시작
});

gsap.from(".i13", {
    scaleY: 0,
    opacity: 0.0,
    ease: "back.out",
    duration: 1,
    delay: 2.2, // x 이동과 동시에 시작
});

gsap.from(".i6", {
    scaleY: 0,
    opacity: 0.0,
    rotation: 360,
    ease: "back.out",
    duration: 1,
    delay: 3.5, // x 이동과 동시에 시작
});

gsap.from(".i8", {
    x: -200, // 왼쪽에서 날아오고
    y: 100, // 위에서 시작해서
    opacity: 0,
    duration: 1.3,
    delay: 2.2,
    ease: "bounce.out", // 튕기듯 착지
});

gsap.from(".i9", {
    scale: 0.0,
    duration: 1.2,
    ease: "expo.out",
    delay: 1.95,
});

gsap.from(".i11", {
    scale: 0.0,
    duration: 1.2,
    ease: "expo.out",
    delay: 2.15,
});

gsap.from(".i15", {
    y: 300,
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 2.8,
});
