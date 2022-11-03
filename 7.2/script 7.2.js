let budget = 300;

let product = prompt("Voer Bedrag in");
if (product < budget){
    document.getElementById("tekst").style.color = "green";
    document.getElementById("tekst").textContent = "Goed";
    alert("Goed");
}
else {
    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").textContent = "Te Weinig";
    alert("Te Weinig");
}