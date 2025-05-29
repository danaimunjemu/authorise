import {Component, OnInit} from '@angular/core';
import {ConsoleToggleService} from "./core/helpers/console-toogle.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private consoleToggleService: ConsoleToggleService
  ) {
    this.consoleToggleService.disableConsoleInProduction();
  }

  ngOnInit(): void {
  }

}
