import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  // const [obj, setObj] = useState({ like: 0, on: true });

  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}点赞
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "On" : "off"}
      </button>
    </>
  );
};

export default LikeButton;
