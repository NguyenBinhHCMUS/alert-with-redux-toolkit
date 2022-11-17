import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Content, Message } from "./Wrappers";
import { createAlert } from "./AlertSlice";

const Alert = () => {
  const { alerts } = useSelector((state) => state.notifications);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };

  //   const color = alert.type === "success" ? "teal" : "tomato";
  //   const iconUrl = alert.type === "success" ? successIcon : errorIcon;

  return show ? (
    // <Wrapper className={`${alert.type || "error"}`}>
    <>{alert.message || ""}</>
  ) : // </Wrapper>
  null;
};

export default Alert;
