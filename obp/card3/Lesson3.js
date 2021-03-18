let peperLesson = [
    ['teoriL2', 'teoriya'],
    ['videoL2', 'video'],
    ['testL2', 'test']

]

routerPaper(".menu", peperLesson);

function routerPaper(menu, arr) {

    document.querySelector(menu).onclick = clickobj;

    function clickobj(e) {
        e.preventDefault();
        let targetId = e.target.id;

        // console.log(e.target)
        // console.log(e.target.className)
        // console.log(e.target.id)

        for (let i = 0; i < arr.length; i++) {

            console.log('переменная targetId =' + targetId);

            if (targetId == arr[i][0]) {
                let temp1 = '#' + arr[i][1]
                document.querySelector(temp1).style.display = 'block';
            }
            else {
                let temp2 = '#' + arr[i][1]
                document.querySelector(temp2).style.display = 'none';
            }

        }

    }





}

