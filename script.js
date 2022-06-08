const listContainer = document.querySelector('[data-lists]')
let lists = [{
    id: 1, name: 'List1'
},{
    id: 2, name: 'List2'
}]

function render(){
    clearElement(listContainer)
    lists.forEach(list =>{
        const listElement = document.createElement('li')
        listElement.classList.add("list-name")
        listElement.dataset.listId = list.id
        listElement.innerText = list.name
        listContainer.appendChild(listElement)
    })
}
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
render()