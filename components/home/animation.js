// import React from "react";
// import Lottie from "react-lottie-player";

// // import lottieJson from "/public/animation.json";
// // import lottieJson from "/animation.json";
// import lottieJson from "../../public/animation.json";

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
  const [lottieJson, setLottieJson] = useState(null);

  useEffect(() => {
    // public/animation.json 파일을 fetch
    fetch("/animation.json")
      .then((response) => response.json())
      .then((data) => setLottieJson(data));
  }, []);

  if (!lottieJson) return null; // 데이터를 가져오기 전에는 렌더링하지 않음

  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "100%", height: "100%" }}
    />
  );
}
