import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField } from "@kickstartds/form/lib/text-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { Button } from "@kickstartds/base/lib/button";

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
        <Button label="Submit" size="medium" type="submit" variant="solid"/>
      </div>
    </form>
  );
};

export default ContactForm;
