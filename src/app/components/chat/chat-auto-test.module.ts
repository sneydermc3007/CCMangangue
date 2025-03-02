import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatAutoTestComponent } from './chat-auto-test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ChatAutoTestComponent }
    ])
  ]
})
export class ChatAutoTestModule { }
