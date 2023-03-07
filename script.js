function addElement(target,tag,content){
    let root = document.querySelector(target)
    let element = document.createElement(tag)
    element.innerText = content 
    root.appendChild(element)
}
addElement("body","h1","Hello World")