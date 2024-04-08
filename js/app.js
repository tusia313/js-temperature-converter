const primaryInput = document.querySelector('#primary-input')
const secondaryInput = document.querySelector('#secondary-input')
const primarySelect = document.querySelector('#primary-unit')
const secondarySelect = document.querySelector('#secondary-unit')

primaryInput.value = 0
secondaryInput.value = 0

function update(e) {
    let elementId = e.target.id
    if (elementId === 'secondary-input') {
        primaryInput.value = calculate(secondarySelect.value, primarySelect.value, secondaryInput.value )

    } else {
        secondaryInput.value = calculate(primarySelect.value, secondarySelect.value, primaryInput.value)
    }
}

function calculate(firstTempUnit, secondTempUnit, temp) {
   
    const combination = firstTempUnit + '-' + secondTempUnit
    let result

    if ( firstTempUnit === secondTempUnit) {
        return temp
    }

    switch (combination) {
        case 'fahrenheit-celsius':
            result = (Number(temp) - 32) * 5 / 9
            break
        case 'celsius-fahrenheit':
            result = (Number(temp) * 9 / 5) + 32
            break
        case 'kelvin-fahrenheit':
            result = ((Number(temp) - 273.15) * 9) / 5 + 32
            break
        case 'kelvin-celcius':
            result = Number(temp) - 273.15
            break
        case 'fahrenheit-kelvin':
            result = ((Number(temp) - 32) * 5) / 9 + 273.15
            break
        case 'celcius-kelvin':
            result = Number(temp) + 273.15
            break
    }
    return result.toFixed(2)
}
[primaryInput, secondaryInput, primarySelect, secondarySelect].forEach( element => {
    element.addEventListener('change', update)
})
