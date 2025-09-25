import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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

interface Circle {
  id: number;
  top: string;
  left: string;
  size: string;
  colorFrom: string;
  colorTo: string;
  opacity: number;
  delay: number;
}

@Component({
  selector: 'app-star-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-background.html',
  styleUrls: ['./star-background.css'],
})
export class StarBackground implements OnInit, OnChanges {
  @Input() darkMode = true; 
  
  stars: Star[] = [];
  meteors: Meteor[] = [];
  circles: Circle[] = [];

  private readonly circleColors = [
    ['from-purple-400', 'to-blue-500'],
    ['from-pink-400', 'to-yellow-400'],
    ['from-green-300', 'to-blue-400'],
    ['from-red-300', 'to-pink-400']
  ];

  ngOnInit() {
    this.generateBackground();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['darkMode']) {
      this.generateBackground();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.generateBackground();
  }

  private generateBackground() {
    if (this.darkMode) {
      this.generateStars();
      this.generateMeteors();
      this.circles = [];
    } else {
      this.generateCircles();
      this.stars = [];
      this.meteors = [];
    }
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
  private generateCircles() {
    this.circles = Array.from({ length: 12 }, (_, i) => {
      const color = this.circleColors[Math.floor(Math.random() * this.circleColors.length)];
      return {
        id: i,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        size: `${Math.floor(Math.random() * 120 )}px`, 
        colorFrom: color[0],
        colorTo: color[1],
        opacity: Math.random() * 0.4 + 0.3, 
        delay: Math.random() * 10
      };
    });
  }
}