import React from "react";
import JasperPrivacy from "../components/JasperPrivacy";

function Privacy() {
  return (
    <div className="privacy py-8 pad">
      <h1 className="text-4xl mb-4">Privacy Policy</h1>

      <p>
        DevsPal is a chatbot that uses the OpenAI GPT-3 API to generate
        responses to user prompts. This Privacy Policy explains how we handle
        the information that is collected through the use of DevsPal.
      </p>

      <h2>Information Collection and Use</h2>

      <p>
        We do not collect any personal information or data from users through
        DevsPal. We do not retain user history or information, and all
        conversations are strictly between the user and the chatbot.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        DevsPal uses the OpenAI GPT-3 API to generate responses to user prompts.
        OpenAI's Privacy Policy can be found at&nbsp;
        <a href="https://beta.openai.com/policies/privacy-policy/">
          https://beta.openai.com/policies/privacy-policy/
        </a>
        .
      </p>

      <h2>Data Security</h2>

      <p>
        We take reasonable measures to protect the information that is collected
        through the use of DevsPal. However, we cannot guarantee the security of
        any information that is transmitted through the internet.
      </p>

      <JasperPrivacy />

      <h2>Changes to this Privacy Policy</h2>

      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or applicable laws and regulations. We encourage you to
        review this Privacy Policy periodically for any changes.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a
          href="https://twitter.com/thefacecodes"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Privacy;
