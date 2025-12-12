import Hero from '../components/home/Hero'
import CategoriesGrid from '../components/home/CategoriesGrid'
import TrendingServices from '../components/home/TrendingServices'
import ServicesShowcase from '../components/services/ServicesShowcase'
import Stats from '../components/home/Stats'
import ChooseUs from '../components/home/ChooseUs'
import { HeroText } from '../components/home/HeroText'
import Badge from '../components/ui/Badge'


export default function Home(){
return (
<div>
    <div className="px-5 md:px-0"><Hero /></div>
<CategoriesGrid />
<TrendingServices />
 {/* <ServicesShowcase /> */}
 <HeroText/>
 <ChooseUs/>
 <Badge/>
 <Stats/>

</div>
)
}