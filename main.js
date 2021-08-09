var pictures = ["https://www.jing.fm/clipimg/detail/38-384423_png-images-of-cartoon-baby-boy-infant-clipart.png","https://img.freepik.com/free-vector/cartoon-baby-girl-learn-stand_61878-303.jpg?size=338&ext=jpg","boyteen.png","https://www.pngkit.com/png/detail/258-2587144_welcome-teenage-girl-cartoon-png.png","daddude.jpg","https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6","https://m.media-amazon.com/images/I/61m-59HNQYL._AC_SL1500_.jpg","https://www.jing.fm/clipimg/detail/162-1623494_dachshund-png-dog-and-human-cartoon.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZP_98Xs-K0TutTeif0K2UIo90ayN12aAsjqde7sWnaHe5kQaUp2B03tqI0ioQxxT9RGc&usqp=CAU"]
var names = ["Brooks - youngest brother","Isabella - youngest sister", "Fynn - oldest brother","Teresa(Tess) - oldest sister","Jacob - dad","Zoe - mom", "Cotton - pet rabbit", "Doxie - pet daschund","Carter - middle brother"];

var i = 0;
function nextPerson() {
   document.getElementById("album").src=pictures[i];
   document.getElementById("names").innerHTML=names[i];
  i++;
  
  if(i == 9)
    {
      i=0
    };
}