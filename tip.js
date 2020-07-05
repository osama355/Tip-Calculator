function calculation() {
    var a = document.getElementById("amount").value;
    var b = document.getElementById("tip_per").value;

    var c = (a * b) / 100;
    document.getElementById("tipAmount").value = c;

    var d = parseInt(a) + parseInt(c);
    document.getElementById("totalBill").value = d;
}