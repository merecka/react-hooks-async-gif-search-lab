import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";

function GifListContainer({}) {
const [images, setImages] = useState();
const [firstIndex, setFirstIndex] = useState(0);
const [secondIndex, setSecondIndex] = useState(2);


// need to get Giphy Developer API.  Waiting on sign-up confirmation email.
useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then((r) => r.json())
    .then((images) => console.log(images));
    // .then((images) => setImages(images));
    }, []);

    return (
        <div className="belt">
            {/* {
            images.filter((element, index) => index >=firstIndex && index <= secondIndex).map((image) => {
                return <GifList key={sushi.id} sushi={sushi} onEaten={handleIsEaten} balance={balance} />
            })} */}
        </div>
      );
}

export default GifListContainer;
