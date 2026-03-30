import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {
  freeResources = [
    {
      id: 1,
      title: 'Stress Testing Manual',
      description: 'Complete guide to understanding and implementing stress testing in your hiring process.',
      badge: 'FREE + 1 Test',
    },
    {
      id: 2,
      title: 'Patient Stress Brochure',
      description: 'Learn how stress testing helps identify the most resilient candidates for your team.',
      badge: 'FREE',
    },
    {
      id: 3,
      title: 'SomaHire Tri-Fold Brochure',
      description: 'Quick overview of SomaHire features and benefits for HR professionals.',
      badge: 'FREE',
    },
  ];

  additionalDownloads = [
    {
      id: 1,
      title: 'Hiring Best Practices Guide',
      description: 'Evidence-based strategies for improving your hiring outcomes and reducing turnover.',
    },
    {
      id: 2,
      title: 'Leadership Assessment Framework',
      description: 'Tools and techniques for evaluating leadership potential in candidates.',
    },
    {
      id: 3,
      title: 'Stress Testing FAQ',
      description: 'Frequently asked questions about our stress testing methodology and benefits.',
    },
    {
      id: 4,
      title: 'Team Building Case Studies',
      description: 'Real-world examples of organizations that improved hiring with SomaHire.',
    },
  ];

  onDownload(resourceName: string) {
    console.log('Downloading:', resourceName);
    // Download logic here
  }

  onPurchase() {
    console.log('Purchasing guide');
    // Purchase logic here
  }
}
