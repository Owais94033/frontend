import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface LeaderboardEntry {
  username: string;
  score: number;
  avatar: string;  // Path to user avatar image
  co2: string;     // CO2 info for the week
}

@Component({
  selector: 'app-leaderboard',
  standalone:true,
  imports:[NgFor],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaderboardEntries: LeaderboardEntry[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulating dynamic data loading (could be replaced with an API call)
    this.loadLeaderboard();
  }

  loadLeaderboard() {
    this.leaderboardEntries = [
      {
        username: 'User1',
        score: 1200,
        avatar: 'background.jpg',
        co2: 'CO2e (this Week)',
      },
      {
        username: 'User2',
        score: 1100,
        avatar: 'background.jpg',
        co2: 'CO2e (this Week)',
      },
      {
        username: 'User3',
        score: 1050,
        avatar: 'background.jpg',
        co2: 'CO2e (this Week)',
      }
    ];
  }
}
