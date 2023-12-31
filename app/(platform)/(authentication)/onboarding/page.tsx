"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Landing } from "./_components/landing";
import { Login } from "./_components/login";
import { ForgotPassword } from "./_components/forgot";
import { Verification } from "./_components/verification";
import { ChangePassword } from "./_components/changepassword";
import { Register } from "./_components/register";

const OnBoardingPage = () => {
  const dispatch = useDispatch();
  const isOpenLanding = useSelector(
    (state: RootState) => state.app.isOpenLanding
  );
  const isOpenLogin = useSelector((state: RootState) => state.app.isOpenLogin);
  const isOpenForgot = useSelector(
    (state: RootState) => state.app.isOpenForgot
  );
  const isOpenVerification = useSelector(
    (state: RootState) => state.app.isOpenVerification
  );
  const isOpenChangePassword = useSelector(
    (state: RootState) => state.app.isOpenChangePassword
  );
  const isOpenRegister = useSelector(
    (state: RootState) => state.app.isOpenRegister
  );
  return (
    <>
      {isOpenLanding && <Landing />}
      {isOpenLogin && <Login />}
      {isOpenForgot && <ForgotPassword />}
      {isOpenVerification && <Verification />}
      {isOpenChangePassword && <ChangePassword />}
      {isOpenRegister && <Register />}
    </>
  );
};

export default OnBoardingPage;
