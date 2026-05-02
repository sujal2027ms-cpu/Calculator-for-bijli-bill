

//calculator-program
function btn() {
      let a = Number(document.getElementById('p1').value);
      let b = Number(document.getElementById('p2').value);
      let add = Math.abs(a-b)
      let solve=add*10
      document.getElementById('solve').innerText = "₹" + solve;}


