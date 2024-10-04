export interface IEmailService {
  sendEmail(message: string): void;
}
export class EmailService implements IEmailService {
  sendEmail(message: string): void {
      console.log(`Sending email with message: ${message}`);
  }
}

export class SendNotification {
  private emailService: IEmailService;

  constructor(emailService: IEmailService) {
      this.emailService = emailService;
  }

  sendNotification(message: string): void {
      this.emailService.sendEmail(message);
  }
}

const emailService = new EmailService();
const notification = new SendNotification(emailService);
notification.sendNotification("Hello, this is a notification!");