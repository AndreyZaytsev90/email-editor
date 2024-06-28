import {EmailBuilder} from "./components/email-builder/EmailBuilder";
import {EmailList} from "./components/email-list/EmailList";

export const Home = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr .6fr",
            padding: "1.5rem"
        }}>
            <EmailBuilder/>
            <EmailList/>
        </div>
    );
};