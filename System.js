let DragInProg = false;
let DragX = 0;
let DragY = 0;

document.addEventListener("mousedown", () => {document.documentElement.requestFullscreen();})

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null; // Return null if the cookie isn't found
}

function clearCookies() {
    document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
}

console.log(getCookie("FirstTime") + ", Bald Fice"); 
System_Boot()

function System_Boot (){

    if (getCookie("FirstTime") != null){
        setTimeout(() => {
            DesktopStart()
        }, 1000);
    }

    if (getCookie("FirstTime") == null){
            setTimeout(() => {
                document.getElementById("BootBack").style.display = "none";
                OOBE_Start()
                return;
            }, 1000);
    }

}

document.getElementById("B1980218345").addEventListener("mouseup", System_Shutdown)
document.getElementById("B1980218346").addEventListener("mouseup", CloseWindow3)
document.getElementById("PowerOffImg").addEventListener("mouseup", OpenWindow3)
document.getElementById("backoobe").addEventListener("mouseup", OOBE_Next)
document.getElementById("proceedoobe").addEventListener("mouseup", OOBE_Back)

document.getElementById("Oobebut1").addEventListener("mouseup", OpenWindow4)
document.getElementById("Oobebut2").addEventListener("mouseup", CloseWindow0)

document.getElementById("oobewallp1").addEventListener("mouseup", Wallpaper1)
document.getElementById("oobewallp2").addEventListener("mouseup", Wallpaper3)

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

let OOBEPage = 1;

function OOBE_Next() {
    let Howard = document.getElementById("OOBEUserForm1").value
    document.cookie = "UserName=" + Howard;

    if(OOBEPage == 1){
        OOBE_ClearPages()
        document.getElementById("Page2OOBE").style.display = "block";
        OOBEPage ++
    }else if(OOBEPage == 2){
        OOBE_ClearPages()
        document.getElementById("Page3OOBE").style.display = "block";
        OOBEPage ++
        
    }else if(OOBEPage == 3){
        if(document.getElementById("OOBEUserForm1").value != "" && document.getElementById("OOBEUserForm2").value != ""){
        OOBE_ClearPages()
        document.getElementById("Page4OOBE").style.display = "block";
        OOBEPage ++
        }else{
            window.alert ("Enter a valid value")
        }
    }else{
        OOBE_Finnished()
    }
}

function OOBE_ClearPages() {
    document.getElementById("Page1OOBE").style.display = "none";
    document.getElementById("Page2OOBE").style.display = "none";
    document.getElementById("Page3OOBE").style.display = "none";
    document.getElementById("Page4OOBE").style.display = "none";

}

function OOBE_Back() {
console.log(OOBEPage)
    if(OOBEPage == 2){
        OOBE_ClearPages()
        document.getElementById("Page1OOBE").style.display = "block";
        OOBEPage = 1
    }else if(OOBEPage == 3){
        OOBE_ClearPages()
        document.getElementById("Page2OOBE").style.display = "block";
        OOBEPage = 2
    }else if(OOBEPage == 4){
        OOBE_ClearPages()
        document.getElementById("Page3OOBE").style.display = "block";
        OOBEPage = 3
    }
}

function System_Shutdown(){
    DesktopHide()
    document.getElementById("Window0").style.display = "none";
    document.getElementById("Window1").style.display = "none";
    document.getElementById("Window2").style.display = "none";
    document.getElementById("Window3").style.display = "none";
    document.getElementById("Window4").style.display = "none";

    document.getElementById("ShutdownUI").style.display = "block";
    setTimeout(() => {
         window.close()
         document.getElementById("Shutdown").innerHTML = ("Couldn't Shutdown!")
         document.getElementById("SDI").style.display = "none"
    }, 3000);
}

function OOBE_Start(){
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play()
    bgMusic.volume = 0.5;

    document.getElementById("oobeback").style.display = "block";
    document.getElementById("Page1OOBE").style.display = "block";
    document.getElementById("Page2OOBE").style.display = "none";
}

function OOBE_Finnished(){
    document.getElementById("OOBEContainer").style.display = "none";
    document.getElementById("AllABTR").style.display = "block";
    document.cookie = "FirstTime=true; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    DesktopStart()
    OpenWindow0()

        document.getElementById("AllABTR").style.animationName = "SlideInQA"
        document.getElementById("AllABTR").style.display = "block";
        document.getElementById("NotifTitle").innerHTML = "Welcome!";
        document.getElementById("NotifDesc").innerHTML = "Welcome to the BrenmaxOS Operating System.";
        document.getElementById("AllABTR").addEventListener('mouseup', CloseNotification)
        document.getElementById("NotifTitle").innerHTML = "Welcome!";
        document.getElementById("NotifImg").style.backgroundImage = "url(System_Imagery/Iconography/Welcome.png)";
        setTimeout(CloseNotification, 5000);

    const bgMusic = document.getElementById('bgMusic');
    bgMusic.pause();
}

function CloseNotification() {
    document.getElementById("AllABTR").style.display = "none";

    document.getElementById("AllABTR").style.display = "none"
    document.getElementById("AllABTR").style.animationName = "SlideInQA1"
    document.getElementById("AllABTR").style.display = "block"
        setTimeout(() => {
            document.getElementById("AllABTR").style.display = "none"
        }, 150);}

//----------------===================== { Highlight Effect } ===================---------------

let highlight = document.getElementById("DesktopHighlight");

document.getElementById("DesktopShape").addEventListener("mousedown", (e) => {
    DragInProg = true;
    DragX = e.clientX;
    DragY = e.clientY;

    highlight.style.left = DragX + "px";
    highlight.style.top = DragY + "px";
    highlight.style.width = "0px";
    highlight.style.height = "0px";
    highlight.style.display = "block";
});

document.addEventListener("mouseup", () => {
    DragInProg = false;
    highlight.style.display = "none";
});

document.addEventListener("mousemove", (e) => {
    if (DragInProg) {
        const width = e.clientX - DragX;
        const height = e.clientY - DragY;

        highlight.style.width = Math.abs(width) + "px";
        highlight.style.height = Math.abs(height) + "px";

        highlight.style.left = (width < 0 ? e.clientX : DragX) + "px";
        highlight.style.top = (height < 0 ? e.clientY : DragY) + "px";
    }
});

document.getElementById("DesktopShape").addEventListener("contextmenu", (event) => {
    event.preventDefault(); 
    console.log("Right-click detected at:", event.clientX, event.clientY);
    document.getElementById("RightClickMenu1").style.left = event.clientX + "px"
    document.getElementById("RightClickMenu1").style.top = event.clientY + "px"
    document.getElementById("RightClickMenu1").style.display = "block"
});

document.addEventListener("contextmenu", (event) => {event.preventDefault();});
document.addEventListener("mousedown",() => {
    document.getElementById("RightClickMenu1").style.display = "none"
} )

  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    document.getElementById("timeSys").innerHTML = timeString;
  }

  setInterval(updateTime, 1000);
  updateTime();


  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const nows = new Date();
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dateSys").innerHTML = formatDate(nows);
  });

    function System_TaskbarUp(){
        document.getElementById("Taskbar").style.display = "block";
    }

    function System_TaskbarDown(){
        document.getElementById("Taskbar").style.display = "none";
    }

    function TopBar_Up(){
        document.getElementById("TopBar").style.display = "block";
    }

    function TopBar_Down(){
        document.getElementById("TopBar").style.display = "none";
    }

    function DesktopStart(){
        document.getElementById("BootBack").style.display = "none";
        document.getElementById("TopBar").style.display = "block";
        document.getElementById("Taskbar").style.display = "block";
        document.getElementById("DesktopShape").style.display = "block";
    }

    function DesktopHide(){
        document.getElementById("BootBack").style.display = "none";
        document.getElementById("TopBar").style.display = "none";
        document.getElementById("Taskbar").style.display = "none";
        document.getElementById("DesktopShape").style.display = "none";
    }

    document.getElementById("RC-2817").addEventListener("mousedown", () => {
        Window = document.getElementById("Window3")
        Window.style.display = "block"
        BringToFront3()
        console.log("BLING💍")
    })

//--------------------------------------------------------------------------------------------------------------------------------------------------

