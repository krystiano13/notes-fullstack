import waves from "../../assets/images/layered-waves-haikei.svg";

export const Account = () => {
  return (
    <section
      class={
        "Home__account d-flex flex-column justify-content-end position-absolute"
      }
    >
      <form
        class={"Home__account__form position-absolute p-5 d-flex flex-column"}
      >
        <h1 class="font-head fw-bold"><span>Notes</span> App</h1>
        <h2 class="font-head">Register</h2>
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
        <input
          class="mt-3"
          name={"password2"}
          placeholder={"repeat password"}
          type="password"
        />
        <button class="mt-3 fw-bold" type={"submit"}>
          Register
        </button>
        <p class="switch mt-3">Have got an account already ?</p>
      </form>
      <img class="Home__account__waves" src={waves} alt="waves" />
    </section>
  );
};
