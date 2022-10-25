/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const DICE_TRIGGER_EL = document.querySelector(".dice__trigger"),
  DICE_FACES_EL = document.querySelector(".dice__faces"),
  DICE_SOUND_EL = document.querySelector(".dice__sound");

DICE_TRIGGER_EL.addEventListener("click", () => {
  const X = getRandomNum(1, 6),
    Y = getRandomNum(1, 6),
    Z = getRandomNum(1, 6);
  DICE_FACES_EL.style.transform = `rotateX(${X}deg) rotateY(${Y}deg) rotateZ(${Z}deg)`;
  new Audio(DICE_SOUND_EL.src).play();
});

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) * 90;
}
