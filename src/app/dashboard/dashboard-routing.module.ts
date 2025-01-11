import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutomatedClaimCreationComponent } from './components/automated-claim-creation/automated-claim-creation.component';
import { RealTimeECheckComponent } from './components/real-time-e-check/real-time-e-check.component';
import { UtilizationReviewWorkCenterComponent } from './components/utilization-review-work-center/utilization-review-work-center.component';
import { PaymentPostingComponent } from './components/payment-posting/payment-posting.component';
import { ReportingDashboardComponent } from './components/reporting-dashboard/reporting-dashboard.component';
import { ProviderProfileManagementComponent } from './components/provider-profile-management/provider-profile-management.component';
import { AutomatedCredentialVerificationComponent } from './components/automated-credential-verification/automated-credential-verification.component';
import { DocumentStorageAndManagementComponent } from './components/document-storage-and-management/document-storage-and-management.component';
import { CredentialingHistoryReportingComponent } from './components/credentialing-history-reporting/credentialing-history-reporting.component';
import { SocialOutreachComponent } from './components/social-outreach/social-outreach.component';
import { SettingsDashboardComponent } from './components/settings-dashboard/settings-dashboard.component';
import { QaChatbotComponent } from './components/qa-chatbot/qa-chatbot.component';
import { HomeComponent } from './components/home/home.component';
import { BillingCodingWorkspaceComponent } from './components/billing-coding-workspace/billing-coding-workspace.component';

const routes: Routes = [
	{
		path: '', component: DashboardComponent, children: [
			{ path: 'billing-coding-workspace', component: BillingCodingWorkspaceComponent },
			{ path: 'automated-claim-cration', component: AutomatedClaimCreationComponent },
			{ path: 'real-time-e-check', component: RealTimeECheckComponent },
			{ path: 'utillzation-review-work-center', component: UtilizationReviewWorkCenterComponent },
			{ path: 'payment-posting', component: PaymentPostingComponent },
			{ path: 'reporing-dashboard', component: ReportingDashboardComponent },
			{ path: 'provider-profile-management', component: ProviderProfileManagementComponent },
			{ path: 'automated-credential-verification', component: AutomatedCredentialVerificationComponent },
			{ path: 'document-storage-and-management', component: DocumentStorageAndManagementComponent },
			{ path: 'credentialing-history-reporthing', component: CredentialingHistoryReportingComponent },
			{ path: 'social-outreach', component: SocialOutreachComponent },
			{ path: 'settings-dashboard', component: SettingsDashboardComponent },
			{ path: 'qa-chatbot', component: QaChatbotComponent },
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
