import { StyleSheet, Pressable } from 'react-native'
import React, { Fragment } from 'react'
import DefaultView from '@/components/viewComponents/DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultInput from '@/components/input/DefaultInput.component'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DefaultButton from '@/components/buttons/DefaultButton'
import ControlInputWrapper from '@/components/input/ControlInputWrapper.component'
import { useForm } from 'react-hook-form';
import DefaultImage from '@/components/image/DefaultImage.component'
import { TDistrict,TPoliceStation,TPostOffice } from '@/types/country'
import AddressPickerModal, { TAddressPickerData } from '@/components/modal/AddressPickerModal.component'
//<FontAwesome6 name="chevron-down" size={24} color="black" />

const districtData: {
  content: TDistrict[];
} = require("../../constants/districtsBD.json");

const policeStationData: {
  content: TPoliceStation[];
} = require("../../constants/policeStations.json");

const postOfficeData: {
  content: TPostOffice[];
} = require("../../constants/postOfficesBD.json");

// const findCountryCode = (code:string) =>{
//   return countryCodeData.countries.find((country) => country.phone === code);
// }

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  district: '',
  policeStation: "",
  postOffice: '',
  cityVillageHouse:"",
  rodeBlockSector: "",
}

type AddressProps = {
  updateProgressStep?: (activeState: number) => void
}

export default function Address({updateProgressStep=()=>{}}: AddressProps) {
   const { control, handleSubmit, watch,setValue, formState: { errors, } } = useForm({defaultValues});
  const {theme} = useBrandTheme()
  const [countryCode, setCountryCode] = React.useState<string>("+880"); 
  const password = watch('district');
   const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:Date) => {
    //  console.warn("A date has been picked: ", date.toLocaleDateString());
    const sliceDate = date.toLocaleDateString().slice(0,10)
    setValue("district", sliceDate);
    hideDatePicker();
  };

  const onSubmit = (data:typeof defaultValues) =>{
    console.log(data)
    updateProgressStep(3)
  }



  const styles = StyleSheet.create({
     container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    paddingHorizontal: 20,
    
  },
  inputContainer:{
    marginTop:30,
    paddingHorizontal: 20,
    paddingVertical:20,
    width: '100%',
    backgroundColor:theme.colors.background,
    gap:15,
    borderRadius:10,
    
  },

  button:{
    marginTop:10,
  
  },
   addressImage :{
    width:120,
    height:120,
    objectFit:"contain",
    
  },

  })

  return (
    <DefaultView style={styles.container}>
       <DefaultImage   style={styles.addressImage} source={require('../../assets/images/address.png')}  />
        <DefaultView style={styles.inputContainer}>
          <AddressInputContainer updateProgressStep={updateProgressStep} />
         
        </DefaultView>
    </DefaultView>
     
  )
}

type TCurrentModalData = "district" | "policeStation" | "postOffice";
type AddressInputContainerProps = {
  updateProgressStep?: (activeState: number) => void
}

const AddressInputContainer = ({updateProgressStep=()=>{}}: AddressInputContainerProps) =>{
     const { control, handleSubmit, watch,setValue,getValues, formState: { errors, } } = useForm({defaultValues});
     const {theme} = useBrandTheme()
     const [currentModalData,setCurrentModalData] = React.useState<TCurrentModalData>("district")

      const selectedDistrict = watch('district');
   const [showModal, setShowModal] = React.useState(false);

  const openModal = (modalType : TCurrentModalData) => {
    setCurrentModalData(modalType)
    setShowModal( true);
  };
  const closeModal = () => {
    setShowModal( false);
  };

    const mapDistrictData : TAddressPickerData[] = React.useMemo(() =>districtData.content.map(district => ({...district,label:district.value,value:district?.value,searchBy:"value"})),[])
    const selectedDistrictSingleData  : TDistrict | undefined = React.useMemo(()=> districtData.content.find(district => district.value.toLowerCase() === selectedDistrict.toLowerCase()) ,[selectedDistrict])
 
    const mapPoliceStationData : TAddressPickerData[] = React.useMemo(() =>{
        let value = [] as  TAddressPickerData[]
        if(selectedDistrict && selectedDistrictSingleData?.value) {
            value = policeStationData.content?.filter(policeStation => policeStation?.districtId === selectedDistrictSingleData?.id)
            .map(policeStation => ({...policeStation,label:policeStation.name,value:policeStation?.name,searchBy:"value"}))
        }
        return value;
    },[selectedDistrict,selectedDistrictSingleData])

    const mapPostOfficeData : TAddressPickerData[] = React.useMemo(() =>{
        let value = [] as  TAddressPickerData[]
        if(selectedDistrict && selectedDistrictSingleData?.value) {
            value = postOfficeData.content?.filter(postOffice => postOffice?.districtId === selectedDistrictSingleData?.id)
            .map(postOffice => ({...postOffice,label:postOffice.value,value:postOffice?.value,searchBy:"value"}))
        }
        return value;
    },[selectedDistrict,selectedDistrictSingleData])
    
  const onSelectList = (data:TAddressPickerData) =>{
    setValue(currentModalData,data.value)
    closeModal()
    
  }
   const onSubmit = (data:typeof defaultValues) =>{
    console.log(data)
    updateProgressStep(3)
  }

  const modalData  = React.useMemo( () => {
    const obj = {
    district: mapDistrictData,
    policeStation:mapPoliceStationData,
    postOffice:mapPostOfficeData
    
  }
  return obj[currentModalData]
  } ,[mapDistrictData,mapPoliceStationData,mapPostOfficeData,currentModalData])

  const searchInputPlaceholder = React.useMemo(() => {
    let placeholder = ""
    switch(currentModalData) {
      case "district":
        placeholder = "Search District"
        break
      case "policeStation":
        placeholder = "Search Police Station"
        break
         case "postOffice":
        placeholder = "Search Post Office"
        break
        default:
          placeholder = "Search District" 
    }
    return placeholder
  }
  ,[currentModalData])

    return (
        <Fragment>
            <AddressPickerModal data={modalData} onSelect={onSelectList}  visible={showModal} onClose={closeModal} searchInputPlaceholder={searchInputPlaceholder}  />
             <Pressable onPress={() => openModal("district")}>
            <ControlInputWrapper control={control} name='district' rules={{required:"Select district required"}} >
           <DefaultInput onPress={() => openModal("district")} variant={ selectedDistrict ? "contain" : "disable"} editable={ false }   placeholder='Select District' rightIcon={<FontAwesome6 name="chevron-down" size={20} color={theme.colors.textSecondary}  /> }  />
          </ControlInputWrapper>
            </Pressable>

             <Pressable onPress={() => selectedDistrict ?  openModal("policeStation") : ()=>{}}>
            <ControlInputWrapper control={control} name='policeStation' rules={{required:"Select police station required"}} >
           <DefaultInput onPress={() => selectedDistrict ?  openModal("policeStation") : ()=>{}} variant={ selectedDistrict ? "contain" : "disable"} editable={ false }  placeholder='Select Police Station' rightIcon={<FontAwesome6 name="chevron-down" size={20} color={theme.colors.textSecondary}  /> }  />
          </ControlInputWrapper>
            </Pressable>

             <Pressable onPress={() =>  selectedDistrict ? openModal("postOffice") : ()=>{}}>
            <ControlInputWrapper control={control} name='postOffice' rules={{required:"Select post office required"}} >
           <DefaultInput onPress={() =>  selectedDistrict ? openModal("postOffice") : ()=>{}} variant={ selectedDistrict ? "contain" : "disable"} editable={false}  placeholder='Select post office' rightIcon={<FontAwesome6 name="chevron-down" size={20} color={theme.colors.textSecondary}  /> }  />
          </ControlInputWrapper>
            </Pressable>

            <ControlInputWrapper control={control} name='cityVillageHouse'  >
           <DefaultInput  placeholder='City/Vill/House' editable={true}  />
          </ControlInputWrapper>

            <ControlInputWrapper control={control} name='rodeBlockSector'  >
           <DefaultInput  placeholder='Road/Block/Sector' editable={true}  />
          </ControlInputWrapper>
        
         <DefaultButton onPress={handleSubmit(onSubmit)} label="Next"  style={styles.button}  />

        </Fragment>
    )
}

const styles = StyleSheet.create({  button:{
    marginTop:10,
  
  },})