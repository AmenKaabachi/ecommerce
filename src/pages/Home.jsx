import './styles/Home.css'; // Import the new CSS file

function Home() {
  return (
    <main className="home-container">
      {/* Welcome header */}
      <h1 className="home-header">
        Welcome to our shop !!!
      </h1>

      {/* Example content */}
      <section className="home-content">
        <p>
          Browse our amazing collection of products and find your next favorite item!
        </p>
      </section>
    </main>
  );
}

export default Home;
