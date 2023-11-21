import useSWR from "swr";
import {ajax} from "./lib/ajax.ts";

function App() {
  const {data} = useSWR('/posts', (path) => {
    return ajax.get(path)
  })
  return (
    <>
      <div className={"text-3xl"}>
        {data?.data[0].title}
      </div>
    </>
  )
}

export default App
