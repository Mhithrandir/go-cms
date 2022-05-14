import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from 'src/app/classes/location';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedLocation!: Location;
  @Input() parents!: Array<Location>;
  @Input() error!: string;
  public userFile!: File;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedLocation == null) {
      this.selectedLocation = new Location();
      this.selectedLocation.Name = '';
      this.selectedLocation.Description = '';
      this.selectedLocation.Image = '';
      this.selectedLocation.X = 0;
      this.selectedLocation.Y = 0;
    }
    vett['name'] = new FormControl(this.selectedLocation.Name, Validators.compose([Validators.required]));
    vett['image'] = new FormControl(this.selectedLocation.Image, Validators.compose([Validators.required]));
    vett['description'] = new FormControl(this.selectedLocation.Description, Validators.compose([Validators.required]));
    vett['x'] = new FormControl(this.selectedLocation.X, Validators.compose([Validators.required]));
    vett['y'] = new FormControl(this.selectedLocation.Y, Validators.compose([Validators.required]));
    vett['parent'] = new FormControl(this.selectedLocation.IDParent, Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onFileChanged($event: File) {
    this.userFile = $event;
  }
  onSubmit() {
    let formData: FormData = new FormData();
    if(this.userFile != null) {
      formData.append('myFile', this.userFile, this.userFile.name);
      formData.append('HasImage', (true).toString());
    }
    formData.append('Name', this.frmGroup.controls['name'].value);
    formData.append('Description', this.frmGroup.controls['description'].value);
    formData.append('Image', this.frmGroup.controls['image'].value);
    formData.append('X', this.frmGroup.controls['x'].value);
    formData.append('Y', this.frmGroup.controls['y'].value);
    this.saved.emit(formData);
  }

}
