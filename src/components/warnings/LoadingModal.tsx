import { NextPage } from "next";
import styles from "../../styles/LoadingModal.module.css";

const LoadingModal: NextPage = (props) => {

    return (<div className={styles.divLodingModal}>
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}

export default LoadingModal;