class Aluno {
    nome: string;
    idade: number;
    genero: string;
    constructor(n: string, i: number, g: string){
        this.nome = n;
        this.idade =i;
        this.genero = g;
    }
}
let alunoNtchala: Aluno;
alunoNtchala = new Aluno("Ntchala", 15, "M");
console.log("Informacao de aluno :: ",alunoNtchala.genero)
