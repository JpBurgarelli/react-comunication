// import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { Neto } from "./neto";

export const Filho = ({ getData }: any): void => {
 const handleFuction = (e: any) => {
  console.log(e.target.value);
 };

 return (
  <div className="bg-slate-300 p-4 rounded-xl flex flex-col gap-6">
   <h1>Componente Filho</h1>
   <div className="flex gap-2">
    <Input onChange={getData} />
    <Button>Enviar</Button>
   </div>
   <div>
    <Neto handleFuction={handleFuction} />
   </div>
  </div>
 );
};
