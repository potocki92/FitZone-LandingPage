"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useSelectedPlan } from "@/hooks/useSelectedPlan";
import { ContactFormDataInterace } from "@/types/types";


const ContactFormCard = () => {
  const { selectedPlan } = useSelectedPlan();
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormDataInterace>({ defaultValues: { plan: selectedPlan || "" } });

  const onSubmit = (data: ContactFormDataInterace) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder="Wybrany plan"
              {...register("plan")}
              defaultValue={selectedPlan || ""}
              readOnly
            />
          </div>
          <div>
            <Input
              placeholder={t("name")}
              {...register("name", { required: t("errors.name") })}
              className={`bg-input border-border focus:border-primary ${
                errors.name ? "border-destructive" : ""
              }`}
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder={t("email")}
              {...register("email", {
                required: t("errors.emailRequired"),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("errors.emailInvalid"),
                },
              })}
              className={`bg-input border-border focus:border-primary ${
                errors.email ? "border-destructive" : ""
              }`}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              placeholder={t("message")}
              rows={5}
              {...register("message", { required: t("errors.message") })}
              className={`bg-input border-border focus:border-primary resize-none ${
                errors.message ? "border-destructive" : ""
              }`}
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow cursor-pointer"
            size="lg"
          >
            {t("submit")}
          </Button>

          {isSubmitSuccessful && (
            <p className="text-green-500 text-center mt-2">
              {t("successMessage")}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactFormCard;
