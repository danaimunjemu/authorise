import {Component, Input} from '@angular/core';

@Component({
  selector: 'authorise-doc-status',
  template: `
    <nz-tag
      [ngClass]="
        status == 'NONE' ? 'status-none' :
                (status === 'CREATED' ? 'status-created' :
                (status === 'DRAFT' ? 'status-draft' :
                (status === 'PENDING' ? 'status-pending' :
                (status === 'DECLINED' ? 'status-declined' :
                (status === 'COMPLETED' ? 'status-completed' :
                (status === 'ON_HOLD' ? 'status-on-hold' :
                (status === 'OVERDUE' ? 'status-overdue' :
                (status === 'IN_PROGRESS' ? 'status-in-progress' : 'status-none'))))))))
       "
      [nzBordered]="false">
      <span nz-icon
            [nzType]="
                status == 'NONE' ? 'line' :
                (status === 'CREATED' ? 'copy' :
                (status === 'DRAFT' ? 'edit' :
                (status === 'PENDING' ? 'clock-circle' :
                (status === 'DECLINED' ? 'close-circle' :
                (status === 'COMPLETED' ? 'check-circle' :
                (status === 'ON_HOLD' ? 'pause-circle' :
                (status === 'OVERDUE' ? 'exclamation-circle' :
                (status === 'IN_PROGRESS' ? 'clock-circle' : 'line'))))))))
            "
      >
      </span>
      <span>{{ replaceUnderscores(status) }}</span>
    </nz-tag>
  `,
  styleUrl: './document-status.component.scss'
})
export class DocumentStatusComponent {
  @Input() status: string = "";

  replaceUnderscores(input: string): string {
    return input.replace(/_/g, ' ');
  }

}
