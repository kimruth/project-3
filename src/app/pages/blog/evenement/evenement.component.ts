import { Component } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent {
// [x: string]: any;
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
  elements = [ 
    {
      id: 1,
      content: `Nous tenons les céminaires tout les mois (au moins une fois par mois).
                    Les ceminairesse sont
                    tenus soit en presentiel ou en visio-conference. `,
      readmore: false
    },
    {
      id: 2,
      content: `A fin de faire profiter à autant de femmes que possible nos servies, nous organisons des
                    campagnes de sensibilisation en presentiel pour celle qui n'ont pas accès à notre site internet
                    ainsi que celles qui n'ont pas encore eu l'occasion de participer à au moins une de nos séances
                    de céminaire que ça soit en visio-conférence ou en présentiel.
                    Nous organisons des séances
                    afin de leur donner un apperçue de ce qu'il en est de nos céminaires.`,
      readmore: false
    }
  ]
  isActive: boolean = true;

  readMore(event: Event, index: number) {
    event.preventDefault();

    // this.elements[index].readmore = !this.elements[index].readmore;
    if (this.elements[index].readmore == true) {
      this.elements[index].readmore = false;
    } else {
      this.elements[index].readmore = true
    }
}
}