function showResult() {
    const pF = document.getElementById("pF").value;
    const nF = document.getElementById("nF").value;
    const uF = document.getElementById("uF").value;
    const F = document.getElementById("F").value;

    let result;

    if (pF) {
      result = pFtoAll(pF);
    } else if (nF) {
      result = nFtoAll(nF);
    } else if (uF) {
      result = uFtoAll(uF);
    } else if (F) {
      result = FtoAll(F);
    } else {
      alert("Por favor, ingrese un valor en alguna de las unidades.");
      return;
    }

    document.getElementById("pF").value = result.pF;
    document.getElementById("nF").value = result.nF;
    document.getElementById("uF").value = result.uF;
    document.getElementById("F").value = result.F;
  }

  function clearInputs() {
    document.getElementById("pF").value = "";
    document.getElementById("nF").value = "";
    document.getElementById("uF").value = "";
    document.getElementById("F").value = "";
  }