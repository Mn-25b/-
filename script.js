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
const $endInput = document.getElementById('endInput')
const $mesegErrorQust = document.getElementById('mesegErrorQust')
const $mesegErrorWord = document.getElementById('mesegErrorWord')




$startBtn.addEventListener('click', function () {
    const nameWord = $inputWord.value
    const question = $inputAsk.value

    const checkWord = nameWord.split([])
    const checkQuestion = question.split([])


    $inputAsk.addEventListener('focus', function () {
        $mesegErrorQust.style.display = 'none'
    })
    $inputWord.addEventListener('focus', function () {
        $mesegErrorWord.style.display = 'none'
    })

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

    $mesegErrorWord.innerHTML = attText
    $mesegErrorWord.style.display = 'block'
    $inputWord.style.height = '80px'
    $inputWord.style.paddingBottom = '20px'

}
function styleErrorValue2(attText) {

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
    const $mesegErrorAns = document.getElementById('mesegErrorAns')
    $btnAnswer.addEventListener('click', function () {
        const answer = $inputAnswer.value
        if (answer == '' || answer === ' ') {

            $mesegErrorAns.innerHTML = 'вы ничего не ввели'
            $mesegErrorAns.style.display = 'block'
            $inputAnswer.style.height = '80px'
            $inputAnswer.style.paddingBottom = '20px'
        } else {
            document.getElementById('inputAnswer').value = ""
            check(arreyWord, answer.toUpperCase())

        }

    })

    $inputAnswer.addEventListener('focus', function () {
        $mesegErrorAns.style.display = 'none'
    })
}
let checkWin = 0
function check(arreyWord, answer) {

    arreyWord.forEach((item, index, array) => {
        console.log(`${item} имеет позицию ${index} в ${array}`)
        if (answer === item) {
            const letter = document.getElementsByClassName('letter')[index]
            let jo = letter.childNodes[0]
            console.log(jo)
            jo.classList.remove('leterDispley')
            if (letter.className !== 'leterDispley') {
                ++checkWin
            }
        }
        console.log(checkWin)
        console.log(arreyWord.length)
        if (checkWin === arreyWord.length) {
            end()
            $textResult.innerHTML = 'поздравляю вы победили!'
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

    if (errorLetter == 11) {
        end()
        $textResult.innerHTML = 'вы проиграли!'
    }
}


function end() {
    $wrapperGame.style.display = 'none'
    $endGame.style.display = 'flex'

    $endInput.addEventListener('click', function () {
        document.location.reload()
    })
}