const login = async (
  username: string,
  password: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  await fetch("http://127.0.0.1:8000/api/login", {
    method: "post",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        localStorage.setItem("username", username);
        console.log(data);
        localStorage.setItem("user_id", data.id.id);
        onSuccess();
        return;
      } else {
        onFailure();
        return;
      }
    });
};

export { login };
