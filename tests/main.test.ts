import { EmailService, IEmailService, SendNotification } from "../solution/main";

describe('SendNotification', () => {
  let emailService: IEmailService;
  let notification: SendNotification;

  beforeEach(() => {
    emailService = new EmailService();
    notification = new SendNotification(emailService);
  });

  test('should call sendEmail method of emailService when sendNotification is called', () => {
    const mockSendEmail = jest.spyOn(emailService, 'sendEmail');
    const message = 'Hello, this is a notification!';

    notification.sendNotification(message);

    expect(mockSendEmail).toHaveBeenCalledWith(message);
  });
});