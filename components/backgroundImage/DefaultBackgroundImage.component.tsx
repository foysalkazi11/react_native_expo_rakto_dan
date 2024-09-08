import { ImageBackground } from 'react-native'

type ImageBackgroundProps = ImageBackground["props"]
export default function DefaultBackgroundImage(props: ImageBackgroundProps) {
  const {source, ...rest} = props
  return (
     <ImageBackground {...rest} source={source || require('../../assets/bg/bg_default_small')} />
  )
}

