import { Image } from "react-bootstrap";

const CryptoCurrencyPortfolio = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/13-AWS-Lex-Clustering-Crypto/tree/main/Instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <Image
                src="https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="Cryptocurrency"
              />
              <figcaption>Cryptocurrency Portfolio Allocator</figcaption>
              <div className="image__overlay">
                <div className="image__title">
                  Cryptocurrency Portfolio Allocator
                </div>
                <p className="image__description">
                  Generating a report on what cryptocurrencies are available on
                  the trading markets using Python maching learning library
                  scikit-learn
                </p>
              </div>
            </div>
          </a>
        </ul>
      </figure>
    </div>
  );
};

export default CryptoCurrencyPortfolio;
