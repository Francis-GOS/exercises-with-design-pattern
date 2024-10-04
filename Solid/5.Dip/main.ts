/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

// Define an interface for the email service
interface IEmailService {
    sendEmail(message: string): void;
}

// Implement the email service
class EmailService implements IEmailService {
    sendEmail(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

// Update the SendNotification class to depend on the abstraction (IEmailService)
class SendNotification {
    private emailService: IEmailService;

    constructor(emailService: IEmailService) {
        this.emailService = emailService;
    }

    sendNotification(message: string): void {
        this.emailService.sendEmail(message);
    }
}

// Create an instance of the email service and pass it to the SendNotification class
const emailService = new EmailService();
const notification = new SendNotification(emailService);
notification.sendNotification("Hello, this is a notification!");