const before_loading = 
    document.getElementById("content-before-loading");
before_loading.style.display = "block";
let truth = `Robin ist blöd   `;
let length = document.documentElement.clientWidth * 0.01;
function getInformation() {
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            const new_div = document.createElement("div");
            new_div.className = "spam";
            new_div.innerHTML = truth.repeat(length) ;
            before_loading.appendChild(new_div);
        }
    }, 1000);
}

window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight * 0.25
    ) {
        getInformation();
    }
});
getInformation();
