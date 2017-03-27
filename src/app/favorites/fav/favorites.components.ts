// import { Component } from '@angular/core';
// import { FavList } from './fav.list';
// import { FormsModule } from '@angular/forms'
// import { LocalStorageService } from 'angular-2-local-storage';
// import { LocalStorage } from '../local.storage/local.storage';

// @Component ({
//     selector: 'list',
//     template: './favorites.component.html'
// })

// export class FavoritesComponent {
//     addressForm: ControllGroup;

//     constructor(public addressService: FavList){
//         if (JSON.parse(localStorage.getItem('addresses')) !==null) {
//             this.addressService.addresses = JSON.parse(localStorage.getItem('addresses'));
//         }
//         if (this.addressService.addresses.length === 0) {
//             this.addressService.addresses.push(new Address('John', 'Smith', ))
//         }
//     }
// }