import ClipLoader from "react-spinners/ClipLoader";
import { ClipLoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <ClipLoaderContainer>{<ClipLoader color="#26ca20" />}</ClipLoaderContainer>
  );
};
