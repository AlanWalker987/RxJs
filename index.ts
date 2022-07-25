import './style.css';

import { fromEvent, interval, map, of, take } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

/** Take Operator 

//const number$ = of(1, 2, 3, 4, 5);

// number$.pipe(take(3)).subscribe({
//   next: console.log,
//   complete: () => console.log('complete'),
// });

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    take(1)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('completed!!'),
  });

  */

/** TakeWhile Operator

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    takeWhile(({ y }) => y <= 200, true)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('Completed'),
  });

  */

/** TakeUntil Operator */

const counter$ = interval(1000);

counter$.pipe(takeUntil(click$)).subscribe({
  next: console.log,
  complete: () => console.log('Complete'),
});

// Open the console in the bottom right to see results.
