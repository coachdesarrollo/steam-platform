type VerificationButtonProps = Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "className" | "onClick" | "disabled" | "children"
>;

const VerificationButton: React.FC<VerificationButtonProps> = ({
    type = "button", onClick, className, children, disabled
}) => {
    const sharedClassName = "inline-block tracking-wider font-normal rounded cursor-pointer transition duration-300 ease-in-out px-4 py-2";
    const buttonClassName = sharedClassName.concat(sharedClassName);
    return (
        <button
            type={type}
            className={buttonClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const AccountVerification: React.FC = () => {
    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h2 className="text-blueGray-500 text-sm font-bold">
                                ¡ExceIente! Ahora verifiquemos tu email
                                </h2>
                                <p className="text-blueGray-700 text-xl font-bold">
                                    Hemos enviado un número de confirmación a loremipsum@gamil.com
                                    hará completar la verificación.
                                </p>
                                <p className="text-blueGray-700 text-xl font-bold">
                                    Digite el codigo de verificación
                                </p>
                                <div className="flex flex-row flex-wrap border border-neutral-200 font-extrabold">
                                    <div className="p-5">2</div>
                                    <div className="p-5">0</div>
                                    <div className="p-5">2</div>
                                    <div className="p-5">4</div>
                                    <div className="p-5">1</div>
                                </div>
                            </div>
                            <VerificationButton className="text-black bg-yellow-400 hover:bg-yellow-500">
                                Volver a generar
                            </VerificationButton>
                            <VerificationButton className="text-yellow-400 bg-black hover:text-black hover:bg-yellow-500">
                                Listo
                            </VerificationButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountVerification;
