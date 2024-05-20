let speech = null;
let speechPaused = false;

document.getElementById('cycling-button').addEventListener('click', function() {
    expandButton('cycling-button', 'cycling-info');
});

document.getElementById('swing-button').addEventListener('click', function() {
    expandButton('swing-button', 'swing-info');
});

document.getElementById('rolling-ball-button').addEventListener('click', function() {
    expandButton('rolling-ball-button', 'rolling-ball-info');
});

function expandButton(buttonId, infoId) {
    const buttons = document.querySelectorAll('.topic-button');
    buttons.forEach(button => {
        button.classList.remove('expanded');
    });

    document.getElementById(buttonId).classList.add('expanded');
    
    const infoContents = document.querySelectorAll('.info-content');
    infoContents.forEach(content => {
        content.style.display = 'none';
    });
    
    document.getElementById('info-section').style.display = 'block';
    document.getElementById(infoId).style.display = 'block';
}

function readContent(topic) {
    let text = '';

    switch(topic) {
        case 'cycling':
            text = document.querySelector('#cycling-info').innerText;
            break;
        case 'swing':
            text = document.querySelector('#swing-info').innerText;
            break;
        case 'rolling-ball':
            text = document.querySelector('#rolling-ball-info').innerText;
            break;
    }

    if (speech) {
        speechSynthesis.cancel();
    }

    speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 0.8;
    speechSynthesis.speak(speech);
    speechPaused = false;
}

function pauseContent() {
    if (speech && speechSynthesis.speaking && !speechPaused) {
        speechSynthesis.pause();
        speechPaused = true;
    }
}

function resumeContent() {
    if (speech && speechPaused) {
        speechSynthesis.resume();
        speechPaused = false;
    }
}
