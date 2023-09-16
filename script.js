/*Nesse desafio você irá criar uma lista de **estudantes** e, 
  cada estudante dentro dessa lista, deverá conter os 
  seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas 
       de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**,
       verifique **se** cada aluno obteve sucesso ou não 
       em entrar no concurso e mostre uma mensagem na tela. 
*/


let studentsList = [

    {
        name: "Maria",
        nota1: 10,
        nota2: 10,  
    },

    {
        name: "Joana",
        nota1: 6.3,
        nota2: 4,  
    },

    {
        name: "Batista",
        nota1: 5,
        nota2: 7.1,  
    }
]

function calcAverage(nota1, nota2) {
    let calcAverage = (nota1 +nota2) / 2;
    return calcAverage;
}


for (let student of studentsList){

    const verifyCalcAverage = calcAverage(student.nota1, student.nota2)

    if(verifyCalcAverage >= 7){
        alert(`Parabéns ${student.name} você foi aprovado(a) com média ${verifyCalcAverage}, no concurso!`)
    }else{
        alert(`O(a) Estudante ${student.name} foi reprovado com média ${verifyCalcAverage} no concurso!`)
    }
}




