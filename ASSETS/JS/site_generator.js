//GRIDS
let grid_landing = document.getElementById("product-frame__grid_landing");
let grid_blog = document.getElementById("product-frame__grid_blog");
let grid_shop = document.getElementById("product-frame__grid_shop");
let grid_app = document.getElementById("product-frame__grid_app");

function GenerateLanding(){
    for(let i = 1; i <= COUNT_LANDING; i++){
        let siteFrame = document.createElement('a');
        siteFrame.id = "landing_site_" + i;
        siteFrame.href = LANDING_HREFS[i-1];
        siteFrame.target="_blank";
        let siteImage = document.createElement('img');
        siteImage.classList.add("site_preview");
        siteImage.src="ASSETS/IMG/SITES/LANDING/landing_" + i + ".jpg";
        siteFrame.appendChild(siteImage);
        grid_landing.appendChild(siteFrame);
    }
}
function GenerateBlog(){
    for(let i = 1; i <= COUNT_BLOG; i++){
        let siteFrame = document.createElement('a');
        siteFrame.id = "blog_site_" + i;
        siteFrame.href = BLOG_HREFS[i-1];
        siteFrame.target="_blank";
        let siteImage = document.createElement('img');
        siteImage.classList.add("site_preview");
        siteImage.src="ASSETS/IMG/SITES/BLOG/blog_" + i + ".jpg";
        siteFrame.appendChild(siteImage);
        grid_blog.appendChild(siteFrame);
    }
}
function GenerateShop(){
    for(let i = 1; i <= COUNT_SHOP; i++){
        let siteFrame = document.createElement('a');
        siteFrame.id = "shop_site_" + i;
        siteFrame.href = SHOP_HREFS[i-1];
        siteFrame.target="_blank";
        let siteImage = document.createElement('img');
        siteImage.classList.add("site_preview");
        siteImage.src="ASSETS/IMG/SITES/SHOP/shop_" + i + ".jpg";
        siteFrame.appendChild(siteImage);
        grid_shop.appendChild(siteFrame);
    }
}
function GenerateApp(){
    for(let i = 1; i <= COUNT_APP; i++){
        let siteFrame = document.createElement('a');
        siteFrame.id = "app_site_" + i;
        siteFrame.href = APP_HREFS[i-1];
        siteFrame.target="_blank";
        let siteImage = document.createElement('img');
        siteImage.classList.add("site_preview");
        siteImage.src="ASSETS/IMG/SITES/APP/APP_" + i + ".jpg";
        siteFrame.appendChild(siteImage);
        grid_app.appendChild(siteFrame);
    }
}
//START HERE
GenerateLanding();
GenerateBlog();
GenerateShop();
GenerateApp();