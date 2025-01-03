import styles from '../styles/Headers.module.css'; // Import your styles

function Home() {
  return (
    <div>
      {/* Welcome header */}
      <h1 className={`${styles['welcome-header']} mt-5 text-center`}>
        Welcome to our shop !!!
      </h1>

      {/* Example content */}
      <section>
        <p className="text-center">
          Browse our amazing collection of products and find your next favorite item!
        </p>
      </section>
    </div>
  );
}

export default Home;
