import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert, Text, ImageSourcePropType, Pressable } from 'react-native';
import DefaultView from '../viewComponents/DefaultView';
 import * as ImagePicker from 'expo-image-picker';
//  import ImageCropPicker,{openCropper} from 'react-native-image-crop-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DefaultImage from '../image/DefaultImage.component';

interface AvatarProps {
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ size = 100 }) => {
  const [image, setImage] = useState<string | null>(null);
  console.log({image});
  
   const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    //    console.log(result);
    // if (!result.canceled && result.assets) {
    //   // setImage(result.assets[0].uri);
    //   const resizedImage = await resizeImage(result.assets[0].uri);
    //   if (resizedImage) {
    //     setImage(resizedImage.path);
    //   }
    // }
  };

  // const resizeImage = async (uri: string) => {
  //   console.log(ImageCropPicker.openCropper);
    
  //   if (ImageCropPicker.openCropper === null) return {path:uri}
      
    
  //   try {
  //     const image = await ImageCropPicker?.openCropper({
  //         path: uri,
  //         width: size,
  //         height: size,
  //         cropping: true,
  //         cropperCircleOverlay: true,
  //         mediaType: "photo"
  //     });
  //     return image;
  //   } catch (error) {
  //     console.error('Error resizing image:', error);
  //     return null;
  //   }
  // };


 
  const {theme} = useBrandTheme()

  const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: theme.colors.textOnPrimary,
    borderRadius: size / 2,
    width: size,
    height: size,
    backgroundColor: theme.colors.textSecondary,
    
  },

  userPlaceholder: {
     borderRadius: size / 2,
    width:"100%",
    height: "100%",
    backgroundColor: theme.colors.textOnPrimary,
    opacity: .7, // 50% opacity for the box
  },

  avatarPlaceholder: {
    backgroundColor: theme.colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
   borderWidth: 2,
    borderColor: theme.colors.textOnPrimary,
  },
  placeholderText: {
    fontSize: 40,
    color: '#D60033',

  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: -5,
    backgroundColor: theme.colors.textOnPrimary,
    borderRadius: 50,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  }
});

  return (
    <DefaultView style={styles.container}>
      
        {image ? (
          <Image
            source={{ uri: image } as ImageSourcePropType}
             style={styles.userPlaceholder}
          />
        ) : (
          <DefaultImage   style={styles.userPlaceholder} source={require('../../assets/images/user_placeholder.png')}  />
          
        )}

        <Pressable 
          style={styles.iconContainer}
          onPress={pickImage}
          >
            <Ionicons name="camera-outline" size={20} color="black" />
          </Pressable>
      
    </DefaultView>
  );
};



export default Avatar;
