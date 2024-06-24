import { Filho } from "./filho";
import { useState } from "react";

export const Pai = () => {
 const [state, setState] = useState("");

 const getData = (event: any): void => {
  console.log(event.target.value);
  setState(event.target.value);
 };

 return (
  <div className="bg-slate-500 p-4 rounded-xl h-[500px] w-[500px] flex flex-col gap-4 items-center">
   <h1 className="capitalize text-xl">Componente pai</h1>
   <Filho getData={getData} />
   <p>{state}</p>
  </div>
 );
};
