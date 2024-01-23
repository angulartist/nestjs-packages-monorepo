import { IEmailsSenderConfig } from './interfaces/emails-sender-config.interface';

export class EmailsSender {
  constructor(private config: IEmailsSenderConfig) {
    console.log('config.environment:', this.config.environment);
  }

  async send() {
    // logic here...
    /**
     * const client = new ThirdPartySdk(config)
     * client.send()
     */

    console.log('Sent an email with config:', JSON.stringify(this.config));
  }
}
