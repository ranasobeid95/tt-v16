import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public static SLACK_WEB_HOOK =
    'https://hooks.slack.com/services/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';

  constructor(private http: HttpClient) {}

  /**
   * Sends a message to slack
   * @param message Message to send
   */
  sendMessageToSlack(message: string) {
    return this.http.post(LoggingService.SLACK_WEB_HOOK, {
      text: message
    });
  }
}
