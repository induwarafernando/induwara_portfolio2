import './Home.scss'
import profile  from "../../assets/profile.png";


const Home = () => {
  return (
  <div className="home" id='home'>
    <div className="details">
      <span className="intro">Hello,I`m</span>

    <div className="name">
        <div>
            <h1 className="txt">
                Induwara <br />
                Fernando
                </h1>
        </div>
        <h1 className="txt lg">9</h1>
        <div className="stack">
            FULL-STACK <b>DEVELOPER</b>
        </div>
    </div>
</div>


    <div className="profile-img">
        <img src={profile} alt="" />
    </div>
  </div> 
)}


export default Home