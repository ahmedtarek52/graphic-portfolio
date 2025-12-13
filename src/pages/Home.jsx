import Hero from '../components/home/Hero'
import CategoriesGrid from '../components/home/CategoriesGrid'
import TrendingServices from '../components/home/TrendingServices'
import Stats from '../components/home/Stats'
import ChooseUs from '../components/home/ChooseUs'
import { HeroText } from '../components/home/HeroText'
import Badge from '../components/ui/Badge'
import Video from '../components/home/Video'


export default function Home(){
return (
<div>
    <div className="px-5 md:px-0"><Hero /></div>
<CategoriesGrid />
<TrendingServices />
 <HeroText/>
 <ChooseUs/>
 <Video 
   title="Where Design Moves"
   description="Dynamic graphic videos designed for modern brands."
   src="https://www.youtube.com/embed/1nNz_58fEb4?rel=0&showinfo=0&modestbranding=1"
 />
 <Badge/>
 <Stats/>

</div>
)
}