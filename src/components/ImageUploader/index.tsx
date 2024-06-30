
import { TImageUploader } from "../../common/types";
import useImageUploader from "./useImageUploader";

function ImageUploader({ id, classes }: TImageUploader) {
  const {
    imgURI,
    inputRef,
    handleChange,
    handleClick
  } = useImageUploader()
  return (
    <div onClick={handleClick} className={classes.container}>
      {!imgURI &&
       <>
        <h3> Upload Image </h3>
        <input
          ref={inputRef}
          id={id}
          type="file"
          onChange={handleChange}
          className={classes.inputField}
        />
       </>
      }
      {imgURI && <img className={classes.image} alt='N/A' src={imgURI}/>}
    </div>
  )
}

export default ImageUploader