import {
  animate, animateChild, group, query, state, style, transition, trigger
} from '@angular/animations';

export const slideAnimation = trigger('routeAnimation', [
      transition('1=>0', [
        style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('0=>1', [
      style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ right: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
    ]);
