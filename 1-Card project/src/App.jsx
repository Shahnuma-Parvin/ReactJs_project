import React from 'react'
import Card  from './components/card'
import { Car } from 'lucide-react'

const App = () => {
  const jobOpening = [
  {
    "brandLogo": "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    "brandLogo": "",
    "name": "Google",
    "datePosted": "5 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$35/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://cdn.kibrispdr.org/data/265/microsoft-logo-svg-3.png",
    "name": "Microsoft",
    "datePosted": "2 weeks ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$60/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://hdqwalls.com/wallpapers/amazon-4k-logo-qhd.jpg",
    "name": "Amazon",
    "datePosted": "3 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Mid Level",
    "pay": "$28/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://media.wired.com/photos/592682057034dc5f91bebab8/191:100/w_1280,c_limit/NetflixLogo2016.jpg",
    "name": "Netflix",
    "datePosted": "10 weeks ago",
    "post": "Product Manager",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hr",
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/020/118/350/original/spotify-logo-free-download-free-vector.jpg",
    "name": "Spotify",
    "datePosted": "1 week ago",
    "post": "Data Analyst",
    "tag1": "Contract",
    "tag2": "Junior Level",
    "pay": "$30/hr",
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://pngimg.com/uploads/meta/meta_PNG12.png",
    "name": "Meta",
    "datePosted": "6 days ago",
    "post": "React Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$45/hr",
    "location": "Chennai, India"
  },
  {
    "brandLogo": "https://tse2.mm.bing.net/th/id/OIP.i6lcNGxWVew9K4paPkov0AHaEK?pid=Api&P=0&h=180",
    "name": "Adobe",
    "datePosted": "4 weeks ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$55/hr",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://tse1.mm.bing.net/th/id/OIP.3Hp8iRmblKVcbBgTSDXfRAHaE8?pid=Api&P=0&h=180",
    "name": "Airbnb",
    "datePosted": "8 days ago",
    "post": "QA Engineer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$25/hr",
    "location": "Ahmedabad, India"
  },
  {
    "brandLogo": "https://tse2.mm.bing.net/th/id/OIP.h71yObz05sO13XXrZDDVPwHaEK?pid=Api&P=0&h=180",
    "name": "Salesforce",
    "datePosted": "7 weeks ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$50/hr",
    "location": "Kolkata, India"
  },
  {
    "brandLogo": "https://tse4.mm.bing.net/th/id/OIP.7FzBf3Kxd0RtNloMTIsMPQHaHa?pid=Api&P=0&h=180",
    "name": "Uber",
    "datePosted": "12 days ago",
    "post": "Mobile App Developer",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$48/hr",
    "location": "Jaipur, India"
  }
]

console.log(jobOpening.length)

  return (
    <div className='parent'>

      {jobOpening.map(function(er, idx){
    return <div key = {idx}>
            <Card company={er.name} logo={er.brandLogo} post={er.post} tag1={er.tag1} tag2={er.tag2} location={er.location} pay={er.pay} datepost={er.datePosted} />
       </div>

      })}
    </div>
  )
}

export default App
