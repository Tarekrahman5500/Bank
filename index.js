const loginBtn = document.getElementById('login')
const loginArea = document.getElementById('login-area')
const transactionArea = document.getElementById('transaction-area')
const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')



// loginBtn handle
loginBtn.addEventListener('click', function () {
    loginArea.style.display = 'none'
    transactionArea.style.display = 'block'
})

// deposit button to update

deposit.addEventListener('click', function () {

    updateSpanText('current-deposit', getSpanText('current-deposit'), getInputNumber('depositAmount'))

    updateSpanText('total-balance', getSpanText('total-balance'), getInputNumber('depositAmount'))
    document.getElementById('depositAmount').value = ''

})

withdraw.addEventListener('click', function () {
    updateSpanText('current-withdraw', getSpanText('current-withdraw'), getInputNumber('withdrawAmount'))

    updateSpanText('total-balance', getSpanText('total-balance'), getInputNumber('withdrawAmount') * -1)

    document.getElementById('withdrawAmount').value = ''
})

function getSpanText(id) {
    const current = document.getElementById(id).innerText;
    return parseFloat(current)

}

function getInputNumber(id) {
    let amount = document.getElementById(id).value;
    return parseFloat(amount);
}

function updateSpanText(id, previous, addedNumber) {
    document.getElementById(id).innerText = previous + addedNumber
}

