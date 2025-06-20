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
document.getElementById("proceedoobe").addEventListener("mouseup", OOBE_Finnished)

function System_Shutdown(){
    clearCookies()
    window.close()
}

function OOBE_Start(){
    document.getElementById("oobeback").style.display = "block";
}

function OOBE_Finnished(){
    document.getElementById("OOBEContainer").style.display = "none";
    document.cookie = "FirstTime=true; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    DesktopStart()
}

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

    document.getElementById("RC-2817").addEventListener("mousedown", () => {
        Window = document.getElementById("Window3")
        Window.style.display = "block"
        BringToFront3()
        console.log("BLING💍")
    })

