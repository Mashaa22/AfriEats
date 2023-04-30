class AdminMailer < ApplicationMailer
    def send_pin(admin, pin)
      @admin = admin
      @pin = pin
  
      mail(to: admin.email, subject: 'Welcome to AfriEats!', from: "maranga22@zohomail.com")
    end
  end
  
