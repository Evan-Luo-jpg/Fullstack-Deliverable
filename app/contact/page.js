import styles from "../page.module.css"
import Banner from "../components/Banner"
import Image from 'next/image'
import pikachu from "../images/fatpikachu.jpg"

export default function Home() {
    return(
        <div>
            <Banner></Banner>
            <div className={styles.container}>
                <h1>
                    This is my contact!
                </h1>
                    <Image 
                    src={pikachu}
                    alt="My Image"
                    width={500}
                    height={300}
                    />
                <p className={styles.para}>
                    I look like this for reference
                </p>
                <p className={styles.para}>
                    evan_luo@brown.edu
                </p>
            </div>
        </div>

    )
};