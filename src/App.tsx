import { Pai } from "./myComponents/downToUp/pai";
import { FormTest } from "./myComponents/form/formTest";

function App() {
 return (
  <div className="bg-slate-900 w-screen h-min-screen flex flex-col items-center justify-center gap-4 p-12  ">
   <FormTest />

   <Pai />
   <Pai />
   <Pai />
  </div>
 );
}

export default App;
