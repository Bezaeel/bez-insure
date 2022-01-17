import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MailCommand } from 'src/mail/mail.command';
import { ClaimCreatedEvent } from './claim.event';

@Injectable()
export class ClaimSaga {
  @Saga()
  createClaim = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(ClaimCreatedEvent),
      flatMap((event: ClaimCreatedEvent) => {
        const res = [
          new MailCommand('talabi#teest', {
            title: 'claim created',
            message: `claim created from user ${event.claim.id}`,
          }),
        ];

        console.log('mail...sent');
        console.log([...res]);
        return [...res];
      }),
    );
  };
}
