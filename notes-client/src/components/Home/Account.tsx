import waves from "../../assets/images/layered-waves-haikei.svg";

export const Account = () => {
  return (
    <section class={"Home__account position-absolute"}>
      <h1>Notes App</h1>
      <h2>Register</h2>
      <form class={"Home__account__form"}>
        <input name="username" placeholder={"username"} type={"text"} />
        <input name={"password"} placeholder={"password"} type="password" />
        <input
          name={"password2"}
          placeholder={"repeat password"}
          type="password"
        />
        <button type={"submit"}>Register</button>
      </form>
      <img class="Home__account__waves" src={waves} alt="waves" />
    </section>
  );
};
