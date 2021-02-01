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
const $errorCouns = document.getElementById('errorCouns')
const $textResult = document.getElementById('textResult')
const $endGame = document.getElementById('endGame')


$startBtn.addEventListener('click', function () {
    const nameWord = $inputWord.value
    const question = $inputAsk.value

    const checkWord = nameWord.split([])
    const checkQuestion = question.split([])

    if (checkQuestion.length === 0) {
        styleErrorValue2('вы ничего не вели')
    } else if (checkWord.length === 0) {
        styleErrorValue('вы ничего не вели')
    } else if (checkArray(checkWord) === true) {
        styleErrorValue(`Не должно быть пропусков, используйте <span>_</span>`)
    } else {
        document.getElementById('inputWord').value = ""
        document.getElementById('inputAsk').value = ""
        $wrapperStart.style.display = 'none'
        $wrapperGame.style.display = 'block'

        $question.innerHTML = question

        brokenWord(nameWord.toUpperCase())
    }

})

function styleErrorValue(attText) {
    const $mesegErrorWord = document.getElementById('mesegErrorWord')
    $mesegErrorWord.innerHTML = attText
    $mesegErrorWord.style.display = 'block'
    $inputWord.style.height = '80px'
    $inputWord.style.paddingBottom = '20px'
}
function styleErrorValue2(attText) {
    const $mesegErrorQust = document.getElementById('mesegErrorQust')
    $mesegErrorQust.innerHTML = attText
    $mesegErrorQust.style.display = 'block'
    $inputAsk.style.height = '80px'
    $inputAsk.style.paddingBottom = '20px'
}






function checkArray(my_arr) {
    for (let i = 0; i < my_arr.length; i++) {
        if (my_arr[i] === ' ') {
            return true
        }
    }
    return false
}

function brokenWord(nameWord) {
    const arreyWord = nameWord.split([])

    console.log(arreyWord.length)
    console.log(arreyWord)

    for (const letter of arreyWord) {
        if (letter === '_' || letter === '-') {
            $listLetters.insertAdjacentHTML("beforeend", `<div class="letter"><span class="blur">${letter}</span></div>`)
        } else {
            $listLetters.insertAdjacentHTML("beforeend", `<div class="letter"><span class="leterDispley">${letter}</span></div>`)
        }
    }

    $btnAnswer.addEventListener('click', function () {
        const answer = $inputAnswer.value
        if (answer == '') {
            const $mesegErrorAns = document.getElementById('mesegErrorAns')
            $mesegErrorAns.innerHTML = 'вы ничего не ввели'
            $mesegErrorAns.style.display = 'block'
            $inputAnswer.style.height = '80px'
            $inputAnswer.style.paddingBottom = '20px'
        } else {
            document.getElementById('inputAnswer').value = ""
            check(arreyWord, answer.toUpperCase())

        }

    })
}

function check(arreyWord, answer) {

    arreyWord.forEach((item, index, array) => {
        console.log(`${item} имеет позицию ${index} в ${array}`)
        if (answer === item) {
            const letter = document.getElementsByClassName('letter')[index]
            let jo = letter.childNodes[0]
            console.log(jo)
            jo.classList.remove('leterDispley')
        }
    });


    let pos = arreyWord.indexOf(answer);
    if (pos == -1) {
        $listError.insertAdjacentHTML("beforeend", `<div><span>${answer}</span></div>`)
        fori()
        
    }

}

let errorLetter = 0
function fori() {
    $errorCouns.innerHTML = (`<div><span> ${++errorLetter}</span></div>`)

    if ( errorLetter == 1) {
        $wrapperGame.style.display = 'none'
        $endGame.style.display = 'flex'
    }
}
