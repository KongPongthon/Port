import { useState } from 'react'
import './App.css'
import { CgMail } from "react-icons/cg";
import { FaFacebook,FaGithub,FaPhone } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import { FaHtml5,FaCss3Alt,FaReact,FaNode,FaHome } from "react-icons/fa";
import { DiJavascript,DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

import { IoIosContact } from "react-icons/io";
import { FaIdCard } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";


function App() {
  const posts = [
    {
      id:'1',
      name:'Blog Review Website Project',
      title:'( CRUD Application )',
      image:'CapturesP1.PNG',
      tools:{
        toolsNameIs1:'- ReactJs',
        toolsNameIs2:'- Node.js ( Express.js )',
        toolsNameIs3:'- MongoDB',
        toolsNameIs4:'- Tailwind CSS',
        },
      githubhref:'https://github.com/KongPongsathon/WebsiteBlog'
    },
    {
      id:'2',
      name:'Portfolio website',
      title:'',
      image:'CaptureP2.PNG',
      tools:{
        toolsNameIs1:'- ReactJs',
        toolsNameIs2:'- Tailwind CSS',
      },
      githubhref:'https://github.com/KongPongsathon/Port'
    },
  ]





  const [skill,setskill] = useState(true)
  const [education,seteducation] = useState(false)

  const showskill=()=>{
    if(skill === false) setskill(!skill)
    if(education === true) seteducation(!education)
  }
  const showedu=()=>{
    if(skill === true) setskill(!skill)
    if(education === false) seteducation(!education)
  }

  let toggle = false;
  function openNavmobile(){
    toggle = !toggle;
    if(toggle){
        document.querySelector('.navbar-mobile').classList.toggle('max-md:fixed')
        document.querySelector('.navbar-mobile').classList.remove('max-md:hidden')

        document.querySelector('.icon-nav').classList.add('max-md:hidden')
        document.querySelector('.icon-nav').classList.remove('max-md:fixed') 

        document.querySelector('.icon-nav-close').classList.add('max-md:fixed')
        document.querySelector('.icon-nav-close').classList.remove('max-md:hidden')
    }else{
        document.querySelector('.navbar-mobile').classList.add('max-md:hidden')
        document.querySelector('.navbar-mobile').classList.remove('max-md:fixed')

        document.querySelector('.icon-nav').classList.toggle('max-md:hidden')
        document.querySelector('.icon-nav').classList.remove('max-md:fixed')

        document.querySelector('.icon-nav-close').classList.add('max-md:hidden')
        document.querySelector('.icon-nav-close').classList.remove('max-md:fixed')
    }
  }




  return (
    <div className="">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,900;1,900&family=Oswald:wght@500&family=Merriweather:ital,wght@1,700" rel="stylesheet"/>
      {/* Body */}
      <div className="grid grid-cols-[1fr_3.5fr] max-md:block">
        <header onClick={openNavmobile} className="bg-[#040b14] relative h-full max-md:hidden max-md:z-50 max-md:px-[30px] max-md:px-4 bg-blur-black max-md:before-[content:''] max-md:before:absolute max-md:before:w-[100vw] max-md:before:bg-[rgba(4,11,20,0.5)] max-md:before:h-[100%] navbar-mobile">
        <div className="text-white sticky top-0">
          <div className="flex justify-center items-center flex-col  py-[30px] text-white">
                <img src="IconPort.png" className="rounded-full w-[170px] h-[170px] border border-8 border-[#2c2f3f]"/>
                <div className="px-5 lg:text-sm xl:text-lg 2xl:text-3xl">Pongsathon Meewaeosaeng</div>
                <div className="flex gap-x-[10px]">
                    <a target="_blank"href="https://www.facebook.com/PST.Kong/" className="hover:text-[#1877F2]"><FaFacebook className="text-[50px]" /></a>
                    <a target="_blank" href="https://github.com/KongPongsathon?tab=repositories" className="hover:text-[#a378b5]"><FaGithub className="text-[50px]" /></a>
                </div>
          </div>
            <nav className="text-white">
                <ul className="flex flex-col gap-[25px] ps-[20px]">
                    <li><a href="#home" className="flex hover:underline"><FaHome className="me-[10px] text-2xl"/>Home</a></li>
                    <li><a href="#about" className="flex hover:underline"><FaIdCard className="me-[10px] text-2xl"/>About</a></li>
                    <li><a href="#pro" className="flex hover:underline"><GoProjectRoadmap className="me-[10px] text-2xl"/>Projects</a></li>
                    <li><a href="#con" className="flex hover:underline"><IoIosContact className="me-[10px] text-2xl"/>Contact</a></li>
                </ul>
            </nav>
        </div>
        </header>
        <div className="">
          <div>
            {/* Home */}
            <a onClick={openNavmobile} className="fixed z-50 left-[5%] top-[5%] hidden max-md:block  max-md:bg-[#040b14] max-md:w-[30px] max-md:h-[30px] text-xl icon-nav"><div className="w-full h-full flex items-center justify-center text-white"><HiMenu /></div></a>
            <a onClick={openNavmobile} className="fixed z-50 right-[5%] top-[5%] xl:hidden lg:hidden max-md:hidden max-md:bg-black max-md:w-[30px] max-md:h-[30px] text-xl icon-nav-close"><div className="w-full h-full flex items-center justify-center text-white"><MdClose /></div></a>      
            <section className="relative blur-img bg-white" id="home">
              <img className="bg-center bg-cover opacity-80 object-cover bg-no-repeat h-screen w-full relative max-md:static" src="https://cdn.pixabay.com/photo/2017/06/29/01/02/home-office-2452806_1280.jpg"/>
                <div className="container absolute z-20 top-[35%]">
                      <div className="items-center flex">
                        <div className="w-full max-lg:w-6/12 ml-auto mr-auto text-center">
                          <div className="text-white">
                            <div className="font-[Merriweather] text-5xl max-md:text-xl">
                              Hello, I'm Pongsathon Meewaeosaeng
                            </div>
                            <p className="mt-4 font-[Merriweather] text-4xl max-md:text-lg">
                              I'm Front End Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
            </section>
            {/* About */}
            <section id="about" className="bg-white relative pt-[3rem]">
              <div className="px-2">
                <div className="2xl:text-5xl xl:text-4xl text-3xl pl-5 pb-5">About Me</div>
                <div className="2xl:text-2xl text-lg pb-5">My name is Pongsathon Meewaeosaeng . I graduated from Mahasarakham University in Faculty of Informatics.</div>
                <div className="bg-white xl:flex lg:flex">
                  <img className="w-[50%] lg:h-[380px] xl:h-[500px] 2xl:h-[600px] object-cover bg-cover rounded-md" src="Image.jpg" />
                  <div className="text-black text-lg">
                    <div className="2xl:text-4xl xl:text-3xl text-2xl xl:pl-10">Personal</div>
                    <div className="flex 2xl:text-2xl text-lg">
                      <div className="px-2">Birthday : 11 February 1998</div>
                      <div>Age : 26</div>
                    </div>
                    <div className="2xl:text-2xl text-lg">
                      <div className="px-2 pb-5">Bachelor's Degree: Faculty of Informatics ( Computer Animation and Game )</div>
                    </div>
                    <div className="pb-10 2xl:text-2xl text-lg px-2">
                      I am a person who is constantly improving myself. My goal is to get better at programming. I am ready to dedicate my time to training to become better. When I was learning game design at my academy, I used to do a project on game design, and I think I can adapt it for website design to make it more interesting.
                    </div>
                    <div className="flex text-black">
                      <div className="hover:cursor-pointer px-10 2xl:text-3xl xl:text-2xl text-xl" onClick={ev=>showskill(false)}>
                        Skills
                        {skill ? (
                        <p className="border"></p>
                        ) : null}
                      </div>
                      <div className="hover:cursor-pointer 2xl:text-3xl xl:text-2xl text-xl" onClick={ev=>showedu(false)}>
                        Education
                        {education ? (
                        <p className="border"></p>
                        ) : null}
                      </div>
                    </div>
                    {skill ? (
                    <div className="">
                      <div className="w-full h-full text-black">
                        <div className="flex">
                          <div className="object-cover bg-cover bg-center flex justify-center pl-5">
                            <div>
                              <FaHtml5 className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#f4511e]"/>
                              {/* <img className="w-[150px]" src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png"/> */}
                              <div className="text-center">Html</div>
                            </div>                
                          </div>
                          <div className="object-cover bg-cover bg-center flex justify-center px-5">
                            <div>
                              <FaCss3Alt className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#455ede]"/>
                              {/* <img className="w-[150px]" src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"/> */}
                              <div className="text-center">Css</div>
                            </div>
                          </div>
                          <div className="object-cover bg-cover bg-center flex justify-center">
                            <div>
                              <DiJavascript className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#ffb300]"/>
                              {/* <img className="w-[110px] max-md:w-[65px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"/> */}
                              <div className="text-center">JavaScript</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="object-cover bg-cover bg-center flex justify-center pl-5">
                            <div>
                              <FaReact className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#03a9f4]"/>
                              {/* <img className="w-[150px]" src="https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png"/> */}
                              <div className="text-center">React.Js</div>
                            </div>
                          </div>
                          <div className="object-cover bg-cover bg-center flex justify-center px-5">
                            <div>
                              <SiTailwindcss className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#03a9f4]"/>
                              {/* <img className="w-[150px]" src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg"/> */}
                              <div className="text-center">Tailwind</div>
                            </div>
                          </div>
                          <div className="object-cover bg-cover bg-center flex justify-center">
                            <div>
                              <FaNode className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#2baf2b]"/>
                              {/* <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmANQPueCZ521UBJEa0AAMYQ2Uo64xnZXlEYEiEOg3aA&shttps://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"/> */}
                              <div className="text-center">Node.js</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="object-cover bg-cover bg-center flex justify-center pl-5">
                            <div>
                              <DiMongodb className="2xl:text-[150px] xl:text-[100px] text-[80px] text-[#2baf2b]"/>
                              {/* <img className="w-[150px]" src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"/> */}
                              <div className="text-center">MongoDB</div>
                            </div>
                          </div>
                          <div className="object-cover bg-cover bg-center flex justify-center px-5">
                            <div>
                              <FaGithub className="2xl:text-[150px] xl:text-[100px] text-[80px]  text-[#9c27b0]"/>
                              {/* <img className="w-[150px]" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"/> */}
                              <div className="text-center">Github</div>
                            </div>
                          </div>
                        </div>
                      </div>          
                    </div>
                    ) : null}
                    {education ? (
                    <div className="text-black pl-5 2xl:pb-[19.3rem] xl:pb-[11.8rem] pb-[8rem] 2xl:text-2xl xl:text-xl text-lg">
                      <span>2011</span>
                      <p>- Patumvitayakan School</p>
                      <span>2017</span>
                      <p>- Narinukul Ubon Ratchathani School</p>
                      <span>2021</span>
                      <p>- Mahasarakham University</p>
                      <p>( Computer Animation and Game )</p>
                    </div>
                    ) : null}
                  </div>
                </div>
              </div>        
            </section>
            {/* Project */}
            <section id="pro" className="relative bg-white flex justify-center w-full h-full text-white pt-[3rem] ">
              <div className="pb-10">
                <div className="text-center text-black 2xl:text-5xl xl:text-4xl text-2xl pb-5">My Projects</div>
                <div className="pb-[20rem]">
                  {posts.map((post)=>(
                  <div key={post.id} className="pb-5">                  
                    <div className="border rounded-lg shadow-2xl shadow-black px-5 py-5 bg-slate-50">                      
                      <div className="text-black text-center 2xl:text-3xl xl:text-2xl text-xl pb-3">Blog Review</div>          
                      <div className="text-black 2xl:flex">
                        <img className="px-5 object-cover bg-cover bg-center 2xl:w-[850px] 2xl:h-[400px] xl:w-[1100px] lg:w-[750px] md:w-[600px] w-[450px]" src={post.image}/>
                        <div className="2xl:text-2xl xl:text-xl text-sm">
                          {post.name}
                          {post.title !== null && (
                          <p>{post.title}</p>
                          )}
                          <div>Project created by
                            {post.tools.toolsNameIs1 !== null && (
                            <p>{post.tools.toolsNameIs1}</p>
                            )}
                            {post.tools.toolsNameIs2 !== null && (
                            <p>{post.tools.toolsNameIs2}</p>
                            )}
                            {post.tools.toolsNameIs3 !== null && (
                            <p>{post.tools.toolsNameIs3}</p>
                            )}
                            {post.tools.toolsNameIs4 !== null && (
                            <p>{post.tools.toolsNameIs4}</p>
                            )}
                            <div>Source code
                              <p><a className="w-full" target="_blank" href={post.githubhref}>{post.githubhref}</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>
                  ))}


                  {/* <div className="pb-5">
                    <div className="border rounded-lg shadow-2xl shadow-black px-5 py-5 bg-slate-50">
                      <div className="text-black text-center 2xl:text-3xl xl:text-2xl text-xl pb-3">Blog Review</div>          
                      <div className="text-black 2xl:flex">
                        <img className="px-5 object-cover bg-cover bg-center 2xl:w-[850px] 2xl:h-[400px] xl:w-[1100px] lg:w-[750px] md:w-[600px] w-[450px]" src="CapturesP1.PNG"/>
                        <div className="2xl:text-2xl xl:text-xl text-sm">
                          Blog Review Website Project
                          <p>( CRUD Application )</p>
                          <div>Project created by
                            <p>- ReactJs</p>
                            <p>- Node.js ( Express.js )</p>
                            <p>- MongoDB</p>
                            <p>- Tailwind CSS</p>
                            <div>Source code
                              <p><a className="w-full" href="https://github.com/KongPongsathon/WebsiteBlog">https://github.com/KongPongsathon/WebsiteBlog</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>             */}
                  {/* <div className="border rounded-lg shadow-2xl shadow-black px-5 py-5 bg-slate-50">
                    <div className="text-black text-center 2xl:text-3xl xl:text-2xl text-xl">Blog Review</div>          
                    <div className="text-black 2xl:flex">            
                      <img className="pr-5 object-cover bg-cover bg-center 2xl:w-[850px] 2xl:h-[400px] xl:w-[1100px] lg:w-[750px] md:w-[600px] w-[450px]" src="CaptureP2.PNG"/>
                      <div className="2xl:text-2xl xl:text-xl text-sm">
                        Portfolio website
                        <div>Project created by
                          <p>- ReactJs</p>
                          <p>- Tailwind CSS</p>
                          <div>Source code
                            <p><a href="https://github.com/KongPongsathon/Port">https://github.com/KongPongsathon/Port</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>  
              </div>
            </section>        
            {/* Contact */}
            <section id="con" className="relative bg-white flex justify-center w-full h-full text-black pb-10">        
              <div className="">
                <div className="text-center 2xl:text-5xl xl:text-4xl text-2xl pb-10">Contact Me</div>
                <div className="xl:flex lg:flex">
                  <div className="">
                    <div className="text-[150px] flex justify-center"><FaPhone/> </div>
                    <div>
                      <div className="text-center">BY PHONE</div>
                      <div className="text-center">062-9066796</div>         
                    </div>              
                  </div>
                  <div className="px-20 max-md:px-8">
                    <div className="text-[150px] flex justify-center"><FaGithub /></div>
                    <div>
                      <div className="text-center">Github</div>
                      <div><a className="text-center" target="_blank" href="https://github.com/KongPongsathon">https://github.com/KongPongsathon</a></div>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-[150px] flex justify-center"><CgMail/></div>
                    <div className="">
                      <div className="text-center">G-mail</div>
                      <div className="text-center">K.pongsathonm@gmail.com</div>
                      <div className="text-center"><button onClick={() => {navigator.clipboard.writeText("k.pongsathonm@gmail.com")}} className="btn-copy">Copy Gmail</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
