import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setImage(data.message);
      });
  }, []);

  return loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" width="400px" />;
}
export default App;
