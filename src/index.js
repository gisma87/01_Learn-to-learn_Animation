import './styles/style.css';
import './styles/animation.css';

const arrAnimation = document.querySelectorAll('.animated-parent');

function visibility() {
    arrAnimation.forEach(element => {
        const rect = element.getBoundingClientRect();
        const y = rect.y;
        const height = rect.height;
        if (y > (-height) && y < document.documentElement.clientHeight) {
            element.classList.add('go');
        } else {
            element.classList.remove('go');
        }
    });
}

document.addEventListener("scroll", visibility);