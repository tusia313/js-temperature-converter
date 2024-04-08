const primaryInput = document.querySelector('#primary-input')
const secondaryInput = document.querySelector('#secondary-input')
const primarySelect = document.querySelector('#primary-unit')
const secondarySelect = document.querySelector('#secondary-unit')

primaryInput.value = 0
secondaryInput.value = 0

console.log('primary input', primaryInput.value)
console.log('secondary input', secondaryInput.value)
console.log('primary select', primarySelect.value)
console.log('secondary select', secondarySelect.value)

function update(e) {
    let element = e.target.id
    console.log(element,' update !')
}

function calculate() {
    console.log('calculate !')
}

primaryInput.addEventListener('change', update)
secondaryInput.addEventListener('change', update)
primarySelect.addEventListener('change', update)
secondarySelect.addEventListener('change', update)