import { MagnifyingGlass } from "react-loader-spinner";
import { IconBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <IconBox>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color='#e15b64'
      />
    </IconBox>
  )
}
