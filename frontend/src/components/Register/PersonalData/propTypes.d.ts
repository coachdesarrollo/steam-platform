import { Step } from "../../../pages/Register/propTypes";

export type PersonalDataProps = {
  children?: React.ReactNode;
  handleStep: (newStep: Step) => void;
};
