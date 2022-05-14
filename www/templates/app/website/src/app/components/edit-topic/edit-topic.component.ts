import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Topic } from 'src/app/classes/topic';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedTopic!: Topic;
  @Input() error!: string;
  public userFile!: File;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedTopic == null) {
      this.selectedTopic = new Topic();
      this.selectedTopic.Title = '';
      this.selectedTopic.Icon = '';
    }
    vett['title'] = new FormControl(this.selectedTopic.Title, Validators.compose([Validators.required]));
    vett['image'] = new FormControl(this.selectedTopic.Icon, Validators.compose([Validators.required]));
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
    formData.append('Title', this.frmGroup.controls['title'].value);
    formData.append('Icon', this.frmGroup.controls['image'].value);
    this.saved.emit(formData);
  }

}
