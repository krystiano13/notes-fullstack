const deleteNote = async (
  id: string,
  userId: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  await fetch(
    `http://127.0.0.1:8000/api/deleteNote?id=${id}&user_id=${userId}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.msg) {
        onSuccess();
        return;
      } else {
        onFailure();
        return;
      }
    });
};

export { deleteNote };
