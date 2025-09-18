import {
  AboutFeatureCardInterface,
  PlanInterface,
  prefixes,
  TrainerInterface,
} from "@/types/types";
import {
  Dumbbell,
  Facebook,
  Heart,
  Instagram,
  Trophy,
  Users,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const testimonialsSectionReview = [
  { name: "Magdalena K.", image: "/fit-woman-portrait.png" },
  { name: "Piotr M.", image: "/fit-man-portrait.png" },
  { name: "Anna W.", image: "/woman-athlete-portrait.png" },
  { name: "Marcin L.", image: "/man-bodybuilder-portrait.jpg" },
  { name: "Karolina S.", image: "/serene-yoga-portrait.png" },
  { name: "Jakub R.", image: "/man-crossfit-portrait.jpg" },
];
export const footerLinks = [
  { id: "about", key: "about" },
  { id: "pricing", key: "pricing" },
  { id: "schedule", key: "schedule" },
  { id: "testimonials", key: "testimonials" },
  { id: "contact", key: "contact" },
];
export const footerSocials = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
];
export const footerServices = [
  { key: "gym247" },
  { key: "groupClasses" },
  { key: "personalTraining" },
  { key: "nutritionConsult" },
  { key: "saunaJacuzzi" },
];

const FitzoneApiComponent = () => {
  const t = useTranslations();

  const getNavigationItems = (prefix: string) => [
    { name: t(`${prefix}.home`), id: "home" },
    { name: t(`${prefix}.about`), id: "about" },
    { name: t(`${prefix}.pricing`), id: "pricing" },
    { name: t(`${prefix}.instructors`), id: "instructors" },
    { name: t(`${prefix}.testimonials`), id: "testimonials" },
    { name: t(`${prefix}.contact`), id: "contact" },
  ];

  const getPlans = (prefix: string): PlanInterface[] => {
    const translatePlan = (Key: string) => ({
      period: t(`${prefix}.month`),
      description: t(`${prefix}.${Key}.description`),
      features: t.raw(`${prefix}.${Key}.features`) as string[],
    });
    return [
      {
        name: "Basic",
        price: "99",
        ...translatePlan("basic"),
        popular: false,
      },
      {
        name: "Standard",
        price: "149",
        ...translatePlan("standard"),
        popular: true,
      },
      {
        name: "Premium",
        price: "199",
        ...translatePlan("premium"),
        popular: false,
      },
    ];
  };
  const getFeatures = (prefix: string): AboutFeatureCardInterface[] => {
    return [
      {
        icon: Dumbbell,
        title: t(`${prefix}.equipment.title`),
        description: t(`${prefix}.equipment.description`),
      },
      {
        icon: Users,
        title: t(`${prefix}.trainers.title`),
        description: t(`${prefix}.trainers.description`),
      },
      {
        icon: Heart,
        title: t(`${prefix}.atmosphere.title`),
        description: t(`${prefix}.atmosphere.description`),
      },
      {
        icon: Trophy,
        title: t(`${prefix}.results.title`),
        description: t(`${prefix}.results.description`),
      },
    ];
  };
  const getTrainers = (): TrainerInterface[] => {
    return [
      {
        name: "Anna Kowalska",
        specialty: t(`${prefixes.trainers}.anna.specialty`),
        image: "/trainer-anna-crossfit.jpg",
        description: t(`${prefixes.trainers}.anna.description`),
      },
      {
        name: "Paweł Nowak",
        specialty: t(`${prefixes.trainers}.pawel.specialty`),
        image: "/trainer-pawel-strength.jpg",
        description: t(`${prefixes.trainers}.pawel.description`),
      },
      {
        name: "Maria Wiśniewska",
        specialty: t(`${prefixes.trainers}.maria.specialty`),
        image: "/trainer-maria-yoga.jpg",
        description: t(`${prefixes.trainers}.maria.description`),
      },
      {
        name: "Tomasz Wójcik",
        specialty: t(`${prefixes.trainers}.tomasz.specialty`),
        image: "/trainer-tomasz-fitness.jpg",
        description: t(`${prefixes.trainers}.tomasz.description`),
      },
      {
        name: "Kasia Mazur",
        specialty: t(`${prefixes.trainers}.kasia.specialty`),
        image: "/trainer-kasia-stretching.jpg",
        description: t(`${prefixes.trainers}.kasia.description`),
      },
      {
        name: "Ola Tomczyk",
        specialty: t(`${prefixes.trainers}.ola.specialty`),
        image: "/trainer-ola-zumba.jpg",
        description: t(`${prefixes.trainers}.ola.description`),
      },
      {
        name: "Marcin Lewandowski",
        specialty: t(`${prefixes.trainers}.marcin.specialty`),
        image: "/trainer-marcin-boxing.jpg",
        description: t(`${prefixes.trainers}.marcin.description`),
      },
    ];
  };

  return { getNavigationItems, getPlans, getFeatures, getTrainers };
};

export default FitzoneApiComponent;
