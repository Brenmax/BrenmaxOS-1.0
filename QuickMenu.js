document.getElementById("MenuClic").addEventListener("mousedown",ToggleQuickMenu)
document.getElementById("DesktopShape").addEventListener("mousedown",() => {

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
        
})

document.getElementById("QuickAccess").style.display = "none"

let MenuOpen = false;
function ToggleQuickMenu() {
    if(MenuOpen){

        document.getElementById("QuickAccess").style.display = "none"
        document.getElementById("QuickAccess").style.animationName = "SlideInQA1"
        document.getElementById("QuickAccess").style.display = "flex"
            setTimeout(() => {
                document.getElementById("QuickAccess").style.display = "none"
            }, 150);
        MenuOpen = false
        return;
    }else{
        document.getElementById("QuickAccess").style.animationName = "SlideInQA"
        document.getElementById("QuickAccess").style.display = "flex"

        MenuOpen = true
    }
}
