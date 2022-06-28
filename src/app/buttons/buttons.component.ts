import { Component, OnInit } from '@angular/core';
import { Flights } from '../flights';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent implements OnInit {

  submitted = false;

  constructor() { }
  rezerwacje: Flights[] = [
    {id: 1, name: 'Jan Kowalski', email: 'Jan@kowalski.pl', phone: "793873382", planet: "Mercury", date: "22.06.2022", message: "test"}
  ];

  addReservation(event: any) {
    event.preventDefault();
    const Rezerwacja = {
      id: this.rezerwacje.length + 1,
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      planet: event.target.planet.value,
      date: event.target.date.value,
      message: event.target.message.value
    };
    this.rezerwacje.push(Rezerwacja);
    this.submitted = true;
  }


  ngOnInit(): void {
  }

}
