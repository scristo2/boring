import { NextPage } from "next";
import { useRef } from "react";

type SomeErrorModal = {

    message : string
}

const SomeErrorModal: NextPage<SomeErrorModal> = (props) => {


    return (<>
        {/* Modal */}
        <div className="modal fade" id="errorModal" tabIndex={-1} aria-labelledby="errorModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="errorModalLabel">Error</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                       <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <input type="button"  className="btn btn-danger" data-bs-dismiss="modal" value={"entendido"}/>
                    </div>
                </div>
            </div>
        </div>
    </>)

}

export default SomeErrorModal;