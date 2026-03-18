'use server';

import { Resend } from 'resend';

// Initialize Resend with your API key from .env (Hostinger) or .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // Extract all possible fields across your 3 different forms
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

  // Build the email HTML dynamically based on what was submitted
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
    await resend.emails.send({
      // Resend requires you to use their onboarding email address until you verify your domain
      from: 'Doshinkai Dojo <onboarding@resend.dev>', 
      to: 'dskdojo1@gmail.com', // Your actual email address
      subject: `New Dojo Inquiry: ${firstName} ${lastName}`,
      // Safety net: if email is blank, default to your email so it doesn't crash the server
      replyTo: email ? (email as string) : 'dskdojo1@gmail.com',
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email' };
  }
}