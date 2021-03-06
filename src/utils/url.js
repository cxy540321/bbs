// eslint-disable-next-line
const postListFilter = {
  fields: ["id", "title", "author", "vote", "updatedAt"],
  limit: 10,
  order: "updatedAt DESC",
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
};
// eslint-disable-next-line
const postByIdFilter = id => ({
  fields: ["id", "title", "author", "vote", "updatedAt", "content"],
  where: { id: id },
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
});

const commentListFilter = postId => ({
  fields: ["id", "author", "updatedAt", "content"],
  where: { post: postId },
  limit: 20,
  order: "updatedAt DESC",
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
});

function encodeFilter(filter) {
  return encodeURIComponent(JSON.stringify(filter));
}
// eslint-disable-next-line
export default {
  login: () => "/user/login",
  getPostList: () => '/post',
  getPostById: id => `/post/${id}`,
  createPost: () => "/post",
  updatePost: id => `/post/${id}`,
  getCommentList: postId =>
    `/comment?filter=${encodeFilter(commentListFilter(postId))}`,
  createComment: () => "/comment"
};
