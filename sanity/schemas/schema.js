import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product";
import banner from "./banner";
import information from "./information";
import order from "./order";
import orderItem from "./orderItem";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([product, banner, information, order, orderItem]),
});
