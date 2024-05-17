import './App.css'
import logo from './assets/logo.svg'
import heroImage from './assets/hero.svg';
import loremEye from './assets/loremEye.svg';
import loremGlobe from './assets/loremGlobe.svg';
import loremStar from './assets/loremStar.svg';
import loremSun from './assets/loremSun.svg';

function App() {
  let date = new Date();
  let year = date.getFullYear();

  let loremList = [
    {
    logo: loremSun,
    text: "Lorem ipsu dolor amet"
    },
    {
    logo: loremStar,
    text: "Lorem ipsu dolor amet"
    },
    {
    logo: loremEye,
    text: "Lorem ipsu dolor amet"
    },
    {
    logo: loremGlobe,
    text: "Lorem ipsu dolor amet"
    },
  ]

  return (
    <>
    <div className="wrapper flex justify-around w-full md:flex-row flex-col pl-4 md:pl-0">
      <div className="left max-w-[652px] mb-10 md:mb-0">
        <img src={logo} alt="Logo" />
        <div className="text md:pl-6">
          <h1 className='font-playFair md:text-[64px] text-[36px] font-bold text-[#050505] mb-8'>THE eWatch with the newest microchip technology</h1>
          <p className='text-[#333333] font-workSans md:text-[24px] text-[18px] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
          <div className="button font-workSans flex md:flex-col">
            <button className='bg-[#050505] text-white py-6 md:px-12 px-8 rounded-2xl mr-8'>Order now</button>
            <button className='bg-transparent text-[#333333] rounded-2xl border py-6 md:px-12 px-8 border-[#333333]'>Explore more</button>
          </div>
        </div>
        <div className="md:flex row items-center mt-[70px] border border-[#111111] rounded-2xl p-6 space-x-20 w-max hidden">
          {
            loremList.map((item) => (
                <div className="card max-w-[151px]">
                  <img src={ item.logo } alt="Logo" className='mb-2' />
                  <p className='text-[#333333] font-workSans text-[24px]'>{ item.text }</p>
                </div>
            ))
          }
    </div>
      </div>
      <div className="right">
        <img src={ heroImage } alt="Hero" />
      </div>
    </div>
    <footer className='bg-[#111111] text-white flex justify-around mt-4'>
      Copyright &copy; theactualdev { year }
      <a href="https://www.figma.com/design/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?node-id=868%3A162&t=MVW2uQ3uug4nJCGq-1">Figma</a>
    </footer>
    </>
  )
}

export default App