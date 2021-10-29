import { DatePipe, Time } from "@angular/common";

export class DailyStat {
    ID?: number;
    Username?: string;
    StaffName?: string;
    PatientName?: string;
    PatientDOB?: Date;
    HIPPASubmitted?: string;
    MidasSubmitted?: string;
    PrescriptionNumber?: number;
    FirstTimeCustomer?: string;
    DateComplaintReceived?: Date;
    PatientIssue?: string;
    Resolution?: string;
    ResolutionDate?: Date;
    WasPatientSatisfied?: string;
    PatientFurtherReview?: string;
    WasCallEscalated?: string;
    IfYesToWhom?: string;
    IfYesDateTimeEscalation?: string;
    EscalatedCallResolutionDate?: Date;
    EscalatedCallRecepient?: string;
    OverallResolutionComplete?: string;
    CreatedDate?: Date;
    Active?: number;

}
