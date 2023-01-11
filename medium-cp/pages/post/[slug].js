import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendation from "../../components/Recommendation";

const Post = () => {
  const styles = {
    content: `flex`,
  };
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendation />
    </div>
  );
};

export default Post;
