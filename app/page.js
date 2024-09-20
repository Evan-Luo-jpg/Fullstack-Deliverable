// We import components from other files like this
import BubblePopper from "./components/BubblePopper"
import Banner from "./components/Banner"
import styles from "./page.module.css"

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className={styles.container}>
        <h1> This is my Fullstack (frontend) website for a Stress Relief Website</h1>
        <p> 
          I have no idea how to do backend, I just used the template. 
          Sorry Kazuya the MongoDB day was hard.
        </p>
      </div>
      <div className={styles.containerBubbles}>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
      </div>
      <div className={styles.containerBubbles}>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
      </div>
      <div className={styles.containerBubbles}>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
      </div>
      <div className={styles.containerBubbles}>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
        <BubblePopper></BubblePopper>
      </div>
    </div>
  );
}
