function start() {
    let id = null;
    let start = document.getElementById("rolling");
    let end = document.getElementById("rollingend");
    let pos = 11;
    let a = 11;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (a >= 75) {
            if (pos == 11) {
                a = pos;
            };
            pos--;
            start.style.left = pos + "%";
            end.style.right = pos + "%";
        } else {
            pos++;
            a++;
            start.style.left = pos + "%";
            end.style.right = pos + "%";
        }
    }
}