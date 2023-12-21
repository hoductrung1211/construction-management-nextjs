"use client";
import Image from "next/image";
import userImgSrc from "./assets/login_01.png";
import { HTMLInputTypeAttribute, useState } from "react";
import Link from "next/link";
import { Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import accountAPI from "@/apis/account";

export default function LoginSection() {
  const router = useRouter();
  const setLoading = useLoadingAnimation();
  const setAlert = useAlert();

  const [isRemembered, setIsRemembered] = useState(false);
  const [inputs, setInputs] = useState<{
    [key: string]: { label: string; value: string; type: HTMLInputTypeAttribute };
  }>({
    username: {
      label: "Tên đăng nhập",
      value: "dinhtruongson",
      type: "text",
    },
    password: {
      label: "Mật khẩu",
      value: "Dinhtruongson@123",
      type: "password",
    },
  });

  async function handleLogin() {
    setLoading(true);
    try {
      //   await accountAPI.login(inputs["username"].value, inputs["password"].value);

      router.push("/home");

      setAlert({
        message: "Đăng nhập thành công!",
        severity: "success",
      });
    } catch (ex) {
      setAlert({
        message: "Đăng nhập thất bại",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-5/12 p-10 flex flex-col gap-14">
      <h2 className="pt-10 flex flex-col items-center gap-4 text-2xl text-center font-semibold">
        <div className="w-28 ">
          <Image className="w-full" src={userImgSrc} alt="user login" />
        </div>
      </h2>
      <FormControl className="flex flex-col gap-4 ">
        {Object.keys(inputs).map((key: string) => (
          <TextField
            key={key}
            fullWidth
            variant="outlined"
            {...inputs[key]}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [key]: {
                  ...inputs[key],
                  value: e.target.value,
                },
              });
            }}
          />
        ))}
        <div className="mt-2 flex items-center justify-between">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Nhớ mật khẩu"
            value={isRemembered}
            onChange={() => setIsRemembered(!isRemembered)}
          />
          <Link className="underline text-blue-400" href={""}>
            Quên mật khẩu
          </Link>
        </div>
      </FormControl>
      <section className="mt-auto flex flex-col gap-6 ">
        <Button
          color="primary"
          className="h-12 font-bold text-md"
          variant="contained"
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
      </section>
    </section>
  );
}
