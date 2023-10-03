import { Component, OnInit } from '@angular/core';
import { SessionDTO } from './model/model';
import { TrainingSessionService } from './services/training-session-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private trainingSessionService: TrainingSessionService) {}

  trainingSessions: SessionDTO[] = [];

  ngOnInit(): void {
    this.trainingSessionService.getAllSessions().then(response => this.trainingSessions = response);
  }

}
