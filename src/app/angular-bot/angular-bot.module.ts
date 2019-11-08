import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {ChatComponent} from './chat/chat.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './shared/chat.service';

@NgModule({
  declarations: [MainComponent, ChatComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService]
})

export class AngularBotModule {
}
