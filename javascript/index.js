function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "As a quiet little seedling",
        autoStart: true,
        delay: 20,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);



