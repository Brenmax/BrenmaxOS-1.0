//----------------------------------------------------------------

function Settings_Page1(){
    SettingPages_Clear()
    document.getElementById("Page1Set").style.display = "block"
}


document.getElementById("BackSet").addEventListener("mouseup", () => {
    Settings_Page1()
})

//----------------------------------------------------------------

function Settings_Page2(){
    SettingPages_Clear()
    document.getElementById("Page2Set").style.display = "block"
    document.getElementById("BackSet").style.display = "block"
}

document.getElementById("ButtonSetting1").addEventListener("mouseup", () => {
    Settings_Page2()
})

//----------------------------------------------------------------

function Settings_Page3(){
    SettingPages_Clear()
    document.getElementById("Page3Set").style.display = "block"
    document.getElementById("BackSet").style.display = "block"
}

document.getElementById("ButtonSetting2").addEventListener("mouseup", () => {
    Settings_Page3()
})

//----------------------------------------------------------------

function Settings_Page4(){
    SettingPages_Clear()
    document.getElementById("Page4Set").style.display = "block"
    document.getElementById("BackSet").style.display = "block"
}

document.getElementById("ButtonSetting3").addEventListener("mouseup", () => {
    Settings_Page4()
})

//----------------------------------------------------------------

function Settings_Page5(){
    SettingPages_Clear()
    document.getElementById("Page5Set").style.display = "block"
    document.getElementById("BackSet").style.display = "block"
}

document.getElementById("ButtonSetting6").addEventListener("mouseup", () => {
    Settings_Page5()
})

//----------------------------------------------------------------
function SettingPages_Clear(){
    document.getElementById("Page1Set").style.display = "none"
    document.getElementById("Page2Set").style.display = "none"
    document.getElementById("Page3Set").style.display = "none"
    document.getElementById("Page4Set").style.display = "none"
    document.getElementById("Page5Set").style.display = "none"
    document.getElementById("BackSet").style.display = "none"
}

document.getElementById("ButtonSetting3").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting4").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting5").addEventListener("mouseup", () => {Settings_Page4()})
// document.getElementById("ButtonSetting6").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting7").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting8").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting9").addEventListener("mouseup", () => {Settings_Page4()})
document.getElementById("ButtonSetting10").addEventListener("mouseup", () => {Settings_Page4()})

//----------------------------------------------------------------

function Wallpaper1(){
document.body.style.backgroundImage = "url(System_Imagery/Other/RoundWallpaper.png)"
document.cookie = "Wallpaper=1; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
}

function Wallpaper2(){
document.body.style.backgroundImage = "url(System_Imagery/Other/RichMansCave.jpg)"
document.cookie = "Wallpaper=2; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
}

function Wallpaper3(){
document.body.style.backgroundImage = "url(System_Imagery/Other/NewWallpaper.png)"
document.cookie = "Wallpaper=3; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
}

    document.getElementById("Wallpaper1OP").addEventListener("mouseup", Wallpaper1)
    document.getElementById("Wallpaper11P").addEventListener("mouseup", Wallpaper2)
    document.getElementById("Wallpaper12P").addEventListener("mouseup", Wallpaper3)
    document.getElementById("button2736").addEventListener("mouseup", ResetSystem)

if (getCookie("Wallpaper") == 3){
    document.body.style.backgroundImage = "url(System_Imagery/Other/NewWallpaper.png)"
}else if(getCookie("Wallpaper") == 2){
    document.body.style.backgroundImage = "url(System_Imagery/Other/RichMansCave.jpg)"
}else if(getCookie("Wallpaper") == 1){
    document.body.style.backgroundImage = "url(System_Imagery/Other/RoundWallpaper.png)"
}else{
    document.body.style.backgroundImage = "url(System_Imagery/Other/NewWallpaper.png)"
}

function ResetSystem() {
    clearCookies();
    DesktopHide()
    document.getElementById("Window0").style.display = "none";
    document.getElementById("Window1").style.display = "none";
    document.getElementById("Window2").style.display = "none";
    document.getElementById("Window3").style.display = "none";
    document.getElementById("Window4").style.display = "none";

    if(MenuOpen){
        document.getElementById("QuickAccess").style.display = "none"
        document.getElementById("QuickAccess").style.animationName = "SlideInQA1"
        document.getElementById("QuickAccess").style.display = "flex"
            setTimeout(() => {
                document.getElementById("QuickAccess").style.display = "none"
            }, 150);
        MenuOpen = false
        return;
    }

    document.getElementById("AllABTR").style.display = "none"

    document.getElementById("ShutdownUI").style.display = "block";
        setTimeout(() => {
         window.location.reload();
    }, 3000);
}

Settings_Page1()
