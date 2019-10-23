var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {    
    var quickresourcetopdiv = document.querySelectorAll('#quickresourcetopdiv');
    for (var i = 0; i < quickresourcetopdiv.length; i++) {
        quickresourcetopdiv[i].classList = 'col-md-6';
    }

    var divHomeEntrySelection = document.querySelector('.divHomeEntrySelection');
    divHomeEntrySelection.classList.remove('col-lg-8');
    divHomeEntrySelection.classList.remove('col-md-10');
    divHomeEntrySelection.classList += ' col-md-6';
    divHomeEntrySelection.style.float = 'right';

    var resourceTiles = document.querySelector('.resource-tiles');
    resourceTiles.classList += ' col-md-6';
    resourceTiles.style.marginTop = '-395px';
}