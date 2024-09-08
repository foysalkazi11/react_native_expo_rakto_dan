import { Country } from "@/types/country";

const countryCodeData: {
  countries: Country[];
} = require("../../constants/countryCode.json");

 const filteredCountryCodeData = (searchInput:string) => {
    return countryCodeData.countries.filter((item) => {
      const itemName = item.name.toLowerCase();

      const itemCode = item.phone.toLowerCase();

      const textData = searchInput.toLowerCase();

      if (itemName.indexOf(textData) > -1 || itemCode.indexOf(textData) > -1)
        return true;
    });
  };