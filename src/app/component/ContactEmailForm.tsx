import { Html } from "@react-email/components";
import * as React from "react";

export default function ContactEmailForm({
  params,
}: {
  params: { username: string; email: string; messages: string };
}) {
  return (
    <Html>
      <html>
        <body>
          <h2>New message from {params.username}</h2>

          <p>
            <strong>Email:</strong> {params.email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>
          <p>{params.messages}</p>

          <hr />

          <p>
            Need help? Contact our support team or reach us on social media.
          </p>
        </body>
      </html>
    </Html>
  );
}
