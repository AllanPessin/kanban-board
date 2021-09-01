/**app */
const cards = document.querySelectorAll('.card')
const dropZones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  dropZones.forEach(dropZone => dropZone.classList.add('highlight'))
  this.classList.add('is-dragging')
}


function drag() {

}

function dragend() {
  dropZones.forEach(dropZone => dropZone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

dropZones.forEach(dropZone => {
  dropZone.addEventListener('dragenter', dragenter)
  dropZone.addEventListener('dragover', dragover)
  dropZone.addEventListener('dragleave', dragleave)
  dropZone.addEventListener('dragdrop', dragdrop)
})

function dragenter() {

}

function dragover() {
  this.classList.add('over')
  const cardBeigDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeigDragged)
}

function dragleave() {
  this.classList.remove('over')
}

function dragdrop() {
  this.classList.remove('over')
}


document.getElementById('addCard').addEventListener('click', function () {
  const div = document.createElement('div')
  div.innerHTML = `
    <div class="card" draggable="true">
      <div class="status red"></div>
      <div class="content" id="content">Novo card adicionado</div>
    </div>`

  element = document.querySelector('#dropZone1')
  element.append(div, )
}, false)
