import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'ftc-book-preview-list',
  template: `
    <ftc-book-preview *ngFor="let book of books" [book]="book"></ftc-book-preview>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
  ],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
