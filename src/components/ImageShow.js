import "./ImageShow.css";

function ImageShow({image}) {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
    };

    const appearOnScroll = new IntersectionObserver(
        function(
            entries, 
            appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            })
        }, 
        appearOptions
    );

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    return (
        <div>
            <img className="fade-in" src={image.urls.small} alt={image.alt_description}></img>
        </div>
    );
}

export default ImageShow;