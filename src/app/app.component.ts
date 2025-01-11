import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advancedCare';

  showSidebar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.updateSidebarVisibility();
    });
  }

  private updateSidebarVisibility() {
    const currentRoute = this.router.url;
    console.log(currentRoute,'currentRoute');
    this.showSidebar = !currentRoute.includes('login'); // Show sidebar for dashboard
  }


  Logout() :void {
    console.log('Sachin Chauham');
    this.router.navigate(['/login']); // Replace with your desired route

  }
}

