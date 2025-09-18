"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactInfoCard = () => {
    const t =   useTranslations("contact.info");
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {[
          {
            icon: MapPin,
            title: t("address.title"),
            content: (
              <>
                {t("address.street")}
                <br />
                {t("address.city")}
              </>
            ),
            bg: "bg-primary/10",
            iconColor: "text-primary",
          },
          {
            icon: Phone,
            title: t("phone.title"),
            content: "+48 123 456 789",
            bg: "bg-primary/10",
            iconColor: "text-primary",
          },
          {
            icon: Mail,
            title: t("email.title"),
            content: t("email.address"),
            bg: "bg-accent/10",
            iconColor: "text-accent",
          },
          {
            icon: Clock,
            title: t("openingHours.title"),
            content: (
              <>
                <p>{t("openingHours.weekdays")}: 06:00 - 23:00</p>
                <p>{t("openingHours.weekends")}: 08:00 - 22:00</p>
                <p className="text-primary font-medium">
                  {t("openingHours.membersAccess")}
                </p>
              </>
            ),
            bg: "bg-primary/10",
            iconColor: "text-primary",
          },
        ].map((info, idx) => {
          const Icon = info.icon;
          return (
            <div key={idx} className="flex items-start gap-4">
              <div
                className={`w-12 h-12 ${info.bg} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <Icon className={`w-6 h-6 ${info.iconColor}`} />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {info.title}
                </h4>
                <div className="text-muted-foreground">{info.content}</div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
