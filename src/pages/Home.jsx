import { lazy, Suspense } from "react";
import Hero from '../components/home/Hero'
import CategoriesGrid from '../components/home/CategoriesGrid'
import TrendingServices from '../components/home/TrendingServices'
import Stats from '../components/home/Stats'
import ChooseUs from '../components/home/ChooseUs'
import { HeroText } from '../components/home/HeroText'
import Badge from '../components/ui/Badge'

// Lazy load the Video component
const Video = lazy(() => import('../components/home/Video'));

export default function Home(){
return (
<div>
    <div className="px-5 md:px-0"><Hero /></div>
<CategoriesGrid />
<TrendingServices />
 <HeroText/>
 <ChooseUs/>
 <Suspense fallback={<div className="max-w-7xl mx-auto py-20 text-center">Loading video...</div>}>
  <Video 
    title="Where Design Moves"
    description="Dynamic graphic videos designed for modern brands."
    src="https://www.youtube.com/embed/1nNz_58fEb4?rel=0&showinfo=0&modestbranding=1"
  />
 </Suspense>
 <Badge/>
 <Stats/>

</div>
)
}