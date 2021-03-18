


document.querySelector("#star").onclick = starLesson;

document.querySelector("#menu").onclick = openMenu;

let arrRenderMainLesson = [

    ['cardLesson2', 'cardWrep', 'cardLes', 'Упражнение для летчиков № 1', 'Аэродинамика для всех. Взлёт самолёта'],
    ['cardLesson3', 'cardWrep', 'cardLes', 'Упражнение для летчиков № 2', 'Навигация и самолетовождение'],
    ['cardLesson1', 'cardWrep', 'cardLes', 'Упражнение для летчиков № 3', 'Приборная панель самолета'],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
    ['cardLesson3', 'cardWrep', 'cardLes', ' ', ' '],
]

renderMainLesson("#mainLesson", arrRenderMainLesson);

let arrMainLesson = ['#mainLesson', '#cardLesson', 'card']

router(arrMainLesson);


function starLesson() {
    loaderAdd('#cover')
    document.querySelector("#cover").style.display = 'none';
}

function renderMainLesson(target, arr) {

    let mainLesson = '';

    for (let i = 0; i < arr.length; i++) {
        mainLesson += templateCardLesson(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4],);
    }

    function templateCardLesson(id, classWrep, classCard, h, p) {
        return '<div id="' + id + '" class="' + classWrep + '"><div id="' + id + '" class="' + classCard + '"> <h3 id="' + id + '">' + h + '</h3><p id="' + id + '">' + p + '</p> </div> </div>'
    }

    render(target, mainLesson);

    function render(a, b) {
        let = document.querySelector(a).innerHTML = b;

    }
}

function router(arr) {
    console.log('переменная arr[0] =' + arr[0]);

    let main = document.querySelector('#mainLesson');
    console.log('переменная main =' + main);
    main.onclick = clickobj2;

    function clickobj2(e) {
        e.preventDefault();
        let target = e.target.id;
        console.log('переменная target =' + target);
        let aim = arr[2] + target[target.length - 1];
        console.log('переменная aim =' + aim);
        let src = aim + '/' + aim + '.html'
        console.log('переменная src =' + src);

        document.querySelector("#fremelesson").src = src;

        loaderAdd('#mainLesson');

        document.querySelector("#mainLesson").style.display = 'none';

    }
}

function loaderAdd(a) {

    let perent = document.querySelector(a).parentNode;

    let before = document.querySelector(a);

    let loader = document.createElement('div');
    loader.className = "loader";
    loader.innerHTML = '<img class="imgloader" src="img/sinLoader.gif" alt="">';
    console.log('переменная loader =' + loader);

    perent.insertBefore(loader, before);
    loaderRemove = document.querySelector(".loader")

    setTimeout(() => loaderRemove.remove(), 200);

}

function openMenu() {
    document.querySelector("#mainLesson").style.display = '';
}






