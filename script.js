const profile = siteData.profile;
const posts = siteData.posts;

const $ = (selector) => document.querySelector(selector);

function renderProfile() {
  const avatarElements = ["#profileAvatar", "#composerAvatar", ".avatar-small"];
  avatarElements.forEach((selector) => {
    const element = $(selector);
    if (element) element.style.backgroundImage = `url("${profile.avatar}")`;
  });
  $("#profileName").textContent = profile.name;
  $("#profileHandle").textContent = profile.handle;
  $("#profileBio").textContent = profile.bio;
  $("#profileBorn").textContent = profile.born;
  $("#profileLocation").textContent = profile.location;
  $("#profileFamily").textContent = profile.family;
  $("#profileWork").textContent = profile.work;
  $("#friendCount").textContent = profile.friends;
  document.title = `${profile.name} | Social Profile`;
  $("#photoGrid").innerHTML = siteData.gallery.map((photo) => `<img src="${photo}" alt="Profile gallery image" loading="lazy">`).join("");
}

function avatarStyle(url) {
  return `style="background-image:url('${url}')"`
}

function renderPosts() {
  $("#postList").innerHTML = posts.map((post, index) => `
    <article class="card post">
      <div class="post-header">
        <div class="avatar" ${avatarStyle(profile.avatar)}></div>
        <div class="post-meta"><strong>${post.author}</strong><span>${post.time} · ◉</span></div>
        <button class="post-menu" aria-label="Post options">•••</button>
      </div>
      <p class="post-text">${post.text}</p>
      ${post.image ? `<img class="post-image" src="${post.image}" alt="Image shared by ${post.author}" loading="lazy">` : ""}
      <div class="post-stats"><span>♡ ${post.likes} likes</span><span>${post.comments.length} comments</span></div>
      <div class="post-actions">
        <button class="post-action like-button" data-index="${index}">♡ Like</button>
        <button class="post-action">◌ Comment</button>
        <button class="post-action">↗ Share</button>
      </div>
      <div class="comments">
        ${post.comments.map((comment) => `
          <div class="comment">
            <div class="avatar" ${avatarStyle(comment.avatar)}></div>
            <div class="comment-bubble"><strong>${comment.author}</strong>${comment.text}</div>
          </div>`).join("")}
        <form class="comment-form" data-index="${index}">
          <input aria-label="Write a comment" placeholder="Write a comment..." required>
          <button type="submit">Post</button>
        </form>
      </div>
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const likeButton = event.target.closest(".like-button");
  if (likeButton) {
    const post = posts[likeButton.dataset.index];
    post.likes += 1;
    renderPosts();
  }
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches(".comment-form")) return;
  event.preventDefault();
  const index = event.target.dataset.index;
  const input = event.target.querySelector("input");
  posts[index].comments.push({
    author: profile.name,
    text: input.value.trim(),
    avatar: profile.avatar,
  });
  renderPosts();
});

renderProfile();
renderPosts();
