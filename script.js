const $startBtn = document.getElementById('startBtn')
const $listError = document.getElementById('list')
const $wrapperGame = document.getElementsByClassName('wrapperGame')[0]
const $wrapperStart = document.getElementsByClassName('wrapperStart')[0]
const $btnAnswer = document.getElementById('btnAnswer')
const $inputAnswer = document.getElementById('inputAnswer')
const $inputWord = document.getElementById('inputWord')
const $inputAsk = document.getElementById('inputAsk')
const $question = document.getElementById('question')
const $listLetters = document.getElementsByClassName('listLetters')[0]


$startBtn.addEventListener('click', function () {
    const nameWord = $inputWord.value
    const question = $inputAsk.value

    document.getElementById('inputWord').value = ""
    document.getElementById('inputAsk').value = ""
    $wrapperStart.style.display = 'none'
    $wrapperGame.style.display = 'block'

    $question.innerHTML = question
    brokenWord(nameWord)
})


function brokenWord(nameWord) {
    const arreyWord = nameWord.split([]) //разбиение слова в масив

    console.log(arreyWord.length)
    console.log(arreyWord)

    for (const letter of arreyWord) {
        $listLetters.insertAdjacentHTML("beforeend", `<div class="letter"><span class="leterDispley">${letter}</span></div>`)
    }

    $btnAnswer.addEventListener('click', function () {
        const answer = $inputAnswer.value
        document.getElementById('inputAnswer').value = ""
        check(arreyWord, answer)
    })

}

function check(arreyWord, answer) {
    console.log('top', arreyWord, answer)
    let pos = arreyWord.indexOf(answer);
    console.log(pos)

    if (pos == -1) {
        $listError.insertAdjacentHTML("beforeend", `<div><span">${answer}</span></div>`)
    } else {
        const letter = document.getElementsByClassName('letter')[pos]
        let jo = letter.childNodes[0]
        console.log(jo)
        jo.classList.remove('leterDispley')
    }

}