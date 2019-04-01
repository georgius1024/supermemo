import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface AlertMessage {
  title?: string;
  message: string;
  className?: string;
  icon?: string;
  timeout?: number;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertEmitter = new Subject<AlertMessage>();

  public alerts$: Observable<AlertMessage> = this.alertEmitter.asObservable();

  constructor() { }

  add(alert: AlertMessage) {
    this.alertEmitter.next(alert);
  }

}
