import {deleteService} from "../serverConnect/service/Service"
import {useLocation} from "react-router-dom";
import {ApiController} from "../serverConnect/ApiController.js";
import {Apis} from "../serverConnect/Apis.js";

export const DeleteModal = ({id, url, navigate, photoId}) => {
    const location = useLocation().pathname
    const deleteAbout = async () => {
        try {
            await deleteService(id, url, navigate, location)
            if (photoId !== undefined) {
                await ApiController.doDelete(photoId, Apis.deletePhoto)
            }
        } catch (err) {
        }
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">o'chirish</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">yo'q</button>
                            <button type="button" className="btn btn-primary" onClick={() => deleteAbout()}>xa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}