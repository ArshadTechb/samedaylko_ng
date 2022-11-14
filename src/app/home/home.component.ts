import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  // slides = [
  //   { img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  //   { img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwArQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAQYHAAj/xABFEAABAwICBgQKBggHAQAAAAABAAIDBBEFIRITMUFRYQYUcZEHFyIyQlJUgZLSFSNik6GxM0NygqLB0eElNDVTc7LxFv/EABoBAQEBAQEBAQAAAAAAAAAAAAIBAAMFBAb/xAAjEQACAgICAQQDAAAAAAAAAAAAAQISAxMRUUEEFCExQmGR/9oADAMBAAIRAxEAPwCmYwFMMiClHTH1kwynd6y8ZzP0qh+gIhUmw8k02CTiERsEnJSwqCrYAUVtKN6abC/gEZkTt6lmWiFG0bOCK2jYnGRI7IlLM1EItohuP4IraI8fwVgyJGbEQkpM1UIMpT2o7KZPMj5IzI+SvyF8CUdPbcmGw2TTY0QMSSYXIVESI2FMiNEEaaic3MWbCiNhTAjRGsTUTm5iwiCmIkyGKQamkc3MW1Kzqk3or2gkkC5zmKlaRkQjNpW8lSx1UNsr3/aGSbZWaNv0lvyXnv080eqvUwLRtK1EbSs3qvZXNG6Tu/ujx17HZFxb+0FNEy78bHRBENpCkGwN9JL6dxfTFu1SANkliYHlQxrYG2sC7sUhPBl5DkrI9kTNOdwYwbybJCXGadn6GJ8nM+SF1jhbOMs6Xk2KN8JGQ92SlrYm7Wv7lrMOOD9bSG+7Rf8A2VnSYrST5F5icBsk2d6eho5+4i/JaR1ERdYhzRxITjWsOwg+9VArqEODesR3OWVynmsaQLWsdhV1keQeaxoFyQO0qbWAi4IIVRNV0dO7Qmna142ttf8AJEpMRpXi8NSwcjl+BTWM5PIWwZyUgBxCA2V7sw4EctiK17XbWgFKobhWgclMNQRbcERrrJVA5hNFSAUNNY0zxV4A5BgF5QDzbcs6Z4BLgNj58bNL6/eAnKfEHxWDi7mWFLiHkpNhJTqgXaHHYzUCwhA7Xi6fpMZD22qI2h43i+aqWQIohO5aiLtkbBFXwvycwX3Z2UnVM36uQRN+wVSQNfGcsxwKehDHnNuieamtF2sMYnSO0nOLjvJN1kU+exSbTkC4y7Fk07nbSSlUDmeFPyUhBbcpRRyx5NJtzR43SB3l+UOFlahuAbCeCaikqYmaEc0jWcA4phgjdvseaJq2es3vVqS/BXarisiEcFYGBe1NlVELmKwPmpzeCR7OQOSa+kq/2h3wj+iwYljVJUI8gc4xiBZoiZo5hguhQ4hWxOLm1Mlzt0jf81AxleEaSxoDzMZOKV7iCalw/ZaB/JMQY1VxgB5bIPtCx7wq/QWQ1XWgb2X7cehPnRSN7LI8eMUrhcue3kWn+S1uyytpRPcs0gU99yPHS29FWLIBvRg1o9ELnU+ixXtpeSK2k5KxjazeCEy2NnJWprFUyk5Igps9it207SP6KTacbirULkV0bHtFhs4Iwc0CxZnyT3V1IUw3hWoHIVi1T8th5hHFO0i4IRRTgblNsTRsSqG4tqQOC9qSnWxA7wpdXCtQOYjq3DZ+aj5QO0qw6sNy91c8ElE5uYhpvGdyvabt4Txg4hY6uOCVQObEtN3qhYLzvy7E7qAoPp+SSic3NiesKyJhscPeEYwZ7FA06aijlLI0Y1sQ3nuXtdF634Ib4bKBiTUDi87NUkxszf5azWcTmSgtq6guvr3g3vtWrMmI2X9yOyqkv57u9fJwem8ptTcRq7j62/7oT1LiuYbUsuD6Td3uWpQV0jSNJxcOafgrWuI0xY8RsVSQXkN1p54HDSjlbltzsmYcQpS7RdMwHjfJajDIDYhwI7UbK+5KgXmN4gMUubJGOH2TdEMZWjxyGI3jcWu4g2VhFjNXGR9bpgC1n5q0JvRtIjWRHyVJT9IXXAmhYW7y3Iq4p8Sopo9Jswb9l+RVozbU/IYRDaptAbvQ+uUv+6O5ClxGnF9AOce4LKLC8i7HWi+whZ1fIKokxYAHRjaOZddYZjkN7ShzTxabpa2c3mivJc6ttvOA96G+Ej0vxSkdXBUX1MgcQLkb1gyEZAqqDC8sSb4jfah3e3jbmhvlKgZ3gWyPaE1E4SyoLpOO5R0iPR/FLmpdvNuVkSKqa/LSA7QnU5PKuyT35eZfuQXSgHNjUxI4vbYFpHJIys0XbEoxOOSb8HFmuI3qbZEsHrIcvhTPU4Y82TLIo8dSQLKua9Ea7mmgPks21T2OBY4gKxpsS02Wl2jeFQNfZEZJY3ummcXY2Rta0i+k5FZWsOVytdbOfcjsm33XRNHGTmXvXbeaO9ZGISf+KmEvNSEpXRcHGTmXbMScNpI96mcQeRk8n3qi1x4qQqLb1fgDc35Ljrj7+cVM1jyPKIPNU+vuclMTJJo5NT7LWGskhlbJFIWvG8K7pukYd5NTGQbeczeexagJlnW8Ck+GSN4/TNzGL0rnW0nDm5uSMa2nkHkTMvwutIbOVPTI2OWSRnOZuDJI5TZszbrL6Gse76phsd91pvWiza9TZjUkOUcsgH2TZXlIFJS+0bWKeup35ZnnmpOqao209Fp5Bak7pAb6RdM53EvKz/8ATSeo49rlbx8h0Zfx5/poDSpgoI7VIPaNpXk8n6hoOCpAoAkbuKlpKpgqHa5TD0tpWXjMBxVsGnI42SyI2U8VX9Y+ysGoO7JW6JpbLVsvNEbNzVKKh9/OUxVPvtCSygfpy61ywJbnaqkVTt9kVtQHb7HhdLYc/btFmJSpibmqwSuWdc4b0rgeEtNdbesioB3qs1xPasGUjersJoLU1WjvQ31htYFVZm5lRMhU2sq9Mh91QXbSoGXmlA8rDnkI3Z0WJDWtXtYUprCvaa1y6ztFH4EujtTRwTPrsTvJG15AkZkSL+qieIvo17fin3rPlXScK/0uj/4Gf9Qm18PJ7HCOWDwGdGt1din3jPlWfEb0b9vxT7xnyrqS8tybhHLfEd0c31+KfeM+VZ8R3Rz2/FPvGfKuory3Jqo5RUeBjovSRGSfEsSY3PbIzOwv6qDJ4Iuh0YaZMZrwHbProzf+FdVrKWGrjayoZptDr2uRn7ksMHoGvc9sFnPNyQ9wzsea3Jqo5m/wQdD2Nc52M11mguNpozkOxvIqR8EHRFjmj6YryXO0QBNGc/hXSW4RQMiELKcNjGxrXEcRx4Er30Nh979Xz0mnz3bR5p27Ru4bluWaqOcyeB7onGXCXGa5habEOnjFv4V5/ge6Ksp3VDsVxEwsYXl7ZWHyRtOTV0d2FUUjtN8Ok7S0s3u27b7eJPeeKM6jp+pvpxGBE9rg4AkXBNyL7d5W5ZKx6OXS+CrolTl7ZsVxZmg4tOkABe17X1eeWziou8F/Q5oeTjGJ2Y8xuOWTh6PmbeW9dQdh9M5+mWv0gHZiVwvfbexz2BCZhFDD+hhcwZizZXgAEi+V+S1makejmx8FnRFt/wDFsTuCRbK5ztl5GeZtzT0fgZ6OyMa9mIYk5rgCCJGZg/urfPoig1RZ1castLSzTdokEWIte1uSsRsVs+ya4dHM/Er0e9vxP42fKs+JXo97fiXxs+VdMXlrPs2uPRzPxK9H/b8T+NnyrHiV6PnbX4n8bPlXTV5a0uza49HMvEp0e9vxP42fKveJXo97fiXxs+VdNXlrS7Nrj0f/2Q==" },
  //   { img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  //   { img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }

  // ];
  // slideConfig = { "slidesToShow": 2, "slidesToScroll": 2 };

  // addSlide() {
  //   this.slides.push({ img: "http://placehold.it/350x150/777777" })
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized', e);
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }


  constructor() { }
  ngOnInit(): void {
  }
}