import { Component, OnInit } from '@angular/core';

interface UserProfile {
  fullName: string;
  role: string;
  co2e: string;
  avatar: string;  // URL or path to the avatar image
}

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {

  weakPrint: number = 0;

  userProfile: UserProfile = {
    fullName: '',
    role: '',
    co2e: '',
    avatar: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Simulating dynamic data loading (could be fetched from an API)
    // Safely parse and access the stored user data from localStorage
    const user = JSON.parse(localStorage.getItem("user") || '{}');

    this.userProfile = {
      fullName: user.firstName+ " "+ user.lastName,
      role: user.role,
      co2e: 'Your CO2e (this Week)',
      avatar: 'background.jpg'
    };
    this.weakPrint=100;
  }
}
