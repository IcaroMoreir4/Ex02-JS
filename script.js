function livro(nome, ano, autor) {
    const nomeMaiusculo = nome.toUpperCase();
    const totalAno = 2024 - ano;
    const info = nome + " por " + autor;

    const objeto = {
        nome: nomeMaiusculo,
        totalAno,
        info,
    };
    return objeto;
};

const livroRetorno = livro('O Senhor dos Anéis', 1954, "J. R. R. Tolkien");

console.log(livroRetorno.info);




