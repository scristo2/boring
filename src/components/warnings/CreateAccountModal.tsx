import { NextPage } from "next";

const CreateAccountModal: NextPage = () => {

    return (
        <div className="modal fade" id="createAccountModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Aviso</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        Cuando realizes una compra se te creara una cuenta automatica.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Entendido</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateAccountModal;