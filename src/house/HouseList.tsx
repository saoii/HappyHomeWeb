import { useState } from 'react';
import { House } from '../types/house';
import Config, { currencyFormatter } from '../config';
import useFetchHouses from '../hooks/HouseHooks';
import ApiStatus from '../apiStatus';
import { Link, useNavigate } from 'react-router-dom';

const HouseList = () => {
  const nav = useNavigate();
  const { data, status, isSuccess } = useFetchHouses();

  if (!isSuccess) return <ApiStatus status={status} />;

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((h) => (
              <tr key={h.id} onClick={() => nav(`house/${h.id}`)}>
                <td>{h.address}</td>
                <td>{h.city}</td>
                <td>{h.state}</td>
                <td>{currencyFormatter.format(h.price)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/house/add">
        Add
      </Link>
    </div>
  );
};

export default HouseList;
