function main() {
    let growMe = document.getElementById("grow-me");
    growMe.classList.add(".big");

    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    let links = document.querySelectorAll("li");
    console.log(links[0].innerText);
    console.log(links[1].innerText);
    console.log(links[2].innerText);

    let href = document.querySelector(".link");
        href.setAttribute("href, "http://www.example.com" );
        href.innerText = "somewhere";

    let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

    let showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    let name = document.getElementById("name");
}