import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RealTimeECheckComponent } from './components/real-time-e-check/real-time-e-check.component';
import { AutomatedClaimCreationComponent } from './components/automated-claim-creation/automated-claim-creation.component';
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


@NgModule({
	declarations: [
		DashboardComponent,
		RealTimeECheckComponent,
		AutomatedClaimCreationComponent,
		UtilizationReviewWorkCenterComponent,
		PaymentPostingComponent,
		ReportingDashboardComponent,
		ProviderProfileManagementComponent,
		AutomatedCredentialVerificationComponent,
		DocumentStorageAndManagementComponent,
		CredentialingHistoryReportingComponent,
		SocialOutreachComponent,
		SettingsDashboardComponent,
		QaChatbotComponent,
		HomeComponent,
  BillingCodingWorkspaceComponent,
	],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
