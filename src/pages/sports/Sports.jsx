import FadeInSection from "../../components/FadeInSection";
import "../../assets/styles/sports.scss";

import sportsData from "../../data/sportsData";
import { Link } from "react-router-dom";

const Sports = () => {
    return (
        <main>
            <FadeInSection>
                <div className="sports-header">
                    <h1>Sports & Athletics</h1>
                    <p>
                        Explore the world of sports, meet top players, learn about teams,
                        awards, and the organizations behind each game.
                    </p>
                </div>
            </FadeInSection>

            <div className="sports-grid">
                {sportsData.map((sport, index) => (
                    <FadeInSection key={index}>
                        <div className="sport-card">
                            <img src={sport.image} alt={sport.name} className="sport-img" />

                            <div className="sport-content">
                                <h2>{sport.name}</h2>
                                <p className="sport-description">{sport.description}</p>

                                <div className="sport-info">
                                    <p><strong>Organizer:</strong> {sport.organizer}</p>
                                    <p><strong>Awards:</strong> {sport.awards}</p>
                                    <p><strong>Teams:</strong> {sport.teams.join(", ")}</p>
                                    <p><strong>Players:</strong> {sport.players.join(", ")}</p>
                                </div>

                                <Link to={`/sports/${sport.id}`} className="see-more-btn"> See More </Link>
                            </div>
                        </div>

                    </FadeInSection>
                ))}
            </div>
        </main>
    );
};

export default Sports;
