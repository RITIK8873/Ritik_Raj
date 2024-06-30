import Navbar from '../components/navbar'

export default function about(){
  return (
    <>
      <Navbar />
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies justo eu arcu pretium, sit amet condimentum nisl tincidunt. Phasellus aliquam ligula eget justo congue fringilla.</p>
        <p>Fusce sit amet tortor vitae leo iaculis accumsan. Proin posuere convallis ligula, sed bibendum magna gravida a. Nullam eu bibendum felis.</p>
      </div>
    </div>
    </>
  )
}

