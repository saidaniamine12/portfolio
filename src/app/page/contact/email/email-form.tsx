import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Joi from "joi";
import { tlds } from "@hapi/tlds";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { EmailFormData } from "./email.interface";
import useEmailSendMutation from "./send-email.hook";
import styles from "./loader.module.css";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const EmailFormSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: tlds } })
    .required()
    .messages({
      "string.email": "your email format is not valid",
      "string.empty": "Email is a required field",
      "any.required": "Email is a required field",
    }),
  subject: Joi.string().required().messages({
    "string.empty": "subject is a required field",
    "any.required": "subject is a required field",
  }),
  name: Joi.string().required().messages({
    "string.empty": "name is a required field",
    "any.required": "name is a required field",
  }),
  message: Joi.string().required().messages({
    "string.empty": "message is a required field",
    "any.required": "message is a required field",
  }),
});

const EmailForm = () => {
  const { mutate, loading, error, data } = useEmailSendMutation();
  const { register, handleSubmit, reset } = useForm<EmailFormData>({
    mode: "onSubmit",
    resolver: joiResolver(EmailFormSchema),
  });

  const onSubmitSend: SubmitHandler<EmailFormData> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (error) {
      toast({
        description: error,
        variant: "destructive",
      });
    }
    if (data) {
      toast({
        description: data,
        variant: "blur",
      });
      reset();
    }
  }, [error, data]);

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSubmitSend)}
    >
      <Input
        type="text"
        placeholder="Name"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("name")}
      />
      <Input
        type="email"
        placeholder="Email"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("email")}
      />
      <Input
        type="subject"
        placeholder="Subject"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("subject")}
      />
      <Textarea
        placeholder="Message"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("message")}
      />
      <Button
        type="submit"
        variant="outline"
        className=" rounded-md self-center w-20"
        disabled={loading}
      >
        {loading ? <div className={styles["loader"]}></div> : "Send"}
      </Button>
    </form>
  );
};

export default EmailForm;
