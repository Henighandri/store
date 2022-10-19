export default {
  name: "information",
  title: "Information",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",

      options: { hotspot: true },
    },
    {
      name: "store",
      title: "Store",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "number",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "faceBook",
      title: "Facebook",
      type: "string",
    },
  ],
};
