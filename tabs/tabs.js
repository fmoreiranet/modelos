(function () {
    var tabs = document.querySelectorAll(".tab")
    tabs.addEventListener("click", function (e) {
        selectTab(e, this);
    });

})();

function selectTab(event, obj) {
    console.log(event.target);
    console.log(obj);
}