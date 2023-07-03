const addTaxa = function (preco) {
  const taxa = 10

  if (preco >= 100) {
    taxa = 5
  }
  preco += preco * (taxa / 100)
  return preco
}
addTaxa(200)
document.getElementById