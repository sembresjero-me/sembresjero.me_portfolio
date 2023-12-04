"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import EducationCertification from "@/app/components/about/EducationCertification";
import Language from "@/app/components/about/Language";
import Skill from "@/app/components/about/Skill";
import SkillsPopupContent from "@/app/components/skills/SkillsPopupContent";
import WorkExperience from "@/app/components/about/WorkExperience";

import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface AboutProps {
  lng: any;
}

const About: React.FC<AboutProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "about");
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full flex items-center">
        <div className="grid grid-cols-12 grid-rows-2 gap-4 justify-items-center items-center w-full h-[70vh]">
          <div className="col-span-8 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
            <div className="flex flex-col items-center w-full h-full">
              <h2 className="w-full text-xl 2xl:text-3xl">
                {t("work-experiences-title")}
              </h2>
              <div className="grow flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-full items-stretch">
                  <div className="grow flex flex-col w-full h-full">
                    <WorkExperience
                      id={1}
                      title={t("work-experiences-first-item-title")}
                      date={t("work-experiences-first-item-date")}
                      location={t("work-experiences-first-item-location")}
                    />
                    <WorkExperience
                      id={2}
                      title={t("work-experiences-second-item-title")}
                      date={t("work-experiences-second-item-date")}
                      location={t("work-experiences-second-item-location")}
                    />
                    <WorkExperience
                      id={3}
                      title={t("work-experiences-third-item-title")}
                      date={t("work-experiences-third-item-date")}
                      location={t("work-experiences-third-item-location")}
                    />
                    <WorkExperience
                      id={4}
                      title={t("work-experiences-fourth-item-title")}
                      date={t("work-experiences-fourth-item-date")}
                      location={t("work-experiences-fourth-item-location")}
                    />
                  </div>
                  <p className="self-end">
                    {t("work-experiences-asterisk")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-9 row-span-1 bg-card p-8 rounded-lg border border-secondary w-full h-full">
            <div className="flex flex-col items-center w-full h-full">
              <h2 className="w-full text-xl 2xl:text-3xl">
                {t("skills-title")}
              </h2>
              <div className="grow flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-full items-stretch">
                  <div className="grow flex flex-col w-full h-full">
                    <Skill
                      id={1}
                      title={t("skills-first-item")}
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
                    />
                    <Skill
                      id={2}
                      title={t("skills-second-item")}
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
                    />
                    <Skill
                      id={3}
                      title={t("skills-third-item")}
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
                    />
                    <Skill
                      id={4}
                      title={t("skills-fourth-item")}
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-mongodb.svg"
                    />
                    <Skill
                      id={5}
                      title={t("skills-fifth-item")}
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-express-js.svg"
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="text"
                        className="justify-self-end self-end"
                        onClick={() => {
                          router.push("/about");
                        }}
                      >
                        {t("skills-button")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Skills</DialogTitle>
                      </DialogHeader>
                      <SkillsPopupContent lng={lng} />
                      <DialogFooter className="justify-end">
                        <DialogClose asChild>
                          <Button
                            variant="text"
                            className="justify-self-end self-end"
                            onClick={() => {
                              router.push("/about");
                            }}
                          >
                            {t("languages-button")}
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
            <div className="w-full flex flex-col h-full">
              <h2 className="w-full justify-self-start self-start text-xl 2xl:text-3xl">
                {t("languages-title")}
              </h2>
              <div className="grow flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-full items-stretch">
                  <div className="grow flex flex-col w-full h-full">
                    <Language
                      id={1}
                      title={t("languages-first-item-title")}
                      level={t("languages-first-item-level")}
                    />
                    <Language
                      id={2}
                      title={t("languages-second-item-title")}
                      level={t("languages-second-item-level")}
                    />
                    <Language
                      id={3}
                      title={t("languages-third-item-title")}
                      level={t("languages-third-item-level")}
                    />
                  </div>
                  <Button
                    variant="text"
                    className="justify-self-end self-end"
                    onClick={() => {
                      router.push("/about");
                    }}
                  >
                    {t("languages-button")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 col-start-5 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
            <div className="grow flex flex-col w-full h-full">
              <div className="flex flex-col w-full h-full items-stretch">
                <div className="grow flex flex-col w-full h-full">
                  <div className="flex flex-col items-center w-full h-full">
                    <h2 className="w-full text-xl 2xl:text-3xl">
                      {t("educations-certifications-title")}
                    </h2>
                    <div className="grow flex flex-col w-full h-full">
                      <EducationCertification
                        id={1}
                        title={t("educations-certifications-first-item-title")}
                        date={t("educations-certifications-first-item-date")}
                        location={t(
                          "educations-certifications-first-item-location"
                        )}
                      />
                      <EducationCertification
                        id={2}
                        title={t("educations-certifications-second-item-title")}
                        date={t("educations-certifications-second-item-date")}
                        location={t(
                          "educations-certifications-second-item-location"
                        )}
                      />
                      <EducationCertification
                        id={3}
                        title={t("educations-certifications-third-item-title")}
                        date={t("educations-certifications-third-item-date")}
                        location={t(
                          "educations-certifications-third-item-location"
                        )}
                      />
                      <EducationCertification
                        id={4}
                        title={t("educations-certifications-fourth-item-title")}
                        date={t("educations-certifications-fourth-item-date")}
                        location={t(
                          "educations-certifications-fourth-item-location"
                        )}
                      />
                    </div>
                    <p className="self-end">
                      {t("educations-certifications-asterisk")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
