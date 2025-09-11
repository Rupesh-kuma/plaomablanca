import 'bootstrap/dist/css/bootstrap.min.css'
import "./header/navbar.css";
import "./footer/foote.css";
import "./OURSTORY/ourstory.css";
import "./REAL BRIDES/real_brides.css";
import Homemain from "./Home/home"
import { Routes, Route } from "react-router-dom"
import Ourstory from './OURSTORY/ourstory';
import Real from './REAL BRIDES/real';
import Blogmain from './Blog/Blog_main';
import Press from './The_Press/The_press';
import "./The_Press/press.css";
import "./Summer/summer.css";
import Video from './video/video';
import Events from './Events/Events';
import Shoop from './Location/shoop_location';
import Summer from './Summer/summer';
import Alines from './Summer/A_lines';
import Ballgown from './Summer/Ball_Gown';
import Fitandflare from './Summer/Fit_And_Flare';
import Dlace from './Summer/3D_Lace';
import Charmeusesatin from './Summer/Charmeuse_Satin';
import Crepe from './Summer/Crêpe';
import Duchessesatin from './Summer/Duchesse_Satin';
import Embroideredorganze from './Summer/embroidered_organza';
import Embroideredtulle from './Summer/embroidered_tulle';
import Handpainted from './Summer/hand_painted_italian_tulle';
import Lace from './Summer/lace';
import Accessories from './COLLECTIONS/accessories';
import Allderesses from './COLLECTIONS/all_dresses';
import Curvybrides from './COLLECTIONS/Curvy_brides';
import Mikado from './Summer/Mikado';
import Organdy from './Summer/Organdy';
import Organza from './Summer/Organza';
import Satin from './Summer/Satin';
import Satinfaille from './Summer/Satin_Faille';
import Sequintulle from './Summer/Sequin_Tulle';
import Softorganza from './Summer/Soft_Organza';
import Stripedorganza from './Summer/Striped_Organza';
import Tulle from './Summer/Tulle';
import Bateauneckline from './Summer/Bateau_Neckline';
import Halterneckline from './Summer/Halter_Neckline';
import Drapedneckline from './Summer/Draped_Neckline';
import Jewelneckline from './Summer/Jewel_Neckline';
import Notchedneckline from './Summer/Notched_Neckline';
import Offtheshoulderneckline from './Summer/Off_The_Shoulder_Neckline';
import Oneshoulder from './Summer/One_Shoulder';
import Plungingneckline from './Summer/Plunging_Neckline';
import Scoopneckline from './Summer/Scoop_Neckline';
import Squareneckline from './Summer/Square_Neckline';
import Straightneckline from './Summer/Straight_Neckline';
import Sweetheartneckline from './Summer/Sweetheart_Neckline';
import Vneckline from './Summer/V_Neckline';
import Bow from './Summer/Bow';
import Beading from './Summer/Beading';
import Buttons from './Summer/Buttons';
import Capeincluded from './Summer/Cape_Included';
import Embroidery from './Summer/Embroidery';
import Keyholeback from './Summer/Keyhole_Back';
import Longsleeves from './Summer/Long_Sleeves';
import Longtrain from './Summer/Long_Train';
import Multipleshapedseams from './Summer/Multiple_Shaped_Seams';
import Openback from './Summer/Open_Back';
import Pockets from './Summer/Pockets';
import Portraitcollar from './Summer/Portrait_Collar';
import Removableoverskirt from './Summer/Removable_Overskirt';
import Mikaella from './Mikaella/Mikaella';
import Collectionall from './Summer/collection_all';


function App() {

  return (
    <Routes>
    <Route path="/" element={<Homemain/>} />
    <Route path="/our_story" element={<Ourstory/>} />
    <Route path="/real_brides" element={<Real/>} />
    <Route path="/blog" element={<Blogmain/>} />
    <Route path="/in_the_press" element={<Press/>} />
    <Route path="/videos" element={<Video/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/shop_locator" element={<Shoop/>} />
    <Route path="/ss_2024" element={<Summer/>} />
    <Route path="/a_line" element={<Alines/>} />
    <Route path="/ball_gown" element={<Ballgown/>} />
    <Route path="/fit_and_flare" element={<Fitandflare/>} />
    <Route path="/3d_lace" element={<Dlace/>} />
    <Route path="/charmeuse_satin" element={<Charmeusesatin/>} />
    <Route path="/crepe" element={<Crepe/>} />
    <Route path="/duchesse_satin" element={<Duchessesatin/>} />
    <Route path="/embroidered_organza" element={<Embroideredorganze/>} />
    <Route path="/embroidered_tulle" element={<Embroideredtulle/>} />
    <Route path="/hand_painted_italian_tulle" element={<Handpainted/>} />
    <Route path="/lace" element={<Lace/>} />
    <Route path="/accessories" element={<Accessories/>} />
    <Route path="/all_dresses" element={<Allderesses/>} />
    <Route path="/curvy_brides" element={<Curvybrides/>} />
    <Route path="/mikado" element={<Mikado/>} />
    <Route path="/organdy" element={<Organdy/>} />
    <Route path="/organza" element={<Organza/>} />
    <Route path="/satin" element={<Satin/>} />
    <Route path="/satin_faille" element={<Satinfaille/>} />
    <Route path="/sequin_tulle" element={<Sequintulle/>} />
    <Route path="/soft_organza" element={<Softorganza/>} />
    <Route path="/striped_organza" element={<Stripedorganza/>} />
    <Route path="/tulle" element={<Tulle/>} />
    <Route path="/bateau_neckline" element={<Bateauneckline/>} />
    <Route path="/halter_neckline" element={<Halterneckline/>} />
    <Route path="/draped_neckline" element={<Drapedneckline/>} />
    <Route path="/jewel_neckline" element={<Jewelneckline/>} />
    <Route path="/notched_neckline" element={<Notchedneckline/>} />
    <Route path="/Off_The_Shoulder_Neckline" element={<Offtheshoulderneckline/>} />
    <Route path="/one_shoulder" element={<Oneshoulder/>} />
    <Route path="/plunging_neckline" element={<Plungingneckline/>} />
    <Route path="/scoop_neckline" element={<Scoopneckline/>} />
    <Route path="/square_neckline" element={<Squareneckline/>} />
    <Route path="/straight_neckline" element={<Straightneckline/>} />
    <Route path="/sweetheart_neckline" element={<Sweetheartneckline/>} />
    <Route path="/v-neckline" element={<Vneckline/>} />
    <Route path="/bow" element={<Bow/>} />
    <Route path="/beading" element={<Beading/>} />
    <Route path="/buttons" element={<Buttons/>} />
    <Route path="/cape_included" element={<Capeincluded/>} />
    <Route path="/embroidery" element={<Embroidery/>} />
    <Route path="/keyhole_back" element={<Keyholeback/>} />
    <Route path="/long_sleeves" element={<Longsleeves/>} />
    <Route path="/long_train" element={<Longtrain/>} />
    <Route path="/multiple_shaped_seams" element={<Multipleshapedseams/>} />
    <Route path="/open_back" element={<Openback/>} />
    <Route path="/pockets" element={<Pockets/>} />
    <Route path="/portrait_collar" element={<Portraitcollar/>} />
    <Route path="/removable_overskirt" element={<Removableoverskirt/>} />
    <Route path="/mikaella" element={<Mikaella/>} />
    <Route path="/collection_all" element={<Collectionall/>} />
    </Routes>
  )
}

export default App
