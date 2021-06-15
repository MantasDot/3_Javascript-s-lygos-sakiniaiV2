function Didziausias() {
    let A, B, C;
    A = document.getElementById("Pirmas").value;
    B = document.getElementById("Antras").value;
    C = document.getElementById("Trecias").value;
    document.getElementById("Atsakymas").value = Math.max (A, B, C);
}