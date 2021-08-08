import Gnb from "./Gnb";
import { Header } from 'semantic-ui-react';
import topStyles from "../../styles/Top.module.css";

export default function Top() {
    return (
        <>
            <div className={topStyles.content}>
                <div className={topStyles.box}>
                    <img className={topStyles.logo} src="images/logo.png" alt="logo" />
                </div>
                <Header as="h1">다현</Header>
            </div>
            <Gnb />
        </>
    )
}