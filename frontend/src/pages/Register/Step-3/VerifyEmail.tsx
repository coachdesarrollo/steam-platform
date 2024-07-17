import { Button } from "@/components/Button";
import { Step } from "@/components/Register/propTypes.d";
import { ButtonSize, ButtonStyle, ButtonTheme } from "@/config/themes/button";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid gap-2">
        <Button theme={ButtonTheme.Gold} size={ButtonSize.Small}>
          Volver a generar
        </Button>
        <Button
          onClick={() => navigate(`/register/${Step.STEP_4}`)}
          variant={ButtonStyle.Outline}
          theme={ButtonTheme.Gold}
          size={ButtonSize.Small}
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
