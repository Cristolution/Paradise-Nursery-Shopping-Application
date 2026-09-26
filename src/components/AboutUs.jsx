import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <section className="about-hero">
                <h1> About Paradise Nursery</h1>
                <p className="about-tagline">
                    Bringing the joy of nature into every home, one plant at a time.
                </p>
            </section>

            <section className="about-section">
                <h2>Our Story</h2>
                <p>
                    Paradise Nursery was founded in 2015 by a group of friends who shared
                    one big dream: to make the world a greener, happier place. What
                    started as a tiny plant stand at a local farmer's market has grown
                    into a beloved online destination for plant lovers everywhere.
                </p>
                <p>
                    We noticed that many people wanted plants in their homes but didn't
                    know where to start. So we made it our mission to carefully choose
                    easy-to-care-for plants, package them safely, and ship them with love
                    right to your doorstep.
                </p>
            </section>

            <section className="about-section mission-section">
                <h2> Our Mission</h2>
                <p>
                    Our mission is simple: <strong>help people live happier, healthier
                        lives through plants.</strong> Plants clean the air, calm the mind,
                    and bring beauty to any space. We believe everyone deserves a little
                    paradise of their own.
                </p>
                <ul className="mission-list">
                    <li> Hand-pick every plant for quality and health</li>
                    <li> Ship with eco-friendly, protective packaging</li>
                    <li> Offer friendly plant-care support for life</li>
                    <li> Support sustainable and ethical growing practices</li>
                </ul>
            </section>

            <section className="about-section">
                <h2> Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Quality First</h3>
                        <p>
                            Every plant is inspected by our team of plant experts before it
                            ships. We never send a plant we wouldn't put in our own homes.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Sustainability</h3>
                        <p>
                            We use biodegradable pots, recyclable packaging, and partner
                            with growers who care for the earth as much as we do.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Community</h3>
                        <p>
                            We're more than a store — we're a community of plant lovers.
                            Join us on social media for tips, tricks, and plant-parent
                            stories.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2> Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="team-avatar">🌻</div>
                        <h3>Sarah Greenfield</h3>
                        <p className="team-role">Founder & Head Plant Whisperer</p>
                        <p>
                            Sarah has been growing plants since she was 7 years old. She
                            knows every plant in our shop by name (and probably by favorite
                            song).
                        </p>
                    </div>
                    <div className="team-member">
                        <div className="team-avatar">🪴</div>
                        <h3>Marco Bloom</h3>
                        <p className="team-role">Master Grower</p>
                        <p>
                            Marco travels the world finding the healthiest, happiest plants
                            for our customers. He believes every plant deserves a good home.
                        </p>
                    </div>
                    <div className="team-member">
                        <div className="team-avatar">🌵</div>
                        <h3>Lin Petal</h3>
                        <p className="team-role">Customer Happiness Manager</p>
                        <p>
                            Lin is here to help you with any plant questions — big or small.
                            She's the friendly voice behind every email and chat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <h2>Ready to Start Your Plant Journey? </h2>
                <p>
                    Browse our collection and find the perfect plant to bring a little
                    paradise into your home.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;