import { useState } from 'react';
import confetti from 'canvas-confetti';

function Proposal() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [yesButtonText, setYesButtonText] = useState("Yes, I will! 💖");

  const nextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const acceptProposal = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setProposalAccepted(true);
    }, 1000);
  };

  const moveNoButton = (e) => {
    const container = e.currentTarget.parentElement;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);
    e.currentTarget.style.position = 'absolute';
    e.currentTarget.style.left = `${randomX}px`;
    e.currentTarget.style.top = `${randomY}px`;
  };

  return (
    <div className="proposal-page">
      <div className="proposal-container">
        <div className="proposal-slides">
          {currentSlide === 1 && (
            <div className="slide active" id="slide1">
              <h2>Tasnimati , the day we broke up i found out how much tan7ma9 3lik</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {currentSlide === 2 && (
            <div className="slide active" id="slide2">
              <h2>For that mabaghich hdchi i3awd itra</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {currentSlide === 3 && (
            <div className="slide active" id="slide3">
              <h2>thats why bghitek t3awni m3aya wnt3awn m3ak for both of us to make this work</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          
          {currentSlide === 4 && (
            <div className="slide active" id="slide4">
              {!proposalAccepted ? (
                <>
                  <h1 className="proposal-title">Will You Be My basbousati now and forever ?</h1>
                  <div className="proposal-buttons">
                    <button
                      className="yes-button"
                      onMouseEnter={() => setYesButtonText("yalah brki")}
                      onMouseLeave={() => setYesButtonText("Ahh (bzz mnek)")}
                      onClick={acceptProposal}
                    >
                      {yesButtonText}
                    </button>
                    <button className="no-button" onMouseOver={moveNoButton}>
                      No
                    </button>
                  </div>
                </>
              ) : (
                <h2 style={{ color: 'var(--primary-color)' }}>
                  i ll kiss your hand in this part and we are now stuck together forever (with evil tasnima laugh khkhkh) ❤️
                </h2>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Proposal;
