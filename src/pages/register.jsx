import * as React from "react";
import { t } from "@lingui/macro";

import Footer from "../components/footer";
import Header from "../components/header";
import RegisterForm from "../components/forms/register/register-form";
import Seo from "../components/seo";

const RegisterPage = ({ data }) => {
  return (
    <main>
      <Seo
        title={t({
          id: "seo.register.title",
          message: "Begin your English journey today",
        })}
        description={t({
          id: "seo.register.description",
          message:
            "Register for our English courses today to improve your English fluency. We're located in Kayseri, Turkey.",
        })}
      ></Seo>
      <Header isSmall={true} />
      <div
        style={{
          background: "#e4e4e4",
          paddingTop: "140px",
          paddingBottom: "40px",
        }}
      >
        <RegisterForm />
      </div>
      <Footer />
    </main>
  );
};

export default RegisterPage;
