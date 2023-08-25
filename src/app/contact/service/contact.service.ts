import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() { 
    let contacts = localStorage.getItem('contacts');
    this.contacts = contacts ? JSON.parse(contacts): [];
  }

  getContacts(): Contact[]{
    return this.contacts;
  }

  getContact(id: string):Contact | undefined{
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact):void{
    contact.id = Date.now().toString();
    this.contacts.push(contact);
    console.log(this.contacts)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  deleteContact(id: string):void{
    let index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  updateContact(id:string , updatedContact: Contact):void{
    let index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts[index] = updatedContact;
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
}
