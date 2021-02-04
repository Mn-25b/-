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
            let pres = arreyWord
            check(pres, arreyWord, answer.toUpperCase())

        }

    })

    $inputAnswer.addEventListener('focus', function () {
        $mesegErrorAns.style.display = 'none'
    })
}
let checkWin = 0
function check(pres, arreyWord, answer) {

    console.log(arreyWord)
    console.log(pres)
    let pos = arreyWord.indexOf(answer);
    console.log(pos)
    if (pos == -1) {
        $listError.insertAdjacentHTML("beforeend", `<div><span>${answer}</span></div>`)
        fori()
    }
    pres.forEach((item, index, array) => {
        let arrayCheck = []
        console.log(`${item} имеет позицию ${index} в ${array}`)
        if (answer === item) {
            const letter = document.getElementsByClassName('letter')[index]
            let jo = letter.childNodes[0]
            console.log(jo)
            delete pres[index]
            jo.classList.remove('leterDispley')
            if (letter.className !== 'leterDispley') {
                ++checkWin
            }
        }
        console.log(checkWin, arreyWord.length)
        if (checkWin === arreyWord.length) {
            end()
            $textResult.innerHTML = 'поздравляю вы победили!'
        }
    });



}

let errorLetter = 0
function fori() {
    ++errorLetter
    $errorCouns.innerHTML = (`<div><span> ${errorLetter}</span></div>`)
    peple(errorLetter)
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
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
function peple(clicks) {
    if (clicks == 1) {
        ctx.moveTo(230, 290);
        ctx.lineTo(290, 290);
        ctx.stroke();
    } else if (clicks == 2) {
        ctx.moveTo(260, 290);
        ctx.lineTo(260, 20);
        ctx.stroke();
    } else if (clicks == 3) {
        ctx.moveTo(260, 20);
        ctx.lineTo(120, 20);
        ctx.stroke()
    } else if (clicks == 4) {
        ctx.moveTo(220, 20);
        ctx.lineTo(260, 60);
        ctx.stroke()
    } else if (clicks == 5) {
        ctx.moveTo(120, 20);
        ctx.lineTo(120, 60);
        ctx.stroke()
    } else if (clicks == 6) {
        ctx.beginPath()
        ctx.arc(120, 90, 30, 0, Math.PI * 2, true)
        ctx.stroke()
    } else if (clicks == 7) {
        ctx.moveTo(120, 120);
        ctx.lineTo(120, 210);
        ctx.stroke()
    } else if (clicks == 8) {
        ctx.moveTo(120, 150);
        ctx.lineTo(80, 160);
        ctx.stroke()
    } else if (clicks == 9) {
        ctx.moveTo(120, 150);
        ctx.lineTo(160, 160);
        ctx.stroke()
    } else if (clicks == 10) {
        ctx.moveTo(120, 210);
        ctx.lineTo(100, 250);
        ctx.stroke()
    } else {
        ctx.moveTo(120, 210);
        ctx.lineTo(140, 250);
        ctx.stroke()
    }
}
