import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await axios.post(
            "https://site--cookies-server--vp8wfzxxmvxt.code.run/cookie",
            {},
            {
              withCredentials: true,
            }
          );
          console.log(response.data);
        }}
      >
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
