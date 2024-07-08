import {X} from "phosphor-react";
import './Modal.css'
const MyModal = ({closeModal}) => {
    return(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-body">
                <div>
                    <p>Size Chart</p>
                    <X size={32} weight="fill" onClick={closeModal}/>
                </div>
                <div className="sizes">
                    <table>
                        <thead>
                        <tr>
                            <th>UK Size</th>
                            <th>US Size</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>9.5</td>
                            <td>8.5</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default MyModal;