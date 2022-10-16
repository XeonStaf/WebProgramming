function mark_current_page() {
    let file = document.location.pathname.split("/");
    file = file[file.length - 1];

    let navs = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navs.length; i++)
    {
        let elem = navs[i].innerHTML;
        if (elem.includes(file) > 0)
            navs[i].firstElementChild.classList.add("active")
    }
}


(function () {
    function ready() {
        let loaded = Date.now();
        document.getElementById("load-speed").outerText = ((loaded - now_time) / 1000).toString();
    }

    let now_time = Date.now();
    document.addEventListener("DOMContentLoaded", ready);
    document.addEventListener("DOMContentLoaded", mark_current_page);
})();




