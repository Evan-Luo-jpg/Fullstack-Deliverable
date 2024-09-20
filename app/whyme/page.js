import styles from "../page.module.css"
import Banner from "../components/Banner"

export default function Home() {
    return(
        <div>
            <Banner></Banner>
            <div className={styles.container}>
                <h1>
                    All About Me!
                </h1>
                <p className={styles.para}>
                    I have literally no idea what I am doing. I keep accidentally doing class=".css" 
                    instead of className=curlybrace,styles.css,curlybrace. I like learning about web development
                    even though I haven't done it since like middle school after a forced summer camp. I have only really used
                    python for data analysis and machine learning so I don't really know web development, but I am eager to learn. 
                </p>
            </div>
        </div>

    )
};