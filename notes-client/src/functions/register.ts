const register = async (
  username: string,
  password: string,
  password2: string,
  onSuccess: () => void,
  onFailure: () => void
): Promise<void> => {
  if (password !== password2) {
    alert("Passwords are not identical !");
    onFailure();
    return;
  }

  const formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);
  formData.append("password2", password2);

  await fetch("http://127.0.0.1:8000/api/register", {
    method: "post",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        alert("Account was successfullt created !");
        onSuccess();
        return;
      } else {
        alert("Error while creating account !");
        onFailure();
        return;
      }
    });
};

export { register };
