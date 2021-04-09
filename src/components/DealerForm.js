import React,{useState} from "react";

const DealerForm = (props) => {

   const initialStateValues = {
        name: '',
        code: '',
        state: '',
        phone: '',
        latitude: '',
        longitud: ''
    };

  const [values, setValues] = useState(initialStateValues); 

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDealer(values);
    setValues(initialStateValues)
  };

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setValues({...values, [name]:value})
    
  }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">business</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Dealer Name"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">confirmation_number</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Dealer code"
          name="code"
          onChange={handleInputChange}
          value={values.code}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">map</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="State"
          name="state"
          onChange={handleInputChange}
          value={values.state}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">phone</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Telephone"
          name="phone"
          onChange={handleInputChange}
          value={values.phone}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">location_on</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="latitude"
          name="latitude"
          onChange={handleInputChange}
          value={values.latitude}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">add_location</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="longitud"
          name="longitud"
          onChange={handleInputChange}
          value={values.longitud}
        />
      </div>

      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
};

export default DealerForm;
