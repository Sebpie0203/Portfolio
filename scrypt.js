let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
	menuIcon.classList.toggle("fa-xmark");
	navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = wondow.scrollZ;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if ((top) => offset && top < offset + height) {
			navLink.forEach((links) => {
				links.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
	let header = document.querySelector("header");

	header.classList.toggle("sticky", window.scrollY > 100);

	menuIcon.classList.remove("fa-xmark");
	navbar.classList.remove("active");
};

scrollReveal({
	reset: true,
	distance: "80px",
	duration: 2000,
	delay: 200,
});

scrollReveal().reveal(".home-content, .heading", { origin: "top" });
scrollReveal().reveal(".home-img, .projects-container, contact-form ", {
	origin: "bottom",
});
scrollReveal().reveal(".home-content h1, .about-img ", { origin: "left" });
scrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });

 const typed = new Typed(".super-text", {
 	strings: ["Frontend Developer", "Dad :)", "Amatour Footbal Player"],
 	typeSpeed: 100,
 	backSpeed: 100,
 	backDelay: 1000,
 	loop: true,
 });
