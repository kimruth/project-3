import { Component } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent {
[x: string]: any;
  // articles = [
  //   {
  //     id: 1,
  //     title: "Nos ceminaire",
  //     image: "../../../../assets/img/12.jpg",
  //     content: `Nous tenons les ceminaires tout les mois (au moins une fois par mois). Les ceminairesse se tiennent sur
  //     diverses formes, ils sont soit physiques ou virtuels. Chaque seance traite sur une question precise et
  //     pose les solutions sur table a chaque fin de ceux-ci.`,
  //     readmore: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Nos campagnes",
  //     image: '../../.././../assets/img/2.jpg',
  //     content: `En faveur des problems que vous nous presentez et de celles qui n'ont pas l'occasion de profiter de nos
  //     seances de ceminaire et/ou de notre site, nous organisons des seances des campagne une fois par mois
  //     afin d'essayer de relever autant de femmes que nous pouvons.`,
  //     readmore: false,
  //   },
  // ]
  isActive: boolean = true;

  readMore(event: Event, index: number) {
    event.preventDefault();

    // this.articles[index].readmore = !this.articles[index].readmore;
//     if (this.articles[index].readmore == true) {
//       this.articles[index].readmore = false;
//     } else {
//       this.articles[index].readmore = true
//     }
}
}