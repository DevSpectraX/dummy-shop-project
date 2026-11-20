import { Component, inject, OnInit } from '@angular/core';
import { HomeState } from './viewmodel/home.state';
import { HomeViewModel } from './viewmodel/home.viewmodel';

@Component({
  imports: [],
  providers: [HomeViewModel, HomeState],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly homeViewmodel = inject(HomeViewModel);
  ngOnInit(): void {
    this.homeViewmodel.init();
  }
}
