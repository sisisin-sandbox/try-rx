import * as Rx from 'rxjs/Rx';

const mousemove$ = Rx.Observable
    .fromEvent<MouseEvent>(document, 'mousemove')
    .throttleTime(100);

mousemove$.subscribe(e => createEl(e, 'black'));
mousemove$.filter(e => e.altKey)
    .subscribe(e => createEl(e, 'red'));
mousemove$.filter(e => e.ctrlKey)
    .subscribe(e => createEl(e, 'blue'));

function createEl(e: MouseEvent, color: string) {
    const circleElm = document.createElement('div');
    document.body.appendChild(circleElm);
    circleElm.innerHTML = ' ';
    circleElm.style.position = 'absolute';
    circleElm.style.width = '20px';
    circleElm.style.height = '20px';
    circleElm.style.left = `${e.clientX}px`;
    circleElm.style.top = `${e.clientY}px`;
    circleElm.style.borderWidth = '1px';
    circleElm.style.borderColor = color;
    circleElm.style.borderStyle = 'solid';
}