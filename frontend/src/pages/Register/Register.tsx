import { FC, useState } from "react";
import { Step } from "./propTypes.d";
import { AccessCredentials } from "../../components/Register";
import { PersonalData } from "../../components/Register";

const Register: FC = () => {
  const [step, setStep] = useState<Step>(Step.PERSONAL_DATA);

  const handleStep = (newStep: Step) => {
    setStep(newStep);
  };

  if (step === Step.ACCESS_CREDENTIALS) return <AccessCredentials />;

  return <PersonalData handleStep={handleStep} />;
};

export default Register;
