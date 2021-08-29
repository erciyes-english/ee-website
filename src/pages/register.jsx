import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RegisterForm from "../components/forms/register/register-form";
import Seo from "../components/seo";

const RegisterPage = ({ data }) => {
  return (
    <main>
      <Seo>
        <title>Erciyes English</title>
      </Seo>
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
