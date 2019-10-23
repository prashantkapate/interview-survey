var slickTrackItems = document.querySelector('.slick-track');
slickTrackItems.insertBefore(slickTrackItems.childNodes[4], slickTrackItems.childNodes[1]);

var slickTrackSection = document.querySelector('.cat-off-screen-pane');
slickTrackSection.insertBefore(slickTrackSection.children[4], slickTrackSection.children[1]);

var activeElement = document.querySelector('.fran.active');
var catidSelected = activeElement.dataset.catid;

// to add the list
var navActive = document.querySelector('.anav.active');
var itemText = '';
var childrens = navActive.children[1];
var span = null;
var item = document.createElement('div');
for (var i = 0; i < childrens.childElementCount; i++) {
    span = document.createElement('span');
    span.innerHTML = childrens.children[i].children[0].children[0].children[0].innerText;
    span.style.color = "#007db8"
    span.style.marginRight = "7px";
    span.addEventListener("mouseover", hoverEffect, false);
    span.addEventListener("click", clicked, false);
    item.appendChild(span);
}
item.className = 'text-blue';
activeElement.insertBefore(item, activeElement.firstChild);

function hoverEffect(event) {
    this.style.cursor = "pointer";
}
function clicked(event) {
    var navActive = document.querySelector('.anav.active');
    var childrens = navActive.children[1];
    for (var i = 0; i < childrens.childElementCount; i++) {
        var listitems = childrens.children[i].children[1];
        for (var j = 0; j < listitems.childElementCount; j++) {
            var metrics = listitems.children[j].children[0].dataset.metrics
            var textCaption = JSON.parse(metrics).anav_caption;
            if (textCaption == event.currentTarget.innerText) {
                listitems.children[j].children[0].checked = true;
            }// else {
            //     listitems.children[j].children[0].checked = false;
            // }
        }
    }
}