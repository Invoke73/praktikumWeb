const inputValue = document.querySelector('input');
const addButton = document.querySelectorAll('.addButton');
const listContainer = document.querySelector('.list');

addButton.forEach(button => {
    button.addEventListener('click', () => {
        if (inputValue.value === "") {
            alert("Please enter some text."); // Memastikan input tidak kosong
            return; // Keluar dari fungsi jika input kosong
        }
        
        const newListContainer = document.createElement('div')
        const newText = document.createElement('span')
        const newButton = [document.createElement('button'), document.createElement('button')]
        const newButtonContainer = document.createElement('div')

        newListContainer.className = 'list-item'
        newText.innerHTML = inputValue.value
        
        newButtonContainer.className = 'buttonContainer'
        
        newButton[0].className = 'editButton'
        newButton[0].innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
        newButton[0].addEventListener('click', () => {
            const editValue = prompt("Edit your text", newText.innerHTML)
            if (editValue === "") {
                alert("Please enter some text."); // Memastikan input tidak kosong
                return; // Keluar dari fungsi jika input kosong
            }
            newText.innerHTML = editValue
        })

        newButton[1].className = 'deleteButton'
        newButton[1].innerHTML = '<i class="fa-solid fa-trash"></i>'
        newButton[1].addEventListener('click', () => {
            newListContainer.remove()
        })
        
        newButtonContainer.append(newButton[0],newButton[1])
        newListContainer.append(newText,newButtonContainer)  
        listContainer.appendChild(newListContainer)

        inputValue.value = ""
    })
})
    


