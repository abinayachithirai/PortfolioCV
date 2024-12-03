function ThemeDark(){
    document.getElementById("portfolio").style.backgroundColor = "#54575b";
    document.getElementsByTagName("h3")[0].style.color = "#D7338B";
    document.getElementsByTagName("h2")[0].style.color = "white";
    document.getElementsByTagName("h2")[1].style.color = "white";
    document.getElementsByTagName("p")[0].style.color = "white";
    const h3Elements = document.getElementsByTagName("li");
    for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.color = "#D7338B";
    }
}
function ThemeLight(){
    document.getElementById("portfolio").style.backgroundColor = "#F1F7FA";
    document.getElementsByTagName("h3")[0].style.color = "#862ECE";
    document.getElementsByTagName("h2")[0].style.color = "black";
    document.getElementsByTagName("h2")[1].style.color = "black";
    document.getElementsByTagName("p")[0].style.color = "black";
    const h3Elements = document.getElementsByTagName("li");
    for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.color = "#862ECE";
    }
}