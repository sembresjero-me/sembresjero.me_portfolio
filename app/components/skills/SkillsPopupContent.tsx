"use client";

import { useTranslation } from "@/app/i18n/client";

import WebDevelopmentSkill from "@/app/components/skills/WebDevelopmentSkill";

interface SkillsProps {
  lng: any;
}

const Skills: React.FC<SkillsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "skills");

  return (
    <>
      <div className="grow flex flex-col">
        <h3 className="text-2xl underline underline-offset-4">
          {t("skills-web-development-title")}
        </h3>
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="w-full">
            <h4 className="text-xl">
              {t("skills-web-development-front-end-title")}
            </h4>
            <WebDevelopmentSkill
              title={t("skills-web-development-front-end-first-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-front-end-second-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-front-end-third-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
            />
          </div>
          <div className="w-full">
            <h4 className="text-xl">
              {t("skills-web-development-back-end-title")}
            </h4>
            <WebDevelopmentSkill
              title={t("skills-web-development-back-end-first-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-mongodb.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-back-end-second-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-express-js.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-back-end-third-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-prisma.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-back-end-fourth-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-vercel.svg"
            />
          </div>
          <div className="w-full">
            <h4 className="text-xl">{t("skills-web-development-cms-title")}</h4>
            <WebDevelopmentSkill
              title={t("skills-web-development-cms-first-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-wordpress.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-cms-second-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-shopify.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-cms-third-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-webflow.svg"
            />
            <WebDevelopmentSkill
              title={t("skills-web-development-cms-fourth-item")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-prestashop.svg"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl underline underline-offset-4 mb-4">
              {t("skills-others-title")}
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="w-full">
                <h4 className="text-xl">
                  {t("skills-others-marketing-title")}
                </h4>
                <p>{t("skills-others-marketing-first-item")}</p>
                <p>{t("skills-others-marketing-second-item")}</p>
                <p>{t("skills-others-marketing-third-item")}</p>
                <p>{t("skills-others-marketing-fourth-item")}</p>
                <p>{t("skills-others-marketing-fifth-item")}</p>
              </div>
              <div className="w-full">
                <h4 className="text-xl">
                  {t("skills-others-project-management-title")}
                </h4>
                <p>{t("skills-others-project-management-first-item")}</p>
                <p>{t("skills-others-project-management-second-item")}</p>
                <p>{t("skills-others-project-management-third-item")}</p>
                <p>{t("skills-others-project-management-fourth-item")}</p>
                <p>{t("skills-others-project-management-fifth-item")}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl underline underline-offset-4 mb-4">
              {t("skills-soft-title")}
            </h3>
            <p>{t("skills-soft-first-item")}</p>
            <p>{t("skills-soft-second-item")}</p>
            <p>{t("skills-soft-third-item")}</p>
            <p>{t("skills-soft-fourth-item")}</p>
            <p>{t("skills-soft-fifth-item")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
