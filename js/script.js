window.onload = function() {
    var pack = document.getElementById('js-pack');
    var plane = document.getElementById('js-stage');
    var inner = document.getElementById('js-inner');
    var reset = document.getElementById('js-reset');
    var hideOuter = document.getElementById('js-hide-outer');
    var hideTop = document.getElementById('js-hide-top');
    var hideInner = document.getElementById('js-hide-inner');
    var hideCigarettes = document.getElementById('js-hide-cigarettes');

    hideOuter.onclick = function () {
        pack.classList.toggle('outside--hidden');
        this.innerHTML = this.innerHTML === "hide outer pack" ? "show outer pack" : "hide outer pack";
    };
    hideInner.onclick = function () {
        pack.classList.toggle('inside--hidden');
        this.innerHTML = this.innerHTML === "hide inner pack" ? "show inner pack" : "hide inner pack";
    };
    hideTop.onclick = function () {
        pack.classList.toggle('top--hidden');
        this.innerHTML = this.innerHTML === "hide top pack" ? "show top pack" : "hide top pack";
    };
    hideCigarettes.onclick = function () {
        pack.classList.toggle('cigarette--hidden');
        this.innerHTML = this.innerHTML === "hide cigarettes" ? "show cigarettes" : "hide cigarettes";
    };

    var xDeg = 0;
    var yDeg = 0;
    var zDeg = 0;

    var xInc = document.getElementById('js-x-inc');
    var xDec = document.getElementById('js-x-dec');
    var yInc = document.getElementById('js-y-inc');
    var yDec = document.getElementById('js-y-dec');
    var zInc = document.getElementById('js-z-inc');
    var zDec = document.getElementById('js-z-dec');

    var interval;

    window.onmouseup = function() {
        clearInterval(interval);
    };

    reset.onclick = function () {
        xDeg = 0;
        yDeg = 0;
        zDeg = 0;
        pack.style.transform = "rotate3d(1,0,0,0deg)";
        inner.style.transform = "rotate3d(0,1,0,0deg)";
        plane.style.transform = "translateZ(60px) translate(-50%, -50%) rotate3d(0,0,1,0deg)";
    };

    xInc.onmousedown = function() {
        interval = setInterval(function() {
            xDeg += 1;
            pack.style.transform = "rotate3d(1,0,0," + xDeg + "deg)"
        });
    },
    xDec.onmousedown = function() {
        interval = setInterval(function() {
            xDeg -= 1;
            pack.style.transform = "rotate3d(1,0,0," + xDeg + "deg)"
        });
    },
    yInc.onmousedown = function() {
        interval = setInterval(function() {
            yDeg += 1;
            inner.style.transform = "rotate3d(0,1,0," + yDeg + "deg)";
        });
    },
    yDec.onmousedown = function() {
        interval = setInterval(function() {
            yDeg -= 1;
            inner.style.transform = "rotate3d(0,1,0," + yDeg + "deg)";
        });
    },
    zInc.onmousedown = function() {
        interval = setInterval(function() {
            zDeg += 1;
            plane.style.transform = "translateZ(60px) translate(-50%, -50%) rotate3d(0,0,1," + zDeg + "deg)";
        });
    },
    zDec.onmousedown = function() {
        interval = setInterval(function() {
            zDeg -= 1;
            plane.style.transform = "translateZ(60px) translate(-50%, -50%) rotate3d(0,0,1," + zDeg + "deg)";
        });
    }

};