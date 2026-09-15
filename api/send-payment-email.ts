import { Resend } from 'resend';

export interface PaymentEmailRequestBody {
  email: string;
  traderName?: string;
  paymentMethod?: 'bank_naira' | 'bank_usd' | 'crypto';
  phoneNumber?: string;
  amount?: string;
}

// Format readable payment method label
function formatPaymentMethod(method?: string): string {
  switch (method) {
    case 'bank_naira':
      return 'Nigerian Bank Transfer (NGN)';
    case 'bank_usd':
      return 'Domiciliary USD Wire Transfer';
    case 'crypto':
      return 'USDT (Tron TRC20) Cryptocurrency';
    default:
      return 'Direct Clearing Transfer';
  }
}

// Generate luxury dark-and-gold styled HTML email template
function generateEmailHtml(params: {
  traderName: string;
  email: string;
  paymentMethodLabel: string;
  amount: string;
  proofUrl: string;
}): string {
  const { traderName, email, paymentMethodLabel, amount, proofUrl } = params;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Initiated - Submit Proof of Payment</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #09090b;
      color: #f4f4f5;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #09090b;
      padding: 40px 16px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #121215;
      border: 1px solid #27272a;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .header {
      background: linear-gradient(180deg, #18181b 0%, #121215 100%);
      padding: 36px 32px 24px;
      text-align: center;
      border-bottom: 1px solid #27272a;
    }
    .logo-badge {
      display: inline-block;
      padding: 6px 14px;
      background-color: rgba(250, 204, 21, 0.12);
      border: 1px solid rgba(250, 204, 21, 0.35);
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #facc15;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .title {
      margin: 0;
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    .body-content {
      padding: 32px;
    }
    .greeting {
      font-size: 17px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .text {
      font-size: 14px;
      line-height: 1.65;
      color: #a1a1aa;
      margin: 0 0 20px;
    }
    .card {
      background-color: #18181b;
      border: 1px solid #27272a;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .card-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #27272a;
      font-size: 13px;
    }
    .card-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .card-label {
      color: #71717a;
    }
    .card-value {
      color: #ffffff;
      font-weight: 600;
      text-align: right;
    }
    .cta-wrapper {
      text-align: center;
      padding: 10px 0 26px;
    }
    .cta-button {
      display: inline-block;
      background-color: #facc15;
      color: #09090b !important;
      font-size: 15px;
      font-weight: 800;
      text-decoration: none;
      padding: 16px 36px;
      border-radius: 999px;
      box-shadow: 0 10px 25px rgba(250, 204, 21, 0.35);
      letter-spacing: 0.2px;
    }
    .instructions-box {
      background-color: rgba(39, 39, 42, 0.4);
      border-left: 3px solid #facc15;
      padding: 16px 18px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
      font-size: 12px;
      color: #d4d4d8;
      line-height: 1.6;
    }
    .footer {
      background-color: #0d0d10;
      padding: 24px 32px;
      text-align: center;
      border-top: 1px solid #1f1f23;
      font-size: 12px;
      color: #52525b;
    }
    .footer a {
      color: #facc15;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="container">
            
            <!-- Header -->
            <div class="header">
              <div class="logo-badge">PROFITABLE TRADING HUB</div>
              <h1 class="title">Enrollment Reserved</h1>
            </div>

            <!-- Content -->
            <div class="body-content">
              <div class="greeting">Hello ${traderName},</div>
              <p class="text">
                Thank you for taking the leap toward institutional consistency. Your enrollment seat for the 
                <strong style="color: #facc15;">Profitable Trading Mentorship Cohort</strong> has been successfully reserved in our desk clearing system.
              </p>

              <!-- Transaction Summary Card -->
              <div class="card">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr style="border-bottom: 1px solid #27272a;">
                    <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Trader Name:</td>
                    <td style="padding: 8px 0; font-size: 13px; color: #ffffff; font-weight: 600; text-align: right;">${traderName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #27272a;">
                    <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Registered Email:</td>
                    <td style="padding: 8px 0; font-size: 13px; color: #ffffff; font-weight: 600; text-align: right;">${email}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #27272a;">
                    <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Tuition Access:</td>
                    <td style="padding: 8px 0; font-size: 13px; color: #ffffff; font-weight: 600; text-align: right;">${amount} (Lifetime)</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0 0; font-size: 13px; color: #71717a;">Selected Rail:</td>
                    <td style="padding: 8px 0 0; font-size: 13px; color: #facc15; font-weight: 600; text-align: right;">${paymentMethodLabel}</td>
                  </tr>
                </table>
              </div>

              <!-- Next Step Notice -->
              <div class="instructions-box">
                <strong>Action Required to Finalize:</strong><br>
                To secure and retain your spot, please click the button below to send your payment transfer receipt directly to our Official Telegram Desk.
              </div>

              <!-- Action Button -->
              <div class="cta-wrapper">
                <a href="${proofUrl}" target="_blank" rel="noopener noreferrer" class="cta-button">
                  Send Proof on Telegram &rarr;
                </a>
              </div>

              <p class="text" style="font-size: 12px; text-align: center; margin-top: 10px;">
                Can't click the button? Open this Telegram desk link in your browser:<br>
                <a href="${proofUrl}" style="color: #facc15; word-break: break-all;">${proofUrl}</a>
              </p>
            </div>

            <!-- Footer -->
            <div class="footer">
              <p style="margin: 0 0 6px;">
                Profitable Trading Hub &bull; Institutional Mentorship Desk
              </p>
              <p style="margin: 0;">
                If you did not initiate this request, please contact our desk immediately at 
                <a href="mailto:support@profitabletradinghub.org">support@profitabletradinghub.org</a>.
              </p>
            </div>

          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

// Serverless Handler (Node/Vercel standard)
export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed. Please send a POST request.' });
  }

  try {
    const body: PaymentEmailRequestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { email, traderName = 'Trader', paymentMethod, phoneNumber, amount = '$1,500' } = body || {};

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const paymentMethodLabel = formatPaymentMethod(paymentMethod);
    const defaultTelegramUrl = process.env.TELEGRAM_URL || 'https://t.me/Genesis_Tradess';
    const proofUrl = process.env.PROOF_SUBMISSION_URL || defaultTelegramUrl;
    const emailFrom = process.env.EMAIL_FROM || 'Profitable Trading Hub <onboarding@profitabletradinghub.org>';
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

    const htmlContent = generateEmailHtml({
      traderName,
      email,
      paymentMethodLabel,
      amount,
      proofUrl,
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    // Production sending via Resend API
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Note: On unverified Resend test domains (onboarding@resend.dev), Resend forbids multiple recipients/BCCs
      const isTestDomain = emailFrom.includes('onboarding@resend.dev');
      const shouldBccAdmin = adminEmail && adminEmail.includes('@') && !isTestDomain;

      const emailPayload: any = {
        from: emailFrom,
        to: [email],
        subject: `Payment Initiated: Action Required - Send Proof of Payment (${traderName})`,
        html: htmlContent,
      };

      if (shouldBccAdmin) {
        emailPayload.bcc = [adminEmail];
      }

      const emailResult = await resend.emails.send(emailPayload);

      if (emailResult.error) {
        console.error('[Resend Error]', emailResult.error);
        return res.status(500).json({
          error: emailResult.error.message || 'Failed to send email through provider.',
          details: emailResult.error,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Payment confirmation email successfully dispatched.',
        id: emailResult.data?.id,
        recipient: email,
      });
    }

    // Development fallback (when RESEND_API_KEY is not yet added in environment variables)
    console.warn('[Notice] RESEND_API_KEY is not set in environment variables. Email was not sent over SMTP/API.');
    return res.status(200).json({
      success: true,
      simulated: true,
      message: 'RESEND_API_KEY environment variable is not configured on Vercel. Set RESEND_API_KEY in Vercel Settings -> Environment Variables and redeploy.',
      recipient: email,
      proofUrl,
    });
  } catch (error: any) {
    console.error('[Payment Email Handler Error]', error);
    return res.status(500).json({
      error: 'An unexpected internal error occurred while processing the payment email.',
      message: error?.message || String(error),
    });
  }
}
