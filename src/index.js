import './styles/style.css';
import './styles/animation.css';

const arrAnimation = document.querySelectorAll('.animated');

function visibility() {
    arrAnimation.forEach(element => {
        const y = element.getBoundingClientRect().y;
        const height = element.getBoundingClientRect().height;
        if (y > (-height) && y < document.documentElement.clientHeight) {
            element.classList.add('go');
        } else {
            element.classList.remove('go');
            element.style.opacity = '0';
        }
    });
}

document.addEventListener("scroll", visibility);