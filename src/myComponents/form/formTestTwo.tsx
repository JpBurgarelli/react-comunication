import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export const FormTestTwo = () => {
 const validationSchema = zod.object({
  name: zod.string().min(1, { message: "campo obrigatorio name" }),
  age: zod.number().min(1, { message: "Campo obrigatorio numero" }),
 });

 type TValidationSchema = zod.infer<typeof validationSchema>;

 const { register, handleSubmit, reset, formState } =
  useForm<TValidationSchema>({
   resolver: zodResolver(validationSchema),
   defaultValues: {
    name: "",
    age: 0,
   },
  });

 console.log(formState.errors, "formState");

 const handleOnSubmit = (data: TValidationSchema) => {
  console.log(data);
  reset();
 };

 return (
  <div className="bg-green-500 p-8 rounded-sm">
   <form onSubmit={handleSubmit(handleOnSubmit)}>
    <div className="flex flex-col gap-2">
     <Input type="text" placeholder="name" {...register("name")} />
     <Input
      type="number"
      placeholder="Idade"
      {...register("age", { valueAsNumber: true })}
     />
     <Button>Enviar Form</Button>
    </div>
   </form>
  </div>
 );
};
