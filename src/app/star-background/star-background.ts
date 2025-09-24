import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

@Component({
  selector: 'app-star-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-background.html',
  styleUrls: ['./star-background.css'],
})
export class StarBackground implements OnInit {
  @Input() darkMode = false; 
  stars: Star[] = [];
  meteors: Meteor[] = [];

  ngOnInit(): void {
    this.generateStars();
    this.generateMeteors();
  }

  @HostListener('window:resize')
  onResize() {
    this.generateStars();
  }

  private generateStars() {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    this.stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      this.stars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
  }

  private generateMeteors() {
    const numberOfMeteors = 4;
    this.meteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      this.meteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
  }
}
