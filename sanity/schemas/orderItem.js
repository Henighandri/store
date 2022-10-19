export default {
  title: "Order Item",
  name: "orderItem",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "quantity",
      name: "quantity",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      title: "price",
      name: "price",
      type: "number",
    },
  ],
};
