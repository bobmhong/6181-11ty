import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField } from "@kickstartds/form/lib/text-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { Button } from "@kickstartds/base/lib/button";
import { Section } from "@kickstartds/ds-agency/section";
import { Text } from "@kickstartds/ds-agency/text";
import { Cta } from "@kickstartds/ds-agency/cta";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <Section backgroundColor="accent">
      <Cta
        textAlign="center"
        headline="Ready to learn more?"
        sub="Please tell us more about yourself..."
      />

      <form onSubmit={handleSubmit} method="POST" data-netlify="true">
        <TextField
          inputMode="text"
          label="Name"
          name="name"
          type="tel"
          value=""
          icon="person"
        />
        <TextField
          inputMode="text"
          label="Email"
          name="email"
          type="email"
          value=""
          icon="email"
        />
        <TextField
          inputMode="text"
          label="Phone"
          name="phone"
          type="tel"
          value=""
          icon="phone"
        />
        <TextArea
          inputMode="text"
          label="Message"
          name="message"
          value=""
          icon="info"
        />
        <div align="center">
          <Button label="Submit" size="medium" type="submit" variant="solid" />
        </div>
      </form>

      <Text text="*For the quickest response, call Melissa at (517) 214-4747 for more info or to set up a private showing.*" />
    </Section>
  );
};

export default ContactForm;
