import { Link } from "react-router-dom";
import { homepage } from "./Homepage.module.css";
import { PageNav } from "../../components";

export default function Homepage() {
  return (
    <main className={homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app/cities" className="cta">
          Start Tracking now
        </Link>
      </section>
    </main>
  );
}
