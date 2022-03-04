//* ======================================================
//*                    CALLBACK
//* ======================================================


// const increment = () => {
//     const counter = document.querySelector("#counter");
//     counter.textContent = Number(counter.textContent) + 1;
// }


document.querySelector("button").addEventListener("click", () => {
    const counter = document.querySelector("#counter");
    counter.textContent = Number(counter.textContent) + 1;
});

// increment()




