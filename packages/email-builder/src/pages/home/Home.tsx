import {EmailBuilder} from "../../components/email-builder/EmailBuilder";
import {EmailList} from "../../components/email-list/EmailList";
import styles from "./Home.module.scss"

export const Home = () => {
    return (
        <div className={styles.body}>
            <EmailBuilder/>
            <EmailList/>
        </div>
    );
};