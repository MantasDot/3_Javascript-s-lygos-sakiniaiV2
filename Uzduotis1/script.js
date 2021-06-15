"use strict";

function Didesnis() {
    let A, B;
    A = document.getElementById("Skaicius_Pirmas").value;
    B = document.getElementById("Skaicius_Antras").value;
    document.getElementById("Atsakymas").value = Math.max (A, B);
}