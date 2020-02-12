import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingServie: LoggingService, private accountService: AccountService){ }
  onSetTo(status: string) {
    const id = this.id.toString();
    this.accountService.updateStatus(id, status);
    this.accountService.statusUpdate.emit(status);
  }
}
