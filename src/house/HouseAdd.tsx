import { useAddHouse } from '../hooks/HouseHooks';
import { House } from '../types/house';
import ValidationSummary from '../valdationSummary';
import HouseForm from './HouseForm';

const HouseAdd = () => {
  const addHouseMutation = useAddHouse();

  const house: House = {
    id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    description: '',
    price: 0,
    photo: '',
  };

  return (
    <>
      {addHouseMutation.isError && (
        <ValidationSummary error={addHouseMutation.error} />
      )}
      <HouseForm house={house} submitted={(h) => addHouseMutation.mutate(h)} />
    </>
  );
};

export default HouseAdd;
