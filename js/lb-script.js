function OpenLBWin() {
    var url =
        arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "https://www.hothref.xyz";
    var delay =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    if (typeof Storage === "undefined") {
        return console.log("Sorry！Don't support Web Storage ..");
    }

    var minutes = 1000 * 60;

    this.openWin = function() {
        localStorage.removeItem("openBeforeTime");
        localStorage.setItem("openBeforeTime", new Date().getTime());
        // window.location.href = url;
        window.open(url,"",'top=0,left=0,width=1200,height=700,toolbar=yes, menubar=no, scrollbars=no, resizable=no, location=no, status=no,center:no');
    };

    if (!localStorage.getItem("openBeforeTime")) {
        localStorage.setItem("openBeforeTime", new Date().getTime());
        // window.location.href = url;
        //window.open(url,"","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=1200, height=750");
        window.open(url,"",'top=0,left=0,width=1200,height=700,toolbar=yes, menubar=no, scrollbars=no, resizable=no, location=no, status=no,center:no');
        return;
    }

    var BeforeTime = localStorage.getItem("openBeforeTime");
    var timeout = (new Date().getTime() - BeforeTime) / minutes; // console.log(BeforeTime,timeout,timeout >= delay)

    if (timeout >= delay) {
        this.openWin();
    }
}
