"use client";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import loginImgSrc from "./assets//login_02.png";
import userImgSrc from "./assets/login_01.png";
import { HTMLInputTypeAttribute, useState } from "react";
import Link from "next/link";
import { Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import accountAPI from "@/apis/account";
import { useEffect } from "react";

export default function Login() {

  return (
    <div className="grid place-items-center h-screen ">
      <div className="container flex rounded-lg overflow-hidden shadow-md">
        <section className="w-8/12 p-5 flex flex-col bg-apple-gray-6">
          <span className="">
            <Logo />
          </span>
          <Image src={loginImgSrc} alt="" />
          <p className="text-sm text-end">Bản quyền thuộc về Công ty TNHH MTV Thế Giới Di Động.</p>
        </section>
        <LoginSection />
      </div>
    </div>
  );
}

function LoginSection() {
  const [isRemembered, setIsRemembered] = useState(false);
  const router = useRouter();
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

  async function HandleLogin() {
    try {
      const token = await accountAPI.login(inputs["username"].value, inputs["password"].value);
      localStorage.setItem("accessToken", token.token);
      router.push("/construction-diaries");
    } catch (error) {
    } finally {
    }
  }

  return (
    <div>
      <section className="w-5/12 p-10 flex flex-col gap-14">
        <h2 className="flex flex-col items-center gap-4 text-2xl text-center font-semibold">
          Đăng nhập
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
          <Button className="h-12 font-bold text-md" variant="contained" onClick={HandleLogin}>
            Đăng nhập
          </Button>
        </section>
      </section>
      <LoginSection />
    </div>
  );
}

function validateLogin({}: { username: string; password: string }) {
  return true;
}
