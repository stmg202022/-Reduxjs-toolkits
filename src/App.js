import Counter from "./features/counter/counter";
import PostsList from "./features/posts/postsList";
import AddPostForm from "./features/posts/AddPostForm";


function App() {

  return (
    <div className="App">
      <h1> Redux App.</h1>
      <Counter />

      <AddPostForm />

      <PostsList />
    </div>
  );
}

export default App;
