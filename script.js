/*
=========================================
 Government of the Treekian Union
 Official Government Portal
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});


window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 40) {

        nav.classList.add("sticky");

    } else {

        nav.classList.remove("sticky");

    }

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


console.log("Government Portal Loaded Successfully");
