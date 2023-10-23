import { useState } from "react";
import PersonContext from "./PersonContext";

const PersonState = (props) => {
  const personInitial = []
  const [myperson, setperson] = useState(personInitial);

  return (
    <PersonContext.Provider value={{ myperson,setperson }}>
      {props.children}
    </PersonContext.Provider>
  );

};

export default PersonState;