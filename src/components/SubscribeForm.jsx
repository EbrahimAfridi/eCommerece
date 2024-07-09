import { useState } from "react";
import emailjs from "emailjs-com";

const SubscribeForm = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  emailjs.init("K6gY1CYfV6wvce-M4");

  const sendSubscriptionEmail = (subscriberEmail) => {
    // Send email to owner
    emailjs
      .send("service_ivt0voh", "template_hkuzepg", {
        to_email_owner: "ahamadarsh92@gmail.com",
        subscriber_email: subscriberEmail,
      })
      .then(function (response) {
        console.log("Email to owner sent successfully", response);
      })
      .catch(function (error) {
        console.error("Email to owner could not be sent", error);
      });

    // Send email to subscriber
    emailjs
      .send("service_ivt0voh", "template_p3vnpol", {
        to: subscriberEmail,
      })
      .then(function (response) {
        console.log("Email to subscriber sent successfully", response);
        console.log(
          "Thank you for subscribing! Check your email for confirmation."
        );
      })
      .catch(function (error) {
        console.error("Email to subscriber could not be sent", error);
        console.log("Oops! Something went wrong. Please try again later.");
      });
  };

  const handleSubscribe = () => {
    if (subscriberEmail) {
      sendSubscriptionEmail(subscriberEmail);
    }
  };

  return (
    <div className="flex gap-2" style={{ marginTop: "20px" }}>
      <input
        type="email"
        placeholder="Your email"
        className="md:w-60 h-12 hover:border-blue-600 focus:border-blue-600 bg-black pl-2 rounded-lg border border-zinc-300 shadow-sm focus:outline-none text-zinc-400 text-md font-light"
        value={subscriberEmail}
        onChange={(e) => setSubscriberEmail(e.target.value)}
      />
      <button
        className="hover:bg-opacity-90 p-3 w-32 bg-white text-black hover:bg-black hover:text-white rounded-lg border shadow-sm font-extralight"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm;
