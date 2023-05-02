class AdminMailer < ApplicationMailer
    def send_pin(admin, pin)
        @admin = admin
        @pin = pin

        mail(to: @admin.email, subject: 'Here is your AfriEats creds')
    end
end
