

![jhbfks](readme/img.png)

<hr v>

# Description
![jhbfks](readme/img2.png)
This game is implemented on the basis of JavaScript without the use of any frameworks. __Simplified__ version of the game where you need to shoot at targets at speed, only here we do not shoot, but click with the mouse.

# Objective
The __goal__ of creating this project was to look at various elements and __practice__ in JavaScript.

+ work with ___dynamics___
+ creating ___timers___
+ choice of random ___position___ and ___sizes___
+ work with ___functions___
+ work with ___arrays___
+ work with ___destructuring___
```JS
function createRandomCircle() {

    const circle = document.createElement('div');
    const { width, height } = board.getBoundingClientRect();
    const size = getRandomSize(20, 60)
    const x = getRandomSize(0, width - size)
    const y = getRandomSize(0, height - size) 
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    const color=getColor();
    circle.style.backgroundColor = color;
    console.log(circle.style.backgroundColor);
    circle.style.boxShadow=`0 0 10px   ${color}`
    board.append(circle);
}
```
# How to play

Step one: choose the duration of the game.

Step two: click on the colored dots of different sizes.

At the end of the game you will see your result!

![jhbfks](https://media2.giphy.com/media/3VXMWNVPPo2Nqmd6q5/giphy.gif?cid=790b7611b91df30ec3b226892519295fda39f91af10d756e&rid=giphy.gif&ct=g)


# Live Demo
For the convenience of viewing my project __follow__ __instructions__:
+ after clicking on the link, increase the game window as shown in the video
+ click the __RUN__ button in the top left corner
+ enjoy it! 
[Aim-game](https://jsfiddle.net/EvaCherkashyna/u6qegm92/)

![video-instructions](https://media3.giphy.com/media/eqmH5Af5G5neYTH3jl/giphy.gif?cid=790b7611216bd546de524985fb306c9081a8418fd078fc20&rid=giphy.gif&ct=g)


# Instruction about download
 ![code](/readme/img4.png)
 1. Copy the link you can find by clicking on the green button __"Сode"__
 2. In the terminal: git clone ___link___
 3. The project will be copied to the selected folder
   