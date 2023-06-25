import React, { useState, useEffect } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
// components
// import SignInForm from "../../components/elements/forms/signIn";
// import Layout from "../../components/layouts/auth/auth";
import HeadTags from "../../components/headTags";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { data: session, status } = useSession();
  console.log("Session: ", session);

  // useEffect(() => {
  //   if (status === "authenticated" && session) {
  //     Router.replace("/");
  //   }
  // }, [status, session]);

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  function updateFormData(e: any) {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  }

  async function signInHandler(e: any) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      ...loginFormData,
    });
    // if (!res.ok) {
    //   toast.error("Trouble logging in. Please check your credentials.");
    //   return;
    // } else {
    //   const url: string = (Router.query.callbackUrl as string) || "/";
    //   Router.replace(url);
    // }
  }

  return (
    <>
      <HeadTags
        title="SignIn to LumBytes."
        metaDescription="LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies."
        ogAlt="Your ideas matters. - LumBytes"
        ogImg="https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
      />
      {/* body */}
      <div className="grid h-screen grid-cols-12 gap-0">
        <div className="relative hidden md:col-span-6 md:block lg:col-span-7 xl:col-span-8">
          <Image
            src={
              "https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
            }
            alt={"Your ideas matters. - LumBytes"}
            className="object-cover object-center"
            priority
            fill={true}
          />
        </div>
        <div className="col-span-12 flex items-center justify-center bg-white px-2 text-black md:col-span-6 lg:col-span-5 xl:col-span-4">
          <div className="w-full max-w-xs">
            <h1 className="font-primary mb-8 text-center text-4xl font-bold">
              Sign In
            </h1>

            <form onSubmit={signInHandler} className="mb-8">
              <div className="my-4">
                <Input
                  id="username_field"
                  type="text"
                  name="username"
                  autoCorrect="false"
                  onChange={updateFormData}
                  value={loginFormData.username}
                  required
                  placeholder="username"
                />
              </div>

              <div className="mb-8">
                <Input
                  id="login_main"
                  type="password"
                  name="password"
                  autoCorrect="false"
                  onChange={updateFormData}
                  value={loginFormData.password}
                  required
                  placeholder="password"
                />
              </div>
              <input
                type={"submit"}
                className="font-primary h-10 w-full cursor-pointer rounded-sm bg-black text-sm font-bold text-white hover:brightness-110 focus:outline-none"
                value="Next"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.customProps = {
  displayNavBar: false,
};
