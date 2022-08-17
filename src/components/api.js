
export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Dmitry",
    createdAt: new Date().toLocaleString(),
  };
};