'use server';

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // 1. SPAM BOT PROTECTION (HONEYPOT)
  const botcheck = formData.get('botcheck');
  if (typeof botcheck === 'string' && botcheck.trim().length > 0) {
    console.log("Spam bot blocked!");
    return { success: true }; 
  }

  // 2. Extract Data
  const firstName = formData.get('firstName') || '';
  const lastName = formData.get('lastName') || '';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || 'Not provided';
  const topic = formData.get('topic') || 'New Inquiry';
  
  const message = formData.get('message') || formData.get('medicalNotes') || formData.get('goals') || 'No message provided';
  const selectedPlan = formData.get('selectedPlan');
  const age = formData.get('age');
  const experience = formData.get('experience') || formData.get('currentRank');
  const preferredTime = formData.get('preferredTime');

  // 3. Build HTML
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
    const { data, error } = await resend.emails.send({
      from: 'Doshinkai Dojo <onboarding@resend.dev>', 
      // Sends all emails to the Dojo
      to: 'dskdojo1@gmail.com', 
      subject: `New Dojo Inquiry: ${firstName} ${lastName}`,
      replyTo: email ? (email as string) : 'dskdojo1@gmail.com',
      html: htmlContent,
    });

    // 5. Error Check
    if (error) {
      console.error("Resend completely blocked the email:", error);
      return { success: false, error: error.message }; 
    }

    console.log("Email successfully sent:", data);
    return { success: true }; 

  } catch (error) {
    console.error("Server crashed:", error);
    return { success: false, error: 'Failed to send email' };
  }
}