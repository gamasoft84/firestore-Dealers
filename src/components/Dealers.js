import React from "react";
import DealerForm from "./DealerForm";
import { db } from "../db/firebase";

const Dealers = () => {

  const addDealer = async (linkDealer) =>{
      console.log('before save');
      await db.collection('dealers').doc().set(linkDealer);
      console.log('New Dealer add');
  }

  return (
    <>
      <DealerForm addDealer={addDealer}/>
      <h1>List Dealers</h1>
    </>
  );
};

export default Dealers;
