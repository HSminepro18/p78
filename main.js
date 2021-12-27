var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://th.bing.com/th/id/R.883e05ff8afee9216eecaf18281efbb1?rik=YTyzmfglXuKbIQ&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2013%2f07%2f3729-man-in-suit-and-tie1.png&ehk=8EarnV6jMq0pQDd3meUae1puKa8or5zF7vfFYfzEMzk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1","https://image.flaticon.com/icons/png/512/43/43500.png","https://thumbs.dreamstime.com/b/african-american-happy-boy-learning-coding-cute-sitting-laptop-vector-illustration-isolated-white-background-design-136584654.jpg","https://img.freepik.com/free-vector/cute-smiling-boy-sitting-laptop-learning-web-design-coding_105824-1.jpg?size=338&ext=jpg"]
var names = ["Fmaily Book","Rupinder Singh","Gurmeet Kaur","Harsimaran Kaur","Harsirat Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
