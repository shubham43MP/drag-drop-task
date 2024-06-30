import { useState, useRef } from "react";

function useImageUploader() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [imgURI, setImgURI] = useState<string | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files && e.target.files[0])
        setImgURI(URL.createObjectURL(e.target.files[0]))
    }
  
    const handleClick = () => {
      if (inputRef?.current) inputRef.current.click()
    }
    
    return {
        handleClick,
        imgURI,
        inputRef,
        handleChange
    }
}

export default useImageUploader