import * as Rx from 'rxjs/Rx';

Rx.Observable
  .fromEvent(document, 'mousemove')
  .timeInterval()
