import React, { useEffect, useState } from "react";
import {toast} from "react-toastify";
import DealerForm from "./DealerForm";
import { db } from "../db/firebase";

const Dealers = () => {
  const [dealers, setDealers] = useState([]);

  const addDealer = async (linkDealer) => {
    await db.collection("dealers").doc().set(linkDealer);
    toast('New Dealer Add',{
      type: 'success',
      autoClose: 1700,
    });    
  };

  const onDeleteDealer = async (id) =>{
    if(window.confirm('Are you sure you want to delete this Dealer ?')){
      await db.collection("dealer").doc(id).delete();
      toast('Dealer Roved Succesufully',{
        type: 'error',
        autoClose: 1700,
      });

    }
  }

  const getDealers = () => {
    db.collection("dealers").onSnapshot((querySnapshot) => {
      const dealers = [];
      querySnapshot.forEach((doc) => {
        dealers.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setDealers(dealers);
    });
  };

  useEffect(() => {
    getDealers();
  }, []);

  return (
    <>
      <div className="col-md-6 p-2">
        <DealerForm addDealer={addDealer} />
      </div>
      <div className="col-md-6 p-8">
        {dealers.map((d) => (
          <div className="card mb-1" key={d.id}>
            <div className="card-body"></div>
            <div className="d-flex justify-content-between">
              <h6>Name: {d.name}</h6>
              <i className="material-icons text-danger" onClick={() => onDeleteDealer(d.id)}>close</i> 
            </div>
            <h6>Code: {d.code}</h6>
            <h6>State: {d.state}</h6>
            <h6>Phone: {d.phone}</h6>
            <h6>Latitude: {d.latitude}</h6>
            <h6>Longitude: {d.longitude}</h6>
          </div>
        ))}
      </div>
      b
    </>
  );
};

export default Dealers;
