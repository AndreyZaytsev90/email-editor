
import styles from "./EmailBuilder.module.scss"
import {Bold, Eraser, Italic, Underline} from "lucide-react";

export function EmailBuilder() {


  return (
    <div>
      <h1>Email builder</h1>
      <div className={styles.card}>
          <div className={styles.editor}>
              In the heart of a dense forest, where the thick canopy barely let any sunlight pierce through, a small stream glistened like a silver ribbon. Its serene flow was occasionally disturbed by a fish leaping out of the water or a leaf gently landing on its surface. Alongside the stream, a variety of creatures went about their day. A squirrel was busy stocking up acorns, moving with incredible agility from one tree to another. Birds sung in a harmonious melody, their tunes creating a symphony that only nature could orchestrate.
          </div>
          <div className={styles.actions}>
              <div className={styles.tools}>
                    <button><Eraser size={17}/></button>
                    <button><Bold size={17}/></button>
                    <button><Italic size={17}/></button>
                    <button><Underline size={17}/></button>

              </div>
              <button>Send now</button>
          </div>

      </div>

    </div>
  )
}

