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
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";

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
  const { language } = useLanguage();
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
        placeholder={language === "EN" ? "Name" : "Nom"}
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("name")}
        disabled={loading}
      />
      <Input
        type="email"
        placeholder="Email"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("email")}
        disabled={loading}
      />
      <Input
        type="subject"
        placeholder={language === "EN" ? "Subject" : "Sujet"}
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("subject")}
        disabled={loading}
      />
      <Textarea
        placeholder="Message"
        className="border-b-2 border-gray-400 p-2 mb-4"
        {...register("message")}
        disabled={loading}
      />
      <Button
        type="submit"
        variant="outline"
        className=" rounded-md self-center w-20"
        disabled={loading}
      >
        {loading ? (
          <div className={styles["loader"]}></div>
        ) : language === "EN" ? (
          "Send"
        ) : (
          "Envoyer"
        )}
      </Button>
    </form>
  );
};

export default EmailForm;
