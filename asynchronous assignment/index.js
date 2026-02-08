// Task1
function getUser(id, callback) {
  setTimeout(() => {
    const user = { id: id, name: "Ram" };
    callback(user);
  }, 2000);
}
getUser(1, function (result) {
  console.log("Task 1 User Name:", result.name);
});

// Task2
function getUserH(userId, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 1, name: "Ram" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 1000);
}

getUserH(1, function (user) {
  console.log("User Fetched");
  getPosts(user.id, function (posts) {
    console.log("Posts Fetched");
    getComments(posts[0], function (comments) {
      console.log("Comment Fetched");
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

// Task3
function getUserP() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Ram" });
    }, 1000);
  });
}

function getPostsP(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getCommentsP(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

getUserP()
  .then((user) => {
    console.log("User:", user);
    return getPostsP(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getCommentsP(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Task4
function getUserA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Ram" });
    }, 1000);
  });
}

function getPostsA(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getCommentsA(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

async function showData() {
  try {
    const user = await getUserA();
    const posts = await getPostsA(user.id);
    const comments = await getCommentsA(posts[0]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

showData();