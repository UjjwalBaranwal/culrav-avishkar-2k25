exports.generateVerificationEmail = (confirmLink, CONFIRM_MIN) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #dddddd;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.6;
                color: #555555;
            }
            .verification-code {
                display: block;
                margin: 20px 0;
                padding: 10px;
                background-color: #f4f4f4;
                border: 1px solid #dddddd;
                text-align: center;
                font-size: 20px;
                color: #333333;
                font-weight: bold;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                border-top: 1px solid #dddddd;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="content">
                <p>Click the link below to confirm your email (valid for ${CONFIRM_MIN} minutes):</p>
                <p><a href="${confirmLink}">Confirm Email</a></p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Culrav-Avishkar. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.forgetPasswordEmail = (resetLink, RESET_MIN) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Information</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #dddddd;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.6;
                color: #555555;
            }
            .password {
                display: block;
                margin: 20px 0;
                padding: 10px;
                background-color: #f4f4f4;
                border: 1px solid #dddddd;
                text-align: center;
                font-size: 20px;
                color: #333333;
                font-weight: bold;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                border-top: 1px solid #dddddd;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Reset Your Password</h1>
            </div>
            <div class="content">
                <p>Click to reset your password (valid for ${RESET_MIN} minutes):</p>
           <p><a href="${resetLink}">Reset Password</a></p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Culrav-Avishkar. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
