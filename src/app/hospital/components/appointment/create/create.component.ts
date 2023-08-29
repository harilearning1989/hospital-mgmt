import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputValidation} from "../../../validations/input-validation";
import {Utils} from "../../../util/utils";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string;
  bloodGroupList: any = ['A+', 'A-', 'B+', 'B-','AB+', 'AB-', 'O+', 'O-'];
  genderList: any = ['Male', 'Female', 'Others'];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
  }

  ngOnInit() {
    this.formFields();
  }

  get f() {
    return this.form.controls;
  }

  private formFields() {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      email: ['', [Validators.required, Validators.email,
        Validators.maxLength(20),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10),
        InputValidation.cannotContainSpace]],
      age: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(10), InputValidation.cannotContainSpace]],
      problem: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      gender: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      bloodGroup: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      address: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      city: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
    });
  }

  omitSpecialChars(event: KeyboardEvent) {
    return Utils.omitSpecialChars(event);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    return Utils.allowOnlyNumbers(event);
  }

  changeBloodGrp(e: any) {
    console.log(e.value)
    // @ts-ignore
    this.getBloodGrp.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get getBloodGrp() {
    return this.form.get('bloodGroup');
  }

  changeGender(e: any) {
    console.log(e.value)
    // @ts-ignore
    this.getGender.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get getGender() {
    return this.form.get('gender');
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.patientService.register(this.form.value)
      .subscribe((data: any) => {
          console.log("Submitted Successfully");
          this.errorMessage = data.status + ' ' + data.message;
          this.loading = false;
          this.submitted = false;
          this.formFields();
        },
        (error: any) => {
          console.log("Submission Failed ::" + error);
          this.errorMessage = error;
          this.loading = false;
        });
  }

}
