'use server';

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // 1. HONEYPOT SPAM CHECK: If this field has text, it's a bot!
  const botcheck = formData.get('botcheck');
  if (botcheck !== null && botcheck !== '') {
    console.log("Spam bot blocked by Honeypot!");
    // Return success so the bot thinks it worked and leaves us alone
    return { success: true }; 
  }

  // 2. Extract all possible fields across your 3 different forms
  const firstName = formData.get('firstName') || '';
  const lastName = formData.get('lastName') || '';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || 'Not provided';
  const topic = formData.get('topic') || 'New Inquiry';
  
  // These fields vary depending on which form is submitted
  const message = formData.get('message') || formData.get('medicalNotes') || formData.get('goals') || 'No message provided';
  const selectedPlan = formData.get('selectedPlan');
  const age = formData.get('age');
  const experience = formData.get('experience') || formData.get('currentRank');
  const preferredTime = formData.get('preferredTime');

  // 3. Build the email HTML dynamically based on what was submitted
  let htmlContent = `
    <h2>New Dojo Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;

  if (formData.get('topic')) htmlContent += `<p><strong>Topic:</strong> ${topic}</p>`;
  if (selectedPlan && selectedPlan !== "None Selected") htmlContent += `<p><strong>Selected Plan:</strong> ${selectedPlan}</p>`;
  if (age) htmlContent += `<p><strong>Age:</strong> ${age}</p>`;
  if (experience) htmlContent += `<p><strong>Experience/Rank:</strong> ${experience}</p>`;
  if (preferredTime) htmlContent += `<p><strong>Preferred Time:</strong> ${preferredTime}</p>`;

  htmlContent += `<br/><p><strong>Message / Notes / Goals:</strong></p><p>${message}</p>`;

  try {
    // 4. Send the email via Resend
    await resend.emails.send({
      from: 'Doshinkai Dojo <onboarding@resend.dev>', 
      to: 'david.herascu@gmail.com', // Your registered Resend email address
      subject: `New Dojo Inquiry: ${firstName} ${lastName}`,
      replyTo: email ? (email as string) : 'david.herascu@gmail.com',
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: 'Failed to send email' };
  }
}