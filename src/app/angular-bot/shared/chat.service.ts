import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {
  }
}

@Injectable() export class ChatService {
  conversation = new Subject<Message[]>();
  messageMap = {
    'Привет!': 'Приветствую Вас!',
    'Кто Вы?': 'Я бот. Что Вы хотели бы узнать?',
    'Когда празднуют Новый год?': 'В ночь с 31 Декабря на 1 Января!',
    'Спасибо': 'Пожалуйста. Всегда рад помочь!'
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
