
let arrAnsver = [
    ['cardTest1', 'img1.jpg', 'Силовой набор фюзеляжа состоит из:', 'r', 'Шпангоутов, лонжеронов, стрингеров, балок и нервюр;', 'g', 'Шпангоутов, силовых балок, стрингеров, обшивки;', 'g', 'Шпангоутов, лонжеронов, стрингеров, нервюр, нервюр и обшивки;'],
    ['cardTest2', ' ', 'Действия лётного экипажа в случае непреднамеренных отклонений ВС оттекущего плана полета', 'r', 'Выполняет полёт по плану, корректируя параметры полета. Если ВС отклонилось от линии пути, корректирует курс для выхода на ЛЗП и информирует об этом орган ОВД;', 'g', 'Корректирует курс, если ВС отклонилось от линии пути, информирует орган ОВД, если время пролета очередного пункта отличается более чем на 2 минуты от расчётного;', 'g', 'Может произвести посадку на ближайшем аэродроме из-за опасных метеорологических явлениях на маршруте;'],

]


render('#cardTests', arrAnsver)

routerTest(0, "#menu", "#cardTests>div");

ansver('#cardTests')



function render(target, arr) {

    let cardS = '';


    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] !== ' ') {
            cardS += templateCard(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);
        }
        else cardS += templateCardNotImg(arr[i][0], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);

    }

    function templateCard(id, img__src, pV, ans1, pO1, ans2, pO2, ans3, pO3) {
        return '<div id="' + id + '">' +
            '<img src="' + img__src + '" alt="">' +
            '<p>' + pV + '</p>' +
            '<div id="otvet">' +
            '<div id="' + ans1 + '" data-ans="r">' + pO1 + '</div>' +
            '<div id="' + ans2 + '" data-ans="g">' + pO2 + '</div>' +
            '<div id="' + ans3 + '" data-ans="g">' + pO3 + '</div>' +
            '</div>' +
            '</div>'
    }

    function templateCardNotImg(id, pV, ans1, pO1, ans2, pO2, ans3, pO3) {
        return '<div id="' + id + '">' +
            '<p>' + pV + '</p>' +
            '<div id="otvet">' +
            '<div id="' + ans1 + '" data-ans="r">' + pO1 + '</div>' +
            '<div id="' + ans2 + '" data-ans="g">' + pO2 + '</div>' +
            '<div id="' + ans3 + '" data-ans="g">' + pO3 + '</div>' +
            '</div>' +
            '</div>'
    }

    document.querySelector(target).innerHTML = cardS;

}

function routerTest(activCard, menu, cardS) {

    let activ = activCard;

    let cardTests = document.querySelectorAll(cardS);

    document.querySelector('#moveLeft').onclick = cardLeft;

    document.querySelector('#moveRight').onclick = cardRight;

    function cardLeft() {
        if (activ == 0) {
            // console.log("start");
        }
        else activ = activ - 1;

        pere(activ, cardTests);
    }

    function cardRight() {
        if (activ == (cardTests.length - 1)) {
            // console.log("end");
        }
        else activ = activ + 1;

        pere(activ, cardTests);
    }

    pere(activ, cardTests)

    function pere(shou, arr) {
        document.querySelector('#nVp').innerHTML = shou + 1;
        for (let i = 0; i < arr.length; i++) {
            if (shou == i) {
                arr[i].style.display = 'block';
            }
            else arr[i].style.display = 'none';
        }
    }

}

function ansver(target) {
    document.querySelector(target).onclick = clickobj;

    function clickobj(e) {
        e.preventDefault();

        // let targetId = e.target.id;
        // console.log(targetId)

        let dataAns = e.target.getAttribute('data-ans')

        if (dataAns == "r") {
            e.target.style.background = "#f39797";
        }
        if (dataAns == "g") {
            e.target.style.background = "rgb(178 243 151)";
        }

    }
}