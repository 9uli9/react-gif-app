import axios from "axios";
import { Button } from "react-bootstrap";

const ViewTrending = (props) => {
  const setGifs = props.setGifs;

  const GIPHY_URL = "https://api.giphy.com/v1/gifs";
  const API_KEY = "43AL10dIQe6L9zoznaWwuQP7ULNFOk0e";

  const getTrending = () => {
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-4">
      <Button className="ms-2" variant="primary" onClick={getTrending}>
        Trending
      </Button>
    </div>
  );
};

export default ViewTrending;
