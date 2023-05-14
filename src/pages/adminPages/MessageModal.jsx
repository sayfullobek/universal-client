import React from "react";

export const MessageModal = ({message}) => {
    return (
        <div>
            <div className="modal fade" id="exampleModalMessage" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">xabar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <h6>
                                {message === "" ? "xabar mavjud emas" : message}
                            </h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">orqaga</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}