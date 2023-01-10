import ReadersNav from '../../components/ReadersNav'
import Recommendation from '../../components/Recommendation'

const Post = () => {
  const styles = {
    content: `flex`,
  }
  return (
    <div className={styles.content}>
      <ReadersNav />
      <div>Article Main Will Go Here</div>
      <Recommendation />
    </div>
  )
}

export default Post