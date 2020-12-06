import { Component, OnInit } from '@angular/core';
import { messages } from './messgaes'

@Component({
  selector: 'app-message-icon',
  templateUrl: './message-icon.component.html',
  styleUrls: ['./message-icon.component.scss']
})
export class MessageIconComponent implements OnInit {

  isLoading: boolean = true
  messages: any = messages
  isClicked: boolean = false

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {console.log('loaded'); this.isLoading = false }, 3000)
  }

  handleClick() {
    this.isClicked = !this.isClicked
  }

}
