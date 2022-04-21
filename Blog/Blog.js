const posts = [
  { id: 1, title: "Post 1", description: "Sample 1" },
  { id: 2, title: "Post 2", description: "Sample 2" },
  { id: 3, title: "Post 3", description: "Sample 3" },
  { id: 4, title: "Post 4", description: "Sample 4" },
  { id: 5, title: "Post 5", description: "Sample 5" },
];

const listPosts = () => {
  return posts.map((post) => {
    console.log(post.title);
  });
};
listPosts();

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve();
    //reject();
  });

  return promise1;
};

const showPosts = async () => {
  try {
    await addPost({ id: 6, title: "Post 6", description: "Sample 6" })
      .then(() => {
        console.log("Yeni Kitap Listesi");
        listPosts();
      })
      .catch(() => console.log("Kitap eklenemedi !!!"));
  } catch (error) {
    console.log(error);
  }
};
showPosts();
