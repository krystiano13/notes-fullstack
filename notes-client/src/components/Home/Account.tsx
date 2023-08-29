import type { FunctionComponent } from "preact";
import { register } from "../../functions/register";
import waves from "../../assets/images/layered-waves-haikei.svg";

interface AccountProps {
  switchLoginMode: (value: boolean) => void;
  loginMode: boolean;
}

export const Account: FunctionComponent<AccountProps> = ({
  switchLoginMode,
  loginMode,
}) => {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    register(
      formData.get("username") as string,
      formData.get("password") as string,
      formData.get("password2") as string,
      () => switchLoginMode(true),
      () => switchLoginMode(false)
    );
  };

  return (
    <section
      class={
        "Home__account d-flex flex-column justify-content-end position-absolute"
      }
    >
      <form
        class={
          "Home__account__form position-absolute p-5 d-flex flex-column align-items-start"
        }
        onSubmit={loginMode ? null : handleRegister}
      >
        <h1 class="font-head fw-bold">
          <span>Notes</span> App
        </h1>
        <h2 class="font-head">{loginMode ? "Log In" : "Register"}</h2>
        <input
          class="mt-3"
          name="username"
          placeholder={"username"}
          type={"text"}
        />
        <input
          class="mt-3"
          name={"password"}
          placeholder={"password"}
          type="password"
        />
        {loginMode === false && (
          <input
            class="mt-3"
            name={"password2"}
            placeholder={"repeat password"}
            type="password"
          />
        )}
        <button class="mt-3 fw-bold" type={"submit"}>
          {loginMode ? "Log In" : "Register"}
        </button>
        {loginMode === true && (
          <button onClick={() => switchLoginMode(false)} class="switch mt-5">
            Haven't got an account yet ?
          </button>
        )}

        {loginMode === false && (
          <button onClick={() => switchLoginMode(true)} class="switch mt-5">
            Have got an account already ?
          </button>
        )}
      </form>
      <img class="Home__account__waves" src={waves} alt="waves" />
    </section>
  );
};
