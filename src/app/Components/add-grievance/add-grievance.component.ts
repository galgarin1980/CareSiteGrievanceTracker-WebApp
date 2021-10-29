import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyStat } from 'src/app/Models/daily-stat.model';
import { FormHandlerService } from 'src/app/Services/form-handler.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-grievance',
  templateUrl: './add-grievance.component.html',
  styleUrls: ['./add-grievance.component.css']
})
export class AddGrievanceComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  regions: string[] = ["West", "Central", "Northeast"];
  roles: string[] = ["CMSL/GIM", "Care At Home", "Geisinger at Home", "LIFE Geisinger", "Retro"];
  hippaSubmittedQuestion: string[] = ["Yes", "No"];
  midasSubmittedQuestion: string[] = ["Yes", "No"];
  firstTimeCustomerQuestion: string[] = ["Yes", "No"];
  wasPatientSatisfiedQuestion: string[] = ["Yes", "No"];
  patientFurtherReviewQuestion: string[] = ["Yes", "No"];
  wasCallEscalatedQuestion: string[] = ["Yes", "No"];
  overallResolutionCompleteQuestion: string[] = ["Yes", "No"];
  
  attachedObject: any;

  constructor(public formHandler: FormHandlerService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      ID: new FormControl(),
      Username: new FormControl(),
      StaffName: new FormControl(),
      PatientName: new FormControl(),
      PatientDOB: new FormControl(),
      HIPPASubmitted: new FormControl(),
      MidasSubmitted: new FormControl(),
      PrescriptionNumber: new FormControl(),
      FirstTimeCustomer: new FormControl(),
      DateComplaintReceived: new FormControl(),
      PatientIssue: new FormControl(),
      Resolution: new FormControl(),
      ResolutionDate: new FormControl(),
      WasPatientSatisfied: new FormControl(),
      PatientFurtherReview: new FormControl(),
      WasCallEscalated: new FormControl(),
      IfYesToWhom: new FormControl(),
      IfYesDateTimeEscalation: new FormControl(),
      EscalatedCallResolutionDate: new FormControl(),
      EscalatedCallRecepient: new FormControl(),
      OverallResolutionComplete: new FormControl(),
            
    });
   }

  ngOnInit(): void {
    this.attachedObject = {};
    this.formHandler.formObject.subscribe(obj => {
      console.log("WHATS THIS DUMPING?", obj);
      if (obj) {
        this.attachedObject = obj;
        this.form.reset();
        // set the form control values for Edit 
        
        if (obj.PatientDOB) {
          let patientDOB = new Date((new Date(obj.PatientDOB)).getTime());
          this.form.controls['PatientDOB'].setValue(formatDate(patientDOB, 'yyyy-MM-dd', 'en-US'));
          console.log("EDIT - patientDOB", obj)
        }


        if (obj.ResolutionDate) {
          let resolutionDate = new Date((new Date(obj.ResolutionDate)).getTime());
          this.form.controls['ResolutionDate'].setValue(formatDate(resolutionDate, 'yyyy-MM-ddThh:mm:ss', 'en-US'));
          console.log("EDIT - ResolutionDate", obj)
        }
        
        if (obj.EscalatedCallResolutionDate) {
          let escalatedCallResolutionDate = new Date((new Date(obj.EscalatedCallResolutionDate)).getTime());
          this.form.controls['EscalatedCallResolutionDate'].setValue(formatDate(escalatedCallResolutionDate, 'yyyy-MM-ddThh:mm:ss', 'en-US'));
          console.log("EDIT - EscalatedCallResolutionDate", obj)
        }

        if (obj.DateComplaintReceived) {
          let dateComplaintReceived = new Date((new Date(obj.DateComplaintReceived)).getTime()); 
          console.log("date data", obj)
          this.form.controls['DateComplaintReceived'].setValue(formatDate(dateComplaintReceived, 'yyyy-MM-ddThh:mm:ss', 'en-US'));
          console.log("EDIT - DateComplaintReceived", obj)
        }
        
        // if (obj.DateComplaintReceived == null) {
        //   let today = new Date().getTime();
        //   this.form.controls['DateComplaintReceived'].setValue(formatDate(today, 'yyyy-MM-dd, hh:mm', 'en-US'));
        //   console.log("ADD - add-grievance", obj)
        // }
        // else {
        //   let dateComplaintReceived = new Date((new Date(obj.DateComplaintReceived)).getTime()); 
        //   console.log("date data", obj)
        //   this.form.controls['DateComplaintReceived'].setValue(formatDate(dateComplaintReceived, 'yyyy-MM-dd, hh:mm', 'en-US'));
        //   console.log("EDIT - add-grievance", obj)
        // }
        
        
        this.form.controls['ID'].setValue(obj.ID);
        this.form.controls['Username'].setValue(obj.Username);
        this.form.controls['StaffName'].setValue(obj.StaffName);
        this.form.controls['PatientName'].setValue(obj.PatientName);
        this.form.controls['HIPPASubmitted'].setValue(obj.HIPPASubmitted);
        this.form.controls['MidasSubmitted'].setValue(obj.MidasSubmitted);
        this.form.controls['PrescriptionNumber'].setValue(obj.PrescriptionNumber);
        this.form.controls['FirstTimeCustomer'].setValue(obj.FirstTimeCustomer);
        this.form.controls['PatientIssue'].setValue(obj.PatientIssue);
        this.form.controls['Resolution'].setValue(obj.Resolution);
        this.form.controls['WasPatientSatisfied'].setValue(obj.WasPatientSatisfied);
        this.form.controls['PatientFurtherReview'].setValue(obj.PatientFurtherReview);
        this.form.controls['WasCallEscalated'].setValue(obj.WasCallEscalated);
        this.form.controls['IfYesToWhom'].setValue(obj.IfYesToWhom);
        this.form.controls['IfYesDateTimeEscalation'].setValue(obj.IfYesDateTimeEscalation);
        this.form.controls['EscalatedCallRecepient'].setValue(obj.EscalatedCallRecepient);
        this.form.controls['OverallResolutionComplete'].setValue(obj.OverallResolutionComplete);
        
        this.form.updateValueAndValidity();
      }
    });
  }

  answerHIPPASubmitted(hippaSubmittedQuestion: any){
    console.log("was hippa submitted?", hippaSubmittedQuestion)
  }

  answerMidasSubmitted(midasSubmittedQuestion: any){
    console.log("was midas submitted?", midasSubmittedQuestion)
  }

  answerFirstTimeCustomer(firstTimeCustomerQuestion: any){
    console.log("is this a first time customer?", firstTimeCustomerQuestion)
  }

  answerWasPatientSatisfied(wasPatientSatisfiedQuestion: any){
    console.log("was patient satisfied?", wasPatientSatisfiedQuestion)
  }

  answerPatientFurtherReview(patientFurtherReviewQuestion: any){
    console.log("patient further review?", patientFurtherReviewQuestion)
  }

  answerOverallResolutionComplete(overallResolutionCompleteQuestion: any){
    console.log("overall resolution complete?", overallResolutionCompleteQuestion)
  }

  answerWasCallEscalated(wasCallEscalatedQuestion: any){
    console.log("was call escalated?", wasCallEscalatedQuestion)
  }
  
  changeRegion(region: any) {
    console.log("region is... ", region);
  }

  changeRole(role: any) {
    console.log("role is... ", role);
  }

  onSubmit() {
    console.log("Submit Form! You Must validate before submitting");

    // Validate Form
    let obj: DailyStat = new DailyStat();
    obj.ID = this.form.controls['ID'].value;
    obj.DateComplaintReceived = this.form.controls['DateComplaintReceived'].value;
    obj.Username = this.form.controls['Username'].value;
    obj.StaffName = this.form.controls['StaffName'].value;
    obj.PatientName = this.form.controls['PatientName'].value;
    obj.PatientDOB = this.form.controls['PatientDOB'].value;
    obj.HIPPASubmitted = this.form.controls['HIPPASubmitted'].value;
    obj.MidasSubmitted = this.form.controls['MidasSubmitted'].value;
    obj.PrescriptionNumber = this.form.controls['PrescriptionNumber'].value;
    obj.FirstTimeCustomer = this.form.controls['FirstTimeCustomer'].value;
    obj.PatientIssue = this.form.controls['PatientIssue'].value;
    obj.Resolution = this.form.controls['Resolution'].value;
    obj.ResolutionDate = this.form.controls['ResolutionDate'].value;
    obj.WasPatientSatisfied = this.form.controls['WasPatientSatisfied'].value;
    obj.PatientFurtherReview = this.form.controls['PatientFurtherReview'].value;
    obj.WasCallEscalated = this.form.controls['WasCallEscalated'].value;
    obj.IfYesToWhom = this.form.controls['IfYesToWhom'].value;
    obj.IfYesDateTimeEscalation = this.form.controls['IfYesDateTimeEscalation'].value;
    obj.EscalatedCallResolutionDate = this.form.controls['EscalatedCallResolutionDate'].value;
    obj.EscalatedCallRecepient = this.form.controls['EscalatedCallRecepient'].value;
    obj.OverallResolutionComplete = this.form.controls['OverallResolutionComplete'].value;
    
    // The user is needed on the add new form but not part of the user input
    if (!obj.Username) {
      obj.Username = 'nousername';
    }

    console.log("Form Object... ", obj);
    this.form.reset();
    this.formSubmit.emit(obj);
  }


}
