const light = {
  colors: {
     primary: '#d32f2f',   // A bold red color representing blood and urgency
     primaryLight: "#FBE6EB",
    secondary: '#ff5252', // A lighter red for accents
    background: '#ffffff', // Clean white background
    surface: '#f1f1f1',    // Light grey for surfaces
    gray: '#dddddd', //gray
    error: '#f44336',      // A different red shade for errors
    textPrimary: '#212121', // Dark grey for primary text
    textSecondary: '#757575', // Lighter grey for secondary text
    textOnPrimary: '#ffffff', // White text on primary color
  },
  fonts: {
    thin: 'Poppins_100Thin',
    thinItalic: 'Poppins_100Thin_Italic',
    extraLight: 'Poppins_200ExtraLight',
    extraLightItalic: 'Poppins_200ExtraLight_Italic',
    light: 'Poppins_300Light',
    lightItalic: 'Poppins_300Light_Italic',
    regular: 'Poppins_400Regular',
    regularItalic: 'Poppins_400Regular_Italic',
    medium: 'Poppins_500Medium',
    mediumItalic: 'Poppins_500Medium_Italic',
    semiBold: 'Poppins_600SemiBold',
    semiBoldItalic: 'Poppins_600SemiBold_Italic',
    bold: 'Poppins_700Bold',
    boldItalic: 'Poppins_700Bold_Italic',
    extraBold: 'Poppins_800ExtraBold',
    extraBoldItalic: 'Poppins_800ExtraBold_Italic',
    black: 'Poppins_900Black',
    blackItalic: 'Poppins_900Black_Italic',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  elevation: {
    low: 2,
    medium: 4,
    high: 8,
  },
};

const dark = {
  ...light,
  colors: {
    primary: '#b71c1c',   // Darker red for dark mode
    primaryLight: "#B84A5A",
    secondary: '#ef5350', // A vibrant red for accents
    background: '#121212', // Dark background
     surface: '#2A2A2A',       // Slightly lighter dark surface '#333333' '#1e1e1e',
     gray: '#cccccc', //gray 
    error: '#e57373',      // Softer red for errors
    textPrimary: '#ffffff', // White for primary text
    textSecondary: '#b3b3b3', // Light grey for secondary text
    textOnPrimary: '#ffffff', // White text on primary color
  },
   
};

export const brandTheme = {
  light,
  dark,
};


// typography : {
    
//     h1: {
//       fontSize: 30,
//     fontFamily: 'Poppins_600SemiBold',
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:45
//     },
//     h2: {
//        fontSize: 24,
//     fontFamily: 'Poppins_600SemiBold',
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:36
//     },

//     h3: {
//        fontSize: 22,
//     fontFamily:  'Poppins_500Medium',
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:36
//     },
//     h4: {
//        fontSize: 16,
//     fontFamily:  'Poppins_500Medium',
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:24
//     },
//     subHeading1: {
//        fontSize: 18,
//     fontFamily: 'Poppins_400Regular',
//       color: '#B3B3B3',
//         letterSpacing:0,
//         lineHeight:27
//     },

//     subHeading2: {
//       fontSize: 14,
//     fontFamily: 'Poppins_400Regular',
//       color: '#B3B3B3',
//         letterSpacing:0,
//         lineHeight:21
//     },
//     paragraph: {
//        fontSize: 14,
//     fontFamily: 'Poppins_400Regular' ,
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:21
//     },

//     label: {
//        fontSize: 16,
//     fontFamily: 'Poppins_500Medium',
//       color: '#FFFFFF',
//         letterSpacing:0,
//         lineHeight:24
//     },
//     // ... define other heading and text styles
//   }



  //   typography : {
    
  //   h1: {
  //     fontSize: 30,
  //   fontFamily: 'Poppins_600SemiBold',
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:45
  //   },
  //   h2: {
  //      fontSize: 24,
  //   fontFamily: 'Poppins_600SemiBold',
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:36
  //   },

  //   h3: {
  //      fontSize: 22,
  //   fontFamily:  'Poppins_500Medium',
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:36
  //   },
  //   h4: {
  //      fontSize: 16,
  //   fontFamily:  'Poppins_500Medium',
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:24
  //   },
  //   subHeading1: {
  //      fontSize: 18,
  //   fontFamily: 'Poppins_400Regular',
  //     color: '#757575',
  //       letterSpacing:0,
  //       lineHeight:27
  //   },

  //   subHeading2: {
  //     fontSize: 14,
  //   fontFamily: 'Poppins_400Regular',
  //     color: '#757575',
  //       letterSpacing:0,
  //       lineHeight:21
  //   },
  //   paragraph: {
  //      fontSize: 14,
  //   fontFamily: 'Poppins_400Regular' ,
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:21
  //   },

  //   label: {
  //      fontSize: 16,
  //   fontFamily: 'Poppins_500Medium',
  //     color: '#212121',
  //       letterSpacing:0,
  //       lineHeight:24
  //   },
  //   // ... define other heading and text styles
  // }