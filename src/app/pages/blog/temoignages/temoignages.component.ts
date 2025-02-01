import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment.model';
import { CommentFormComponent } from "../comment-form/comment-form/comment-form.component";
// import { CommentFormComponent } from "../comment-form/comment-form/comment-form.component";

@Component({
  selector: 'app-temoignages',
  standalone: true,
  // imports: [NgForOf, CommentFormComponent],
  imports: [NgForOf, CommentFormComponent],
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.scss']
})
export class TemoignagesComponent implements OnInit {
  comments: Comment[] = [];
  page = 1;
  limit = 5; // Comments per page
  isLoading = false;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
  }


  loadComments(): void {
    if (this.isLoading) return;
    try {
      this.isLoading = true;
      this.commentService.getComments(this.page, this.limit).subscribe((data) => {
        this.comments = [...this.comments, ...data];
        this.isLoading = false;
        this.page++;
      });
    } catch {}
  }
  //   class InfinitePagination {

  //   /** @type {string} */
  //   private endpoint
  //   /** @type {HTMLTemplateElement } */
  //   private template
  //   /** @type {HTMLElement } */
  //   private target
  //   /** @type {HTMLElement } */
  //   private loader
  //   /** @type {object} */
  //   private elements
  //   /** @type {IntersectionObserver} */
  //   private observer
  //   /** @type {boolean} */
  //   private loading = false
  //   /** @type {number} */
  //   private page = 1

  //   /**
  //    * 
  //    * @param {HTMLElement} element 
  //    */
  //   constructor(element) {
  //     this.endpoint = element.dataset.endpoint
  //     this.template = document.querySelector(element.dataset.template)
  //     this.target = document.querySelector(element.dataset.target)
  //     this.elements = JSON.parse(element.dataset.elements)
  //     this.observer = new InfinitePagination((entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting) {
  //           this.#loadMore()
  //         }
  //       }
  //     })
  //     this.observer.observer(element)
  //     console.log(this.target)
  //   }
  //   async #loadMore() {
  //     if (this.loading) {
  //       return
  //     }
  //     this.loading = true
  //     try {
  //       const url = new URL(this.endpoint)
  //       url.searchParams.set('_page', this.page)
  //       const comments = await fetchJSON(this.endpoint)
  //       if (comments.length === 0) {
  //         this.observer.disconnect()
  //         this.loader.remove()
  //         return
  //       }
  //       for (const comment of comments) {
  //         const commentElement = this.template.content.cloneNode(true)
  //         for (const [key, selector] of Object.entries(this.elements)) {
  //           commentElement.querySelector(selector).innerText = comment[key]
  //         }
  //         this.target.append(commentElement)
  //       }
  //       this.page++
  //       this.loading = false
  //     } catch (e) {
  //       this.loader.style.display = 'none'
  //       const error = alertElement('Impossiblede chaarger les contenus.')
  //       error.addEventListener('close', () => {
  //         this.#loadMore.style.removeProperty('display')
  //         this.loading = false
  //       })
  //       this.target.append(error)
  //     }
  //   }
  // }
  // document
  //   .querySelectorAll('.js-infinite-pagination')
  //   .forEach(el => new InfinitePagination(el))


  // /**
  //  * Renvoie un element HTML representant une alerte
  //  * @param {string} message
  //  * @return {HTMLElement}
  //  */
  // export function alertElement(message, type = 'danger') {
  //   /** @type {HTMLElement} */
  //   const el = document.querySelector('#alert').content.firstElementChild.cloneNode(true)
  //   el.classList.add(`alert-${type}`)
  //   el.querySelector('.js-text').innerText = message
  //   el.querySelector('button').addEventListener('click', e => {
  //     e.preventDefault()
  //     el.remove()
  //     el.dispatchEvent(new CustomEvent('close'))
  //   })
  //   return el
  // }

  // class fetchForm {
  //   /** @type {string} */
  //   private endpoint
  //   /** @type {HTMLTemplateElement } */
  //   private template
  //   /** @type {HTMLElement } */
  //   private target
  //   /** @type {HTMLElement } */
  //   private elements
  //   /** 
  //    * @param {HTMLFormElement} element 
  //    */
  //   constructor(form) {
  //     this.endpoint = form.dataset.endpoint
  //     this.template = document.querySelector(form.dataset.template)
  //     this.target = document.querySelector(form.dataset.target)
  //     this.elements = JSON.parse(form.dataset.elements)
  //     form.addEventListener('submit', e => {
  //       this.#submitForm(e.currentTarget)
  //     })
  //   }

  //   /** 
  //    * @param {HTMLFormElement} element  
  //    */
  //   async #submitForm(form) {
  //     const button = form.querySelector('button')
  //     button.setAttribute('disabled', '')
  //     try {
  //       const data = new FormData(form)
  //       const comment = await fetchJSON(this.endpoint {
  //         method: 'POST',
  //         json: Object.fromEntries(data),
  //       })

  //       const commentElement = this.template.content.cloneNode(true)
  //       for (const [key, selector] of Object.entries(this.elements)) {
  //         commentElement.querySelector(selector).innerText = comment[key]
  //       }
  //       this.target.prepend(commentElement)
  //       form.reset()
  //       button.removeAttribute('disabled')
  //       form.insertAdjacentElement(
  //         'beforebegin',
  //         alertElement('Merci pour votrecommentaire.', 'Success')
  //     } catch (e) {
  //       form.insertAdjacentElement(
  //         'beforebegin',
  //         errorElement
  //       )
  //       errorElement.addEventListener('close', () => {
  //         button.removeAttribute('disabled')
  //       })
  //     }
  //   }
  // }

  // /**
  //  * Interagit avec une API JSON
  //  * @param {string} url
  //  * @param {RequestInit & {json: object}} options
  //  */
  // export async function fetchJSON(url, options = {}) {
  //   const headers = { Accept: 'application/json', ...options.headers }
  //   if (options.json) {
  //     options.body = JSON.stringify(options.json)
  //     headers['Content-type'] = 'application/json'
  //   }
  //   const r = await fetch(url, { ...options, headers })
  //   if (!r.ok) {
  //     throw new Error('Erreur serveur', { cause: r })
  //   }
  //   return await r.json()
  // }

}