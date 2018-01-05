import { Injectable } from '@angular/core';

let menuList: Array<any> = [{icon : 'dashboard', text: 'Dashboard'}, {icon : 'candidates', text: 'Candidates'},
{icon : 'person', text: 'Dice Candidates'}, {icon : 'jobs', text: 'Jobs'}, {icon : 'accounts', text: 'Accounts'},
{icon : 'applicants', text: 'Applicants'}, {icon : 'leads', text: 'All Leads'}, {icon : 'vendors', text: 'Vendors'},
{icon : 'notifications', text: 'Notifications'}];

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(query = '') {
    return new Promise(resolve => {
      resolve(query !== '' ? menuList.filter(menu => (menu.text.toLowerCase()).indexOf(query.toLowerCase()) !== -1) : menuList);
    });
  }

}
