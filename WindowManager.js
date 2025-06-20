
let isDragging = false
let offsetX
let offsetY
let Window = document.getElementById("Window0");
let FrontManager = 1000000

//---------------------------------------------------------------------

document.getElementById("Window0").addEventListener('mouseup', BringToFront0)
document.getElementById("WinGUI0").addEventListener("mousedown", e => {
    Window = document.getElementById("Window0")
    BringToFront0()
    isDragging = true;
    offsetX = e.clientX - Window.offsetLeft;
    offsetY = e.clientY - Window.offsetTop;
});

function BringToFront0() {
    FrontManager ++
    let element = document.getElementById("Window0")
    element.style.zIndex = FrontManager; 
    console.log(element.style.zIndex)
    document.getElementById("AppName").innerHTML  = "Welcome!"
}

function OpenWindow0(){
    Window = document.getElementById("Window0")
    Window.style.display = "block"
    BringToFront0()
    document.getElementById("AppName").innerHTML  = "Welcome!"
}

document.getElementById("Close0").addEventListener('mouseup', CloseWindow0)

function CloseWindow0(){
    Window = document.getElementById("Window0")
    Window.style.display = "none";
    TopBarClear()
}
//--

//---------------------------------------------------------------------

document.getElementById("Window1").addEventListener('mouseup', BringToFront1)
document.getElementById("WinGUI1").addEventListener("mousedown", e => {
    Window = document.getElementById("Window1")
    BringToFront1()
    isDragging = true;
    offsetX = e.clientX - Window.offsetLeft;
    offsetY = e.clientY - Window.offsetTop;
});

function BringToFront1() {
    FrontManager ++
    let element = document.getElementById("Window1")
    element.style.zIndex = FrontManager; 
    console.log(element.style.zIndex)
    document.getElementById("AppName").innerHTML  = "Applet0"
}

function OpenWindow1(){
    Window = document.getElementById("Window1")
    Window.style.display = "block"
    BringToFront1()
}

document.getElementById("Close1").addEventListener('mouseup', CloseWindow1)

function CloseWindow1(){
    Window = document.getElementById("Window1")
    Window.style.display = "none";
    TopBarClear()
}

//---------------------------------------------------------------------

document.getElementById("Window2").addEventListener('mouseup', BringToFront2)
document.getElementById("WinGUI2").addEventListener("mousedown", e => {
    Window = document.getElementById("Window2")
    BringToFront2()
    isDragging = true;
    offsetX = e.clientX - Window.offsetLeft;
    offsetY = e.clientY - Window.offsetTop;
});

function BringToFront2() {
    FrontManager ++
    let element = document.getElementById("Window2")
    element.style.zIndex = FrontManager; 
    console.log(element.style.zIndex)
    document.getElementById("AppName").innerHTML  = "Procicitator"
}

function OpenWindow2(){
    Window = document.getElementById("Window2")
    Window.style.display = "block"
    BringToFront2()
}

document.getElementById("Close2").addEventListener('mouseup', CloseWindow2)

function CloseWindow2(){
    Window = document.getElementById("Window2")
    Window.style.display = "none";
    TopBarClear()
}

//---------------------------------------------------------------------

document.getElementById("Window3").addEventListener('mouseup', BringToFront3)
document.getElementById("WinGUI3").addEventListener("mousedown", e => {
    Window = document.getElementById("Window3")
    BringToFront3()
    isDragging = true;
    offsetX = e.clientX - Window.offsetLeft;
    offsetY = e.clientY - Window.offsetTop;
});

function BringToFront3() {
    FrontManager ++
    let element = document.getElementById("Window3")
    element.style.zIndex = FrontManager; 
    console.log(element.style.zIndex)
    document.getElementById("AppName").innerHTML  = "Confirmation"
}

function OpenWindow3(){
    Window = document.getElementById("Window3")
    Window.style.display = "block"
    BringToFront3()
    console.log("BLING💍")}

document.getElementById("Close3").addEventListener('mouseup', CloseWindow3)

function CloseWindow3(){
    Window = document.getElementById("Window3")
    Window.style.display = "none";
    document.getElementById("AppName").innerHTML = "Desktop"
    TopBarClear();
}
//---------------------------------------------------------------------

document.getElementById("Window4").addEventListener('mouseup', BringToFront4)
document.getElementById("WinGUI4").addEventListener("mousedown", e => {
    Window = document.getElementById("Window4")
    BringToFront4()
    isDragging = true;
    offsetX = e.clientX - Window.offsetLeft;
    offsetY = e.clientY - Window.offsetTop;
});

function BringToFront4() {
    FrontManager ++
    let element = document.getElementById("Window4")
    element.style.zIndex = FrontManager; 
    console.log(element.style.zIndex)
    document.getElementById("AppName").innerHTML  = "Settings"
}

function OpenWindow4(){
    Window = document.getElementById("Window4")
    Window.style.display = "block"
    BringToFront4()
    console.log("BLING💍")
    CloseWindow0();

    document.getElementById("AllABTR").style.animationName = "SlideInQA"
    document.getElementById("AllABTR").style.display = "block";
    document.getElementById("NotifTitle").innerHTML = "Some Options Not Implemented";
    document.getElementById("NotifDesc").innerHTML = "Some options in this app are not done yet!";
    document.getElementById("AllABTR").addEventListener('mouseup', CloseNotification)
    document.getElementById("NotifImg").style.backgroundImage = "url(System_Imagery/Other/Err0r.png)";
    setTimeout(CloseNotification, 5000);
}

document.getElementById("Close4").addEventListener('mouseup', CloseWindow4)

function CloseWindow4(){
    Window = document.getElementById("Window4")
    Window.style.display = "none";
    document.getElementById("AppName").innerHTML = "Desktop"
    TopBarClear();
}

//---------------------------------------------------------------------

document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    Window.style.position = "fixed";
    Window.style.top = (e.clientY - offsetY) + "px";
    Window.style.left = (e.clientX - offsetX) + "px";
});

function TopBarClear(){
    console.log("Hello1")
    setTimeout(function() {document.getElementById("AppName").innerHTML = "Desktop"}, 10);
    console.log("Hello2")
}

function WindowClear(){
    CloseWindow0
    CloseWindow1
    CloseWindow2
    CloseWindow3
    CloseWindow4
}
    document.addEventListener("mouseup", () => isDragging = false);

    div = document.createElement("div");
    div.className = "taskBarIcons";
    div.id = "Hello!";
    div.style.backgroundImage = "url(System_Imagery/Other/Settings.png)";
    div.addEventListener("mouseup", OpenWindow4);
    document.getElementById("Taskbar").appendChild(div);
