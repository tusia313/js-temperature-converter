const primaryInput = document.querySelector('#primary-input')
const secondaryInput = document.querySelector('#secondary-input')
const primarySelect = document.querySelector('#primary-unit')
const secondarySelect = document.querySelector('#secondary-unit')

primaryInput.value = 0
secondaryInput.value = 0

// console.log('primary input', primaryInput.value)
// console.log('secondary input', secondaryInput.value)
// console.log('primary select', primarySelect.value)
// console.log('secondary select', secondarySelect.value)

function update(e) {
    let elementId = e.target.id
    if (elementId === 'secondary-input') {
        primaryInput.value = calculate()
    } else {
        secondaryInput.value = calculate(primarySelect.value, secondarySelect.value, primaryInput.value)
    }
}

function calculate(firstTempUnit, secondTempUnit, temp) {
    // console.log('calculate!', firstTempUnit, secondTempUnit, temp)
    const combination = firstTempUnit + '-' + secondTempUnit
    let result
    switch (combination) {
        case 'fahrenheit - celsius':
            result = (Number(temp) - 32) * 5 / 9
            break
        case 'celsius - fahrenheit':
            result = (Number(temp) * 9/5) + 32
    }
    return result
}

primaryInput.addEventListener('change', update)
secondaryInput.addEventListener('change', update)
primarySelect.addEventListener('change', update)
secondarySelect.addEventListener('change', update)