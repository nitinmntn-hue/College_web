import { Link } from "react-router-dom";
import "../assets/styles/notFound.scss";
import FadeInSection from "../components/FadeInSection";

const NotFound = () => {
  return (
    <main className="not-found">
      <FadeInSection>
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="back-home-btn">
            Go Back Home
          </Link>
        </div>
      </FadeInSection>

    </main>
  );
};

export default NotFound;
