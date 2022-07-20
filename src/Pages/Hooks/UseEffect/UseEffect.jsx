import React, { useEffect } from "react";
import { useState } from "react";

function UseEffect(props) {
  const [state, setState] = useState(1);
  const [like, setLike] = useState(1);
  // componentDidMount chạy 1 lần duy nhất sau render
  // componentDidUpdate chạy khi setState và props thay đổi
  // componentWillUnmount chạy khi component bị hủy di
  console.log("render");

  // cách 1 sử dụng thay thế componentDidMount và componentDidUpdate (ít sử dụng)
  //   useEffect(() => {
  //     console.log("useEffect");
  //   });

  // cách 2 sử dụng thay thế componentDidMount (sử dụng nhiều)
  useEffect(() => {
    console.log("didmount");
  }, []);

  //cách 3 sử dụng thay thế componentDidUpdate (sử dụng nhiều)
  useEffect(() => {
    console.log("didUpdate");
  }, [state, like]);

  // cách 4 sử dụng thay thế componentWillUnmount (sử dụng gọi rocket.io, chat realtime ...)
  useEffect(() => {
    // call api
    return () => {
        console.log('componentWillUnmount');
    }
  }, [])
  return (
    <div>
      <h4>UseEffect</h4>
      <button
        className="btn btn-info"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Increase like
      </button>
    </div>
  );
}

export default UseEffect;
