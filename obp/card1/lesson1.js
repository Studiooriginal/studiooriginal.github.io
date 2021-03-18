
// document.onclick = clickobje;

// function clickobje(e) {
//     e.preventDefault();
//     // e.target.style.visibility = 'hidden';
//     return console.log(e.target) + console.log(e.target.className) + console.log(e.target.id);
// }


// width: 600px
// height: 450px
// pricel.style.top = (event.clientY - 140) + 'px';
// pricel.style.left = (event.clientX - 125) + 'px';
// ["Авиагоризонт", "230", "210"],
// ["Радар", "172", "408"],
// ["Указатель поворота и скольжения", "230", "270"],
// ["Указатель пространственного положения", "30", "270"],


let arrQwest = [
    ["Авиагоризонт", "230", "210"],
    ["Радар", "172", "408"],
    ["Указатель поворота и скольжения", "230", "270"],
    ["Указатель пространственного положения", "30", "270"],



]

renderGame(arrQwest);
clickname("#hiden__qwest");

// devPan("#img__qwest");


function renderGame(arr) {

    let targe = "";
    let qwest = "";

    for (let i = 0; i < arr.length; i++) {

        targe += '<div id="pv' + (i + 1) + '"></div>';

        qwest += '<p id="ot' + (i + 1) + '">' + arr[i][0] + '</p>';

    }

    document.querySelector("#hiden__qwest").innerHTML = targe;
    document.querySelector("#answers").innerHTML = qwest;

    for (let i = 0; i < arr.length; i++) {

        let gpsTop = "#pv" + (i + 1);
        document.querySelector(gpsTop).style.top = arr[i][1] + "px";

        let gpsLeft = "#pv" + (i + 1);
        document.querySelector(gpsLeft).style.left = arr[i][2] + "px";

    }

    // console.log(qwest);
    // console.log(targe);
}



function clickname(a) {
    document.querySelector(a).onclick = clickobj;

    function clickobj(e) {
        e.preventDefault();
        e.target.style.opacity = '1';
        e.target.style.transition = '0.8s';
        e.target.style.border = "2px solid rgb(43, 125, 192)";

        let pv = e.target.id;
        let ot = '#ot' + pv[2];

        document.querySelector(ot).style.transition = '0.8s';
        document.querySelector(ot).style.background = "rgb(107 181 204)";

        // return console.log(e.target) + console.log(e.target.className) + console.log(e.target.id);
    }
}


function devPan(a) {

    document.querySelector("#devPen").style.display = 'block';

    let qwestText = document.querySelector("#qwestText");
    let mass = document.querySelector("#mass2");
    let obj = document.querySelector(a);
    let pricel = document.querySelector('#pricel');
    pricel.style.display = 'block';
    let elem = document.getElementById('gpsP');

    obj.addEventListener('click', function (event) {



        mass.innerHTML += '["' + qwestText.value + '","' + (event.clientY - 140) + '","' + (event.clientX - 125) + '"],';
    });

    obj.addEventListener('mousemove', function (event) {

        elem.innerHTML = (event.clientY - 140) + ' : ' + (event.clientX - 125);
        pricel.style.top = (event.clientY - 140) + 'px';
        pricel.style.left = (event.clientX - 125) + 'px';

    });

}

// need["еу", "360", "450"],
// ["еу", "325", "430"],

