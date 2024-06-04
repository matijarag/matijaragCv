"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../../public/images/kittler.png";

const TAB_DATA = [
  {
    title: "Data",
    id: "data",
    content: (
      <div className="skills-container">
        <ul className="list-disc pl-2">
          <li>Google Big Query</li>
          <li>Google Cloud Platform</li>
          <li>Git Pipelines</li>
          <li>Apache Airflow</li>
          <li>DBT</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>SQL Avanzado</li>
          <li>Oracle BI Publisher</li>
          <li>PowerBI</li>
          <li>Oracle Unifier</li>
          <li>SharePoint</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Programming",
    id: "programming",
    content: (
      <div className="skills-container">
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>Batch</li>
          <li>C#</li>
          <li>PHP</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Oracle PLSQL</li>
          <li>Transact SQL</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Power Apps</li>
          <li>Power Automate</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Educacion",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>GitLab CI/CD|Docker|Kubernetes|Microservices - TechWorld with Nana</li>
        <li>Ingeniería en informática - Duoc Uc</li>
        <li>Preparador Físico - Duoc Uc</li>
        <li>Instituto San Pablo Misionero</li>
      </ul>
    ),
  },
  {
    title: "Premios/Certificaciones",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Oracle construction and engineering excellence awards 2019</li>
        <li>Oracle Partner del año 2020</li>
        <li>Aconex Certified Associate 2019-2020</li>
        <li>RPA Developer 2018-2020</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("data");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
          <p className="text-base lg:text-lg">
          Apasionado por el análisis e ingeniería de datos, busco desarrollar mis competencias profesionales en una empresa donde pueda ampliar y potenciar las habilidades adquiridas a lo largo de mis estudios, en cursos en línea y en el mundo laboral.
          Poseo una sólida capacidad para trabajar bajo presión, tomar decisiones de alto nivel, analizar, desarrollar y optimizar procesos sobre sistemas ya existentes. Destaco en la resolución de problemas, el autoaprendizaje y la transparencia.
          Mi orientación está enfocada a alcanzar los logros y resultados que la empresa enfoque durante el año.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("data")}
              active={tab === "data"}
            >
              {" "}
              Data{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programming")}
              active={tab === "programming"}
            >
              {" "}
              Programación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
