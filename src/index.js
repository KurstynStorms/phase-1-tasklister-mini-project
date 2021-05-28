document.addEventListener("DOMContentLoaded", () => {
  const unorderedList = document.querySelector('#tasks')
  const form = document.querySelector('#create-task-form')
  const input = document.querySelector("#new-task-description")
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    const newListItem = document.createElement('li') 
    unorderedList.appendChild(newListItem)
    newListItem.textContent = input.value
    input.value = ""
    const newDeleteButton = document.createElement('button')
    newListItem.append(newDeleteButton)
    newDeleteButton.textContent = "Delete"
    newDeleteButton.addEventListener('click', function(event){
      newListItem.parentNode.removeChild(newListItem)
      })
  })
})



