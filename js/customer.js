const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
    "I've tried may Herbal Cup teas and I have never been disappointed."
  },
  {
    name: "Iida Niskanen",
    
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "So happy to be a new customer with herbal teas that will benefit my body in a healthy manner.",
  },
  {
    name: "Renee Sims",
    
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "We are enjoying the teas from Herbal Cup! They have good flavor. I even opened one of the tea bags to see what the herbs looked like; they appeared colorful and healthy. Not dusty, dry or off color. My first order apparently got delayed/lost in the mail. When I asked Herbal Cup where it was, they sent me another order to replace it! The original order finally made it here. Thank you Herbal Cup for taking care of your customers and for providing excellent teas.",
  },
  {
    name: "Jonathan Nunfiez",
    
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "I received a promo code NEXT5 with my first shipment of tea. But, in the checking out process I did not see where to enter it. I backed up and searched around your website and found an existing customer promo code but it was difficult for me to check out.",
  },
  {
    name: "Sasha Ho",
    
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "I've been purchasing Herbal Cup Teas for several years. I love the variety of flavors, and of course, the quality of the ingredients",
  },
  {
    name: "Veeti Seppanen",
    
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "The ingredients in this tea make it the best tasting Detoxify tea that I have tasted. Love the addition of Sarsaparilla. I have re ordered many times. I have been going through cancer treatment, and this has really been helping to cleanse and detox, and made me feel healthier throughout the process..",
  },
];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);
