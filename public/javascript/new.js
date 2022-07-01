const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
    document
      .querySelector(".new-post-form")
      .addEventListener("submit", newFormHandler);