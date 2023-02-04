import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

//This { userId} is from postList.js
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId); //  return {}

  return <span> By {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
