const el = document.getElementById('root');
const canvas = document.createElement('canvas');
canvas.setAttribute('height', "310px");
canvas.setAttribute('width', "1500px");
canvas.setAttribute('class', 'customCanvas');

el.append(canvas);
canvas.style.border = 'solid black 1px';

const context = canvas.getContext('2d');
const array_x = data[0].columns[0];
const array_y0 = data[0].columns[1];
const array_y1 = data[0].columns[2];
context.scale(1, 1);

function generationDateString(array_x) {
    const arr = [];

    for (let i = 1; i < array_x.length; i += 3) {
        let x = new Date(array_x[i]);
        arr.push(`${(x.getDate() < 10 ? '0' + x.getDate() : x.getDate())}.${(x.getMonth() < 10 ? '0' + (x.getMonth() + 1) : (x.getMonth() + 1))}`);
    }

    return arr;
}

context.beginPath();

for (let i = 0; i < 3; i++) {
    context.fillText(i * 150 + "", 0, canvas.height - i * 150 - 1);
}

context.stroke();
context.beginPath();

for (let i = 0; i < generationDateString(array_x).length; i++) {
    context.fillText(generationDateString(array_x)[i], i * 33 + 10,canvas.height - 1);
}

context.stroke();
context.beginPath();
context.scale(1, -1);
context.strokeStyle = data[0].colors.y0;
context.moveTo(10, 1 - 300);

for( let i = 1; i < array_y0.length; i++) {
    context.lineTo(i * 11 + 10, data[0].columns[1][i] - 300)
}

context.stroke();
context.beginPath();
context.strokeStyle = data[0].colors.y1;
context.moveTo(10, 1 - 300);

for ( let i = 1; i < array_y1.length; i++) {
    context.lineTo(i * 11 + 10, data[0].columns[2][i] - 300)
}
context.stroke();


const str = 'Вы кто такие? Я вас не звал, идите на хуй!';
const style = [
    'padding: 5rem 40rem;',
    'background: linear-gradient( #7832cd, #3239cd);',
    'font: 1.3rem/3 Roboto, sans-serif;',
    'color: white;'].join('');

console.log ( '%c%s', style, str );