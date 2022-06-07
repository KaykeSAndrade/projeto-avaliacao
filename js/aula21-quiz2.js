/* Aula 20 MaiaQuiz  */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')
let somPerdeu = document.querySelector('#somPerdeu')


// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  // ADICIONE
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : 'Escritorio.png',  // ADICIONE
    pergunta     : "O que Seria um Risco Engonomico?",
    alternativaA : "São todas as condiçoes que afetam a audição do trabalhador",
    alternativaB : "São todas as condiçoes que afetam o bem-estar sejam elas fisicas,mentais ou organizacionias",
    alternativaC : "Unicamente situações que afetam fisicamente o trabalhador",
    alternativaD : "Situações físicas e mentais",
    correta      : "São todas as condiçoes que afetam o bem-estar sejam elas fisicas,mentais ou organizacionias",
}
const q2 = {
    numQuestao   : 2,
    imagem       : 'extintores.png',  // ADICIONE
    pergunta     : "qual extintor utilizar em caso de incendio que tenha componentes eletronicos?",
    alternativaA : "Tipo A",
    alternativaB : "Tipo B",
    alternativaC : "Tipo BC",
    alternativaD : "Tipo K",
    correta      : "Tipo BC",
}
const q3 = {
    numQuestao   : 3,
    imagem       : 'Questao3.png',  // ADICIONE
    pergunta     : "NR35 esta relacionado a qual treinamento?",
    alternativaA : "Treinamento em altura",
    alternativaB : "Treinamento espaço confinado",
    alternativaC : "Brigada de Incendio",
    alternativaD : "Treinamento de segurança elettrica",
    correta      : "Treinamento em altura",
}
const q4 = {
    numQuestao   : 4,
    imagem       : 'escada.png',  // ADICIONE
    pergunta     : "Quais equipamentos necessarios para esse funcionario trabalhar com segurança?",
    alternativaA : "Capacete com jugular, talabarte, linha de vida, bota de segurança,luva, cordas, oculos de segurança",
    alternativaB : "Capacete de segurança, cinto paragueditas, talabate, linha de vida, luva, cordas",
    alternativaC : "Capacete de segurança, oculos de proteção, luva, protetores auditivo, respiradadores",
    alternativaD : "Capacete de segurança, bota, protetor auriculares, abafador",
    correta      : "Capacete com jugular, talabate, linha de vida, bota de segurança,luva, cordas, oculos de segurança",
}
const q5 = {
    numQuestao   : 5,
    imagem       : 'Pergunta5.jpg',  // ADICIONE
    pergunta     : " O que é trabalhar em altura de acordo com a NR 35?",
    alternativaA : "Atividade executadadas abaixo de 2 metros",
    alternativaB : "Trabalho executado acima de 2 metros",
    alternativaC : "Toda atividade em que altura seja de 3 metros e meio",
    alternativaD : "É considerado qualquer tipo de altura",
    correta      : "Trabalho executado acima de 2 metros",
}
const q6 = {
    numQuestao   : 6,
    imagem       : 'Pergunta6.png',  // ADICIONE
    pergunta     : "Quais são os riscos ocupacionais?",
    alternativaA : "Fisicos,Quimicos,Biologico,Acidente,Ergonomicos",
    alternativaB : "Fisicos,Biologico,Quimicos,Ergonomicos,Acidente,Mental Psicologico",
    alternativaC : "Mental Psicologico,Quimico,Fisico,Erconomico,Acidente",
    alternativaD : "Fisico,Quimico,Psicologico,Ergonomico,Acidente,Biologico",
    correta      : "Fisicos,Quimicos,Biologicos,Acidente e Ergonomicos",
}
const q7 = {
    numQuestao   : 7,
    imagem       : 'questao7.png',  // ADICIONE
    pergunta     : "O que é um ruido de impacto?",
    alternativaA : "É aquele que é ouvido a distâncias curtas ou longas",
    alternativaB : "Aquele que apresenta picos de energia acustica de duração inferior a 1 segundo e intervalos superior a 1 segundo",
    alternativaC : "Aquele que apresenta picos de energia com duração superior a 1 segundo e com intervalos inferio a 1 segundo",
    alternativaD : "É definido por intervalos e por não ser ruído contínuo",
    correta      : "Aquele que apresenta picos de energia acustica de duração inferior a 1 segundo e intervalos superior a 1 segundo",
}
const q8 = {
    numQuestao   : 8,
    imagem       : 'questaoo8.png',  // ADICIONE
    pergunta     : "Qual o limite de disposição ao ruído diário aconselhavel ao funcionario exposto a 8 horas de trabalho?",
    alternativaA : "86 dB(A)",
    alternativaB : "88 dB(A)",
    alternativaC : "85 dB(A)",
    alternativaD : "88 dB (A)",
    correta      : "85 dB(A)",
}
const q9 = {
    numQuestao   : 9,
    imagem       : 'pergunta9.jpg',  // ADICIONE
    pergunta     : "Quais são os Três tipos de ruídos?",
    alternativaA : "Sonoro - Audivel - Suportavel",
    alternativaB : "Continuo - Intermitente - Sonoro",
    alternativaC : "Intermitente - Audivel - Insurdecedor",
    alternativaD : "intermitente - Continuo - Impacto",
    correta      : "intermitente - Continuo - Impacto",
}
const q10 = {
    numQuestao   : 10,
    imagem       : 'sesmt.jpg',  // ADICIONE
    pergunta     : "Qual a finalidade do SESMIT",
    alternativaA : "É promover a expansão de seus profissionais a diversos segmentos e empresas",
    alternativaB : "É promover a boa convivência entre empresa e funcionarios",
    alternativaC : "É responsavel direta e indiretamente pela CIPA",
    alternativaD : "É promover medidas de saúde ocapacionais dentro das organizações",
    correta      : "É promover medidas de saúde ocapacionais dentro das organizações",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

if(pontos < 50) {
    somPerdeu
} else {
    
}


function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
