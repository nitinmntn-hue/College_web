import { useParams, Link } from "react-router-dom";
import FadeInSection from "../../components/FadeInSection";
import sportsData from "../../data/sportsData";
import "../../assets/styles/sportDetail.scss";

const SportDetail = () => {
  const { id } = useParams();
  const sport = sportsData.find((s) => s.id === id);

  if (!sport) {
    return (
      <main>
        <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
          Sport not found
        </h1>
      </main>
    );
  }

  return (
    <main className="sport-detail">
      <FadeInSection>
        <div className="sport-detail-header">
          <img src={sport.image} alt={sport.name} className="sport-detail-img" />
          <div>
            <h1>{sport.name}</h1>
            <p className="sport-detail-description">{sport.description}</p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="sport-detail-info">
          <h2>Organizer</h2>
          <p>{sport.organizer}</p>

          <h2>Awards</h2>
          <ul>
            {sport.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>

          <h2>Teams</h2>
          <ul>
            {sport.teams.map((team, i) => (
              <li key={i}>{team}</li>
            ))}
          </ul>

          <h2>Players</h2>
          <ul>
            {sport.players.map((player, i) => (
              <li key={i}>{player}</li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="sport-gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {sport.gallery.map((img, i) => (
              <img key={i} src={img} alt={`${sport.name} ${i}`} />
            ))}
          </div>
        </div>
      </FadeInSection>

      <div className="back-btn-container">
        <Link to="/sports" className="back-btn">← Back to Sports</Link>
      </div>
    </main>
  );
};

export default SportDetail;
