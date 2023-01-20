const charArrayOfText = (text) => text.split('');
const originalText = `Outside, even through the shut window-pane, the world looked cold. Down in the street little eddies of wind were whirling dust and torn paper into spirals, and though the sun was shining and the sky a harsh blue, there  seemed to be no colour in anything, except the posters that were plastered  everywhere. The black-moustachio'd face gazed down from every commanding  corner. There was one on the house-front immediately opposite. BIG BROTHER  IS WATCHING YOU, the caption said, while the dark eyes looked deep into  Winston's own. Down at street level another poster, torn at one corner,  flapped fitfully in the wind, alternately covering and uncovering the  single word INGSOC. In the far distance a helicopter skimmed down between  the roofs, hovered for an instant like a bluebottle, and darted away again  with a curving flight. It was the police patrol, snooping into people's  windows. The patrols did not matter, however. Only the Thought Police  mattered.`;
let index = 0;
let text;
let header;
let strokes = 0;
let correctKeyCount = 0;
let length = originalText.length;

addEventListener('load', (e) => {
    text = document.getElementById('text');
    header = document.getElementById('header');
    charArrayOfText(originalText).forEach((ch,index) => {
       const span = document.createElement('span');
       span.id = `${index}`
       span.innerText = ch;
       text.append(span);
    })
    document.getElementById(index).classList.add('cursor');
});

addEventListener('keydown', (e) => {
    if(index == 0 && e.key === 'Backspace')  {
        const span = document.getElementById(0);
        span.classList.remove('glow')
        return;
    }

    if(e.key === 'Backspace') {
        if(index < 0) return;
        const currChar = document.getElementById(`${index}`);
        const span = document.getElementById(`${--index}`);
        span.classList.remove('glow')
        span.classList.add('cursor')
        currChar.classList.remove('cursor')
    }
});

addEventListener('keypress', (e) => {
    strokes++;
    if(e.key == ' ') {
        e.preventDefault();
    }
   
    if(e.key === originalText[index]) {
        const nextChar = document.getElementById(`${index + 1}`);
        nextChar.classList.add('cursor');
        const span = document.getElementById(`${index++}`);
        span.classList.add('glow');
        span.classList.remove('cursor');
        correctKeyCount++;
    }
    header.innerText = `${((correctKeyCount / strokes) * 100).toFixed(2)} %`
});

class User {
    name;
    cursor;
    constructor(name, cursor) {
        this.name = name;
        this.cursor = cursor;
    }
}

class Cursor {
    color;
    index;
    constructor(color, index) {
        this.color = color;
        this.index = index;
    }
}