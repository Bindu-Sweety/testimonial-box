const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
 {
  name:'Myles',
  position:'Marketing',
  photo:'https://randomuser.me/api/portraits/women/92.jpg',
  text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
 },
 {
  name:'Rahul',
  position:'Engineer',
  photo:'https://randomuser.me/api/portraits/men/65.jpg',
  text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
 },
 {
  name:'Deann Miles',
  position:'Fashion',
  photo:'https://randomuser.me/api/portraits/women/10.jpg',
  text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
 },
 {
  name:'Barnett',
  position:'Software',
  photo:'https://randomuser.me/api/portraits/men/50.jpg',
  text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
 },
]

let idx = 1

function updateTestimonial(){
const { name, position, photo, text } = testimonials[idx]
testimonial.innerHTML = text
userImage.src = photo
username.innerHTML = name
role.innerHTML = position
idx++
if(idx > testimonials.length-1){
idx = 0
}
}
setInterval(updateTestimonial, 10000)