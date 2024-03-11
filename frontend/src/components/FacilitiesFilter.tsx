import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ onChange, selectedFacilities }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Facility Type</h4>
      {hotelFacilities.map((facilityType) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={facilityType}
            checked={selectedFacilities.includes(facilityType)}
            onChange={onChange}
          />
          <span>{facilityType}</span>
        </label>
      ))}
    </div>
  );
};

export default FacilitiesFilter;
