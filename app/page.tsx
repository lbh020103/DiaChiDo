import Category from "@/components/Category";
import Flat from "@/components/Flat";
import Location from "@/components/Location";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="bg-amber-50 ">
      <Flat />
      <Location />
      <Map />
      <Category />
    </div>
  )
}
