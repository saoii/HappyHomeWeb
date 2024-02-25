import { ChangeEvent, useState } from 'react';
import { House } from '../types/house';
import { useNavigate } from 'react-router-dom';
import toBase64 from '../toBase64';

type Args = {
  house: House;
  submitted: (house: House) => void;
};

const HouseForm = ({ house, submitted }: Args) => {
  const [houseState, setHouseState] = useState({ ...house });
  const nav = useNavigate();

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    submitted(houseState);
  };

  const onFileSelected = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    e.target.files &&
      e.target.files[0] &&
      setHouseState({
        ...houseState,
        photo: await toBase64(e.target.files[0]),
      });
  };

  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          value={houseState.address}
          onChange={(e) =>
            setHouseState({ ...houseState, address: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          placeholder="City"
          value={houseState.city}
          onChange={(e) =>
            setHouseState({ ...houseState, city: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="State">State</label>
        <input
          type="text"
          className="form-control"
          placeholder="State"
          value={houseState.state}
          onChange={(e) =>
            setHouseState({ ...houseState, state: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="Postcode">Postcode</label>
        <input
          type="text"
          className="form-control"
          placeholder="Postcode"
          value={houseState.postcode}
          onChange={(e) =>
            setHouseState({ ...houseState, price: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          placeholder="Description"
          value={houseState.description}
          onChange={(e) =>
            setHouseState({ ...houseState, description: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={houseState.price}
          onChange={(e) =>
            setHouseState({ ...houseState, price: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          className="form-control"
          onChange={onFileSelected}
        />
      </div>
      <div className="mt-2">
        <img className="houseFrame" src={houseState.photo}></img>
      </div>
      <button
        className="btn btn-primary mt-2"
        disabled={!houseState.address || !houseState.state}
        onClick={onSubmit}
      >
        Submit
      </button>
      <button className="btn btn-primary mt-2" onClick={() => nav('/')}>
        Cancel
      </button>
    </form>
  );
};

export default HouseForm;
