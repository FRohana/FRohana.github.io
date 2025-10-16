"use strict";
const MyBlogs = [
    {
        title: "How I Built My Portfolio Website",
        date: "10-14-2025",
        description: "Through Hack4Impact's bootcamp, I learned web development from the ground up starting with HTML structure, moving to CSS styling, and now mastering JavaScript. This site is the result of that journey, built entirely from scratch as I progressed through each module.",
        image: "websiteSS.png",
        imageAlt: "Screenshot of my portfolio website homepage",
        slug: "how-i-built-my-website.html",
    },
    {
        title: "Why I Got Into Computer Engineering",
        date: "10-14-2025",
        description: "My journey into computer engineering started in seventh grade when I built my first custom PC. After that build, my passion grew through coding projects in Python and Java, where I developed applications like a painting program and discovered how I loved creating things with code. Then, working in my school's Maker Lab, I fell in love not only with code but with hardware too. I learned to design circuits, etch circuit boards, and understand how physical components power the systems I was programming. Eventually, I built a whack-a-mole arcade game where I designed the circuit board, programmed the logic, and 3D modeled the cabinet, combining both passions. That's why I love computer engineering. It's perfect for me because it bridges software and hardware, letting me work in two disciplines I'm passionate about.",
        image: "fullgame.jpg",
        imageAlt: "Completed whack-a-mole arcade game with wooden cabinet and button controls",
        additionalImages: [
            {
                src: "wires.jpg",
                alt: "Inside view of the arcade game showing Arduino microcontroller, breadboard, and circuit wiring",
                caption: "The hardware side: designing and wiring the circuit board with an Arduino to control the game logic and button inputs",
            },
        ],
        slug: "why-im-doing-ce.html",
    },
];
const blogContainer = document.getElementById("blog-container");
MyBlogs.forEach((blog) => {
    const div = document.createElement("div");
    div.className = "blog-post-container";
    const linktoblog = document.createElement("a");
    linktoblog.textContent = "Read More";
    linktoblog.href = "blogs/" + blog.slug;
    const titlemaker = document.createElement("h2");
    titlemaker.textContent = blog.title;
    const datemaker = document.createElement("p");
    datemaker.textContent = blog.date;
    const descriptionmaker = document.createElement("p");
    descriptionmaker.textContent = blog.description;
    const mainImage = document.createElement("img");
    mainImage.src = blog.image;
    mainImage.alt = blog.imageAlt;
    div.append(mainImage, titlemaker, datemaker, descriptionmaker, linktoblog);
    if (blog.additionalImages) {
        blog.additionalImages.forEach((additionalImg) => {
            const imgContainer = document.createElement("div");
            imgContainer.className = "additional-image-container";
            const img = document.createElement("img");
            img.src = additionalImg.src;
            img.alt = additionalImg.alt;
            const caption = document.createElement("p");
            caption.className = "image-caption";
            caption.textContent = additionalImg.caption;
            imgContainer.append(img, caption, linktoblog);
            div.appendChild(imgContainer);
        });
    }
    if (blogContainer) {
        blogContainer.append(div);
    }
});
//# sourceMappingURL=blog.js.map