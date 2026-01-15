import Button from "./components/ui/Button"
import {CirclePlus} from "lucide-react"
const App = () => {
  return (
    <>
      <Button
        text="Click"
        size="lg"
        variant="primary"
        pIcon={<CirclePlus />}
        sIcon={<CirclePlus />}
        onClick={()=>{}}
      />
    </>
  )
}

export default App