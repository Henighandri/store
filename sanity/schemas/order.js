export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },

    {
      name: "phone",
      title: "Phone",
      type: "number",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },

    {
      name: "totalPrice",
      title: "totalPrice",
      type: "number",
    },

    {
      title: "Order Items",
      name: "orderItems",
      type: "array",
      of: [
        {
          title: "Order Item",
          type: "orderItem",
        },
      ],
    },

    {
      title: "IsDelivered",
      name: "isDelivered",
      type: "boolean",
    },
    {
      title: "DeliveredAt",
      name: "deliveredAt",
      type: "datetime",
    },
    {
      title: "CreatedAt",
      name: "createdAt",
      type: "datetime",
    },
  ],
};
