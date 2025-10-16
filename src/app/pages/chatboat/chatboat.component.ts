import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-chatboat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatboat.component.html',
  styleUrls: ['./chatboat.component.css']
})
export class ChatboatComponent {
  isChatOpen = false;
  userMessage = '';
 
  messages = [
    { sender: 'bot', text: '👋 Hello! I’m your digital classroom assistant. How can I help you today?' }
  ];
 
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (!this.isChatOpen) {
      this.messages = [
        { sender: 'bot', text: '👋 Hello! I’m your digital classroom assistant. How can I help you today?' }
      ];
    }
  }
 
  sendMessage() {
    if (!this.userMessage.trim()) return;
 
    this.messages.push({ sender: 'user', text: this.userMessage });
 
    const reply = this.getBotResponse(this.userMessage);
    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: reply });
    }, 600);
 
    this.userMessage = '';
  }
 
  getBotResponse(message: string): string {
    const msg = message.toLowerCase();
 
    if (msg.includes('homework')) {
      return '📘 You can check your homework in the Assignments section.';
    } else if (msg.includes('class')) {
      return '🕙 Your next class starts at 10 AM.';
    } else if (msg.includes('teacher')) {
      return '👩‍🏫 Your class teacher is Mrs. Sharma.';
    } else {
      return '✨ I’m here to help with your digital classroom. Try asking about “class” or “homework.”';
    }
  }
}
 