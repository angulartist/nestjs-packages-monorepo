import { EmailsSender } from '../emails-sender';
import { Environment } from '../enums/environment.enum';

describe('EmailsSender', () => {
  let emailSender: EmailsSender;

  beforeEach(function () {
    emailSender = new EmailsSender({
      environment: Environment.DEVELOP,
    });
  });

  it('should send an email', () => {
    emailSender.send();
  });
});
