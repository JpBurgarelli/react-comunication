import { Input } from "./components/ui/input";

export const Neto = ({ handleFuction }: any): void => {
 return (
  <div className="bg-yellow-100 rounded-md  h-[200px] flex flex-col items-center justify-center">
   <h1>NETO</h1>
   <div>
    <Input onChange={handleFuction} />
   </div>
  </div>
 );
};
