import styles from './EmailList.module.scss'
import {useQuery} from "@tanstack/react-query";
import {emailService} from "../../services/email.service";
import parse from 'html-react-parser'

export const EmailList = () => {

    const {data} = useQuery({
        queryKey: ['email list'],
        queryFn: () => emailService.getEmails()
    })

    return (
        <div className={styles.list}>
            {data?.map((email, index) => <div key={index}>{parse(email.text)}</div>)}
        </div>
    );
};