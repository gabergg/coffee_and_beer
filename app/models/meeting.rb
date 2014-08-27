class Meeting < ActiveRecord::Base

  validate :email_or_phone

  def email_or_phone
    if [self.email, self.phone].reject(&:blank?).size == 0
      errors[:base] << ("We need an email or a phone number!")
    end
  end

end
