import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';

import * as fromBooks from '../reducers';
import * as book from '../actions/book';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
  selector: 'ftc-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ftc-selected-book-page></ftc-selected-book-page>
  `,
})
export class ViewBookPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromBooks.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => new book.Select(params.id)))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
