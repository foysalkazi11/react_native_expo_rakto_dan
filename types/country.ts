export type Country = {
  name: string;
  phone: string;
  emoji: string;
};
export type TDistrict = {
  value: string;
  id: string;
  
};
export type TPoliceStation = {
   "id": string;
    "name": string;
    "districtId": string;
    "rpoId": string
};
export type TPostOffice = {
     "id": string;
    "value": string;
    "postalCode": string;
    "districtId": string
};
