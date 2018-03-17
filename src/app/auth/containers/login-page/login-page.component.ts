import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';

@Component({
  selector: 'ftc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() { }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}