import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent implements OnInit {

  message: string = 'Some welcome message'

  welcomeMessageFromService: string = ''

  name: string = this.route.snapshot.params['name']

  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) {
  }

  ngOnInit(): void {
    console.log(this.message)
  }

  getWelcomeMessageWithPathVariable() {
    console.log(this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name)
      .subscribe({
        next: (responce) => this.handleSuccessfulResponce(responce.message),
        error: (responce) => this.handleErrorResponce(responce)
  }));
  }

  handleSuccessfulResponce(welcomeMessage: any) {
    this.welcomeMessageFromService = welcomeMessage
  }

  handleErrorResponce(error: HttpErrorResponse) {
    this.welcomeMessageFromService = 'error'
  }
}
