import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuOpen = false;

constructor(private router:Router){

}


navigationItems = [
  {
    link: '/dashboard/home',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2459baf48b6cbff3e621d41aba1f9784c64431bee2a5a7052c92ff757d591c92?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Dashboard',
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isActive: true,
    isOpen: true // Initially set to false
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a2e9f547c71290c642538ebb28eed8c7bc7cba6a9c06fa50077ce4b35c1de9e?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Billing & Insurance ',
    isActive: false,
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isOpen: false, // Initially set to false
    submenu: [
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/billing-coding-workspace',
        label: 'Billing & Coding Workspace',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/real-time-e-check',
        label: 'Real Time Eligibility Check',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/utillzation-review-work-center',
        label: 'Utiilization Review Work Center',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/automated-claim-cration',
        label: 'Automatead Claim Creation',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/payment-posting',
        label: 'Payment Posting',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/reporing-dashboard',
        label: 'Reporting Dashboard',
        isActive: false
      }
    ]
  },
  {
    // link: '/dashboard/real-time-e-check',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8a32967fcc95a277c348dd31510712854fd175a1c8af81c417bb7e6b6b889d1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Credentialing Features',
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isActive: false,
    isOpen: false,
    submenu: [
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/7956b0b3bed47ec5af68777c27e9dff10c86c3b42a45229108214ac89f6da1ee?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
        link: '/dashboard/provider-profile-management',
        label: 'Provider Profile Management',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/3e28af40833065e01765608ef65b06432bfab94c74b74712fde4bcf972bfaf79?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
        link: '/dashboard/automated-credential-verification',
        label: 'Automated Credential Verification',
        isActive: false
      },
      {
        icon:'https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1',
        link: '/dashboard/document-storage-and-management',
        label: 'Document Storage and Management',
        isActive: false
      },
      {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8a32967fcc95a277c348dd31510712854fd175a1c8af81c417bb7e6b6b889d1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
        link: '/dashboard/credentialing-history-reporthing',
        label: 'Credentialing History & Reporting',
        isActive: false
      },
    ]
  },
  {
    link: '/dashboard/social-outreach',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dea7ca83c5ba82dcbd6f5ba1864031858b129faf41cbeaf0795b54f192df95aa?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Social Outreach',
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isActive: false,
    isOpen: false // Initially set to false
  },
  {
    link: '/dashboard/settings-dashboard',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/70630b44d7cbbe2fe194dc74ca2ec9659cda85a606d81ac5b41dcecaa7e66e6a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Settings',
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isActive: false,
    isOpen: false // Initially set to false
  },
  {
    link: '/auth/login',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a782d2ab3239b082224f7f74ee44edb88ca682e3089029c9dabd9ad3f280c63?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    label: 'Logout',
    menuIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749',
    isActive: false,
    isOpen: false // Initially set to false
  }
];

  Logout(){
    this.router.navigate(['auth/login']);
  }
  toggleSubmenu(item: any) {
    console.log('item',item);
    item.isOpen = !item.isOpen;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
