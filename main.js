const vitorias = 10;
const derrotas = 2;

function saldoVitoria(win, lose){
    return win-lose;
}

function calcularElo(saldoVitorias){
  if(saldoVitorias <= 10){
    return "Ferro";
  }else if(saldoVitorias <= 20){
    return "Bronze";
  }else if(saldoVitorias <= 50){
    return "Prata";
  }else if(saldoVitorias <= 80){
    return "Ouro";
  }else if(saldoVitorias <= 90){
    return "Diamante";
  }else if(saldoVitorias <= 100){
    return "Lendário";
  }else{
    return "Imortal";
  }
}

console.log("O Herói tem de saldo de " + saldoVitoria(vitorias, derrotas) + " está no nível de " + calcularElo(saldoVitoria(vitorias, derrotas)));