import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { checkDate, returnWithZero } from "../helpers/checkDate";
import { useEffect } from "react";
import { useRef } from "react";

const DineContext = createContext();

function DineProvider({ children }) {
  const [menu, setMenu] = useState(1);
  const [dropDownTime, setDropDownTime] = useState("AM");
  const [isDropped, setIsDropped] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [amount, setAmount] = useState(1);
  const [errors, setError] = useState({
    nameErr: "",
    emailErr: "",
    dateErr: "",
    timeErr: "",
  });
  const topOfPageRef = useRef(null);
  const currentYear = new Date().getFullYear();

  function handleMenu(id) {
    setMenu(id);
  }

  function handleDropDown(time) {
    setDropDownTime(time);
  }
  function handleDrop() {
    setIsDropped((prev) => !prev);
  }

  function handleName(e) {
    setName(e.target.value.trim());
    setError((prev) => {
      return { ...prev, nameErr: "" };
    });
  }

  function handleEmail(e) {
    setEmail(e.target.value.trim());
    setError((prev) => {
      return { ...prev, emailErr: "" };
    });
  }

  function handleday(e) {
    const newDay = checkDate(e.target.value, 31, 0);
    if (newDay) {
      if (newDay === "empty") setDay("");
      else {
        setDay(newDay);
      }
    }
    setError((prev) => {
      return { ...prev, dateErr: "" };
    });
  }

  function handleMonth(e) {
    const newMonth = checkDate(e.target.value, 12, 0);
    if (newMonth) {
      if (newMonth === "empty") setMonth("");
      else {
        setMonth(newMonth);
      }
    }
    setError((prev) => {
      return { ...prev, dateErr: "" };
    });
  }

  function handleHour(e) {
    const newHour = checkDate(e.target.value, 12, 0);
    if (newHour) {
      if (newHour === "empty") setHour("");
      else {
        setHour(newHour);
      }
    }
    setError((prev) => {
      return { ...prev, timeErr: "" };
    });
  }

  function handleMinutes(e) {
    const newMinutes = checkDate(e.target.value, 59, 0);
    if (newMinutes) {
      if (newMinutes === "empty") setMinutes("");
      else {
        setMinutes(newMinutes);
      }
    }
    setError((prev) => {
      return { ...prev, timeErr: "" };
    });
  }

  function handleIncreaseAmount() {
    setAmount((prev) => prev + 1);
  }

  function handleLowerAmount() {
    setAmount((prev) => {
      if (prev > 1) return prev - 1;
      else {
        return prev;
      }
    });
  }

  function handleClickField(value) {
    if (value === "day")
      if (day.charAt(0) === "0") setDay((prev) => prev.substring(1));

    if (value === "month")
      if (month.charAt(0) === "0") setMonth((prev) => prev.substring(1));

    if (value === "hour")
      if (hour.charAt(0) === "0") setHour((prev) => prev.substring(1));

    if (value === "minutes")
      if (minutes.charAt(0) === "0") setMinutes((prev) => prev.substring(1));
  }

  function handleBlur(value) {
    if (value === "day") {
      const newDay = returnWithZero(day);
      setDay(newDay);
    }

    if (value === "month") {
      const newMonth = returnWithZero(month);
      setMonth(newMonth);
    }

    if (value === "hour") {
      const newHour = returnWithZero(hour);
      setHour(newHour);
    }

    if (value === "minutes") {
      const newMinutes = returnWithZero(minutes);
      setMinutes(newMinutes);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError({
      nameErr: "",
      emailErr: "",
      dateErr: "",
      timeErr: "",
    });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name)
      setError((prev) => {
        return { ...prev, nameErr: "This field is required" };
      });
    if (!email) {
      setError((prev) => {
        return { ...prev, emailErr: "This field is required" };
      });
    }
    if (email && !emailRegex.test(email))
      setError((prev) => {
        return { ...prev, emailErr: "Not a valid email address" };
      });
    if (!day || !month || !year) {
      setError((prev) => {
        return { ...prev, dateErr: "This field is incomplete" };
      });
    }
    if (!hour || !minutes) {
      setError((prev) => {
        return { ...prev, timeErr: "This field is incomplete" };
      });
    }

    if (name && emailRegex.test(email) && day && month && hour && minutes) {
      setName("");
      setEmail("");
      setDay("");
      setMonth("");
      setHour("");
      setMinutes("");
      setError({
        nameErr: "",
        emailErr: "",
        dateErr: "",
        timeErr: "",
      });
    }
  }

  function handleSroll() {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    setYear(currentYear);
  }, [currentYear]);

  return (
    <DineContext.Provider
      value={{
        handleMenu,
        menu,
        handleDropDown,
        dropDownTime,
        handleDrop,
        isDropped,
        handleName,
        handleEmail,
        handleday,
        handleMonth,
        handleHour,
        handleMinutes,
        name,
        email,
        day,
        month,
        year,
        hour,
        minutes,
        handleIncreaseAmount,
        handleLowerAmount,
        amount,
        handleSubmit,
        errors,
        handleClickField,
        handleBlur,
        topOfPageRef,
        handleSroll,
      }}
    >
      {children}
    </DineContext.Provider>
  );
}

function useDine() {
  const context = useContext(DineContext);
  if (context === undefined)
    throw new Error("DineContext was used outside of the DineProvider");
  return context;
}

export { DineProvider, useDine };
