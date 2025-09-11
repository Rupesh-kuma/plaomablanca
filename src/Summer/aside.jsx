import { Link } from "react-router-dom";

const Aside=()=>{
    return(
        <>
        <div className="card p-0">
                            <div className="card-body p-0">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Silhouette
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link className="nav-link" to="/a_line">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            A_Line
                                                        </label>
                                                    </div>
                                                </Link>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/ball_gown">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                            Ball Gown
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/fit_and_flare">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Fit And Flare
                                                    </label>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Fabric
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                                <Link className="nav-link" to="/3d_lace">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                            3D Lace
                                                        </label>
                                                    </div>
                                                </Link>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/charmeuse_satin">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                        Charmeuse Satin
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/crêpe">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                    Crêpe
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/duchesse_satin">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault7">
                                                    Duchesse Satin
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/embroidered_organza">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                    Embroidered Organza
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/embroidered_tulle">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                    Embroidered Tulle
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/hand_painted_italian_tulle">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                    Hand Painted Italian Tulle
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/lace">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault11">
                                                    Lace
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/mikado">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault12">
                                                    Mikado
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/organdy">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault13">
                                                    Organdy
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/organza">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault14">
                                                    Organza
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/satin">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault15" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault15">
                                                    Satin
                                                    </label>
                                                    </Link>
                                                </div>
                                                v
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/satin_faille">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault16">
                                                    Satin Faille
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/sequin_tulle">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault17">
                                                    Sequin Tulle
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/soft_organza">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault18" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault18">
                                                    Soft Organza
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/striped_organza">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault19">
                                                    Striped Organza
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/tulle">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault20" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault20">
                                                   Tulle
                                                    </label>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Neckline
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                                <Link className="nav-link" to="/bateau_neckline">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault21" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault21">
                                                        Bateau Neckline
                                                        </label>
                                                    </div>
                                                </Link>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/draped_neckline">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault22" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault22">
                                                        Draped Neckline
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/halter_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault23" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault23">
                                                    Halter Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/jewel_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault24" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault24">
                                                    Jewel Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/notched_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault25" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault25">
                                                    Notched Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/off_the_shoulder_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault26" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault26">
                                                    Off The Shoulder Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/one_shoulder">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault27" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault27">
                                                    One Shoulder
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/plunging_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault28" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault28">
                                                    Plunging Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/scoop_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault29" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault29">
                                                    Scoop Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/square_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault30" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault30">
                                                    Square Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/straight_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault31" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault31">
                                                    Straight Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/sweetheart_neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault32" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault32">
                                                    Sweetheart Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/v-neckline">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault33" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault33">
                                                    V-Neckline
                                                    </label>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                Features
                                            </button>
                                        </h2>
                                        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                                <Link className="nav-link" to="/beading">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault34" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault34">
                                                        Beading
                                                        </label>
                                                    </div>
                                                </Link>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/bow">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault35" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault35">
                                                        Bow
                                                        </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/buttons">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault36" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault36">
                                                    Buttons
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/cape_included">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault37" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault37">
                                                    Cape Included
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/embroidery">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault38" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault38">
                                                    Embroidery
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/keyhole_back">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault39" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault39">
                                                    Keyhole Back
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/long_sleeves">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault40" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault40">
                                                    Long Sleeves
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/long_train">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault41" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault41">
                                                    Long Train
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/multiple_shaped_seams">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault42" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault42">
                                                    Multiple Shaped Seams
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/open_back">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault43" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault43">
                                                    Open Back
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/pockets">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault44" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault44">
                                                    Pockets
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/portrait_collar">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault45" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault45">
                                                    Portrait Collar
                                                    </label>
                                                    </Link>
                                                </div>
                                                <div className="form-check">
                                                    <Link className="nav-link" to="/removable_overskirt">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault46" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault46">
                                                    Removable Overskirt
                                                    </label>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Aside;