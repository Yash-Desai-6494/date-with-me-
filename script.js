let yesButton = document.getElementById('yes')
let noButton = document.getElementById('no')
let message = document.querySelector('.message')

function showMessage() {
    message.innerText = "Yes, Finally you Agreed \n Let's Go ❤️";
    message.style.display = 'block';
    document.querySelector('.image img').src = "./images/3.gif"
}

function increaseSize() {
    let currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size')
    let newSize = parseInt(currentSize) + 3;
    yesButton.style.fontSize = newSize + 'px';
    document.querySelector('.image img').src = "./images/4.gif";
}

function resetProgram() {
    message.innerText = ""
    message.style.display = 'none'
    yesButton.style.fontSize = '25px'
}


noButton.addEventListener('click', function(){
    increaseSize
})

yesButton.addEventListener('click', function(){
    showMessage()
})

noButton.addEventListener('click',function(){
    if (message.style.display === 'block') {
        resetProgram()
    }
})

noButton.addEventListener('touchstart', function(){
    increaseSize();
});

yesButton.addEventListener('touchstart', function(){
    showMessage();
});

noButton.addEventListener('touchstart', function(){
    if (message.style.display === 'block') {
        resetProgram();
    }
});