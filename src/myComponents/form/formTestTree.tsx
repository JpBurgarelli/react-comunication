import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormTestTree = () => {
 const zodValaditarion = zod.object({
  name: zod.string().min(1, { message: "campo obrigatorio name" }),
  age: zod.number().min(2, { message: "Campo obrigatorio numero" }),
 });

 type schemaFormat = zod.infer<typeof zodValaditarion>;

 const { register, handleSubmit, formState } = useForm<schemaFormat>({
  resolver: zodResolver(zodValaditarion),
  defaultValues: {
   name: "",
   age: 0,
  },
 });

 console.log(formState.errors, "Terceiro");

 const handleSubmitForm = (data: schemaFormat) => {
  console.log(data, "Terceiro");
 };

 return (
  <div className="bg-blue-600 p-6 rounded-sm flex flex-col items-center gap-4">
   <h1>teste</h1>
   <form
    className="flex flex-col gap-4"
    onSubmit={handleSubmit(handleSubmitForm)}
   >
    <Input placeholder="Nome" type="text" {...register("name")} />
    <Input
     placeholder="Idade"
     type="number"
     {...register("age", { valueAsNumber: true })}
    />
    <Button>Enviar</Button>
   </form>
  </div>
 );
};
