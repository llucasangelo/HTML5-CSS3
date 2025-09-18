var aluno = document.getElementById("iNome");
var bimestre = document.getElementById("iBimestre");
var n1 = document.getElementById("iProva1");
var n2 = document.getElementById("iProva2");
var n3 = document.getElementById("iTrabalhos");
boletim.innerHTML = ""

function cadastrarAluno(event) {
    event.preventDefault();
    var nome = aluno.value;
    var nota1 = parseFloat(n1.value);
    var nota2 = parseFloat(n2.value);
    var nota3 = parseFloat(n3.value);
    var media = (nota1 + nota2 + nota3) / 3;
    boletim.innerHTML += `
          <tr>
            <th>${nome}</th>
            <th>${nota1}</th>
            <th>${nota2}</th>
            <th>${nota3}</th>
            <th>${media.toFixed(1)}</th>
        </tr>`
    return false;
}