import React, { useState } from 'react'

import { Image } from './styled/ImageLoader.css'

export type ImageLoaderProps = {
  alt: string
  urlToImage: string
}

function ImageLoader({ alt, urlToImage }: ImageLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  function onLoad() {
    setLoaded(true)
  }

  return <Image src={urlToImage} alt={alt} onLoad={onLoad} loaded={loaded} />
}

export default ImageLoader
