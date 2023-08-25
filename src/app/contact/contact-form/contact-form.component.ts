import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({})
  id:string | null = null;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if(this.id){
      let contact = this.contactService.getContact(this.id);
      if(contact){
        this.contactForm.patchValue(contact)
      }
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let contact: Contact = this.contactForm.value;


      if(this.id){
        contact.id =this.id
        this.contactService.updateContact(this.id, contact)
      }else{
        this.contactService.addContact(contact)
      }

      
      
      this.router.navigate(['/list']);
    }

  }

}
