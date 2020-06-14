//BOOLEAN
let landingIsOpen = false;
let blogIsOpen = false;
let ShopIsOpen = false;
let AppIsOpen = false;

//NAV BUTTONS
let button_landing = document.getElementById("button_landing");
let button_blog = document.getElementById("button_blog");
let button_shop = document.getElementById("button_shop");
let button_android = document.getElementById("button_android");

//NAV BG
let button_landing_bg = document.getElementById("button_landing_bg");
let button_blog_bg = document.getElementById("button_blog_bg");
let button_shop_bg = document.getElementById("button_shop_bg");
let button_android_bg = document.getElementById("button_android_bg");

//GROUPS
let group_landing = document.getElementById("product-frame__title_landing");
let group_blog = document.getElementById("product-frame__title_blog");
let group_shop = document.getElementById("product-frame__title_shop");
let group_android = document.getElementById("product-frame__title_Android");

//INIT EVENTS
button_landing.onclick = OpenLending;
button_blog.onclick = OpenBlog;
button_shop.onclick = OpenShop;
button_android.onclick = OpenAndroid;


//FUNCTION
function CloseAll(dontclose){
    group_landing.classList.remove("product-frame_visible");
    group_blog.classList.remove("product-frame_visible");
    group_shop.classList.remove("product-frame_visible");
    group_android.classList.remove("product-frame_visible");
    button_landing_bg.classList.remove("main__nav-item_active");
    button_blog_bg.classList.remove("main__nav-item_active");
    button_shop_bg.classList.remove("main__nav-item_active");
    button_android_bg.classList.remove("main__nav-item_active");
}
function OpenLending(){
    if (group_landing.classList.contains("product-frame_visible")){
        CloseAll();
    }
    else{
        CloseAll();
        group_landing.classList.add("product-frame_visible");
        landingIsOpen = true;
        button_landing_bg.classList.add("main__nav-item_active");
    }
}
function OpenBlog(){
    if (group_blog.classList.contains("product-frame_visible")){
        CloseAll();
    }
    else{
        CloseAll();
        group_blog.classList.add("product-frame_visible");
        blogIsOpen = true;
        button_blog_bg.classList.add("main__nav-item_active");
    }
}
function OpenShop(){
    if (group_shop.classList.contains("product-frame_visible")){
        CloseAll();
    }
    else{
        CloseAll();
        group_shop.classList.add("product-frame_visible");
        shopgIsOpen = true;
        button_shop_bg.classList.add("main__nav-item_active");
    }
}
function OpenAndroid(){
    if (group_android.classList.contains("product-frame_visible")){
        CloseAll();
    }
    else{
        CloseAll();
        group_android.classList.add("product-frame_visible");
        AppIsOpen = true;
        button_android_bg.classList.add("main__nav-item_active");
    }
}