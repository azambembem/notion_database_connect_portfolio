// import React from "react";
// import Lottie from "react-lottie-player";

// // import lottieJson from "/animation.json";
// import lottieJson from "/public/animation.json";
// // import lottieJson from "/animation.json";
// // import lottieJson from "../../public/animation.json";

// export default function Animation() {
//   return (
//     <Lottie
//       loop
//       animationData={lottieJson}
//       play
//       style={{ width: `100%`, height: `100%` }}
//     />
//   );
// }

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function Animation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation.json") // public 폴더에 있는 JSON 파일을 fetch로 불러옴
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) {
    return <div>Loading...</div>;
  }

  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  );
}
