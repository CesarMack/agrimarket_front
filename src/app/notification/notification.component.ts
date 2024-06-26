import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { messaging } from 'src/configs/firebase.config';
import { environment } from 'src/environments/environments';
/*
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: ` <p>notification works!</p> `,
  styleUrl: './notification.component.css',
}) */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: ``,
})
export class NotificationComponent implements OnInit {
  constructor(private toast: NgToastService) {}
  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    messaging
      .getToken({ vapidKey: environment.firebaseConfig.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          /*
          console.log(currentToken); */
        } else {
          /*
          console.log(
            'No registration token available. Request permission to generate one.'
          ); */
        }
      })
      .catch((err) => {
        /*
        console.log(err); */
      });
  }

  listen() {
    messaging.onMessage((incomingMessage) => {
      /*
      console.log(incomingMessage);

      console.log(incomingMessage.notification.title);
      console.log(incomingMessage.notification.body); */
    });
  }
}
