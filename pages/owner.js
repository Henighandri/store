import React, { useState } from "react";
import { useForm } from "../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import style from "./Owner.module.css";
import Card from "../FormElements/Card";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { Rings } from "react-loader-spinner";
import { client } from "../lib/client";
import Router from "next/router";

const owner = () => {
  const {
    totalPrice,

    cartItems,
  } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);

  const [formState, changeHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      numero: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const doc = {
      _type: "order",
      orderItems: cartItems.map((x) => ({
        ...x,
        _key: x.slug,
        // slug: undefined,
      })),
      createdAt: new Date().toISOString(),
      totalPrice,
      userName: formState.inputs.name.value,
      phone: Number(formState.inputs.numero.value),
      address: formState.inputs.address.value,
    };
    client
      .create(doc)
      .then((updatedDoc) => {
        console.log(
          `Hurray, the doc is updated! New document:${updatedDoc._id}`
        );
        setIsLoading(false);
        Router.push({ pathname: "/" });
      })
      .catch((err) => {
        setIsLoading(false);
        console.error("Oh no, the update failed: ", err.message);
      });
  };
  if (!cartItems || !totalPrice) {
    return (
      <Link href="/">
        <p>Votre panier est vide</p>
      </Link>
    );
  }

  return (
    <div className={style.container}>
      {!isLoading ? (
        <Card className={style.card}>
          <h2>Remplire le formulair </h2>
          <form onSubmit={onSubmitHandler}>
            <hr />

            <Input
              id="name"
              element="input"
              label="Nom"
              type="text"
              placeholder="Votre Nom"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={changeHandler}
              errorText="SVP,enter votre nom "
            />

            <Input
              id="address"
              element="input"
              label="Address"
              type="text"
              placeholder="Address"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={changeHandler}
              errorText="SVP,enter un email valide"
            />
            <Input
              id="numero"
              element="input"
              label="Numero"
              type="tel"
              placeholder="Numero"
              validators={[VALIDATOR_MINLENGTH(8)]}
              onInput={changeHandler}
              errorText="SVP,enter un numero valide"
            />
            <Button type="submit" disabled={!formState.isValid}>
              Passer la commande
            </Button>
          </form>
        </Card>
      ) : (
        <Rings color="#00BFFF" height={80} width={80} />
      )}
    </div>
  );
};

export default owner;
