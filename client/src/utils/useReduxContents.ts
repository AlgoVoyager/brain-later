import axios from "axios";
import { useAppSelector } from "./hooks";
const useReduxContents = () => {
    const contents = useAppSelector(state => state.contents)
    
    return contents
}
export default useReduxContents