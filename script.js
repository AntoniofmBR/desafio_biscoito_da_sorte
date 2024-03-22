const buttonOpenedCookie = document.getElementById('open_another_cookie')
const closedCookie = document.getElementById('ClosedCookie')
const firstScreen = document.querySelector('.FirstScreen')
const secondScreen = document.querySelector('.SecondScreen')
const phrase = document.getElementById('phrase')

frases_biscoito_da_sorte = [
  "A vida é uma jornada, não um destino.",
  "Grandes coisas estão por vir para aqueles que persistem.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e tudo é possível.",
  "Seja a mudança que você deseja ver no mundo.",
  "As dificuldades preparam pessoas comuns para destinos extraordinários.",
  "A persistência é a chave para o sucesso.",
  "Todo progresso acontece fora da zona de conforto.",
  "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora.",
  "Aprenda com o passado, viva o presente, sonhe com o futuro.",
  "A sorte favorece a mente preparada.",
  "Pequenos atos de bondade podem fazer uma grande diferença.",
  "Um sorriso é o idioma universal da bondade.",
  "As melhores coisas da vida são gratuitas: amor, risos e amizade.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "O segredo da felicidade é a liberdade, o segredo da liberdade é a coragem.",
  "Seja gentil sempre que possível. É sempre possível.",
  "A vida é curta, sorria enquanto ainda tem dentes!",
  "Seja a mudança que você deseja ver no mundo.",
  "Tudo o que você pode imaginar é real."
]



firstScreen.addEventListener("click", () => {
  firstScreen.id = 'hide'
  phrase.textContent = frases_biscoito_da_sorte[Number(Math.round(Math.random() * 20))]
  secondScreen.removeAttribute('id')
});

buttonOpenedCookie.addEventListener("click", () => {
  secondScreen.id = 'hide'
  phrase.textContent = frases_biscoito_da_sorte[Number(Math.round(Math.random() * 20))]
  firstScreen.removeAttribute('id')
})
