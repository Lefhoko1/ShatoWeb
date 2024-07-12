// /components/email-template.tsx

import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, message }) => {
  return (
    <div>
      <h1>Hello {firstName},</h1>
      <p>{message}</p>
      <p>Welcome to Acme!</p>
    </div>
  );
};
