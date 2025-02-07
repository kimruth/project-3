import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comentaires',
  standalone: true,
  imports: [NgForOf, CommonModule, FormsModule],
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.scss']
})
export class CommentairesComponent implements OnInit {

  comments: any[] = [];
  newComment: string = "";
  page: number = 1;
  hasMore: boolean = true;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  addComment(): void {
    if (this.newComment.trim()) { 
      this.commentService.addComment(this.newComment).subscribe((comment) => { 
        this.comments.unshift(comment);
        this.newComment = "";
      });
    }
  }

  loadComments(): void {
   this.commentService.getComments(this.page).subscribe((data) => {
     this.comments = [...this.comments, ...data]; // Merge les commentaires existants avec les nouveaux, en gardant l'ordre
     this.hasMore = data.length === 5; // Vérifie si il y a encore des commentaires à charger, si oui, set hasMore à true
   });
 }
  
  loadMore(): void {
    this.page++;
    this.loadComments();
  }
  
}