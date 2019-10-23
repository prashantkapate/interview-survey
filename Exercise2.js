$('.flexslider').flexslider("pause");

$(".flex-control-nav li").on("click", function () {    
    var dataId = $(this).attr("data-testid");
    if (dataId == 'rotating_banner_tile_1') {
        var heroBannerNetworking = $('img[alt="Networking"]');
        var heroBannerNetworkingParent = heroBannerNetworking.parent();
        // to set the color 
        heroBannerNetworkingParent.css("background-color", "purple");

        // to change the images
        var heroBannerNetworkingNewImages = heroBannerNetworkingParent.parent().parent().siblings().children();
        var otherCategory = $('img[alt="Cameras, Photo & Video"]');
        var otherCategoryParent = otherCategory.parent().parent().parent().siblings().children();
        for (var i = 0; i < otherCategoryParent.length; i++) {
            heroBannerNetworkingNewImages[i].children[0].children[0].children[0].src = otherCategoryParent[i].children[0].children[0].children[0].src
        }
    } else if (dataId == 'rotating_banner_tile_2') {
        var heroBanner = $('img[alt="Power, Batteries & Adapters"]');
        var heroBannerParent = heroBanner.parent();
        // to set the color 
        heroBannerParent.css("background-color", "green");

        // to calculate the amount
        var heroBannerChildrens = heroBannerParent.parent().parent().siblings().children();
        var totalAmount = 0;
        var currenyFormat = heroBannerChildrens[0].children[1].innerText.replace(/[^$]/g, "")
        for (var i = 0; i < heroBannerChildrens.length; i++) {
            totalAmount += parseFloat(heroBannerChildrens[i].children[1].innerText.replace(/[^.,0-9]/g, ""));
        }
        totalAmount = totalAmount.toFixed(2);
        alert("Total amount for devices is : " + currenyFormat + totalAmount);
    }    
});
