function openMenu(){
    let menuBar = document.createElement("div")
    menuBar.classList.add("menu_bar")
    menuBar.innerHTML = `
        <div class="menu_bar-header">
            <h1>L</h1>
            <div class="menu_bar-search">
                <input>
                <i class='bx bx-search' ></i>
            </div>
            <i class='bx bx-x' ></i>
        </div>
    `
   document.body.appendChild(menuBar)
   document.body.classList.add("removeScrool")
}