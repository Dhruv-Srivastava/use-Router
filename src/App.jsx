import Route from "./lib/components/Route";
import Link from "./lib/components/Link";
import { useNavigate } from "./lib/hooks/use-navigate";

export default function App() {
  const navigate = useNavigate()
  return (
    <>
      <Route path="/">
        <h1>Home</h1>
        <button onClick={()=>navigate("/about")}>Go to About</button>
      </Route>

      <Route path="/about">
        <h1>About</h1>
        <Link to="/">Go to Home</Link>
      </Route>
    </>
  )
}
