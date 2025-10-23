/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import PageWrapper from "@/apputils/PageWrapper";
import AppSpinner from "@/apputils/AppSpinner";
import { useResetPassword } from "@/hooks/resetPasswordHooks";

function ResetPasswordMain() {
  const { Word } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [show, setShow] = useState(false);
  const { isPending, resetPassword } = useResetPassword();
  const navigate = useNavigate();

  function onSubmit(data: any) {
    resetPassword(
      {
        Word: Word as never,
        password: data?.password,
      },
      {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            navigate("/login");
          }
        },
      }
    );
  }

  return (
    <PageWrapper> 
      <div className="flex flex-col h-[90vh] ">
      <AppSpinner isPending={isPending} />

        <div className="flex flex-col ">
          <div className="flex justify-center w-full h-screen  items-center">
            <div className="w-[30vw] mx-auto mt-20 px-6 py-10 ">
              <h2 className="text-3xl font-bold text-center text-blue-950 mb-6">
                Reset Your Password
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10"
              >
                <div className="relative">
                  <Input
                    label="New Password"
                    type={show ? "text" : "password"}
                    placeholder="Enter new password"
                    errorMessage={errors.password?.message}
                    {...register("password", {
                      required: "Please enter new password",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
                        message:
                          "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                      },
                    })}
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-[29px] cursor-pointer text-gray-500"
                  >
                    {show ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </span>
                </div>

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  errorMessage={errors.confirmPassword?.message}
                  {...register("confirmPassword", {
                    required: "Please re-enter your password",
                    validate: (val) =>
                      val === watch("password") || "PassTokens do not match",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
                      message:
                        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                    },
                  })}
                />

                <Button
                  type="submit"
                  className="w-full mt-10"
                  disabled={isSubmitting}
                >
                  Reset Password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ResetPasswordMain;
