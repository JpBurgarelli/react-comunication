import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export const FormTest = () => {
 const schemaValidation = zod.object({
  nome: zod.string().min(1, { message: "Campo de nome obrigatorioXXX" }),
  idade: zod.number().min(2, { message: "Campo de idade obrigatorioYY" }),
 });

 type TschemaValidation = zod.infer<typeof schemaValidation>;

 const { register, handleSubmit, reset, formState } =
  useForm<TschemaValidation>({
   resolver: zodResolver(schemaValidation),
   defaultValues: {
    nome: "",
    idade: 0,
   },
  });

 console.log(formState.errors, formState.errors.nome);

 function handleCreateNewUser(data: TschemaValidation) {
  console.log(data);
  reset();
 }

 return (
  <div className="bg-white p-12 rounded-sm">
   <h1>Formulario teste</h1>
   <form onSubmit={handleSubmit(handleCreateNewUser)}>
    <Input type="text" placeholder="Nome" {...register("nome")} />

    <Input
     type="number"
     placeholder="Idade"
     {...register("idade", { valueAsNumber: true })}
    />
    <br />
    <Button className="bg-orange-500">Enviar</Button>
   </form>
  </div>
 );
};

/* 

React hook form -> lida com os forms
Zod -> valida os forms
hookform/resoolvers -> Faz a integracao entre o react hook form & zod

npm install react-hook-form
npm install zod
npm i @hookform/resolvers


useForm 'e um funcao com varioas funcoes, pode chama-las 
desestruturando-as ou atribuindo a uma variavel:



 const Form = useForm();
 const register = Form.register;

 Ou;

 const { register, handleSubmit } = useForm();


 Para usar o register num campu de input:
   <Input {...register("nomeDoInput")} />


retorno de register (Outras funcoes):

function register(name: string){
  return (
    onChange: () => void,
    onBlur: () => void,
    onFocus: () => void,

  )
}

--------------------------------------------------------------

handleSubmit do useForm 'e resposave por ajudar a gerenciar
a submissao de formularios


   function handleCreateNewUser(data: any) {
  console.log(data);
  }


   <form onSubmit={handleSubmit(handleCreateNewUser)}>
   </form>
   
--------------------------------------------------------------
Sem opcao abaixo o numero, quando damos o console log em data, viria como
string, mas essa opcao de pasasr um segundo argumeto faz com que o campo seja gerenciado
como Number

     {...register("idade", { valueAsNumber: true })}

--------------------------------------------------------------
 Para pegar os erros do formulario e exirbimos, temos que desestruturar a funcao 
 formState do useForm 

const {formState} = useForm()
console.log(formState.errors)

--------------------------------------------------------------


1* Integrar o react hook form, com o register e o handleSubmit

2* Criar o schema com as validacoes que iremos querer para os nossos campos
const validationSchema = zod.object({
  nome: zod.string().min(1, {message: "campo obrigatorio"}),
  idade: zod.number().min(1)
})

obs: utilizamos zod.object, pois o formato retornado 'e um objeto


3* Adicionar um resover ao useForm, utilinzando o zodResolver e passando o schama criado pelo zod
para integrar assim integrando o react hook form e o zod. 
  3.1 passar que lib de integraca que sera usado para resolver: zodResvolver()
  3.2 Passar regras de validao se ja criada zodResvolver(validationSchema)

 const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(schemaValidation)
 });


Integrando TypeScript no Form


podemos crirar uma tipagem dinamica, de acordo
com cada mudanca feita no schama do Zod e que INFERE a a estrutura
do schama automaticamente.
type TschemaValidation = zod.infer<typeof schemaValidation> 

e depois passamos para a funcao que recebera os dados com essa 
estrutra de  tipagem:
 function handleCreateNewUser(data: TFormData) {}

e tambem para o generic do useForm useForm<schemaValidation>, 
para ele sugerir o autocomplete do defaultValues 
useForm<TschemaValidation>({})
e para o nosso objeto de configuracoes do useForm podemos passar uma 
propriedade chamada defaultValues, que iremos definir qual vai ser o 
valor inicial de cada campo do form.



*/
