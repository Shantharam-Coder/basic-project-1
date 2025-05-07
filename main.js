var computermove = '';
const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

function updateScoreDisplay() {
    document.querySelector('.win-score').innerHTML = score.win;
    document.querySelector('.lose-score').innerHTML = score.lose;
    document.querySelector('.tie-score').innerHTML = score.tie;
}

function computerpick() {
    const rand = Math.random();
    let imagesrc = ""
    if (rand >= 0 && rand < 1 / 3) {
        computermove = 'Stone';
        imagesrc = "images/rock.png"
    } else if (rand >= 1 / 3 && rand < 2 / 3) {
        computermove = 'Paper';
        imagesrc = "images/paper.png"
    } else {
        computermove = 'Scissor';
        imagesrc = "images/scissor.png"
    }

    document.querySelector('.sysmove').innerHTML = `<img src="${imagesrc}",alt="${computermove}" width="50px" height="50px" margin-top="2%"> Computer `;
}

function play(parameter) {
    var result = '';
    let imagesrc = "";
    if (parameter === 'Stone') {
        imagesrc = "images/rock.png"
        if (computermove === 'Stone') {
            result = 'tie';
        } else if (computermove === 'Paper') {
            result = 'you lose';
        } else {
            result = 'you win';
        }
    } else if (parameter === 'Paper') {
        imagesrc = "images/paper.png"
        if (computermove === 'Paper') {
            result = 'tie';
        } else if (computermove === 'Scissor') {
            result = 'you lose';
        } else {
            result = 'you win';
        }
    } else {
        imagesrc = "images/scissor.png"
        if (computermove === 'Scissor') {
            result = 'tie';
        } else if (computermove === 'Stone') {
            result = 'you lose';
        } else {
            result = 'you win';
        }
    }

    document.querySelector('.result').innerHTML = result;
    document.querySelector('.mymove').innerHTML = `You  <img src="${imagesrc}" alt="${parameter}" width="50px" height="50px">`;
    if (result === 'tie') {
        score.tie += 1;
    } else if (result === 'you win') {
        score.win += 1;
    } else {
        score.lose += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); 
    updateScoreDisplay();
}

function resetscore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.setItem('score', JSON.stringify(score)); 
    document.querySelector('.result').innerHTML = ``;
    document.querySelector('.mymove').innerHTML = ``;
    document.querySelector('.sysmove').innerHTML = ``;
    updateScoreDisplay();
}

updateScoreDisplay();