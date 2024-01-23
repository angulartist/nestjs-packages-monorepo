import { createEmailsSender } from '../emails-sender-factory';
import { Environment } from '../enums/environment.enum';
import { EmailsSender } from '../emails-sender';

describe('EmailsSenderFactory', () => {
  it('should create return an instance of EmailsSender', () => {
    const emailsSender = createEmailsSender({
      environment: Environment.DEVELOP,
    });

    expect(emailsSender).toBeInstanceOf(EmailsSender);
  });
});
