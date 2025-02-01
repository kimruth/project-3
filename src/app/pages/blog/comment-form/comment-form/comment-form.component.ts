import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  commentContent = '';
  author = '';

  constructor (private commentService: CommentService) {}

  submitContent(): void {
    if(!this.commentContent.trim() || !this.author.trim()) return;

    const newComment = {
      content: this.commentContent,
      author: this.author,
      date: new Date().toISOString(),
    };

    this.commentService.addComment(newComment).subscribe(() => {
      this.commentContent = '';
      this.author = '';
    })
  }
}
