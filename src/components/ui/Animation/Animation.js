import React from "react";
import Lottie from "react-lottie";

const Animation = (props) => {
  const { animationData } = props;

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isStopped={true} {...props} />;
};

export default Animation;
