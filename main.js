// Logo
let logo = document.createElement("div");
let logoText = document.createTextNode("Product Page");
logo.style.cssText = "color:#3CB371;font-weight: bold;font-size: 30px";
logo.appendChild(logoText);
document.body.appendChild(logo);
// Head
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255);justify-content: space-between;align-items: center;";
document.body.append(header);
// Menu
let menu = document.createElement("ul");
menu.style.cssText = "display:flex;list-style-type:none;padding:0px;margin:0px";
// li of Menu
let one = document.createElement("li");
let oneText = document.createTextNode("Home");
one.style.cssText = "margin-right:30px";
one.appendChild(oneText);

let two = document.createElement("li");
let twoText = document.createTextNode("About");
two.style.cssText = "margin-right:30px";
two.appendChild(twoText);

let three = document.createElement("li");
let threeText = document.createTextNode("Service");
three.style.cssText = "margin-right:30px";
three.appendChild(threeText);

let four = document.createElement("li");
let fourText = document.createTextNode("Contact");
four.style.cssText = "margin-right:30px";
four.appendChild(fourText);

menu.append(one);
menu.append(two);
menu.append(three);
menu.append(four);
header.append(logo);
header.append(menu);

// The Products
// First the div of the page
let cot = document.createElement("div");
cot.style.cssText = "background-color:#eeeeee;display:flex;flex-wrap:wrap;justify-content:center;gap: 20px;;box-sizing: border-box;padding:10px;";

// Then the products
for (i = 1 ; i < 16;i++) {
    let container = document.createElement("div");
    container.style.cssText = "padding:20px; color:black;border-radius: 1em;background-color:white;margin-top:8px;width: calc((100% - 200px) / 3);text-align:center;"

    let productHead = document.createElement("h2");
    let proHeadText = document.createTextNode(`${i}`);
    productHead.style.cssText="color:black;font-size:30px";
    productHead.append(proHeadText);
    
    let paragrah = document.createElement("p");
    let paragrahText = document.createTextNode("Product");
    paragrah.style.cssText="color:grey;";
    paragrah.append(paragrahText);

    container.appendChild(productHead);
    container.appendChild(paragrah);
    cot.append(container);
}

document.body.append(cot);
// Footer 
let foot = document.createElement("footer");
let footText = document.createTextNode("Copyright 2024");
foot.style.cssText = "text-align: center; font-size: 1.5rem; color: white; background-color: #126c51; padding: 16px"
foot.appendChild(footText);
document.body.append(foot);

window.document.title ="Product"