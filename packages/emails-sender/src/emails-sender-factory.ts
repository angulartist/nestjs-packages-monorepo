import { IEmailsSenderConfig } from '$/interfaces/emails-sender-config.interface';
import { EmailsSender } from '$/emails-sender';

export function createEmailsSender(config: IEmailsSenderConfig): EmailsSender {
  return new EmailsSender(config);
}
