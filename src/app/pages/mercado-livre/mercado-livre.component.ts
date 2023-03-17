import { Component } from '@angular/core';

@Component({
  selector: 'app-mercado-livre',
  templateUrl: './mercado-livre.component.html',
  styleUrls: ['./mercado-livre.component.scss'],
})
export class MercadoLivreComponent {
  selector= 'menu-overview-example';
  templateUrl= 'menu-overview-example.html';

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}

export class MenuOverviewExample {}
