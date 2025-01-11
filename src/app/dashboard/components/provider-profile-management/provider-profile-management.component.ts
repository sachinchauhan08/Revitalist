import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-profile-management',
  templateUrl: './provider-profile-management.component.html',
  styleUrls: ['./provider-profile-management.component.scss']
})
export class ProviderProfileManagementComponent {
  providers = [
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },

    // ... more providers
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'text-green-500';
      case 'Expiring soon':
        return 'text-yellow-500';
      case 'Expired':
        return 'text-red-500';
      default:
        return '';
    }
  }
}
