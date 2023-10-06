function porcentagem(n1, n2){
    return (n2/n1)*100
}
let x = 50
let y = 20
let pct = porcentagem(x, y);
console.log(`${pct}% de ${x} é ${y}`)