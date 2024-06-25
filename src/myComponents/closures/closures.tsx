import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Closures = () => {
 const [soma, setSoma] = useState<number>(0);

 const handleSumButton = () => {
  setSoma((currentContext) => currentContext + 1);

  /* 
  'e diferente de:
      setSoma(soma + 1);
  */
 };

 return (
  <div className="bg-teal-700 p-6 rounded-sm ">
   <h1>Clousures</h1>
   <h2>Somando </h2>
   <div className="flex items-center gap-6">
    <h1>{soma}</h1>
    <Button onClick={handleSumButton}>Somar</Button>
   </div>
  </div>
 );
};
