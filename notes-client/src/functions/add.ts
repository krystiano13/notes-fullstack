const add = async (
  form,
  userId: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  const formData = new FormData(form);
  formData.append("user_id", userId.toString());

  await fetch("http://127.0.0.1:8000/api/createNote", {
    method: "post",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        onSuccess();
        return;
      } else {
        onFailure();
        return;
      }
    });
};

export { add };
